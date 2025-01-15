import { Component, Input } from '@angular/core';
import BlogTypeConstant from './constants/blogTypeConstant';
import { provideIcons, NgIcon } from '@ng-icons/core'
import { bootstrapArrowRight } from '@ng-icons/bootstrap-icons';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-blog-tag',
  imports: [NgIcon, NgIf],
  templateUrl: './blog-tag.component.html',
  styleUrl: './blog-tag.component.scss',
  viewProviders: [provideIcons({bootstrapArrowRight})]
})
export class BlogTagComponent {
  @Input() tag: string = "";
  @Input() tagType: string = BlogTypeConstant.COMMON;
  @Input() tagActive: boolean = false;

  className = {
    container : true,
    [this.tagType]: true,
    active: this.tagActive
  }

  ngOnInit() {
    this.className = {
      container : true,
      [this.tagType]: true,
      active: this.tagActive
    }
  }
}
