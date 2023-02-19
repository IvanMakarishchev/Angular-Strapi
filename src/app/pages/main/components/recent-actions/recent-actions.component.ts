import { Component, OnInit } from '@angular/core';
import { map, Observable, Subscription, tap } from 'rxjs';
import { Actions, ActionsData } from 'src/app/core/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-recent-actions',
  templateUrl: './recent-actions.component.html',
  styleUrls: ['./recent-actions.component.scss'],
})
export class RecentActionsComponent implements OnInit {
  actions$?: Observable<ActionsData[]>;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.actions$ = this.data.getData()
      .pipe(
        map((el: Actions) => el.data));
  }
}
