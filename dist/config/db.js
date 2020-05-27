"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.mongooseModule = mongoose_1.MongooseModule.forRoot('mongodb+srv://' + process.env.DATABASE_USER + ':' + process.env.DATABASE_PASSWORD + '@cluster0-jihfc.mongodb.net/diboo?retryWrites=true&w=majority', { useNewUrlParser: true,
    useUnifiedTopology: true
});
//# sourceMappingURL=db.js.map