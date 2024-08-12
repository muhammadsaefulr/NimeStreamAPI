"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const pdrainUrlExtractor_1 = require("../urlExtractor/pdrainUrlExtractor");
const url = 'https://otakudesu.cloud/';
class WebScraperOtakudesu {
    static async fetchHtml(url) {
        const response = await fetch(url);
        return await response.text();
    }
    static async cheerioInstance(pathUri) {
        const html = await this.fetchHtml(url + pathUri);
        const datas = (0, cheerio_1.load)(html);
        return datas;
    }
    static async scrapeHomePage() {
        const $ = await this.cheerioInstance('');
        let datas = [];
        $('.venz li').each((i, el) => {
            const anime = {
                episode: $(el).find('.epz').text().trim(),
                dayUpdate: $(el).find('.epztipe').text().trim(),
                dateUpdate: $(el).find('.newnime').text(),
                url: $(el).find('.thumb a').attr('href') || '',
                imageUrl: $(el).find('.thumb img').attr('src') || '',
                title: $(el).find('.jdlflm').text().trim(),
            };
            datas.push({
                title: anime.title,
                url: anime.url,
                thumbnailUrl: anime.imageUrl,
                latestEp: anime.episode,
                updateAnime: anime.dayUpdate,
            });
        });
        return datas;
    }
    static async scrapeGenreAnimes(pathUri) {
        const $ = await this.cheerioInstance(pathUri);
        let AnimeList = [];
        $('.col-anime').each((i, el) => {
            const dataAnime = {
                title: $(el).find('.col-anime-title a').text().trim(),
                urlAnime: $(el).find('.col-anime-title a').attr('href'),
                studio: $(el).find('.col-anime-studio').text().trim(),
                latestEp: $(el).find('.col-anime-eps').text().trim(),
                rating: $(el).find('.col-anime-rating').text().trim(),
                thumbnailUrl: $(el).find('.col-anime-cover img').attr('src'),
            };
            AnimeList.push(dataAnime);
        });
        return AnimeList.slice(0, 20);
    }
    static async scrapeAnimeDetail(pathUri) {
        const $ = await this.cheerioInstance(pathUri);
        let AnimeInfo = [];
        let AnimeEps = [];
        $('.infozingle').each((i, el) => {
            const genres = $(el)
                .find('span b:contains("Genre")')
                .parent()
                .find('a')
                .map((i, e) => ({
                genre: $(e).text(),
                genreLinks: $(e).attr('href'),
            }))
                .get();
            const sinopsis = $('.sinopc').find('p').text();
            const dataDetails = {
                thumbnailImage: $('.fotoanime img').attr('src'),
                title: $(el).find('p:contains("Judul")').text().replace('Judul: ', ''),
                rating: $(el).find('p:contains("Skor")').text().replace('Skor: ', ''),
                producer: $(el)
                    .find('p:contains("Produser")')
                    .text()
                    .replace('Produser: ', ''),
                status: $(el)
                    .find('p:contains("Status")')
                    .text()
                    .replace('Status: ', ''),
                totalEps: $(el)
                    .find('p:contains("Total Episode")')
                    .text()
                    .replace('Total Episode: ', ''),
                duration: $(el)
                    .find('p:contains("Durasi")')
                    .text()
                    .replace('Durasi: ', '')
                    .replace('per ep.', ''),
                studio: $(el)
                    .find('p:contains("Studio:")')
                    .text()
                    .replace('Studio: ', ''),
                releaseDate: $(el).find('p:contains("Tanggal Rilis")').text(),
                genre: genres,
                sinopsis: sinopsis,
            };
            AnimeInfo.push(dataDetails);
        });
        $('.episodelist li').each((i, el) => {
            const AnimeList = {
                title: $(el).find('span a').text().trim(),
                vidLinks: $(el).find('span a').attr('href'),
            };
            AnimeEps.push(AnimeList);
        });
        return { AnimeInfo, AnimeEps };
    }
    static async scrapeSearchAnimeByTitle(pathUri) {
        const $ = await this.cheerioInstance(pathUri);
        const AnimeList = [];
        $('ul.chivsrc li').each((i, el) => {
            const genres = [];
            $(el)
                .find('.set b:contains("Genres")')
                .parent()
                .find('a')
                .each((i, genre) => {
                const data = {
                    titleGenre: $(genre).text(),
                    genreLinks: $(genre).attr('href'),
                };
                genres.push(data);
            });
            const resultList = {
                title: $(el).find('h2 a').text(),
                AnimeLinks: $(el).find('h2 a').attr('href'),
                AnimeThumbnail: $(el).find('img').attr('src'),
                status: $(el)
                    .find(".set b:contains('Status')")
                    .parent()
                    .text()
                    .trimStart(),
                rating: $(el).find(".set b:contains('Rating')").parent().text(),
            };
            AnimeList.push(...AnimeList, {
                title: resultList.title,
                thumbnailImage: resultList.AnimeThumbnail,
                AnimeLinks: resultList.AnimeLinks,
                genre: genres,
                status: resultList.status,
                rating: resultList.rating,
            });
        });
        return AnimeList.slice(0, 15);
    }
    static async scrapeVideoAnimeSource(pathUri) {
        const $ = await this.cheerioInstance(pathUri);
        let data = {};
        let AnimeSource = [];
        let epsList = [];
        $('.keyingpost li').each((i, el) => {
            const data = {
                title: $(el).find('a').text(),
                links: $(el).find('a').attr('href'),
            };
            epsList.push(data);
        });
        $('.download ul li').each((i, el) => {
            const dataList = [];
            let titleRes = $(el).find('strong').text();
            $(el)
                .find('a')
                .each((i, el) => {
                let title = $(el).text();
                let links = $(el).attr('href');
                dataList.push({ title, links });
            });
            AnimeSource.push({ res: titleRes, dataList });
        });
        let partsSliced = $('.venutama')
            .find('h1.posttl')
            .text()
            .split(/^(.*?)\s(Episode\s\d+\sSubtitle\sIndonesia)$/i);
        const dataSource = {
            judulAnime: partsSliced[1],
            epsNow: partsSliced[2],
            nextEpsLinks: $('.flir').find("a:contains('Next Eps.')").attr('href'),
            releaseOn: $('.kategoz')
                .find("span:contains('Release on')")
                .text()
                .replace('Release on', ''),
            vidSourceLinks: $('.responsive-embed-stream iframe').attr('src'),
        };
        data = {
            title: dataSource.judulAnime,
            releaseOn: dataSource.releaseOn,
            epsNow: dataSource.epsNow,
            sourceLinks: dataSource.vidSourceLinks,
            nextEpsLinks: dataSource.nextEpsLinks,
            AnimeSource,
        };
        const pdrainSource = AnimeSource.filter((source) => /(mp4|0p)/i.test(source.res.toLowerCase()))
            .map((source) => {
            const filteredDataList = source.dataList.filter((item) => item.title.trim().toLowerCase() === 'pdrain');
            return filteredDataList.length > 0
                ? { resolution: source.res, link: filteredDataList[0].links.trim() }
                : null;
        })
            .filter((link) => link !== null);
        const resultPdrain = [];
        for (const datapdrain of pdrainSource) {
            const result = await pdrainUrlExtractor_1.default.extractUrl(datapdrain.link);
            if (result !== null) {
                let res = datapdrain.resolution;
                let links = result;
                resultPdrain.push({ res, links });
            }
        }
        data = { ...data, epsList, resultPdrain };
        return data;
    }
}
exports.default = WebScraperOtakudesu;
//# sourceMappingURL=otakudesuWebScrapper.js.map