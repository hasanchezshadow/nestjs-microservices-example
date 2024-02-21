import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    log('welcome message');
    return this.appService.getHello();
  }

  @Post()
  register(@Body() body: any): Observable<string> {
    log('registering user');
    return this.appService.newUser(body);
  }
}
