import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorFavoritoComponent } from './autor-favorito.component';

describe('AutorFavoritoComponent', () => {
  let component: AutorFavoritoComponent;
  let fixture: ComponentFixture<AutorFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorFavoritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
