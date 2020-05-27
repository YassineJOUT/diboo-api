"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const db_1 = require("./config/db");
const admin_module_1 = require("./admin/admin.module");
const auth_module_1 = require("./auth/auth.module");
const carousel_module_1 = require("./carousel/carousel.module");
const sitesetting_module_1 = require("./sitesetting/sitesetting.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            admin_module_1.AdminModule,
            graphql_1.GraphQLModule.forRoot({
                cors: false,
                context: ({ req }) => ({ req }),
                autoSchemaFile: 'schema.gql',
                uploads: {
                    maxFileSize: 10000000,
                    maxFiles: 5,
                }
            }),
            db_1.mongooseModule,
            auth_module_1.AuthModule,
            carousel_module_1.CarouselModule,
            sitesetting_module_1.SitesettingModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map