import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  healthTest() {
    const result = {
      status: 'ok',
    };
    return result;
  }
}
