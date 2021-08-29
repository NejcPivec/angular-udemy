import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashResponse } from './interface/unsplash-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>(
      `https://api.unsplash.com/photos/random`,
      {
        headers: {
          Authorization:
            'Client-ID BJj5rviTRs8UtSMKMhtQe-4CA0kD7KDEFpuLwpxzTAM',
        },
      }
    );
  }
}
