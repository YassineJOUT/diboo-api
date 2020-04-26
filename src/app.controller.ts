import { Controller, Get, Type } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeLiteralNode } from 'typescript';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
