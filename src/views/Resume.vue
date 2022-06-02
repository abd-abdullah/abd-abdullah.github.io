<script>
import feather from "feather-icons";
export default {
	data: () => {
		return {
			skills: [
				"PHP",
				"JavaScript",
				"Laravel",
				"jQuery",
				"Ajax",
				"Vue.js",
				"MySql",
				"Bootstrap",
				"Tailwind",
				"HTML5",
				"CSS",
				"SCSS",
				"Git",
				"cPanel",
			],
		};
	},
	metaInfo() {
		return {
			title: "Resume",
		};
	},

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto">
		<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div class="gap-5 grid grid-cols-4">
				<div class="">
					<div class="mb-5 shadow-md border rounded-md">
						<div class="p-0">
							<img class="w-full" src="@/assets/images/profile.jpg" />
						</div>
						<div class="px-5">
							<div class="items-center justify-center mt-2 text-center">
								<h1 class="text-2xl text-gray-800 font-bold">
									Md. Abdullah
								</h1>
								<div class="md:text-lg text-gray-600">Software Engineer</div>
							</div>
							<div class="mt-5 mb-2 text-gray-600 flex">
								<div class="mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								abdullah001rti@gmail.com
							</div>
							<div class="mb-2 text-gray-600 flex">
								<div class="mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
								</div>
								+8801738868597
							</div>
							<div class="text-gray-600 flex">
								<div class="mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								Uttara, Dhaka, Bangladesh
							</div>
							<div class="flex gap-2 justify-center">
								<a href="https://github.com/abd-abdullah" target="_blank" title="Github" class="my-5 text-blue-500 text-gray-600 flex">
									<div class="mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 448 512">
											<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
											<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
										</svg>
									</div>
								</a>
								<a href="https://www.linkedin.com/in/abd1rti" target="_blank" title="LinkedIn" class="my-5 text-blue-500 text-gray-600 flex">
									<div class="mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 448 512">
											<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
											<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
										</svg>
									</div>
								</a>

								<a href="https://www.facebook.com/abd1rti" target="_blank" title="Facebook" class="my-5 text-blue-500 text-gray-600 flex">
									<div class="mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 448 512">
											<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
											<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="p-5 mb-5 shadow-md border rounded-md">
						<div class="">
							<h1 class="mb-4 text-3xl text-gray-700 font-bold">Projects</h1>
							<div class="flex justify-center">
								<router-link :to="{ name: 'Projects'}" class="font-general-medium flex items-center px-4 py-2 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-md sm:text-md duration-300" aria-label="All Projects">
									<button>All Projects</button>
								</router-link>
							</div>
						</div>
					</div>
					<div class="mb-5 p-5 shadow-md border rounded-md">
						<div class="">
							<h1 class="mb-4 text-3xl text-gray-700 font-bold">Skills</h1>
							<ul>
								<li class="mb-6 flex flex-wrap">
									<span v-for="skill in skills" :key="skill" class="mr-2 my-1 rounded-full border px-2 text-sm py-1 font-medium bg-gray-200">
										{{ skill }}
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="mb-5 p-5 shadow-md border rounded-md">
						<div class="text-left">
							<h1 class="mb-4 text-3xl text-gray-700 font-bold">Soft Skills</h1>
							<ul class="list-disc ml-4">
								<li>Patience</li>
								<li>Fast Learner</li>
								<li>Problem Solver</li>
								<li>Time Management</li>
								<li>Teamwork</li>
							</ul>
						</div>
					</div>

				</div>
				<div class="shadow-md rounded-md border col-span-3 text-left p-8 w-full">
					<div class="mb-6">
						<h1 class="mb-4 text-4xl text-gray-700 font-bold">About me</h1>
						<p class="text-lg text-justify">
							I am a full-stack web developer, and have been working in one of the BIG 2 companies for four years. I'v four years of experienced in PHP Core, OOP, Codeigniter Framework, Laravel Framework. I have deep knowledge of different web technologies like Vue.js, jQuery, Ajax, HTML, CSS, Bootstrap, Tailwind css and MySql. During the last 4 years, I've already contributed to over a twenty projects and assisted with managing more than seven project for the clients. All the projects with description are listed in this portfolio site.
						</p>
					</div>
					<div class="">
						<h1 class="mb-4 text-4xl text-gray-700 font-bold">Experience</h1>
						<ul>
							<li class="mb-4">
								<h2 class="font-medium inline-flex mr-2 text-2xl text-gray-800">
									Software Engineer
								</h2>
								<small class="text-sm text-gray-600">(April 2020 - Present)</small>

								<div class="mt-1">
									<div>
										<div class="font-semibold text-base text-gray-800">
											Systech Digital Limited, <span class="italic text-sm">House-01, Road-16, Sector-07, Uttara, Dhaka</span>
										</div>
									</div>
									<div class="mx-4">
										<ul class="list-disc">
											<li>Used Passport and sanctum to develop API for BIDA OSS microservice.</li>
											<li>Develop and deploy CodeCanyon application</li>
											<li>Speed up 60% to analyze the problem of the Membership application.</li>
											<li>Enhanced E-commerce performance by optimizing the query</li>
											<li>Integrate Bulk SMS in several project</li>
											<li>Project resource planning and estimating timeline</li>
											<li>Server maintains VPS Server, HostGator & cPanel installation</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="mb-4">
								<h2 class="font-medium inline-flex mr-2 text-2xl text-gray-800">
									Software Engineer
								</h2>
								<small class="text-sm text-gray-600">(April 2019 - April-2020)</small>

								<div class="mt-1">
									<div>
										<div class="font-semibold text-base text-gray-800">
											Systech Digital Limited, <span class="italic text-sm">House-01, Road-16, Sector-07, Uttara, Dhaka</span>
										</div>
									</div>
									<div class="mx-4">
										<ul class="list-disc">
											<li>Analysis software requirement specifications</li>
											<li>Developed Membership application using CodeIgniter 3 and Laravel 7</li>
											<li>Design & Develop stakeholder applications</li>
											<li>Perform tasks assigned by the project manager</li>
											<li>Create technical documentation for reference and reporting</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="mb-4">
								<h2 class="font-medium inline-flex mr-2 text-2xl text-gray-800">
									Full Stack Laravel Developer
								</h2>
								<small class="text-sm text-gray-600">(Dec 2018 - April 2019)</small>

								<div class="mt-1">
									<div>
										<div class="font-semibold text-base text-gray-800">
											Softnio, <span class="italic text-sm">House-165, Lane No 3, Mohakhali DOHS, Dhaka</span>
										</div>
									</div>
									<div class="mx-4">
										<ul class="list-disc">
											<li>Analysis software requirement specifications</li>
											<li>Develop ICO (Token Sale) application using Laravel 5.7</li>
											<li>Developed CodeCanyon application</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="">
						<h1 class="mb-4 text-4xl text-gray-700 font-bold">Education Qualification</h1>
						<ul>
							<li class="mb-4">
								<h2 class="font-medium inline-flex mr-2 text-2xl text-gray-800">
									Bachelor of Computer Science and Engineering
								</h2>

								<div class="mt-1">
									<div>
										<div class="font-semibold text-base text-gray-800">
											IUBAT- International University of Business Agriculture and Technology
										</div>
									</div>
									<div class="">
										<ul class="">
											<li><strong>Major courses:</strong> Software Engineering, Programming C, C++, JAVA, Programming Structure, Database Management System</li>
											<li><strong>Passing Year:</strong> 2018</li>
											<li><strong>CGPA:</strong> 3.87/4.00</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="mb-4">
								<h2 class="font-medium inline-flex mr-2 text-2xl text-gray-800">
									Higher Secondary School Certificate (HSC)
								</h2>

								<div class="mt-1">
									<div>
										<div class="font-semibold text-base text-gray-800">
											Government Sundarban Adarsha College, Khulna
										</div>
									</div>
									<div class="">
										<ul class="">
											<li><strong>Group/Subject:</strong> Science</li>
											<li><strong>Passing Year:</strong> 2013</li>
											<li><strong>GPA:</strong> 4.70/5.00</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="mb-4">
								<h2 class="font-medium inline-flex mr-2 text-2xl text-gray-800">
									Secondary School Certificate (SSC)
								</h2>

								<div class="mt-1">
									<div>
										<div class="font-semibold text-base text-gray-800">
											Nakipur HC Pilot Model High School, Shyamnagar, Satkhira
										</div>
									</div>
									<div class="">
										<ul class="">
											<li><strong>Group/Subject:</strong> Science</li>
											<li><strong>Passing Year:</strong> 2011</li>
											<li><strong>GPA:</strong> 4.69/5.00</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
