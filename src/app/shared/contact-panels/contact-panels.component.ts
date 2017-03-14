import { Component, OnInit } from '@angular/core';

declare var $

@Component({
	selector: 'tem-contact-panels',
	templateUrl: './contact-panels.component.html',
})
export class ContactPanelsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	scrollTo(id) {
		console.log('scroll to', id)
		$('html, body').animate({
			scrollTop: $(id).offset().top
		},500)
	}
}
