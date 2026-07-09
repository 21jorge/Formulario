import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Registro {
  id: number;
  nombre: string;
  direccion: string;
  email: string;
  celular: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registroForm: FormGroup;
  registros: Registro[] = [];
  editIndex = -1;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
    });
  }

  guardar() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    const datos = this.registroForm.value;

    if (this.editIndex === -1) {
      this.registros.push({
        id: Date.now(),
        nombre: datos.nombre,
        direccion: datos.direccion,
        email: datos.email,
        celular: datos.celular,
      });
    } else {
      this.registros[this.editIndex] = {
        ...this.registros[this.editIndex],
        nombre: datos.nombre,
        direccion: datos.direccion,
        email: datos.email,
        celular: datos.celular,
      };
      this.editIndex = -1;
    }

    this.registroForm.reset();
  }

  editar(index: number) {
    this.editIndex = index;
    const registro = this.registros[index];
    this.registroForm.setValue({
      nombre: registro.nombre,
      direccion: registro.direccion,
      email: registro.email,
      celular: registro.celular,
    });
  }

  eliminar(index: number) {
    this.registros.splice(index, 1);
    if (this.editIndex === index) {
      this.cancelar();
    }
  }

  cancelar() {
    this.editIndex = -1;
    this.registroForm.reset();
  }
}