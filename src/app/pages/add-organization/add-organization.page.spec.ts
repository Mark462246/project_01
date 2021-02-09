import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddOrganizationPage } from './add-organization.page';

describe('AddOrganizationPage', () => {
  let component: AddOrganizationPage;
  let fixture: ComponentFixture<AddOrganizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddOrganizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
