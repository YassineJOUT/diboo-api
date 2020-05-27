"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const carousel_resolver_1 = require("./carousel.resolver");
const carousel_service_1 = require("./carousel.service");
const mongoose_1 = require("@nestjs/mongoose");
const admin_schema_1 = require("./schema/admin.schema");
let CarouselModule = class CarouselModule {
};
CarouselModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Carousel', schema: admin_schema_1.CarouselSchema }])],
        providers: [carousel_resolver_1.CarouselResolver, carousel_service_1.CarouselService]
    })
], CarouselModule);
exports.CarouselModule = CarouselModule;
//# sourceMappingURL=carousel.module.js.map