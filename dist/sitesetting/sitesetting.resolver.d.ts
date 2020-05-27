import { SitesettingService } from './sitesetting.service';
import { SiteInput } from './input/site.input';
import { CommissionInput } from './input/commission.input';
export declare class SitesettingResolver {
    private readonly sitesettings;
    constructor(sitesettings: SitesettingService);
    getAllSettings(): Promise<import("./interface/site.interface").Site[]>;
    createSiteSettings(input: SiteInput): Promise<import("./interface/site.interface").Site>;
    updateSiteSettings(input: SiteInput): Promise<import("./interface/site.interface").Site>;
    getCommission(): Promise<import("./interface/commission.interface").Commission[]>;
    createCommission(input: CommissionInput): Promise<import("./interface/commission.interface").Commission>;
    updateCommission(input: CommissionInput): Promise<import("./interface/commission.interface").Commission>;
}
