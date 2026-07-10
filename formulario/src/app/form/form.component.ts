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
          celular: ['Bogotá', Validators.required]
        })
       });
  }
  onSubmit() { }

  get f() {
    return this.singUpForm.controls;
  }

}
