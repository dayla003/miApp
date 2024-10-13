import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  constructor(private consulta: ConsultaService) { }
  productos: any[] = [];
  ngOnInit() {
    
  }

  
  obtenerProductos(): void{
    this.consulta.getProductos().subscribe((resp: Object) => {console.log(resp); this.productos = resp as any[]; });
  }

}
