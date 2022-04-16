import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {OktaWidgetService} from 'app/shared/okta/okta-widget.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
 

 
  constructor(
    public OktaWidgetService:OktaWidgetService,
  ) { }

  async ngOnInit(){
    await this.OktaWidgetService.CloseWidget();

    await this.OktaWidgetService.login();


  }

}
