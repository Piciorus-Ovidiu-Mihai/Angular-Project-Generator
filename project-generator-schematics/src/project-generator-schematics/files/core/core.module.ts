import { NgModule } from '@angular/core';

import { LayoutModule } from '../libs/layout/layout.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CoreRoutingModule,
    LayoutModule
  ]
})
export class CoreModule { }
