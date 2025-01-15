import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglistWrapperComponent } from './taglist-wrapper.component';

describe('TaglistWrapperComponent', () => {
  let component: TaglistWrapperComponent;
  let fixture: ComponentFixture<TaglistWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaglistWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaglistWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
