import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async serviceStart(@Res() res: Response){
      res.status(HttpStatus.OK).json({message: "Service Status UP, Please read the api docs to start...", apidocs: "https://github.com/muhammadsaefulr/NimeStreamAPI"})
  }
}
