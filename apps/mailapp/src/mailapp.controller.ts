import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';
import { log } from 'console';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  @Get()
  getHello(): string {
    return this.mailappService.getHello();
  }

  @EventPattern('new_mail')
  handleNewEmail(data: any) {
    // business logic
    log('incoming event ', data);
    return 'User registered successfully';
  }
}
