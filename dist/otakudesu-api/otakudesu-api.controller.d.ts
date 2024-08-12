import { OtakudesuApiService } from './otakudesu-api.service';
import { Response } from 'express';
export declare class OtakudesuApiController {
    private readonly OtakudesuApiService;
    constructor(OtakudesuApiService: OtakudesuApiService);
    serviceStart(res: Response): Promise<void>;
    getAnimeHomePage(): Promise<any[]>;
    getAnimeDetails(judulAnime: string): Promise<{
        AnimeInfo: any[];
        AnimeEps: any[];
    }>;
    searchAnime(judulAnime: string): Promise<any[]>;
    getAnimeSourceStream(urlAnimeEps: string): Promise<any>;
    getAnimeGenre(genre: string, pageNumber: number): Promise<any[]>;
}
