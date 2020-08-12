import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    HomePageRoutingModule,
    IonicModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
