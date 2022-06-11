// Ngx Translate 
import {TranslateService} from "@ngx-translate/core";

// Native Angular imports
import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  translateLanguage(language: string): void {
    this.translate.use(language)
  }
  
}
