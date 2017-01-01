import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-half-page-image',
	templateUrl: './half-page-image.component.html',
	styleUrls: ['./half-page-image.component.css']
})
export class HalfPageImageComponent implements OnInit {
	@Input() data: any = {
		backgroundImage: 	'/assets/images/home_seo2_sectionbg1.jpg',
		title: 				'Section title goes here',
		header1: 			'Header 1',
		content1: 			'Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu amet.',
		header2: 			'Header 2',
		content2: 			'Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit.',	
		buttonText: 		'Check our offer',		
	}
	
	constructor() { }

	ngOnInit() {
	}

}
