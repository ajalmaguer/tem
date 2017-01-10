import { Component, OnInit } from '@angular/core';

declare var jQuery
var tpj = jQuery
declare var revslider_showDoubleJqueryError

@Component({
	selector: 'tem-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	hero: any = {
		title 		: 'Terminal Engineering <br> and Manufacturing',
		mainImage 	: 'assets/images/tem/hero_dark.png',
		subImage 	: 'assets/images/tem/hero-sub.png',
		subtitle1 	: 'Bullet point 1',
		subtitle2 	: 'Bullet point 2',
		subtitle3 	: 'Bullet point 3',
		button 		: 'Check our offer',
	}
	
	constructor() { }

	ngOnInit() {
		
	}

}
