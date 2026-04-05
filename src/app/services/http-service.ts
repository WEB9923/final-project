import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private httpClient = inject(HttpClient);

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  getAll<T>({ endpoint, query }: { endpoint: string; query?: string }): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${endpoint}${query ? query : ''}`, {
      headers: {
        'X-API-KEY': this.apiKey,
      },
    });
  }
}
