"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
exports.DatabaseModule = mongoose_1.MongooseModule.forRoot('mongodb+srv://yassine:zCrWOvp9CPdPHC99@cluster0-jihfc.mongodb.net/diboo?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
//# sourceMappingURL=db.module.js.map