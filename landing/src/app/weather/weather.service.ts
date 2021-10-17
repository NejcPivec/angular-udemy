import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  pluck,
  retry,
  switchMap,
  tap,
  toArray,
} from 'rxjs/operators';
import { OpenWeatherResponse } from './interface/open-weather-response';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url = 'http://api.openweathermap.org/data/2.5/forecast';
  constructor(
    private http: HttpClient,
    private notificationService: NotificationsService
  ) {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', '43168805edfb562613f2819548cd58f2');
      }),
      switchMap((params) => {
        return this.http.get<OpenWeatherResponse>(this.url, {
          params,
        });
      }),
      pluck('list'),
      mergeMap((value) => {
        return of(...value);
      }),
      filter((value, index) => index % 8 === 0),
      map((value) => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp,
        };
      }),
      toArray()
    );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (error) => observer.error(error)
      );
    }).pipe(
      retry(1),
      tap(() => {
        this.notificationService.addSuccess('Got your location');
      }),
      catchError((error) => {
        // Handle error
        this.notificationService.addError('Failed to get your location');

        // return a new observable
        return throwError(error);
      })
    );
  }
}
