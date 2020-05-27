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
let SitesettingService = class SitesettingService {
    constructor(siteModel, comModel) {
        this.siteModel = siteModel;
        this.comModel = comModel;
    }
    async create(site) {
        const adminDocument = new this.siteModel(site);
        return adminDocument.save();
    }
    async update(site) {
        await this.siteModel
            .updateOne({
            _id: site.id,
        }, {
            $set: Object.assign({}, site),
        })
            .exec();
        return this.siteModel.findById(site.id).exec();
    }
    async findAll() {
        return this.siteModel.find().exec();
    }
    async createCommission(com) {
        const adminDocument = new this.comModel(com);
        return adminDocument.save();
    }
    async updateCommission(com) {
        await this.comModel
            .updateOne({
            _id: com.id,
        }, {
            $set: Object.assign({}, com),
        })
            .exec();
        return this.comModel.findById(com.id).exec();
    }
    async getCommission() {
        return this.comModel.find().exec();
    }
};
SitesettingService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Site')),
    __param(1, mongoose_1.InjectModel('Commission')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], SitesettingService);
exports.SitesettingService = SitesettingService;
//# sourceMappingURL=sitesetting.service.js.map