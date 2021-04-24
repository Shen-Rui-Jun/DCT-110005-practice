import { PostService } from './../post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortsRoutingModule } from './ports-routing.module';
import { PortsComponent } from './ports.component';
import { PortComponent } from './port/port.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [PortsComponent, PortComponent, CreateComponent],
  imports: [
    CommonModule,
    PortsRoutingModule,
  ],
})
export class PortsModule { }
