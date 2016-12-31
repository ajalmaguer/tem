import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-offer',
	templateUrl: './offer.component.html',
	styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
	@Input() side: string = 'left'
	@Input() title: string = 'Search engine optimization with content strategy'
	@Input() bigParagraph: string = 'Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae.'
	@Input() smallParagraph: string = 'Ultricies eu, faucibus quis, porttitor eros cursus lectus eius modi tempora incidunt ut labore et dolore Lorem ipsum dolor sit amet, consm est, qui dolorem ipsum quia dol tempora incidunt ut labore et sit amet, consm est, qui dolorem ipsum quia dol tempora.'
	@Input() buttonText: string = 'Read more'
	@Input() price: string = '$29'
	@Input() priceCaption: string = 'Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris malesuada.'
	@Input() imageUrl: string = 'assets/images/home_seo2_offer2.png'

	constructor() { }

	ngOnInit() {
	}

}
