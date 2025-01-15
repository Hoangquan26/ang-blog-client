import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCommonComponent } from './title-common.component';

describe('TitleCommonComponent', () => {
  let component: TitleCommonComponent;
  let fixture: ComponentFixture<TitleCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
