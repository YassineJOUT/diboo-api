import { Model } from 'mongoose';
import { Site } from './interface/site.interface';
import { SiteInput } from './input/site.input';
import { Commission } from './interface/commission.interface';
import { CommissionInput } from './input/commission.input';
export declare class SitesettingService {
    private readonly siteModel;
    private readonly comModel;
    constructor(siteModel: Model<Site>, comModel: Model<Commission>);
    create(site: SiteInput): Promise<Site>;
    update(site: SiteInput): Promise<Site>;
    findAll(): Promise<Site[]>;
    createCommission(com: CommissionInput): Promise<Commission>;
    updateCommission(com: CommissionInput): Promise<Commission>;
    getCommission(): Promise<Commission[]>;
}
