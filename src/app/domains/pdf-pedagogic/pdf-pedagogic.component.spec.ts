import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPedagogicComponent } from './pdf-pedagogic.component';

describe('PdfPedagogicComponent', () => {
  let component: PdfPedagogicComponent;
  let fixture: ComponentFixture<PdfPedagogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfPedagogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfPedagogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
