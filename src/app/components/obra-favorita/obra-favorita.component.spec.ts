import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraFavoritaComponent } from './obra-favorita.component';

describe('ObraFavoritaComponent', () => {
  let component: ObraFavoritaComponent;
  let fixture: ComponentFixture<ObraFavoritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraFavoritaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObraFavoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
