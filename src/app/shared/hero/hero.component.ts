import { Component, AfterViewInit, Input } from '@angular/core';

declare var jQuery
var tpj = jQuery
declare var revslider_showDoubleJqueryError

@Component({
	selector: 'tem-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
	@Input() title: string 		= 'Boost your position in Search <br /> Engines with BeSEO '
	@Input() mainImage: string 	= 'assets/images/tem/hero_dark.png'
	@Input() subImage: string 	= 'assets/images/tem/hero-sub.png'
	@Input() subtitle1: string 	= 'Bullet point 1'
	@Input() subtitle2: string 	= 'Bullet point 2'
	@Input() subtitle3: string 	= 'Bullet point 3'
	@Input() button: string 	= 'Check our offer'


	constructor() { }

	ngAfterViewInit() {
		if (tpj("#rev_slider_1_1").revolution == undefined) {
			console.log("oaidjfoaisdjf")
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		} else {
			var revapi1 = tpj("#rev_slider_1_1").show().revolution({
				sliderType: "hero",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {},
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: 1240,
				gridheight: 820,
				lazyType: "none",
				parallax: {
					type: "scroll",
					origo: "enterpoint",
					speed: 400,
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
				},
				shadow: 0,
				spinner: "spinner2",
				autoHeight: "off",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					disableFocusListener: false,
				}
			});
		}
	}

}
