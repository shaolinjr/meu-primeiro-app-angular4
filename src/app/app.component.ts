import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'meu-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao Meu app - Primeiro projeto Angular 4!'

  constructor() { }

  ngOnInit() {
  }

}
