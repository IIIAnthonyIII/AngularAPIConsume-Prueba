import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsObraComponent } from './details-obra.component';

describe('DetailsObraComponent', () => {
  let component: DetailsObraComponent;
  let fixture: ComponentFixture<DetailsObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsObraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
