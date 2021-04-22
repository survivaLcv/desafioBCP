import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciasService } from 'src/services/agencias.service';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.scss']
})

export class AgenciaComponent implements OnInit {

  loading = true;
  listaAgencias : any;
  private storage: Storage = sessionStorage;
  constructor(private agenciaServices : AgenciasService ,  private router: Router) { }

  ngOnInit(): void {
    this.listadoAgencias();
  }

  listadoAgencias(){
    this.agenciaServices.getListadoAgencias().subscribe(data => {
      const listado = this.storage.getItem("listado");
      if (listado) {
        this.listaAgencias = JSON.parse(listado);
      } else {
        this.storage.setItem("listado", JSON.stringify(data));
        this.listaAgencias =  data;
      }
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    });
  }

  irDetalleAgencia(agenciaSeleccionada:any , item:any){
    this.storage.setItem("agencia", JSON.stringify(agenciaSeleccionada));
    this.router.navigate(["/detalle", item]).then((e) => {
      if (e) {
        console.log("sucess!");
      } else {
        console.log("failed!");
      }

    });

  }

}
