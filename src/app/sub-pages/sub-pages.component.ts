import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pageData } from './pageData'

@Component({
	selector: 'tem-sub-pages',
	templateUrl: './sub-pages.component.html',
	styleUrls: ['./sub-pages.component.css']
})
export class SubPagesComponent implements OnInit {
	currentPage: any

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			let paramObject:any = params
			this.currentPage = pageData[paramObject.id]
		})
	}

}
