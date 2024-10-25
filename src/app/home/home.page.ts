import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ListaAlumnosComponent]
  
})
export class HomePage {
  constructor() {}
}
