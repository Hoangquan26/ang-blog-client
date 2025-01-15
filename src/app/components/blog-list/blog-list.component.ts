import { Component, Input } from '@angular/core';
import { IBlog } from '../../interface/blog-constant';
import { TitleCommonComponent } from "../title-common/title-common.component";
import { TaglistWrapperComponent } from "../taglist-wrapper/taglist-wrapper.component";

@Component({
  selector: 'app-blog-list',
  imports: [TitleCommonComponent, TaglistWrapperComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  @Input() blogListTitle: string = ""
  @Input() blogList: IBlog[] = []
  @Input() blogListTag: {id: number, content: string}[] = []
  constructor() {
    
  }
}
