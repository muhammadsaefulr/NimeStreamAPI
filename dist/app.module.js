"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const otakudesu_api_controller_1 = require("./otakudesu-api/otakudesu-api.controller");
const otakudesu_api_service_1 = require("./otakudesu-api/otakudesu-api.service");
const otakudesu_api_module_1 = require("./otakudesu-api/otakudesu-api.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [otakudesu_api_module_1.OtakudesuApiModule],
        controllers: [app_controller_1.AppController, otakudesu_api_controller_1.OtakudesuApiController],
        providers: [app_service_1.AppService, otakudesu_api_service_1.OtakudesuApiService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map