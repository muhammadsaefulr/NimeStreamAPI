"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtakudesuApiService = void 0;
const common_1 = require("@nestjs/common");
const otakudesuWebScrapper_1 = require("../utils/scrapper/otakudesuWebScrapper");
let OtakudesuApiService = class OtakudesuApiService {
    async getHomepage() {
        const dataRes = await otakudesuWebScrapper_1.default.scrapeHomePage();
        return dataRes;
    }
    async getAnimeDetails(pathname) {
        const urls = `anime/${pathname}`;
        const dataRes = await otakudesuWebScrapper_1.default.scrapeAnimeDetail(urls);
        return dataRes;
    }
    async searchAnimeByTitle(judulAnime) {
        const urls = `?s=${judulAnime}&post_type=anime`;
        const dataRes = await otakudesuWebScrapper_1.default.scrapeSearchAnimeByTitle(urls);
        return dataRes;
    }
    async getAnimeStreamSource(epsUrl) {
        const urls = `episode/${epsUrl}`;
        const dataRes = await otakudesuWebScrapper_1.default.scrapeVideoAnimeSource(urls);
        return dataRes;
    }
    async getGenreAnimeList(pathname, page) {
        const urls = `genres/${pathname}/page/${page}`;
        const dataRes = await otakudesuWebScrapper_1.default.scrapeGenreAnimes(urls);
        return dataRes;
    }
};
exports.OtakudesuApiService = OtakudesuApiService;
exports.OtakudesuApiService = OtakudesuApiService = __decorate([
    (0, common_1.Injectable)()
], OtakudesuApiService);
//# sourceMappingURL=otakudesu-api.service.js.map