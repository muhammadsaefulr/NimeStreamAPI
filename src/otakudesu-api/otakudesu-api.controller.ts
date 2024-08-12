import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { OtakudesuApiService } from './otakudesu-api.service';
import { Response } from 'express';

@Controller('otakudesu')
export class OtakudesuApiController {
    constructor (private readonly OtakudesuApiService: OtakudesuApiService) {}

    @Get('/')
    async serviceStart(@Res() res: Response){
        res.status(HttpStatus.OK).json({message: "Service Status UP, Please read the api docs to start...", apiDocs: ""})
    }

    @Get('/homepage')
    async getAnimeHomePage() {
        return this.OtakudesuApiService.getHomepage()
    }

    @Get('/getanime/:judulAnime')
    async getAnimeDetails(@Param('judulAnime') judulAnime: string){

        return this.OtakudesuApiService.getAnimeDetails(judulAnime.split('/').pop())
    }

    @Get('/searchanime')
    async searchAnime(@Query('judul') judulAnime: string) {
        return this.OtakudesuApiService.searchAnimeByTitle(judulAnime)
    }

    @Get('/animesource/:urlAnimeEps')
    async getAnimeSourceStream(@Param('urlAnimeEps') urlAnimeEps: string){
        return this.OtakudesuApiService.getAnimeStreamSource(urlAnimeEps)
    }

    @Get('animegenre/:genre/pages/:pageNumber')
    async getAnimeGenre(@Param('genre') genre: string, @Param('pageNumber') pageNumber: number){
        const pageNum = pageNumber === null || undefined ? 0 : pageNumber
        return this.OtakudesuApiService.getGenreAnimeList(genre, pageNum)
    }
}
