import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserCourseCardComponent } from './user-course-card.component';

describe('UserCourseCardComponent', () => {
  let component: UserCourseCardComponent;
  let fixture: ComponentFixture<UserCourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
