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
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
let SiteInput = class SiteInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], SiteInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "adminName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "adminEmail", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "supportEmail", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "sitePhone", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "siteName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "siteLogo", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "siteFavIcon", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "adminPage", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "userPage", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], SiteInput.prototype, "offlineStatus", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "offlineNote", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "currencySymbol", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "headerText", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "googleAnalyticCode", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "siteMetaTagTitle", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "siteMetaTagKeyword", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "siteMetaTagDescription", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "facebook", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "twitter", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "linkedin", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "youtube", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SiteInput.prototype, "instagram", void 0);
SiteInput = __decorate([
    graphql_1.InputType()
], SiteInput);
exports.SiteInput = SiteInput;
//# sourceMappingURL=site.input.js.map