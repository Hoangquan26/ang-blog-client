import { Component, Input } from '@angular/core';
import { bootstrapArrowRight } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
@Component({
  selector: 'app-button-common',
  imports: [NgIcon],
  templateUrl: './button-common.component.html',
  styleUrl: './button-common.component.scss',
  viewProviders: [provideIcons({bootstrapArrowRight})],
})

export class ButtonCommonComponent {
  @Input() content: string = "";
  @Input() action: Function = () => {};
  @Input() active: boolean = true;

  classNames = {
    "container": true,
    active: this.active
  }
}
