import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcutePdfComponent } from './acute-pdf.component';

describe('AcutePdfComponent', () => {
  let component: AcutePdfComponent;
  let fixture: ComponentFixture<AcutePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcutePdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcutePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
