import {Injectable} from '@angular/core';

@Injectable()
export class ImagesService {

  getImageUrl(id: string) {
    return 'http://localhost:8080/images?id=' + id;
  }
}
