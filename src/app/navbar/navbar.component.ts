import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $

@Component({
	selector: 'tem-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {}

	goTo(route: any[], noToggleClick) {
		this.router.navigate(route)
		window.scrollTo(0,0)
		if (!noToggleClick) $(".responsive-menu-toggle").click()
	}

}
