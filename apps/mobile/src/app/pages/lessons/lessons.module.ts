import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { LessonsPageRoutingModule } from './lessons-routing.module';
import { LessonsPage } from './lessons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [LessonsPage]
})
export class LessonsPageModule {}
