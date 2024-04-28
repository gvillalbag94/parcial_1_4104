import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Vehicle } from './vehicle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}
