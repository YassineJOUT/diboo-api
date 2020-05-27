"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sitesetting_service_1 = require("./sitesetting.service");
const sitesetting_resolver_1 = require("./sitesetting.resolver");
const site_schema_1 = require("./schema/site.schema");
const mongoose_1 = require("@nestjs/mongoose");
const commission_schema_1 = require("./schema/commission.schema");
let SitesettingModule = class SitesettingModule {
};
SitesettingModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Site', schema: site_schema_1.SiteSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Commission', schema: commission_schema_1.CommissionSchema }]),
        ],
        providers: [sitesetting_resolver_1.SitesettingResolver, sitesetting_service_1.SitesettingService],
    })
], SitesettingModule);
exports.SitesettingModule = SitesettingModule;
//# sourceMappingURL=sitesetting.module.js.map