import { Injectable } from '@nestjs/common';
import WebScraperOtakudesu from 'src/utils/scrapper/otakudesuWebScrapper';

@Injectable()
export class OtakudesuApiService {
    async getHomepage() {
        const dataRes = await WebScraperOtakudesu.scrapeHomePage()

        return dataRes
    }

    async getAnimeDetails(pathname: string){
        const urls = `anime/${pathname}`

        const dataRes = await WebScraperOtakudesu.scrapeAnimeDetail(urls)

        return dataRes
    }

    async searchAnimeByTitle(judulAnime: string){
        const urls = `?s=${judulAnime}&post_type=anime`

        const dataRes = await WebScraperOtakudesu.scrapeSearchAnimeByTitle(urls)

        return dataRes
    }

    async getAnimeStreamSource(epsUrl: string){
        const urls = `episode/${epsUrl}`

        const dataRes = await WebScraperOtakudesu.scrapeVideoAnimeSource(urls)

        return dataRes
    }

    async getGenreAnimeList(pathname: string, page: number){
        const urls = `genres/${pathname}/page/${page}`
        const dataRes = await WebScraperOtakudesu.scrapeGenreAnimes(urls)

        return dataRes
    }

    async getAnimeOngoing(page: number){
        const urls = `ongoing-anime/page/${page}`
        const dataRes = await WebScraperOtakudesu.scrapeOngoingAnime(urls)

        return dataRes
    }
}
