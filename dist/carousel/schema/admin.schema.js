"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CarouselSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    status: Boolean,
    bannerLink: String,
    createdAt: Date,
});
//# sourceMappingURL=admin.schema.js.map