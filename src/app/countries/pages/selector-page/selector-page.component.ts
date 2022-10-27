import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit  {
 
  myFormSelector: FormGroup = this.fb.group({
    region: ['', Validators.required]
  })

  // fill selectors
  regions: string[] = [];

  constructor( private fb: FormBuilder,
               private countriesService: CountriesService) { }
 
  ngOnInit(): void {

    this.regions = this.countriesService.regions;
      
  }

  save(){
    console.log(this.myFormSelector.value); 
    
  }


}