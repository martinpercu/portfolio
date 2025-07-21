import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsStorageComponent } from './certifications-storage.component';

describe('CertificationsStorageComponent', () => {
  let component: CertificationsStorageComponent;
  let fixture: ComponentFixture<CertificationsStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsStorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificationsStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
