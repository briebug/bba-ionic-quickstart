import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';
import { CourseDetailsPageRoutingModule } from './course-details-routing.module';
import { CourseDetailsPage } from './course-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CourseDetailsPageRoutingModule
  ],
  declarations: [CourseDetailsPage]
})
export class CourseDetailsPageModule {}
