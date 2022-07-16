import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-pipe',
  templateUrl: './main-pipe.component.html',
  styleUrls: ['./main-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
