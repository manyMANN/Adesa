import { Component } from '@angular/core';
import { MenuComponent } from '../../componets/menu/menu.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'dashboard',
  imports: [MenuComponent, FooterComponent, RouterOutlet],
  templateUrl: './Dashboard.component.html',
})
export default class DashboardComponent { }
