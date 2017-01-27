import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	@Input('data') data: any

	constructor() { }

	ngOnInit() {
	}

}
