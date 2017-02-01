import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Http } from '@angular/http'
import { environment } from '../../../environments/environment';

declare var google

@Component({
	selector: 'tem-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
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
		
	}

	ngAfterViewInit() {
		var terminal = {lat: 37.879034, lng: -122.304205};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 11,
			center: terminal
		});
		var marker = new google.maps.Marker({
			position: terminal,
			map: map
		});

		var infowindow = new google.maps.InfoWindow({
			content: `
				<p>
					<strong id="firstHeading" class="firstHeading">Terminal Engineering &amp; Manufacturing</strong>
				</p>
				<p>
					707 Gilman Street <br>
					Berkeley, CA 94710	
				</p>	
				<a href="https://goo.gl/maps/eGoDcWBo1no" target="_blank">
					Open in google maps
				</a>
			`
		})

		marker.addListener('click', () => {
			infowindow.open(map, marker)
		})
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
