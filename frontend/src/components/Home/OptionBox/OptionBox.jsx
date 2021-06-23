import React from 'react';
import {Link} from 'react-router-dom';

function OptionBox(option) {
    return (
        <div className="col s6">
            <Link to={option.url}>
                <div className="hoverable cardWrapper z-depth-1 light-blue darken-1">
                    <div className="cardText white-text">
                        <h4>{option.title}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default OptionBox;
