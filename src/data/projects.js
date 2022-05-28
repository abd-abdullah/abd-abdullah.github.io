// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'B2B Web & Membership Application',
		category: 'Membership Application',
		date: "January 01, 2021",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/bcs_1.jpg'),
				title: "B2B Web & Membership Application Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/bcs_2.jpg'),
				title: "B2B Web & Membership Application 2",
			},
			{
				id: 3,
				img: require('@/assets/images/bcs_3.jpg'),
				title: "B2B Web & Membership Application 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'BCS-Bangladesh Computer Samity',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://bcs.org.bd',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 5',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• This application has dynamic CMS website',
				},
				{
					id: 2,
					details: '• B2B web portal for member to member communication',
				},
				{
					id: 3,
					details: '• Dynamic form builder with payment integration',
				},
				{
					id: 4,
					details: '• SSLCOMMERZ payment gateway and bulk SMS gateway integrated',
				},
				{
					id: 5,
					details: '• Dynamic Blog system',
				},
				{
					id: 6,
					details: '• Membership management system',
				},
				{
					id: 7,
					details: '• Dynamic multi-level approval system',
				},
				{
					id: 8,
					details: '• E-Certificate generate and verify with QR code',
				},
				{
					id: 9,
					details: '• E-Nothi Management',
				},
			]
		}
	},
	{
		id: 2,
		title: 'Multi Vendor E-commerce',
		category: 'E-commerce Solutions',
		date: "March 15, 2020",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/cv_1.jpg'),
				title: "Computer village home page",
			},
			{
				id: 2,
				img: require('@/assets/images/cv_2.jpg'),
				title: "computer village 2",
			},
			{
				id: 3,
				img: require('@/assets/images/cv_3.jpg'),
				title: "computer village 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Computer Village',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://computervillage.com.bd/',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 7',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Multi-vendor e-commerce with custom CMS',
				},
				{
					id: 2,
					details: '• Cart Management',
				},
				{
					id: 3,
					details: '• Vendor Management',
				},
				{
					id: 4,
					details: '• Payment gateway & SMS gateway integration',
				},
				{
					id: 5,
					details: '• Integrated Facebook and Google API for social login',
				},
				{
					id: 6,
					details: '• API for mobile application',
				},
				{
					id: 7,
					details: '• Quiz system',
				},
				{
					id: 8,
					details: '• Blog & News Management',
				},
			]
		}
	},
	{
		id: 3,
		title: 'Car and Bike Parking Solutions',
		category: 'CodeCanyon Application',
		date: "May 21, 2022",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/dp_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/dp_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/dp_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 4,
		title: 'ICO / STO Token Sale Management',
		category: 'CodeCanyon Application',
		date: "May 21, 2022",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/tl_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/tl_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/tl_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 5,
		title: 'School Management Application',
		category: 'Educational',
		date: "May 21, 2022",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/school_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/school_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/school_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 6,
		title: 'BGMEA B2B Web Portal',
		category: 'Web Application',
		featured: 1,
		date: "May 21, 2022",
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/bgmea_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/bgmea_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/bgmea_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 7,
		title: 'DCCI Membership Application',
		category: 'Membership Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/dcci_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/dcci_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/dcci_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 8,
		title: 'Warranty & Customer Support Management',
		category: 'Web Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/wm_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/wm_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/wm_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 9,
		title: 'FICCI B2B Portal & Membership',
		category: 'Membership Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ficci_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ficci_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/ficci_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 10,
		title: 'DCCI Country of Origin Application',
		category: 'Membership Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/co_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/co_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/co_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 11,
		title: 'Maturity Management System',
		category: 'Web Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/maturity_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/maturity_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/maturity_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 12,
		title: 'Lead Tracking System',
		category: 'Web Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ls_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ls_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/ls_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 13,
		title: 'Systech Smart Solution',
		category: 'E-commerce Solutions',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ss_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ss_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/ss_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 14,
		title: 'RAIMS-Recruiting Management System',
		category: 'Web Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ilo_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ilo_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/ilo_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 16,
		title: 'BGMEA Mobile Application API',
		category: 'Membership Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/bgmeam_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/bgmeam_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/bgmeam_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 17,
		title: 'ERP Solution',
		category: 'Web Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/erp_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/erp_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/erp_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 18,
		title: 'Bus Ticket Reservation System',
		category: 'E-commerce Solutions',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/bus_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/bus_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/bus_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 19,
		title: 'Quiz System',
		category: 'Educational',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/quiz_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/quiz_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/quiz_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 20,
		title: 'COVID-19 MONITORING SYSTEM',
		category: 'Web Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/c19_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/c19_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/c19_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},
	{
		id: 21,
		title: 'E-Commerce for KAMEDA',
		category: 'E-commerce Solutions',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/kameda_1.jpg'),
				title: "Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/kameda_2.jpg'),
				title: "Homepage",
			},
			{
				id: 3,
				img: require('@/assets/images/kameda_3.jpg'),
				title: "Homepage",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://company.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'JavaScript',
					'Ajax',
					'Mysql',
					'Figma',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• ',
				},
				{
					id: 2,
					details: '• ',
				},
				{
					id: 3,
					details: '• ',
				},
				{
					id: 4,
					details: '• ',
				},
				{
					id: 5,
					details: '• ',
				},
				{
					id: 6,
					details: '• ',
				},
				{
					id: 7,
					details: '• ',
				},
			]
		}
	},

];

export default projects;
