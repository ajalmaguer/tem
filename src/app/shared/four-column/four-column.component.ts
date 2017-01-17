import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-four-column',
	templateUrl: './four-column.component.html',
	styleUrls: ['./four-column.component.css']
})
export class FourColumnComponent implements OnInit {
	@Input() data: any

	constructor() { }

	ngOnInit() {
		console.log('this.data =', this.data)
	}

}
