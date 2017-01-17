import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'tem-triple-panes',
	templateUrl: './triple-panes.component.html',
	styleUrls: ['./triple-panes.component.css']
})
export class TriplePanesComponent implements OnInit {
	@Input() data: any = {
		// panes: [
		// {
		// 	backgroundColor: '#3a80f1',
		// 	fadeDir: 'fadeInLeft',
		// 	icon: 'balance-scale',
		// 	header: 'Good ethics and morals',
		// 	bullets: [
		// 		'Trust – we do what we say and say what we do',
		// 		'Loyalty',
		// 		'Pride and passion without arrogance',
		// 		'Open-mindedness and being respectful of others’ ideas',
		// 	],

		// },{
			
		// }]
	}

	constructor() { }

	ngOnInit() {
	}

}
