import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListOrganizationPage } from './list-organization.page';

describe('ListOrganizationPage', () => {
  let component: ListOrganizationPage;
  let fixture: ComponentFixture<ListOrganizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrganizationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListOrganizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
