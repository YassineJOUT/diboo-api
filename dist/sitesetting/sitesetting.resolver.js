"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const sitesetting_service_1 = require("./sitesetting.service");
const site_type_1 = require("./type/site.type");
const site_input_1 = require("./input/site.input");
const commission_input_1 = require("./input/commission.input");
const commission_type_1 = require("./type/commission.type");
const common_1 = require("@nestjs/common");
const graphql_auth_guard_1 = require("../auth/graphql-auth.guard");
let SitesettingResolver = class SitesettingResolver {
    constructor(sitesettings) {
        this.sitesettings = sitesettings;
    }
    async getAllSettings() {
        return this.sitesettings.findAll();
    }
    async createSiteSettings(input) {
        return this.sitesettings.create(input);
    }
    async updateSiteSettings(input) {
        return this.sitesettings.update(input);
    }
    async getCommission() {
        return this.sitesettings.getCommission();
    }
    async createCommission(input) {
        return this.sitesettings.createCommission(input);
    }
    async updateCommission(input) {
        return this.sitesettings.updateCommission(input);
    }
};
__decorate([
    graphql_1.Query(() => [site_type_1.SiteType]),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitesettingResolver.prototype, "getAllSettings", null);
__decorate([
    graphql_1.Mutation(() => site_type_1.SiteType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_input_1.SiteInput]),
    __metadata("design:returntype", Promise)
], SitesettingResolver.prototype, "createSiteSettings", null);
__decorate([
    graphql_1.Mutation(() => site_type_1.SiteType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_input_1.SiteInput]),
    __metadata("design:returntype", Promise)
], SitesettingResolver.prototype, "updateSiteSettings", null);
__decorate([
    graphql_1.Query(() => [commission_type_1.CommissionType]),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitesettingResolver.prototype, "getCommission", null);
__decorate([
    graphql_1.Mutation(() => commission_type_1.CommissionType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commission_input_1.CommissionInput]),
    __metadata("design:returntype", Promise)
], SitesettingResolver.prototype, "createCommission", null);
__decorate([
    graphql_1.Mutation(() => commission_type_1.CommissionType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commission_input_1.CommissionInput]),
    __metadata("design:returntype", Promise)
], SitesettingResolver.prototype, "updateCommission", null);
SitesettingResolver = __decorate([
    graphql_1.Resolver('Sitesetting'),
    __metadata("design:paramtypes", [sitesetting_service_1.SitesettingService])
], SitesettingResolver);
exports.SitesettingResolver = SitesettingResolver;
//# sourceMappingURL=sitesetting.resolver.js.map