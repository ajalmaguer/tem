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
		title 		: 'Terminal Engineering <br> & Manufacturing',
		mainImage 	: 'assets/images/tem/hero_dark.png',
		subImage 	: '',
		// subImage 	: 'assets/images/tem/hero-sub.png',
		subtitle1 	: 'Engineering',
		subtitle2 	: 'Manufacturing',
		subtitle3 	: 'Project Management',
		button 		: 'We have a new name!',
	}
	subTitle1 = 'We are committed to quality assurance and customer service in all of our work.'
	history = {
		backgroundImage: 'assets/images/tem/tem-building.png',
		backgroundImageAlign: '100%',
		title: 'Our History',
		header1: '',
		content1: 'For nearly 100 years, Terminal Manufacturing Company, LLC has produced quality machined parts and weldments for our customers. We are a leading innovator in product design and manufacturing; and our success is built around customer satisfaction and return clientele. <br><br>This year we have changed our name from Terminal Manufacturing Company, LLC to Terminal Engineering & Manufacturing. After 99 years in business we want to more accurately describe and highlight our technical and management capabilities. At TE&M, we are an engineering, project management, and manufacturing firm with quality assurance as our core.',
		header2: '',
		content2: '',
		buttonText: '',
	}
	
	constructor() { }

	ngOnInit() {
		
	}

}
