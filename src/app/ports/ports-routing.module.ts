import { PortComponent } from './port/port.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortsComponent } from './ports.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: 'ports', pathMatch: 'full' },
  { path: 'ports', component: PortsComponent },
  { path: 'port', redirectTo: 'ports' },
  { path: 'port/:id', component: PortComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: 'ports' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortsRoutingModule { }
