/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { VehiclesListComponent } from './vehicles-list.component';
import { Vehicle } from '../vehicle';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesService } from '../vehicles.service';

describe('VehiclesListComponent', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ VehiclesListComponent ],
      providers: [VehiclesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;
     
    for(let i = 0; i < 3; i++) {
      const vehicle = new Vehicle(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.vehicles.push(vehicle);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });
 
  it('should have 4 <tr> elements inside table, 3 for the vehicles and 1 for the header', () => {
    const element: HTMLElement = debug.query(By.css('table')).nativeElement;
    expect(element.getElementsByTagName('tr')).toHaveSize(4)
  });

  it('should have the corresponded labels in the header', () => {
    const element: HTMLElement = debug.query(By.css('table')).nativeElement;
    const tableHeaders = Array.from(element.getElementsByTagName('th'));
    
    // Using forEach loop to iterate over each table header
      expect(tableHeaders[0].textContent).toBe('#');
      expect(tableHeaders[1].textContent).toBe('Marca');
      expect(tableHeaders[2].textContent).toBe('Línea');
      expect(tableHeaders[3].textContent).toBe('Modelo');
  });
});
