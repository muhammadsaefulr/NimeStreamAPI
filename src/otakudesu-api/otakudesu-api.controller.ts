import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { OtakudesuApiService } from './otakudesu-api.service';
import { Response } from 'express';

@Controller('otakudesu')
export class OtakudesuApiController {
  constructor(private readonly OtakudesuApiService: OtakudesuApiService) {}

  @Get('/')
  async serviceStart(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'Service Status UP, Please read the api docs to start...',
      apiDocs: '',
    });
  }

  @Get('/homepage')
  async getAnimeHomePage(@Res() res: Response) {
    const resp = await this.OtakudesuApiService.getHomepage();
    res
      .status(HttpStatus.OK)
      .json({ status: 200, message: 'Berhasil Mengambil Data !', data: resp });
  }

  @Get('/getanime/:judulAnime')
  async getAnimeDetails(
    @Res() res: Response,
    @Param('judulAnime') judulAnime: string,
  ) {
    const resp = await this.OtakudesuApiService.getAnimeDetails(
      judulAnime.split('/').pop(),
    );

    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Berhasil Mengambil Data !',
      data: resp,
    });
  }

  @Get('/searchanime')
  async searchAnime(@Res() res: Response, @Query('judul') judulAnime: string) {
    const resp = await this.OtakudesuApiService.searchAnimeByTitle(judulAnime);

    res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Berhasil Mengambil Data !',
      data: resp,
    });
  }

  @Get('/animesource/:urlAnimeEps')
  async getAnimeSourceStream(
    @Res() res: Response,
    @Param('urlAnimeEps') urlAnimeEps: string,
  ) {
    const resp = await this.OtakudesuApiService.getAnimeStreamSource(urlAnimeEps);

    res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Berhasil Mengambil Data !',
      data: resp,
    });
  }

  @Get('animegenre/:genre/pages/:pageNumber')
  async getAnimeGenre(
    @Res() res: Response,
    @Param('genre') genre: string,
    @Param('pageNumber') pageNumber: number,
  ) {
    const pageNum = pageNumber === null || undefined ? 0 : pageNumber;
    const resp = await this.OtakudesuApiService.getGenreAnimeList(
      genre,
      pageNum,
    );

    res
      .status(HttpStatus.OK)
      .json({ status: 200, message: 'Berhasil mengambil data !', data: resp });
  }
}
