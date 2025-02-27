import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/portofolio-web/header/header.component';
import { CardListComponent } from '../../components/card-list/card-list.component';

@Component({
  selector: 'app-portofolio-web',
  imports: [HeaderComponent, CardListComponent],
  templateUrl: './portofolio-web.component.html',
  styleUrl: './portofolio-web.component.css',
})
export class PortofolioWebComponent {}
