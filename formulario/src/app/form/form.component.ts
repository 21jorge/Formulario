import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  singUpForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
    
  ngOnInit(): void {
    this.crearFormulario();
  }

    // Método para crear el formulario
    crearFormulario() {
      this.singUpForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        address: this.formBuilder.group({
          street: ['', Validators.required],
          city: ['Bogotá', Validators.required]
        })
       });
  }
  onSubmit() { 
    if (this.singUpForm.valid) {  
      console.log('Datos listos para enviar', this.singUpForm.value);
    } else {
      this.singUpForm.markAllAsTouched();
    }
  }
  get f() {
    return this.singUpForm.controls;
  }

}
