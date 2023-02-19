import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actions, ActionsData } from '../core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Actions> {
    return this.http
      .get<Actions>(`${environment.strapiUrl}/api/actions?populate=*`)
      .pipe(
        map((el: Actions) => {
          el.data.map(
            (act: ActionsData) =>
              (act.attributes.Thumbnail.data.attributes.url = `${environment.strapiUrl}${act.attributes.Thumbnail.data.attributes.url}`)
          );
          return el;
        })
      );
  }
}
