import { OtakudesuApiService } from './otakudesu-api.service';
import { Response } from 'express';
export declare class OtakudesuApiController {
    private readonly OtakudesuApiService;
    constructor(OtakudesuApiService: OtakudesuApiService);
    serviceStart(res: Response): Promise<void>;
    getAnimeHomePage(res: Response): Promise<void>;
    getAnimeDetails(res: Response, judulAnime: string): Promise<void>;
    searchAnime(res: Response, judulAnime: string): Promise<void>;
    getAnimeSourceStream(res: Response, urlAnimeEps: string): Promise<void>;
    getAnimeGenre(res: Response, genre: string, pageNumber: number): Promise<void>;
}
