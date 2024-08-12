declare class WebScraperOtakudesu {
    private static fetchHtml;
    private static cheerioInstance;
    static scrapeHomePage(): Promise<any[]>;
    static scrapeGenreAnimes(pathUri: string): Promise<any[]>;
    static scrapeAnimeDetail(pathUri: string): Promise<{
        AnimeInfo: any[];
        AnimeEps: any[];
    }>;
    static scrapeSearchAnimeByTitle(pathUri: string): Promise<any[]>;
    static scrapeVideoAnimeSource(pathUri: string): Promise<any>;
}
export default WebScraperOtakudesu;
