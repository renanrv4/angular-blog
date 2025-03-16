import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secondary-card',
  imports: [RouterModule],
  templateUrl: './secondary-card.component.html',
  styleUrl: './secondary-card.component.css'
})
export class SecondaryCardComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  Id:string = "0"
  constructor() { }

  ngOnInit(): void { }
}
