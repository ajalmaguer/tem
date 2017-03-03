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

	getMinHeight(minHeight) {
		if (minHeight) {
			return minHeight
		} else {
			return '420px'
		}
	}

	getFadeDir(i) {
		let pane = i % 3
		switch (pane) {
			case 0:
				return 'fadeInLeft'
			case 1:
				return 'fadeInUp'
			case 2:
				return 'fadeInRight'
			default:
				console.log('error in getFadeDir', pane)
				break;
		}
	}

	shouldMoveRight(i, length) {
		return (length - i === 2) && (length % 3 !== 0)
	}

}
