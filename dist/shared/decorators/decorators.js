"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_input_1 = require("../../admin/input/admin.input");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.GqlRes = common_1.createParamDecorator((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.res;
});
exports.GqlUser = common_1.createParamDecorator((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.admin;
});
exports.CurrentUser = common_1.createParamDecorator((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});
//# sourceMappingURL=decorators.js.map