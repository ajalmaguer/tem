export const pageData = {
	certifications: {
		pageTitle: 'Certifications',
		elements: [
			{
				type: 'offer',
				side: 'left',
				title: 'ASME Code Pressure Vessels',
				bigParagraph: 'TMC holds the ASME \"U\" Stamp Certification conforming to ASME Code Section VIII, Division I for pressure vessel construction.',
				smallParagraph: '',
				buttonText: '',
				price: '',
				priceCaption: '',
				imageUrl: 'assets/images/tem/asme.png',
				subImg: 'assets/images/tem/certs/asme.png'
			}, {
				type: 'offer',
				side: 'right',
				title: 'CSEI Pressure Vessels',
				bigParagraph: 'TMC is certified by the China Special Equipment Inspection and Research Institute (CSEI) to import pressure vessels into the People\'s Republic of China.',
				smallParagraph: '',
				buttonText: '',
				price: '',
				priceCaption: '',
				imageUrl: 'assets/images/tem/china.png',
				subImg: 'assets/images/tem/certs/china.1.png'
			}, {
				type: 'offer',
				side: 'left',
				title: 'European Pressure Equipment Directive (PED) Pressure Vessels',
				bigParagraph: 'TMC is qualified to import PED Certified Pressure Vessels into Europe. The European PED (97/23/EC) provides the European legislative framework for any equipment subject to a pressure hazard.',
				smallParagraph: '',
				buttonText: '',
				price: '',
				priceCaption: '',
				imageUrl: 'assets/images/tem/eu.png',
				subImg: ''
			}, {
				type: 'offer',
				side: 'right',
				title: 'Korean Gas Safety (KGS) / MOCIE Pressure Vessels',
				bigParagraph: 'TMC is certified by KGS / MOCIE (Korean Gas Safety Corporation / Ministry Of Commerce, Industry and Energy) to manufacture pressure vessels, heat exchangers, and related equipment for import into South Korea.',
				smallParagraph: '',
				buttonText: '',
				price: '',
				priceCaption: '',
				imageUrl: 'assets/images/tem/korea.png',
				subImg: 'assets/images/tem/certs/kgs.1.png'
			}, {
				type: 'offer',
				side: 'left',
				title: 'Taiwan Code Pressure Vessels',
				bigParagraph: 'TMC has manufactured and imported pressure vessels into Taiwan as certified by the Taiwan TBA/CBA inspectors.',
				smallParagraph: '',
				buttonText: '',
				price: '',
				priceCaption: '',
				imageUrl: 'assets/images/tem/taiwan.png',
				subImg: ''
			},
		]

	},
	company: {
		pageTitle: 'Company',
		elements: [
			{
				type: 'half-page-image',
				data: {
						backgroundImage: 'assets/images/tem/word-cloud.png',
						title: 'The Business',
						header1: '',
						content1: 'We are a small business specializing in the design, engineering, and manufacture of a variety of items in many different industries. We specialize in the manufacturing of vacuum chambers, pressure vessels, prototypes, and assorted fabrications for the food processing, pharmaceutical, environmental, and technological industries.',
						header2: '',
						content2: '',
						buttonText: '',
					}
			}, {
				type: 'subheader',
				data: 'At TMC we strive to continuously maintain and live by our five main core values.'
			}, {
				type: 'triple-panes',
				data: {
					panes: [
						{
							backgroundColor: '#004C91',
							fadeDir: 'fadeInLeft',
							icon: 'balance-scale',
							header: 'Good ethics and morals',
							bullets: [
								'Trust – we do what we say and say what we do',
								'Loyalty',
								'Pride and passion without arrogance',
								'Open-mindedness and being respectful of others’ ideas',
							],

						}, {
							backgroundColor: '#FFB100',
							fadeDir: 'fadeInUp',
							icon: 'users',
							header: 'Family atmosphere with coworkers and customers',
							bullets: [
								'Open and honest internal and external communication',
								'Laughter and fun with discretion',
							],

						}, {
							backgroundColor: '#283954',
							fadeDir: 'fadeInRight',
							icon: 'thumbs-up',
							header: '“We Do It Right” attitude',
							bullets: [
								'“Find a way” and a problem solving attitude',
								'Amazing attention to detail',
								'Focus on customer service',
								'Presentation, organization, and cleanliness – professionalism and productivity',
							],

						}, {
							backgroundColor: '#004C91',
							fadeDir: 'fadeInLeft',
							icon: 'envira',
							header: 'Communal and environmentally attentive',
							bullets: [],

						}, {
							backgroundColor: '#FFB100',
							fadeDir: 'fadeInUp',
							icon: 'line-chart',
							header: 'High yet realistic expectations and goals',
							bullets: [
								'Continuous improvement for optimizing and maximizing what we do',
								'Don’t be afraid to make a mistake or ask a question ',
							],

						}
				}
			}
		]
	}

}
