import { Inject, Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { ClientProxy } from '@nestjs/microservices';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  // @Client({
  //   transport: Transport.TCP,
  //   options: {
  //     host: '127.0.0.1',
  //   },
  // })
  // client: ClientProxy;

  constructor(@Inject('MAIL_SERVICE') private clientMail: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  // sendMail(): Observable<number> {
  //   const pattern = { cmd: 'newEmail' };
  //   const payload: Record<string, string> = {
  //     email: 'chico@cojo.com',
  //     message: 'este es un mensaje de prueba',
  //   };
  //   return this.client.send<number>(pattern, payload);
  // }

  newUser(data: any): Observable<string> {
    // const pattern = { cmd: 'newEmail' };
    // const payload: Record<string, string> = {
    //   email: data.email,
    //   name: data.name,
    //   message: 'texto del correo',
    // };
    log('emiting event => ', data);
    return this.clientMail.emit<string>('new_mail', data);
  }
}
