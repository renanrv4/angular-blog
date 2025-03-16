import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SecondaryCardComponent } from "../../components/secondary-card/secondary-card.component";

@Component({
  selector: 'app-home',
  imports: [MenuBarComponent, BigCardComponent, SecondaryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
