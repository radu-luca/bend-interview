import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-subscribe',
  templateUrl: './main-subscribe.component.html',
  styleUrls: ['./main-subscribe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
