import { Component, EventEmitter, Input, Output } from '@angular/core';
import inputConstants from './constants/inputConstant';

@Component({
  selector: 'app-input-common',
  imports: [],
  templateUrl: './input-common.component.html',
  styleUrl: './input-common.component.scss'
})
export class InputCommonComponent {
  @Input() label: string = "";
  @Input() inputType: inputConstants = inputConstants.GHOST;
  @Input() str: string = "";
  @Output() strChange = new EventEmitter<string>();
  inputClassname = {
    [inputConstants.GHOST] : inputConstants.GHOST == this.inputType,
    [inputConstants.FILL] : inputConstants.FILL == this.inputType,
    [inputConstants.OUTLINE] : inputConstants.OUTLINE == this.inputType,
    "container": true
  }

  handleChange (event: Event) {
    const eventTarget = event.target as HTMLInputElement;
    this.strChange.emit(eventTarget.value);
  }
}
