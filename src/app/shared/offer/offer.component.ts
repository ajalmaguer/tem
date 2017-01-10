import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-offer',
	templateUrl: './offer.component.html',
	styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
	@Input() content: any = {
		side: 'left',
		title: 'Search engine optimization with content strategy',
		bigParagraph: 'Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae.',
		smallParagraph: 'Ultricies eu, faucibus quis, porttitor eros cursus lectus eius modi tempora incidunt ut labore et dolore Lorem ipsum dolor sit amet, consm est, qui dolorem ipsum quia dol tempora incidunt ut labore et sit amet, consm est, qui dolorem ipsum quia dol tempora.',
		buttonText: 'Read more',
		price: '$29',
		priceCaption: 'Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris malesuada.',
		imageUrl: 'assets/images/home_seo2_offer2.png',
	}
	

	constructor() { }

	ngOnInit() {
	}

}
