import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
