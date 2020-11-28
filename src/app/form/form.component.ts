import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

//import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder 

  ) { 
    this.buildForm();
  }
// ngonit solo para peticiones de datos o llamdas a servidor
  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id:  ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required,Validators.maxLength(80)]],
      detail: ['', [Validators.required, Validators.maxLength(80)]],
      iconId: ['', [Validators.required]],
      bannerId: ['', [Validators.required]],
      active: ['', [Validators.required]],
      localDateTime: ['', [Validators.required]],
    });

   
   /*  this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    }); */
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);

    }
    
  }

/*
  listaRoadmaps(){
    this.servicioformularioService.listaRoadmaps().suscribe( 
      datos=> this.contactos1 = datos
    );
   }

     hayRegistros(){
    if(this.contactos1 == null){
      return false;
   }else{
     return true;
   }
  } */
}
