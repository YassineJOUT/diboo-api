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
let AdminService = class AdminService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async create(admin) {
        const adminDocument = new this.adminModel(admin);
        return adminDocument.save();
    }
    async update(admin) {
        await this.adminModel
            .updateOne({
            _id: admin.id,
        }, {
            $set: Object.assign({}, admin),
        })
            .exec();
        return this.adminModel.findById(admin.id).exec();
    }
    async findAll() {
        return this.adminModel.find().exec();
    }
    async remove(id) {
        const record = await this.adminModel
            .deleteOne({
            _id: id,
        })
            .exec();
        return record.n === 1;
    }
    async findOne(email) {
        return this.adminModel.findOne({ email });
    }
    async findOneById(id) {
        return this.adminModel.findOne({ _id: id });
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Admin')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map