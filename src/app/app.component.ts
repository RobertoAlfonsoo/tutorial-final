import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CodeBoxComponent } from './code-box/code-box.component';
import { FooterComponent } from './footer/footer.component';

// Importar los módulos de Angular Material que necesitas
//import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CodeBoxComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, //El componente es independiente
})

export class AppComponent {
  title = 'tutorial-final';
}
