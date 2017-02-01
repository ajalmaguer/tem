import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-spacer',
	templateUrl: './spacer.component.html',
	styleUrls: ['./spacer.component.css']
})
export class SpacerComponent implements OnInit {
	@Input() data: any;

	constructor() { }

	ngOnInit() {
	}

}
