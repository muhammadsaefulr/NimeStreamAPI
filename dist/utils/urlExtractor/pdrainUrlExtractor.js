"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
class PdrainExtractorService {
    static extractUrl(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.text())
                .then((htmlData) => {
                const $ = (0, cheerio_1.load)(htmlData);
                const dataRes = $('meta[name="twitter:player:stream"]').attr("content");
                console.log(dataRes);
                resolve(dataRes);
            })
                .catch((error) => {
                console.error("Error fetching the URL:", error);
                reject(error);
            });
        });
    }
}
exports.default = PdrainExtractorService;
//# sourceMappingURL=pdrainUrlExtractor.js.map