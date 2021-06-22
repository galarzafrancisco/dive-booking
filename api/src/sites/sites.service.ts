import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SitesService {
  constructor(@InjectRepository(Site) private sitesRepository: Repository<Site>) {}

  create(createSiteDto: CreateSiteDto): Promise<Site> {
    const newSite = this.sitesRepository.create({...createSiteDto});
    newSite.site_id = uuidv4();
    return this.sitesRepository.save(newSite);
  }

  findAll(options: object = {}): Promise<Site[]> {
    return this.sitesRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<Site> {
    return this.sitesRepository.findOneOrFail(id, options);
  }

  async update(id: string, updateSiteDto: UpdateSiteDto): Promise<Site> {
    const site = await this.findById(id);
    const updatedSite = {...site, ...updateSiteDto};
    return this.sitesRepository.save(updatedSite);
  }

  async remove(id: string): Promise<Site> {
    const site = await this.findById(id);
    return this.sitesRepository.remove(site);
  }
}
