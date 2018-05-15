import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}

  log(message: any) {
    console.log('Logger.log() =>', message);

    // connecting to server
  }
}
