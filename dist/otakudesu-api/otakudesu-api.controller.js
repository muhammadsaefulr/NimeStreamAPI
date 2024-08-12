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
exports.OtakudesuApiController = void 0;
const common_1 = require("@nestjs/common");
const otakudesu_api_service_1 = require("./otakudesu-api.service");
let OtakudesuApiController = class OtakudesuApiController {
    constructor(OtakudesuApiService) {
        this.OtakudesuApiService = OtakudesuApiService;
    }
    async serviceStart(res) {
        res.status(common_1.HttpStatus.OK).json({ message: "Service Status UP, Please read the api docs to start...", apiDocs: "" });
    }
    async getAnimeHomePage() {
        return this.OtakudesuApiService.getHomepage();
    }
    async getAnimeDetails(judulAnime) {
        return this.OtakudesuApiService.getAnimeDetails(judulAnime.split('/').pop());
    }
    async searchAnime(judulAnime) {
        return this.OtakudesuApiService.searchAnimeByTitle(judulAnime);
    }
    async getAnimeSourceStream(urlAnimeEps) {
        return this.OtakudesuApiService.getAnimeStreamSource(urlAnimeEps);
    }
    async getAnimeGenre(genre, pageNumber) {
        const pageNum = pageNumber === null || undefined ? 0 : pageNumber;
        return this.OtakudesuApiService.getGenreAnimeList(genre, pageNum);
    }
};
exports.OtakudesuApiController = OtakudesuApiController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OtakudesuApiController.prototype, "serviceStart", null);
__decorate([
    (0, common_1.Get)('/homepage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OtakudesuApiController.prototype, "getAnimeHomePage", null);
__decorate([
    (0, common_1.Get)('/getanime/:judulAnime'),
    __param(0, (0, common_1.Param)('judulAnime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OtakudesuApiController.prototype, "getAnimeDetails", null);
__decorate([
    (0, common_1.Get)('/searchanime'),
    __param(0, (0, common_1.Query)('judul')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OtakudesuApiController.prototype, "searchAnime", null);
__decorate([
    (0, common_1.Get)('/animesource/:urlAnimeEps'),
    __param(0, (0, common_1.Param)('urlAnimeEps')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OtakudesuApiController.prototype, "getAnimeSourceStream", null);
__decorate([
    (0, common_1.Get)('animegenre/:genre/pages/:pageNumber'),
    __param(0, (0, common_1.Param)('genre')),
    __param(1, (0, common_1.Param)('pageNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], OtakudesuApiController.prototype, "getAnimeGenre", null);
exports.OtakudesuApiController = OtakudesuApiController = __decorate([
    (0, common_1.Controller)('otakudesu'),
    __metadata("design:paramtypes", [otakudesu_api_service_1.OtakudesuApiService])
], OtakudesuApiController);
//# sourceMappingURL=otakudesu-api.controller.js.map