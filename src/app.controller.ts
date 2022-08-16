import { Controller, Get, Post, Req, Query, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  healthTest() {
    return this.appService.healthTest();
  }

  @Get('/layers')
  getLayers(@Query('name') name) {
    return name || 'none';
  }

  @Get('/layers/:id')
  getLayer(@Param() param) {
    return param.id || 'none';
  }

  @Post('/layers')
  postLayer(@Body() body) {
    console.log(body);
    return 'none';
  }
}
