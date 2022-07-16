import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/area.model';
import { Thing } from '../models/thing.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(
    private http: HttpClient,
  ) { }

  public getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>("/assets/things.json");
  }

  public getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>("/assets/areas.json");
  }
}
