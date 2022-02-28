import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl
  entityName: string = 'cars'

  constructor(
    private http: HttpClient
  ) { }

  getAll() : Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: string | number) : Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}${this.entityName}`, car);
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(`${this.apiUrl}${this.entityName}/${car.id}`, car)
  }

  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}${this.entityName}/${id}`)
  }
}
