//This component is a plug-in for the display-client.html so provider users can filter large lists of clients

import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service';
import { FilterUserService } from 'src/app/Shared/services/filter-user.service';

@Component({
  selector: 'app-search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css']
})
export class SearchClientsComponent implements OnInit {
  form: FormGroup;
  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  searchText: string = '';
  filters: any;

  constructor(
    private fb: FormBuilder,
    // private ClientProfileService: ClientProfileService
    )
     { }

  ngOnInit() :void {
  this.buildForm();
  };

  buildForm(): void {
    this.form = this.fb.group({
      First_Name: new FormControl(''),
      Last_Name: new FormControl(''),
      DOB: new FormControl(''),
      Phone_number: new FormControl(''),
      Street_Address: new FormControl(''),
      City: new FormControl(''),
      idClient_User: new FormControl('') 
    });
  };

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
    console.log(this.groupFilters)
    console.log('emitting filters', filters)
  }

}
