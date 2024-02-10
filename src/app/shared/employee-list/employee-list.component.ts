import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  cities!: City[];

  formGroup!: FormGroup;

  ngOnInit() {
      this.cities = [
          { name: 'Rocio Navarro', code: 'NY' },
          { name: 'Angel Cabrera', code: 'RM' },
          { name: 'Pablo Lopez', code: 'LDN' },
          { name: 'Carolina Herrera', code: 'IST' },
          { name: 'Paco Villace', code: 'PRS' },
          { name: 'Rocio Navarro', code: 'NY' },
          { name: 'Angel Cabrera', code: 'RM' },
          { name: 'Pablo Lopez', code: 'LDN' },
          { name: 'Carolina Herrera', code: 'IST' },
          { name: 'Paco Villace', code: 'PRS' }
      ];

      this.formGroup = new FormGroup({
          selectedCity: new FormControl<City | null>(null)
      });
  } 
}
