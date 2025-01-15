import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-common',
  imports: [],
  templateUrl: './title-common.component.html',
  styleUrl: './title-common.component.scss'
})
export class TitleCommonComponent {
  @Input() title: string = "";
}
