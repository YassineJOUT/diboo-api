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
const bcryptjs = require("bcryptjs");
const graphql_1 = require("@nestjs/graphql");
const decorators_1 = require("../shared/decorators/decorators");
const jwt_1 = require("@nestjs/jwt");
const login_input_1 = require("./login.input");
const admin_service_1 = require("../admin/admin.service");
const admin_type_1 = require("../admin/type/admin.type");
const admin_input_1 = require("../admin/input/admin.input");
const common_1 = require("@nestjs/common");
const graphql_auth_guard_1 = require("./graphql-auth.guard");
const ResponseType_1 = require("../shared/response/ResponseType");
let AuthResolver = class AuthResolver {
    constructor(jwt, admin) {
        this.jwt = jwt;
        this.admin = admin;
    }
    async login(input, res) {
        const user = await this.admin.findOne(input.email);
        if (!user) {
            return {
                ok: false,
                error: 'Email or password incorrect'
            };
        }
        const valid = await bcryptjs.compare(input.password, user.password);
        if (!valid) {
            return {
                ok: false,
                error: 'Email or password incorrect'
            };
        }
        const jwt = this.jwt.sign({ id: user.id });
        res.cookie('token', jwt, { httpOnly: true });
        return {
            ok: true,
            data: user
        };
    }
    whoAmI(user) {
        return this.admin.findOneById(user.id);
    }
    async signup(adminInput, res) {
        const emailExists = await this.admin.findOne(adminInput.email);
        if (emailExists) {
            throw Error('Email is already in use');
        }
        const password = await bcryptjs.hash(adminInput.password, 10);
        const user = await this.admin.create(Object.assign(Object.assign({}, adminInput), { password }));
        const jwt = this.jwt.sign({ id: user.id });
        res.cookie('token', jwt, { httpOnly: true });
        return user;
    }
};
__decorate([
    graphql_1.Mutation(() => ResponseType_1.ResponseType),
    __param(0, graphql_1.Args('input')),
    __param(1, decorators_1.GqlRes()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    graphql_1.Query(returns => admin_type_1.AdminType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, decorators_1.GqlUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_type_1.AdminType]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "whoAmI", null);
__decorate([
    graphql_1.Mutation(() => admin_type_1.AdminType),
    __param(0, graphql_1.Args('input')),
    __param(1, decorators_1.GqlRes()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_input_1.AdminInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
AuthResolver = __decorate([
    graphql_1.Resolver('Auth'),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        admin_service_1.AdminService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map