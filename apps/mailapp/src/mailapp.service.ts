import { Injectable } from '@nestjs/common';
// import { MessagePattern } from '@nestjs/microservices';
// import { Observable, from } from 'rxjs';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hello World!';
  }

  // @MessagePattern({ cmd: 'sendMail' })
  // // async accumulate(data: number[]): Promise<number> {
  // accumulate(data: number[]): Observable<number> {
  //   // return (data || []).reduce((a, b) => a + b);
  //   return from([...data, ...[1, 2, 3]]);
  // }
}
