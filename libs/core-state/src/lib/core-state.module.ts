import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, ROUTER_FEATURE_KEY } from '.';
import { AuthorsEffects } from './authors/authors.effects';
import { CoursesEffects } from './courses/courses.effects';
import { LessonsEffects } from './lessons/lessons.effects';
import { UsersEffects } from './users/users.effects';

const STORE_NAME = 'bba-store';
const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      AuthorsEffects,
      CoursesEffects,
      LessonsEffects,
      UsersEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
    StoreRouterConnectingModule.forRoot({ stateKey: ROUTER_FEATURE_KEY }),
  ],
})
export class CoreStateModule {}
