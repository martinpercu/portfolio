import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesStorageComponent } from './resources-storage.component';

describe('ResourcesStorageComponent', () => {
  let component: ResourcesStorageComponent;
  let fixture: ComponentFixture<ResourcesStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesStorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourcesStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
