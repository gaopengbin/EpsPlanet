import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planet-test';
  constructor(
    private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'theme/core/fonts/epsgis.js'
    });
    this.iconService.fetchFromIconfont({
      scriptUrl: 'theme/core/fonts/epsPlanet.js'
    });
    this.initializeApp();
  }

  initializeApp() {

  }
}
