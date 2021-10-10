import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecast$!: Observable<{ dateString: string; temp: number }[]>;

  constructor(private weatherService: WeatherService) {
    this.forecast$ = this.weatherService.getForecast();
  }

  ngOnInit(): void {}
}
