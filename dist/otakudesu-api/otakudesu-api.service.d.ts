export declare class OtakudesuApiService {
    getHomepage(): Promise<any[]>;
    getAnimeDetails(pathname: string): Promise<{
        AnimeInfo: any[];
        AnimeEps: any[];
    }>;
    searchAnimeByTitle(judulAnime: string): Promise<any[]>;
    getAnimeStreamSource(epsUrl: string): Promise<any>;
    getGenreAnimeList(pathname: string, page: number): Promise<any[]>;
}
