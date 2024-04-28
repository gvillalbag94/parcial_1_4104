import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  imagePath: string = 'assets/banner.jpg';

  constructor() { }

  ngOnInit() {
  }
}
