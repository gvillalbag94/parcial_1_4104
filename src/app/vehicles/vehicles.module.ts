import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiclesComponent, VehiclesListComponent],
  exports: [VehiclesComponent]
})
export class VehiclesModule { }
