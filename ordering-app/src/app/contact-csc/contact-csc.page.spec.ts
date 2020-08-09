import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactCSCPage } from './contact-csc.page';

describe('ContactCSCPage', () => {
  let component: ContactCSCPage;
  let fixture: ComponentFixture<ContactCSCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCSCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactCSCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
