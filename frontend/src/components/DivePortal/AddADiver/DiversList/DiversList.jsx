import React, {useState} from 'react';
import useDivers from '../../../../utils/useDivers';

function DiverRow({diver, selectDiver, isSelected}) {
    return (
        <div className={`selectableRowItem ${isSelected ? 'selected' : ''}`} onClick={() => selectDiver(diver)}>
            {diver.name_first} {diver.name_last}
        </div>
    )
}

function DiversList({selectedDiver, setSelectedDiver}) {
    const divers = useDivers();

    const [searchString, setSearchString] = useState('');
    const [localSelectedDiver, setLocalSelectedDiver] = useState({});

    const searchTerms = searchString.toLowerCase().split(' ').filter(term => term.length);
    const filteredDivers = searchTerms.length === 0 ? divers : divers
        .map(diver => {
            let score = 0;
            let searchableString = `${diver.name_first} ${diver.name_last} ${diver.phone}`.toLocaleLowerCase();
            searchTerms.forEach(searchTerm => {
                if (searchableString.includes(searchTerm)) {
                    score += searchTerm.length;
                }
            })
            return {score, diver}
        })
        .filter(d => d.score)                   // keep only the ones with positive score (something matched)
        .sort((a, b) => b.score - a.score)      // sort by score descending
        .map(d => d.diver);                     // remove the score and return just the diver object

    return (
        <div className="row">
            <div className="col s6">
                {/* Search */}
                <div className='input-field' id='input-search-field'>
                    <input type='text' id='input-search' tabIndex='1' onChange={(e) => setSearchString(e.target.value)}></input>
                    <label htmlFor='input-search'>search</label>
                </div>
                {filteredDivers.map(diver => <DiverRow diver={diver} selectDiver={(diver) => {setLocalSelectedDiver(diver); setSelectedDiver(diver)}} isSelected={diver.diver_id === localSelectedDiver.diver_id}/>)}
            </div>
            <div className="col s6">
                <h4>{selectedDiver.name_first} {selectedDiver.name_last}</h4>
                <p>{selectedDiver.email}</p>
                <p>{selectedDiver.phone}</p>
            </div>
        </div>
    )
};

export default DiversList;
