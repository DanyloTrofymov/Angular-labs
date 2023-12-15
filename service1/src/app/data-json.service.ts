import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phone } from './phone';


@Injectable()
export class DataJsonService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.dataUrl);
  }
}
