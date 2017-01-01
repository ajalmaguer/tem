import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-small-header',
	templateUrl: './small-header.component.html',
	styleUrls: ['./small-header.component.css']
})
export class SmallHeaderComponent implements OnInit {
	@Input() title: string = "Sub page"
	
	constructor() { }

	ngOnInit() {
	}

}
