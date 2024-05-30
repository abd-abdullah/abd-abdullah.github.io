// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Getflowtools - Booking & Appointment webflow app.',
		category: 'Webflow App',
		date: "February 01, 2024",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/webflow_app_1.png'),
				title: "Booking Form",
			},
			{
				id: 2,
				img: require('@/assets/images/webflow_app_2.png'),
				title: "Booking Appointment",
			},
			{
				id: 3,
				img: require('@/assets/images/webflow_app_3.png'),
				title: "Appointment calender",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Company',
					details: 'Zainiklab',
				},
				{
					id: 2,
					title: 'Link',
					details: 'https://webflow.com/apps/detail/getflowtools',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 5',
					'Laravel 9',
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
					details: '• Unlimited services and service providers management',
				},
				{
					id: 2,
					details: '• Supports both online and offline meetings',
				},
				{
					id: 3,
					details: '• Multiple payment gateways (PayPal, Stripe, Cash, Mollie, etc.)',
				},
				{
					id: 4,
					details: '• Automated reminders and multiple calendar integration',
				},
				{
					id: 5,
					details: '• Detailed reports and insights',
				},
				{
					id: 6,
					details: '• Service provider panel with email notifications',
				},
				{
					id: 7,
					details: '• Auto-generated invoices',
				},
				{
					id: 8,
					details: '• Customizable booking forms with custom CSS',
				},
				{
					id: 9,
					details: '• Meeting duration, timezone, and availability settings',
				},
				{
					id: 10,
					details: '• Currency settings for global operations',
				}
			]
		}
	},
	{
		id: 2,
		title: 'Zaialumni - Alumni Association Management System',
		category: 'CodeCanyon Application',
		date: "September 29, 22023",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/zaialumni_1.jpg'),
				title: "Community timeline",
			},
			{
				id: 2,
				img: require('@/assets/images/zaialumni_2.jpg'),
				title: "Alumni list",
			},
			{
				id: 3,
				img: require('@/assets/images/zaialumni_3.jpg'),
				title: "Messaging",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Company',
					details: 'Zainiklab',
				},
				{
					id: 2,
					title: 'Link',
					details: 'https://codecanyon.net/item/zaialumni-alumni-association-laravel-script/48352405',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 5',
					'Laravel 9',
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
					details: '• User-friendly system for alumni connectivity and activity management',
				},
				{
					id: 2,
					details: '• Secure system with Two-Factor Authentication for extra safety',
				},
				{
					id: 3,
					details: '• Alumni sign-up and approval through document submission',
				},
				{
					id: 4,
					details: '• Community hub for sharing updates and communication among alumni',
				},
				{
					id: 5,
					details: '• Simple event planning with automatic ticketing using QR codes and barcodes',
				},
				{
					id: 6,
					details: '• Multilingual and multi-currency support',
				},
				{
					id: 7,
					details: '• Email notifications to keep everyone informed',
				},
				{
					id: 8,
					details: '• Powerful admin dashboard for easy control',
				},
				{
					id: 9,
					details: '• Flexible membership plans',
				},
				{
					id: 10,
					details: '• Job listings posting capability',
				},
				{
					id: 11,
					details: '• One-to-one private messaging feature',
				},
				{
					id: 12,
					details: '• Transaction tracking and multiple payment options',
				}
			]
		}
	},
	{
		id: 3,
		title: 'LMSZAI - Learning Management System',
		category: 'CodeCanyon Application',
		date: "October 01, 2022",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/lmszai_1.png'),
				title: "Instructor Dashboard",
			},
			{
				id: 2,
				img: require('@/assets/images/lmszai_2.png'),
				title: "Homepage 1",
			},
			{
				id: 3,
				img: require('@/assets/images/lmszai_3.png'),
				title: "Homepage 2",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Company',
					details: 'Zainiklab',
				},
				{
					id: 3,
					title: 'Link',
					details: 'https://codecanyon.net/item/lmszai-learning-management-system/38383087',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 5',
					'Laravel 9',
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
					details: '• Web-based responsive application with online learning management system',
				},
				{
					id: 2,
					details: '• Supports multiple content types including video courses and live classes (Zoom)',
				},
				{
					id: 3,
					details: '• Admin, instructor, and student panels for comprehensive management',
				},
				{
					id: 4,
					details: '• Instructors can create, update, and sell paid/free courses',
				},
				{
					id: 5,
					details: '• Students can track progress, participate in quizzes, assignments, and discussions',
				},
				{
					id: 6,
					details: '• Integration with YouTube, Vimeo, and Amazon AWS S3 for video content',
				},
				{
					id: 7,
					details: '• Multiple payment gateways (PayPal, Stripe, Razorpay, SSLCOMMERZ)',
				},
				{
					id: 8,
					details: '• Social and email login options',
				},
				{
					id: 9,
					details: '• Built-in accounting system with transaction tracking, sales analysis, and more',
				},
				{
					id: 10,
					details: '• Multi-language support and customizable content',
				},
				{
					id: 11,
					details: '• Real-time notifications and offline access for mobile users',
				},
				{
					id: 12,
					details: '• Support for shared hosting, reducing costs for users',
				}
			]
		}
	},
	{
		id: 4,
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
					title: 'Company',
					details: 'BCS-Bangladesh Computer Samity',
				},
				{
					id: 3,
					title: 'Link',
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
				{
					id: 10,
					details: '• User Management with Role permission system',
				},
			]
		}
	},
	{
		id: 5,
		title: 'Multi Vendor E-commerce',
		category: 'E-commerce Solutions',
		date: "March 15, 2020",
		featured: 0,
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
					title: 'Client',
					details: 'Computer Village',
				},
				{
					id: 3,
					title: 'Link',
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
				{
					id: 9,
					details: '• User Management with Role permission system',
				},
			]
		}
	},
	{
		id: 6,
		title: 'Car and SolutionsBike Parking',
		category: 'CodeCanyon Application',
		date: "Feb 17, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/dp_1.jpg'),
				title: "Car and SolutionsBike Parking Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/dp_2.jpg'),
				title: "Car and SolutionsBike Parking 2",
			},
			{
				id: 3,
				img: require('@/assets/images/dp_3.jpg'),
				title: "Car and SolutionsBike Parking 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Marketplace',
					details: 'CodeCanyon',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://codecanyon.net/item/dparking-car-and-bike-parking-solutions/35950371',
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
					details: '• User Management with Role & Permission Management',
				},
				{
					id: 2,
					details: '• Parking Category Management',
				},
				{
					id: 3,
					details: '• Floor Setup',
				},
				{
					id: 4,
					details: '• Tariff Management',
				},
				{
					id: 5,
					details: '• Parking Management',
				},
				{
					id: 6,
					details: '• Reports',
				},
				{
					id: 7,
					details: '• Localization',
				},
			]
		}
	},
	{
		id: 7,
		title: 'ICO / STO Token Sale Management',
		category: 'CodeCanyon Application',
		date: "April 12, 2019",
		featured: 1,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/tl_1.jpg'),
				title: "Tokenlite Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/tl_2.jpg'),
				title: "Tokenlite 2",
			},
			{
				id: 3,
				img: require('@/assets/images/tl_3.jpg'),
				title: "Tokenlite 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Marketplace',
					details: 'CodeCanyon',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://codecanyon.net/item/tokenlite-ico-sto-token-sale-management-dashboard-ico-admin-script/23604094',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 6',
					'JavaScript',
					'Ajax',
					'Mysql'
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• User Management',
				},
				{
					id: 2,
					details: '• Two-Factor Authentication (2FA)',
				},
				{
					id: 3,
					details: '• KYC/AML system for Identify users',
				},
				{
					id: 4,
					details: '• Payment Gateway – (Offline Crypto & Bank Payment)',
				},
				{
					id: 5,
					details: '• PayPal,Stripe Online Payment Gateway.',
				},
				{
					id: 6,
					details: '• Referral Bonus Program Supported.',
				},
				{
					id: 7,
					details: '• Google reCaptcha v3',
				},
				{
					id: 8,
					details: '• Multi Language Support',
				},
			]
		}
	},
	{
		id: 8,
		title: 'School Management Application',
		category: 'Educational',
		date: "January 21, 2020",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/school_1.jpg'),
				title: "School Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/school_2.jpg'),
				title: "School 2",
			},
			{
				id: 3,
				img: require('@/assets/images/school_3.jpg'),
				title: "School 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Project',
			companyInfos: [
				{
					id: 1,
					title: 'Demo Link',
					details: 'https://systechprojects.com/demo-school',
				},
				{
					id: 2,
					title: 'Demo Credentials',
					details: '',
				},
				{
					id: 3,
					title: 'Email',
					details: 'admin@gmail.com',
				},
				{
					id: 4,
					title: 'Password',
					details: '123456',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 6',
					'JavaScript',
					'Ajax',
					'Mysql',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Dynamic web portal',
				},
				{
					id: 2,
					details: '• User Management with Role & Permission Management',
				},
				{
					id: 3,
					details: '• Teacher portal',
				},
				{
					id: 4,
					details: '• Payment Collection and due calculation',
				},
				{
					id: 5,
					details: '• SMS gateway integration',
				},
				{
					id: 6,
					details: '• Financial Reports',
				},
				{
					id: 7,
					details: '• Result Management',
				},
				{
					id: 8,
					details: '• Attendance System',
				},
			]
		}
	},
	{
		id: 9,
		title: 'BGMEA B2B Web Portal',
		category: 'Web Application',
		featured: 1,
		date: "January 01, 2021",
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/bgmea_1.jpg'),
				title: "BGMEA Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/bgmea_2.jpg'),
				title: "BGMEA 1",
			},
			{
				id: 3,
				img: require('@/assets/images/bgmea_3.jpg'),
				title: "NGMEA 2",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Company',
					details: 'BGMEA',
				},
				{
					id: 3,
					title: 'Link',
					details: 'https://www.bgmea.com.bd',
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
					'AdobeXD',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Dynamic custom CMS with Custom page design',
				},
				{
					id: 2,
					details: '• User Management',
				},
				{
					id: 3,
					details: '• Membership Data Management',
				},
				{
					id: 4,
					details: '• Notice Management',
				},
				{
					id: 5,
					details: '• Event Management',
				},
				{
					id: 6,
					details: '• Gallery Management',
				},
				{
					id: 7,
					details: '• SMS Gateway',
				},
			]
		}
	},
	{
		id: 10,
		title: 'DCCI Membership Application',
		category: 'Membership Application',
		date: "May 01, 2020",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/dcci_1.jpg'),
				title: "DCCI Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/dcci_2.jpg'),
				title: "DCCI 2",
			},
			{
				id: 3,
				img: require('@/assets/images/dcci_3.jpg'),
				title: "DCCI 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Dhaka Chamber of Commerce & Industries',
				},
				{
					id: 2,
					title: 'Demo Link',
					details: 'https://systechprojects.com/dccimember',
				},
				{
					id: 3,
					title: 'Demo Credentials',
					details: '',
				},
				{
					id: 4,
					title: 'User ID',
					details: 'admin',
				},
				{
					id: 5,
					title: 'Password',
					details: 'dcciadmin',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 3.4',
					'CodeIgniter 3',
					'JavaScript',
					'Ajax',
					'Mysql',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Membership management',
				},
				{
					id: 2,
					details: '• Circular management',
				},
				{
					id: 3,
					details: '• User management',
				},
				{
					id: 4,
					details: '• approval system',
				},
				{
					id: 5,
					details: '• SMS gateway',
				},
				{
					id: 6,
					details: '• Report generation (excel and pdf)',
				},
				{
					id: 7,
					details: '• Financial reports',
				},
				{
					id: 8,
					details: '• Certificate and cards generation',
				},
				{
					id: 9,
					details: '• QR & Bar code scanner with verification',
				},
				{
					id: 10,
					details: '• Dynamic Role & permission system',
				},
			]
		}
	},
	{
		id: 11,
		title: 'Warranty & Customer Support Management',
		category: 'Web Application',
		date: "April 21, 2021",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/wm_1.jpg'),
				title: "Warranty & Customer Support Management Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/wm_2.jpg'),
				title: "Warranty & Customer Support Management 2",
			},
			{
				id: 3,
				img: require('@/assets/images/wm_3.jpg'),
				title: "Warranty & Customer Support Management 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'City Water Purifier',
				},
				{
					id: 2,
					title: 'Demo Link',
					details: 'https://support.publicsoftbd.com',
				},
				{
					id: 3,
					title: 'Demo Credentials',
					details: '',
				},
				{
					id: 4,
					title: 'Email',
					details: 'admin@admin.com',
				},
				{
					id: 5,
					title: 'Password',
					details: 'secret',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 8',
					'Vue.js 2',
					'Mysql'
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Customer Management',
				},
				{
					id: 2,
					details: '• Sales Management',
				},
				{
					id: 3,
					details: '• Inventory Management',
				},
				{
					id: 4,
					details: '• Warranty Management',
				},
				{
					id: 5,
					details: '• Customer Support Management',
				},
				{
					id: 6,
					details: '• SMS notify ',
				},
				{
					id: 7,
					details: '• Support report',
				},
			]
		}
	},
	{
		id: 12,
		title: 'FICCI B2B Portal & Membership',
		category: 'Membership Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ficci_1.jpg'),
				title: "FICCI Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ficci_2.jpg'),
				title: "FICCI 2",
			},
			{
				id: 3,
				img: require('@/assets/images/ficci_3.jpg'),
				title: "FICCI 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Foreign Investors\' Chamber Of Commerce & Industry',
				},
				{
					id: 3,
					title: 'Link',
					details: 'https://ficci.org.bd',
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
					details: '• Powerful Custom CMS',
				},
				{
					id: 2,
					details: '• Event, Notice, Gallery Management',
				},
				{
					id: 3,
					details: '• B2B portal',
				},
				{
					id: 4,
					details: '• Membership management',
				},
				{
					id: 5,
					details: '• Country of Origin Management',
				},
				{
					id: 6,
					details: '• Approval System',
				},
				{
					id: 7,
					details: '• Certificate Generation',
				},
				{
					id: 8,
					details: '• SMS and Payment Gateway',
				},
				{
					id: 9,
					details: '• Financial Report',
				},
			]
		}
	},
	{
		id: 13,
		title: 'DCCI Country of Origin Application',
		category: 'Membership Application',
		date: "October 30, 2021",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/co_1.jpg'),
				title: "DCCI CO Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/co_2.jpg'),
				title: "DCCI CO 2",
			},
			{
				id: 3,
				img: require('@/assets/images/co_3.jpg'),
				title: "DCCI CO 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Dhaka Chamber of Commerce & Industries',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://systechprojects.com/dcciportal',
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
					'AdobeXD',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Two Factor Authentication',
				},
				{
					id: 2,
					details: '• SMS OTP',
				},
				{
					id: 3,
					details: '• Integration with BIDA via API',
				},
				{
					id: 4,
					details: '• Certificate of origin management',
				},
				{
					id: 5,
					details: '• Approval System',
				},
				{
					id: 6,
					details: '• SMS & Payment Integration',
				},
				{
					id: 7,
					details: '• Certificate Generation',
				},
				{
					id: 8,
					details: '• Bar & QR code scan with easy verification',
				},
				{
					id: 9,
					details: '• Financial Reports',
				},
				{
					id: 10,
					details: '• User Management with Role & Permission system',
				},
			]
		}
	},
	{
		id: 14,
		title: 'Client Maturity Management System',
		category: 'Web Application',
		date: "April 30, 2021",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/maturity_1.jpg'),
				title: "CMSS Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/maturity_2.jpg'),
				title: "CMSS 2",
			},
			{
				id: 3,
				img: require('@/assets/images/maturity_3.jpg'),
				title: "CMSS 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'UNIADEX Ltd (Japan)',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://cmss-uniadex.com/',
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
					'AdobeXD',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Japan based MIS application for measuring maturity',
				},
				{
					id: 2,
					details: '• Maturity Management',
				},
				{
					id: 3,
					details: '• Category Management',
				},
				{
					id: 4,
					details: '• Survey Management',
				},
				{
					id: 5,
					details: '• Target vs Achievement comparison',
				},
				{
					id: 6,
					details: '• Localization',
				},
				{
					id: 7,
					details: '• User management',
				},
				{
					id: 8,
					details: '• Role Permission Management',
				},
				{
					id: 9,
					details: '• Notification',
				},
			]
		}
	},
	{
		id: 15,
		title: 'Lead Tracking System',
		category: 'Web Application',
		date: "December 15, 2019",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ls_1.jpg'),
				title: "LTS Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ls_2.jpg'),
				title: "LTS 2",
			},
			{
				id: 3,
				img: require('@/assets/images/ls_3.jpg'),
				title: "LTS 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Systech Digital Ltd',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://systechprojects.com/leads',
				},
				{
					id: 3,
					title: 'Demo Credentials',
					details: '',
				},
				{
					id: 4,
					title: 'Email',
					details: 'admin@gmail.com',
				},
				{
					id: 5,
					title: 'Password',
					details: 'secret',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 3',
					'Laravel 5.4',
					'JavaScript',
					'Ajax',
					'Mysql',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• User management with role permission',
				},
				{
					id: 2,
					details: '• Client Management',
				},
				{
					id: 3,
					details: '• Meeting Management',
				},
				{
					id: 4,
					details: '• Lead Management',
				},
				{
					id: 5,
					details: '• Schedule Management',
				},
				{
					id: 6,
					details: '• Support Management',
				},
				{
					id: 7,
					details: '• Employee Activity Management',
				},
				{
					id: 8,
					details: '• Sales Management',
				},
				{
					id: 9,
					details: '• Tender Management',
				},
				{
					id: 10,
					details: '• Notification',
				},
				{
					id: 11,
					details: '• Reports',
				},
			]
		}
	},
	{
		id: 16,
		title: 'Systech Smart Solution',
		category: 'E-commerce Solutions',
		date: "May 21, 2021",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ss_1.jpg'),
				title: "Smart Solutions Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ss_2.jpg'),
				title: "Smart Solutions 2",
			},
			{
				id: 3,
				img: require('@/assets/images/ss_3.jpg'),
				title: "Smart Solutions 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Systech Smart Solutions',
				},
				{
					id: 3,
					title: 'Link',
					details: 'https://systechsmartsolutions.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 7',
					'JavaScript',
					'Vue.js',
					'Ajax',
					'Mysql',
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
				{
					id: 9,
					details: '• User Management with Role permission system',
				},
			]
		}
	},
	{
		id: 17,
		title: 'RAIMS-Recruiting Management System',
		category: 'Web Application',
		date: "September 21, 2020",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/ilo_1.jpg'),
				title: "RAIMS Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/ilo_2.jpg'),
				title: "RAIMS 2",
			},
			{
				id: 3,
				img: require('@/assets/images/ilo_3.jpg'),
				title: "RAIMS 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Bureau of Manpower, Employment and Training (BMET)',
				},
				{
					id: 3,
					title: 'Link',
					details: 'https://raims.bmet.gov.bd',
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
					details: '• User Management',
				},
				{
					id: 2,
					details: '• Role Permission Management',
				},
				{
					id: 3,
					details: '• Agency Management',
				},
				{
					id: 4,
					details: '• Complain API Integration',
				},
				{
					id: 5,
					details: '• Agency API develop for Complain Management System',
				},
				{
					id: 6,
					details: '• Activity Log',
				},
				{
					id: 7,
					details: '• Approval Management',
				},
				{
					id: 8,
					details: '• SMS & Email Notification',
				},
			]
		}
	},
	{
		id: 18,
		title: 'BGMEA Mobile Application API',
		category: 'Membership Application',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/bgmeam_1.jpg'),
				title: "BGMEA Mobile Application Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/bgmeam_2.jpg'),
				title: "BGMEA Mobile Application 2",
			},
			{
				id: 3,
				img: require('@/assets/images/bgmeam_3.jpg'),
				title: "BGMEA Mobile Application 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'BGMEA-Bangladesh Garment Manufacturers and Exporters Association',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://play.google.com/store/apps/details?id=com.systechdigital.bgmea&hl=en&gl=US',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Passport API',
					'Oauth',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Passport API for IOS and Android application',
				},
				{
					id: 2,
					details: '• Notification API',
				},
				{
					id: 3,
					details: '• CMS Management API',
				},
				{
					id: 4,
					details: '• Reports API',
				},
				{
					id: 5,
					details: '• User Logs API',
				},
			]
		}
	},
	{
		id: 19,
		title: 'ERP Solution',
		category: 'Web Application',
		date: "January 01, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/erp_1.jpg'),
				title: "ERP Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/erp_2.jpg'),
				title: "ERP 2",
			},
			{
				id: 3,
				img: require('@/assets/images/erp_3.jpg'),
				title: "ERP 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Annodata Ltd',
				},
				{
					id: 2,
					title: 'Link',
					details: 'https://erp.softoapp.com/',
				},
				{
					id: 3,
					title: 'Demo Credentials',
					details: '',
				},
				{
					id: 4,
					title: 'User ID',
					details: 'admin',
				},
				{
					id: 5,
					title: 'Password',
					details: 'admin@2022#',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'CodeIgniter 3',
					'Bootstrap 4',
					'JavaScript',
					'Ajax',
					'Mysql',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Inventory Management',
				},
				{
					id: 2,
					details: '• Purchase Management',
				},
				{
					id: 3,
					details: '• Sales Management',
				},
				{
					id: 4,
					details: '• Accounting Management',
				},
				{
					id: 5,
					details: '• Customer Relationship Management',
				},
				{
					id: 6,
					details: '• Manufacturing Management',
				},
				{
					id: 7,
					details: '• Logistics Management',
				},
			]
		}
	},
	{
		id: 20,
		title: 'Bus Ticket Reservation System',
		category: 'E-commerce Solutions',
		date: "January 01, 2018",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/bus_1.jpg'),
				title: "BTRS Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/bus_2.jpg'),
				title: "BTRS 2",
			},
			{
				id: 3,
				img: require('@/assets/images/bus_3.jpg'),
				title: "BTRS 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'University',
					details: 'IUBAT-International University of Business Agriculture & Technology',
				},
				{
					id: 3,
					title: 'Demo Link',
					details: 'https://bus.publicsoftbd.com',
				}
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 3',
					'PHP (OOP)',
					'JavaScript',
					'Ajax',
					'Mysql',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• User Management',
				},
				{
					id: 2,
					details: '• City Management',
				},
				{
					id: 3,
					details: '• Route Management',
				},
				{
					id: 4,
					details: '• Buses Management',
				},
				{
					id: 5,
					details: '• Ticket Management',
				},
				{
					id: 6,
					details: '• Cart Management',
				},
				{
					id: 7,
					details: '• Seat Management',
				},
			]
		}
	},
	{
		id: 21,
		title: 'Quiz System',
		category: 'Educational',
		date: "January 21, 2021",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/quiz_1.jpg'),
				title: "Quiz Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/quiz_2.jpg'),
				title: "Quiz 2",
			},
			{
				id: 3,
				img: require('@/assets/images/quiz_3.jpg'),
				title: "Quiz 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'Computer Village',
				},
				{
					id: 3,
					title: 'Link',
					details: 'https://www.computervillage.com.bd/customer/quizzes',
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
					details: '• Question Bank Management',
				},
				{
					id: 2,
					details: '• Question Set Management',
				},
				{
					id: 3,
					details: '• Random Quiz Management',
				},
				{
					id: 4,
					details: '• Leader Board',
				},
				{
					id: 5,
					details: '• Reports',
				}
			]
		}
	},
	{
		id: 22,
		title: 'COVID-19 MONITORING SYSTEM',
		category: 'Web Application',
		date: "April 15, 2020",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/c19_1.jpg'),
				title: "Covid-19 Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/c19_2.jpg'),
				title: "Covid-19 2",
			},
			{
				id: 3,
				img: require('@/assets/images/c19_3.jpg'),
				title: "Covid-19 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'BGMEA',
				},
			],
			technologies: {
				title: 'Tools & Technologies',
				techs: [
					'Bootstrap 4',
					'Laravel 7',
					'JavaScript',
					'Ajax',
					'Mysql'
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: 'This project was developed for tracking covid 19 effect in garments area. It was funded by BGMEA. By this project they track all the factories profit and losses.',
				},
				{
					id: 2,
					details: '• Order Cancellation history',
				},
				{
					id: 3,
					details: '• Employee Salary Status',
				},
				{
					id: 4,
					details: '• Loan Application to BGMEA',
				},
				{
					id: 5,
					details: '• Application Approval Process with backward tracking',
				},
			]
		}
	},
	{
		id: 23,
		title: 'E-Commerce for KAMEDA',
		category: 'E-commerce Solutions',
		date: "May 21, 2022",
		featured: 0,
		projectImages: [
			{
				id: 1,
				img: require('@/assets/images/kameda_1.jpg'),
				title: "KAMEDA Homepage",
			},
			{
				id: 2,
				img: require('@/assets/images/kameda_2.jpg'),
				title: "KAMEDA 2",
			},
			{
				id: 3,
				img: require('@/assets/images/kameda_3.jpg'),
				title: "KAMEDA 3",
			}
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Client',
					details: 'KAMEDA Group',
				},
				{
					id: 3,
					title: 'Link',
					details: 'https://kameroku.co.jp',
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
					'AdobeXD',
				],
			},
			projectDetailsHeading: 'Details & Features',
			projectDetails: [
				{
					id: 1,
					details: '• Dynamic CMS',
				},
				{
					id: 2,
					details: '• Blog Management',
				},
				{
					id: 3,
					details: '• News Management',
				},
				{
					id: 4,
					details: '• Payment Gateway',
				},
				{
					id: 5,
					details: '• Localization',
				},
				{
					id: 6,
					details: '• Cart Management',
				},
				{
					id: 7,
					details: '• Notification',
				},
			]
		}
	},

];

export default projects;
