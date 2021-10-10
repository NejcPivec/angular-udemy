import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  constructor(private weatherService: WeatherService) {
    this.weatherService.getForecast().subscribe((forecast) => {
      console.log(forecast);
    });
  }

  ngOnInit(): void {}
}
