import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-agencia',
  templateUrl: './detalle-agencia.component.html',
  styleUrls: ['./detalle-agencia.component.scss']
})
export class DetalleAgenciaComponent implements OnInit {


  private storage: Storage = sessionStorage;
  public formAgencia!: FormGroup;
  latitudAgencia: number = 0;
  longitudAgencia: number = 0;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Index Agencia : ", this.route.snapshot.params["index"]);

    this.formAgencia = this.formBuilder.group({
      agencia: ['', Validators.required],
      direccion: ['', Validators.required],
      distrito: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required]
    })

    const agencia = JSON.parse(this.storage.getItem("agencia") || '{}');
    this.formAgencia.patchValue(agencia);
    this.mapaCoordenadas(agencia.lat, agencia.lon);

  }

  mapaCoordenadas(latitud: any, longitud: any) {
    this.latitudAgencia = +latitud;
    this.longitudAgencia = +longitud;
  }


  actualizar() {
    const index = this.route.snapshot.params["index"];
    let listado: any[] = JSON.parse(this.storage.getItem("listado") || '[]');

    if (listado && listado.length > 0) {
      listado[index] = this.formAgencia.value;
      this.storage.setItem("listado", JSON.stringify(listado));

      this.router.navigate([""]);

    }
  }

}
