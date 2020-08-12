import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { AuthorsPageRoutingModule } from './authors-routing.module';
import { AuthorsPage } from './authors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AuthorsPageRoutingModule,
  ],
  declarations: [AuthorsPage],
})
export class AuthorsPageModule {}
