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
const carousel_service_1 = require("./carousel.service");
const carousel_type_1 = require("./type/carousel.type");
const carousel_input_1 = require("./input/carousel.input");
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
const graphql_auth_guard_1 = require("../auth/graphql-auth.guard");
let CarouselResolver = class CarouselResolver {
    constructor(carouselService) {
        this.carouselService = carouselService;
    }
    async getOneCarousel(id) {
        return this.carouselService.findOneById(id);
    }
    async createCarousel(input) {
        return this.carouselService.create(input);
    }
    async addCarouselPhoto(input) {
        const car = await this.carouselService.findOneById(input.id);
        const carUpdated = await this.carouselService.update(input);
        console.log(input.photo);
        const { createReadStream, filename } = await input.photo;
        if (!car)
            throw Error('Carousel not found');
        return new Promise(async (resolve, reject) => createReadStream()
            .pipe(fs_1.createWriteStream(__dirname + `/../../images/${input.id}.${filename.substr(filename.lastIndexOf('.') + 1)}`))
            .on('finish', () => resolve(true))
            .on('error', () => reject(false)));
    }
    async deleteCarousel(id) {
        return this.carouselService.remove(id);
    }
};
__decorate([
    graphql_1.Query(() => carousel_type_1.CarouselType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarouselResolver.prototype, "getOneCarousel", null);
__decorate([
    graphql_1.Mutation(() => carousel_type_1.CarouselType),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carousel_input_1.CarouselInput]),
    __metadata("design:returntype", Promise)
], CarouselResolver.prototype, "createCarousel", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carousel_input_1.CarouselInput]),
    __metadata("design:returntype", Promise)
], CarouselResolver.prototype, "addCarouselPhoto", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarouselResolver.prototype, "deleteCarousel", null);
CarouselResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [carousel_service_1.CarouselService])
], CarouselResolver);
exports.CarouselResolver = CarouselResolver;
//# sourceMappingURL=carousel.resolver.js.map