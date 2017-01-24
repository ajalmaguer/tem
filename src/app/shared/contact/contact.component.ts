import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Http } from '@angular/http'
import { environment } from '../../../environments/environment';


@Component({
	selector: 'tem-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	form: FormGroup
	response: any = {
		show: false,
		status: true
	}
	@ViewChild('captcha') captcha: any

	constructor(
		private fb: FormBuilder, 
		private http: Http
	) {
		this.form = this.fb.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			subject: [''],
			message: ['', Validators.required],
			recaptcha: ['', Validators.required]
		})
	}

	ngOnInit() {
		// google_maps_5746e9b9ec998()
	}

	submitForm() {
		let data = this.form.value

		// let url = 'http://localhost:3000/api/email'
		let url = 'http://ajmail.herokuapp.com/api/email'

		if (this.form.valid && (data.recaptcha != null)) {
			this.http.post(url, data).subscribe(
				res => {
					console.log('res =', res)
					this.response.status = true
					this.resetForm()
				}, err => {
					console.log('err =', err)
					this.response.status = false
					this.resetForm()
				}
			)
		}
	}

	resetForm() {
		this.response.show = true
		this.captcha.reset()
		this.form.reset()
		setTimeout(() => {
			this.response.show = false
		}, 5000) 
	}

	resolvedRecaptcha(event) {
		this.form.get('recaptcha').patchValue(event)
	}

}

// declare var google

// function google_maps_5746e9b9ec998() {
	//     var latlng = new google.maps.LatLng(-33.8710, 151.2039);
	//     var draggable = true;
	//     var myOptions = {
		//         zoom: 13,
		//         center: latlng,
		//         mapTypeId: google.maps.MapTypeId.ROADMAP,
		//         styles: [{
			//             "featureType": "landscape.man_made",
			//             "elementType": "geometry",
			//             "stylers": [{
				//                 "color": "#f7f1df"
				//             }]
				//         }, {
					//             "featureType": "landscape.natural",
					//             "elementType": "geometry",
					//             "stylers": [{
						//                 "color": "#d0e3b4"
						//             }]
						//         }, {
							//             "featureType": "landscape.natural.terrain",
							//             "elementType": "geometry",
							//             "stylers": [{
								//                 "visibility": "off"
								//             }]
								//         }, {
									//             "featureType": "poi",
									//             "elementType": "labels",
									//             "stylers": [{
										//                 "visibility": "off"
										//             }]
										//         }, {
											//             "featureType": "poi.business",
											//             "elementType": "all",
											//             "stylers": [{
												//                 "visibility": "off"
												//             }]
												//         }, {
													//             "featureType": "poi.medical",
													//             "elementType": "geometry",
													//             "stylers": [{
														//                 "color": "#fbd3da"
														//             }]
														//         }, {
															//             "featureType": "poi.park",
															//             "elementType": "geometry",
															//             "stylers": [{
																//                 "color": "#bde6ab"
																//             }]
																//         }, {
																	//             "featureType": "road",
																	//             "elementType": "geometry.stroke",
																	//             "stylers": [{
																		//                 "visibility": "off"
																		//             }]
																		//         }, {
																			//             "featureType": "road",
																			//             "elementType": "labels",
																			//             "stylers": [{
																				//                 "visibility": "off"
																				//             }]
																				//         }, {
																					//             "featureType": "road.highway",
																					//             "elementType": "geometry.fill",
																					//             "stylers": [{
																						//                 "color": "#ffe15f"
																						//             }]
																						//         }, {
																							//             "featureType": "road.highway",
																							//             "elementType": "geometry.stroke",
																							//             "stylers": [{
																								//                 "color": "#efd151"
																								//             }]
																								//         }, {
																									//             "featureType": "road.arterial",
																									//             "elementType": "geometry.fill",
																									//             "stylers": [{
																										//                 "color": "#fff"
																										//             }]
																										//         }, {
																											//             "featureType": "road.local",
																											//             "elementType": "geometry.fill",
																											//             "stylers": [{
																												//                 "color": "black"
																												//             }]
																												//         }, {
																													//             "featureType": "transit.station.airport",
																													//             "elementType": "geometry.fill",
																													//             "stylers": [{
																														//                 "color": "#cfb2db"
																														//             }]
																														//         }, {
																															//             "featureType": "water",
																															//             "elementType": "geometry",
																															//             "stylers": [{
																																//                 "color": "#a2daf2"
																																//             }]
																																//         }],
																																//         draggable: draggable,
																																//         zoomControl: true,
																																//         mapTypeControl: false,
																																//         streetViewControl: false,
																																//         scrollwheel: false
																																//     };
																																//     var map = new google.maps.Map(document.getElementById("google-map-area-5746e9b9ec998"), myOptions);
																																//     var marker = new google.maps.Marker({
																																	//         position: latlng,
																																	//         icon: "images/home_seo2_pin.png",
																																	//         map: map
																																	//     });
// }