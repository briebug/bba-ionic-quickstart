import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';
import { LessonDetailsPageRoutingModule } from './lesson-details-routing.module';
import { LessonDetailsPage } from './lesson-details.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    LessonDetailsPageRoutingModule
  ],
  declarations: [LessonDetailsPage]
})
export class LessonDetailsPageModule {}
