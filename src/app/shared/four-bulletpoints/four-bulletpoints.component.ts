import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-four-bulletpoints',
	templateUrl: './four-bulletpoints.component.html',
	styleUrls: ['./four-bulletpoints.component.css']
})
export class FourBulletpointsComponent implements OnInit {
	
	@Input() data: any

	constructor() { }

	ngOnInit() {
	}

	calcMinHeight(item) {
		if (!item.text && item.image) {
			return 200
		} else {
			return 0
		}
	}

}
