import { Component, Input } from '@angular/core';
import { BlogTagComponent } from "../blog-tag/blog-tag.component";
import { NgFor, NgIf } from '@angular/common';
import BlogTypeConstant from '@components/blog-tag/constants/blogTypeConstant';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeArrowDown01 } from '@ng-icons/huge-icons';
@Component({
  selector: 'app-taglist-wrapper',
  imports: [BlogTagComponent, NgIf, NgIcon],
  templateUrl: './taglist-wrapper.component.html',
  styleUrl: './taglist-wrapper.component.scss',
  viewProviders: [provideIcons({hugeArrowDown01})]
})
export class TaglistWrapperComponent {
  @Input() tagList: {
    id: number,
    content: string
  }[] = []
  showTaglist: {
    id: number,
    content: string
  }[] = []
  hideTaglist: {
    id: number,
    content: string
  }[] = []

  tagType = BlogTypeConstant.WHITE
  ngOnInit() {
    this.showTaglist = this.tagList.slice(0, 6)
    this.hideTaglist = this.tagList.slice(6)
  }
}
