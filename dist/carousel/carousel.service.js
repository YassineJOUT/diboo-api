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
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CarouselService = class CarouselService {
    constructor(carouselModel) {
        this.carouselModel = carouselModel;
    }
    async create(carousel) {
        const adminDocument = new this.carouselModel(Object.assign(Object.assign({}, carousel), { createdAt: new Date(), image: '' }));
        return adminDocument.save();
    }
    async findOneById(id) {
        return this.carouselModel.findOne({ _id: id });
    }
    async update(carousel) {
        await this.carouselModel
            .updateOne({
            _id: carousel.id,
        }, {
            $set: Object.assign({}, carousel),
        })
            .exec();
        return this.carouselModel.findById(carousel.id).exec();
    }
    async updateImage(image, id) {
        await this.carouselModel
            .updateOne({
            _id: id,
        }, {
            $set: { image },
        })
            .exec();
        return true;
    }
    async remove(id) {
        const record = await this.carouselModel
            .deleteOne({
            _id: id,
        })
            .exec();
        return record.n === 1;
    }
};
CarouselService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Carousel')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CarouselService);
exports.CarouselService = CarouselService;
//# sourceMappingURL=carousel.service.js.map