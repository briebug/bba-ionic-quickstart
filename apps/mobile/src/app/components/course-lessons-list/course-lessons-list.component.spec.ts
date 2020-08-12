import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseLessonsListComponent } from './course-lessons-list.component';

describe('CourseLessonsListComponent', () => {
  let component: CourseLessonsListComponent;
  let fixture: ComponentFixture<CourseLessonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLessonsListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
