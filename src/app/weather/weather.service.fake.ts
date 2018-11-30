import { IWeatherService } from "./weather.service";
import { ICurrentWeather } from "../interfaces";
import { Observable, of, BehaviorSubject } from "rxjs";

export class WeatherServiceFake implements IWeatherService {

    currentWeather = new BehaviorSubject<ICurrentWeather>({
        city: '--',
        country: '--',
        date: Date.now(),
        image: '',
        temperature: 0,
        description: ''
    })
    
    private fakeWeather : ICurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: 1485789600,
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle'
    }

    public getCurrentWeather(city: string, country: string) : Observable<ICurrentWeather> {
        return of(this.fakeWeather);
    }
}