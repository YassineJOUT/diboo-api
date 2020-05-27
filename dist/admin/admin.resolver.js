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
const admin_service_1 = require("./admin.service");
const admin_type_1 = require("./type/admin.type");
const admin_input_1 = require("./input/admin.input");
const common_1 = require("@nestjs/common");
const graphql_auth_guard_1 = require("../auth/graphql-auth.guard");
let AdminResolver = class AdminResolver {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async getOne(email) {
        return this.adminService.findOne(email);
    }
    async getAll() {
        return this.adminService.findAll();
    }
    async createAdmin(input) {
        return this.adminService.create(input);
    }
    async updateAdmin(input) {
        return this.adminService.update(input);
    }
    async deleteAdmin(id) {
        return this.adminService.remove(id);
    }
};
__decorate([
    graphql_1.Query(() => admin_type_1.AdminType),
    __param(0, graphql_1.Args('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "getOne", null);
__decorate([
    graphql_1.Query(() => [admin_type_1.AdminType]),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "getAll", null);
__decorate([
    graphql_1.Mutation(() => admin_type_1.AdminType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_input_1.AdminInput]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "createAdmin", null);
__decorate([
    graphql_1.Mutation(() => admin_type_1.AdminType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_input_1.AdminInput]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "updateAdmin", null);
__decorate([
    graphql_1.Mutation(() => String),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "deleteAdmin", null);
AdminResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminResolver);
exports.AdminResolver = AdminResolver;
//# sourceMappingURL=admin.resolver.js.map