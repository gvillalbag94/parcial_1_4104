import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles: Array<Vehicle> = [];

  vehiclesPerMark = new Array<Map<string, any>>();

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.getVehiclesPerMark();
    });   
  }

  getVehiclesPerMark() {
    this.vehicles.forEach(vehicle => {
      const marca = vehicle.marca;
      const existingVehicleMark = this.vehiclesPerMark.find(vehicleMark => vehicleMark.get('marca') === marca);
  
      if (existingVehicleMark) {
        existingVehicleMark.set('cantidad', existingVehicleMark.get('cantidad') + 1);
      } else {
        const vehicleDict = new Map<string, any>();
        vehicleDict.set('marca', marca);
        vehicleDict.set('cantidad', 1);
        this.vehiclesPerMark.push(vehicleDict);
      }
    });
  }
}
