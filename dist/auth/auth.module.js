"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_resolver_1 = require("./auth.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const admin_schema_1 = require("../admin/schema/admin.schema");
const jwt_1 = require("@nestjs/jwt");
const admin_service_1 = require("../admin/admin.service");
const jwt_strategy_1 = require("./jwt.strategy");
const passport_1 = require("@nestjs/passport");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Admin',
                    schema: admin_schema_1.AdminSchema,
                },
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'dibooSecret',
                signOptions: {
                    expiresIn: '3600s',
                },
            }),
        ],
        providers: [
            admin_service_1.AdminService,
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            auth_resolver_1.AuthResolver,
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map