import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-subheader',
	templateUrl: './subheader.component.html',
	styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {
	@Input() text: string = 'Title goes here'
	
	constructor() { }

	ngOnInit() {
	}

}
