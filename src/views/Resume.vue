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
		<div class="block sm:flex sm:gap-10 mt-00 sm:mt-20">
			<!-- md:grid-row-5 md:grid-cols-4 grid-cols-1 grid-row-1 grid-flow-col -->
			<div class="gap-5 grid grid-col-1 grid-row-1 lg:grid-row-5 lg:grid-cols-4 grid-row-1 ">
				<div class="order-1">
					<div class="mb-5 shadow-md border rounded-md">
						<div class="flex flex-wrap justify-center mt-5">
							<div class="w-64 px-4">
								<img class="align-middle border-4 h-auto max-w-full p-1 rounded-full shadow-lg" src="@/assets/images/profile.jpg" />
							</div>
						</div>
						<div class="px-5">
							<div class="items-center justify-center mt-2 text-center">
								<h1 class="text-2xl text-gray-800 dark:text-ternary-light font-bold">
									Md. Abdullah
								</h1>
								<div class="mlgtext-lg dark:text-gray-400 text-gray-600">Software Engineer</div>
							</div>
							<div class="mt-5 mb-2 text-gray-600 dark:text-gray-400 flex">
								<div class="mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								abdullah001rti@gmail.com
							</div>
							<div class="mb-2 text-gray-600 dark:text-gray-400 flex">
								<div class="mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
								</div>
								+8801738868597
							</div>
							<div class="text-gray-600 dark:text-gray-400 flex">
								<div class="mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								Nirala, Khulna, Bangladesh
							</div>
							<div class="flex gap-2 justify-center">
								<a href="https://github.com/abd-abdullah" target="_blank" title="Github" class="my-5 text-blue-500 text-gray-600 flex">
									<div class="mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:bg-ternary-light" viewBox="0 0 448 512">
											<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
											<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
										</svg>
									</div>
								</a>
								<a href="https://www.linkedin.com/in/abd1rti" target="_blank" title="LinkedIn" class="my-5 text-blue-500 text-gray-600 flex">
									<div class="mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:bg-ternary-light" viewBox="0 0 448 512">
											<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
											<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
										</svg>
									</div>
								</a>

								<a href="https://www.facebook.com/abd1rti" target="_blank" title="Facebook" class="my-5 text-blue-500 text-gray-600 flex">
									<div class="mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:bg-ternary-light" viewBox="0 0 448 512">
											<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
											<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="order-4">
					<div class="p-5 mb-5 shadow-md border rounded-md">
						<div class="">
							<h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">Projects</h1>
							<div class="flex justify-center">
								<router-link :to="{ name: 'Projects'}" class="font-general-medium flex items-center px-4 py-2 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-md sm:text-md duration-300" aria-label="All Projects">
									<button>All Projects</button>
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="order-3">
					<div class="mb-5 p-5 shadow-md border rounded-md">
						<div class="">
							<h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">Skills</h1>
							<ul>
								<li class="mb-6 flex flex-wrap">
									<span v-for="skill in skills" :key="skill" class="mr-2 my-1 rounded-full border px-2 text-sm py-1 font-medium bg-gray-200">
										{{ skill }}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="order-6">
					<div class="mb-5 p-5 shadow-md border rounded-md">
						<div class="text-left">
							<h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">Links</h1>
							<ul class="">
								<li class="pb-1">
									<div class="flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
										</svg>
										<a href="https://dev.publicsoftbd.com" class="text-blue-700" target="_blank">Website</a>
									</div>
								</li>
								<li class="pb-1">
									<div class="flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 448 512">
											<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
										</svg>
										<a href="https://github.com/abd-abdullah" class="text-blue-700" target="_blank">GitHub</a>
									</div>
								</li>
								<li class="pb-1">
									<div class="flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 448 512">
											<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
										</svg>
										<a href="https://www.linkedin.com/in/abd1rti" class="text-blue-700" target="_blank">LinkedIn</a>
									</div>
								</li>
								<li class="pb-1">
									<div class="flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 448 512">
											<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
										</svg>
										<a href="https://www.linkedin.com/in/abd1rti" class="text-blue-700" target="_blank">Facebook</a>
									</div>
								</li>
								<li class="pb-1">
									<div class="flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 512 512">
											<path d="M512 216.3c0-6.125-2.344-12.25-7.031-16.93L482.3 176.8c-4.688-4.686-10.84-7.028-16.1-7.028s-12.31 2.343-16.1 7.028l-5.625 5.625L329.6 69.28l5.625-5.625c4.687-4.688 7.03-10.84 7.03-16.1s-2.343-12.31-7.03-16.1l-22.62-22.62C307.9 2.344 301.8 0 295.7 0s-12.15 2.344-16.84 7.031L154.2 131.5C149.6 136.2 147.2 142.3 147.2 148.5s2.344 12.25 7.031 16.94l22.62 22.62c4.688 4.688 10.84 7.031 16.1 7.031c6.156 0 12.31-2.344 16.1-7.031l5.625-5.625l113.1 113.1l-5.625 5.621c-4.688 4.688-7.031 10.84-7.031 16.1s2.344 12.31 7.031 16.1l22.62 22.62c4.688 4.688 10.81 7.031 16.94 7.031s12.25-2.344 16.94-7.031l124.5-124.6C509.7 228.5 512 222.5 512 216.3zM227.8 238.1L169.4 297.4C163.1 291.1 154.9 288 146.7 288S130.4 291.1 124.1 297.4l-114.7 114.7c-6.25 6.248-9.375 14.43-9.375 22.62s3.125 16.37 9.375 22.62l45.25 45.25C60.87 508.9 69.06 512 77.25 512s16.37-3.125 22.62-9.375l114.7-114.7c6.25-6.25 9.376-14.44 9.376-22.62c0-8.185-3.125-16.37-9.374-22.62l58.43-58.43L227.8 238.1z" />
										</svg>
										<a href="https://www.beecrowd.com.br/judge/en/profile/53922" class="text-blue-700" target="_blank">URI Online Judge</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="order-5">
					<div class="mb-5 p-5 shadow-md border rounded-md">
						<div class="text-left">
							<h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">Soft Skills</h1>
							<ul class="list-disc ml-4 dark:text-gray-400">
								<li>Patience</li>
								<li>Fast Learner</li>
								<li>Problem Solver</li>
								<li>Time Management</li>
								<li>Teamwork</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="order-2 shadow-md rounded-md lg:col-span-3 col-span-1 row-span-1 lg:row-span-5 border text-left p-8 w-full">
					<div class="mb-6">
						<h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">About me</h1>
						<p class="text-gray-700 dark:text-gray-300 text-justify">
							I am a full-stack web developer, and have been working in one of the BIG 2 companies for four years. I'v four years of experienced in PHP Core, OOP, Codeigniter Framework, Laravel Framework. I have deep knowledge of different web technologies like Vue.js, jQuery, Ajax, HTML, CSS, Bootstrap, Tailwind css and MySql. During the last 4 years, I've already contributed to over a twenty projects and assisted with managing more than seven project for the clients. All the projects with description are listed in this portfolio site.
						</p>
					</div>
					<div class="mb-10">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-7 inline mb-3 w-7 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<h1 class="mb-4 inline text-2xl text-gray-700 dark:text-ternary-light font-bold"> Experience</h1>
						</div>
						<div class="ml-3">
							<ul class="relative border-l border-gray-200">
								<li class="mb-6 ml-4">
									<div class="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white"></div>
									<time class="mb-1 text-sm font-normal leading-none text-indigo-600 block">October 2022 - Present</time>
									<h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300">
										Software Engineer
									</h2>

									<div class="mt-0">
										<div>
											<div class="font-semibold text-base">
												<a href="https://systechdigital.com" class="text-blue-800" target="_blank"> Zainik Lab, </a> <span class="italic text-sm dark:text-gray-400">House-18, Road-01, Nirala, Khulna</span>
											</div>
										</div>
										<div class="ml-4 text-gray-700 dark:text-gray-300 mt-3">
											<ul class="list-disc">
												<li>Developing Learning Management System for CodeCanyon</li>
												<li>Project resource planning and estimating timeline</li>
												<li>Server maintaining VPS Server & cPanel installation</li>
											</ul>
										</div>
									</div>
								</li>
								<li class="mb-6 ml-4">
									<div class="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white"></div>
									<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">April 2020 - September 2022</time>
									<h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300">
										Software Engineer
									</h2>

									<div class="mt-0">
										<div>
											<div class="font-semibold text-base">
												<a href="https://systechdigital.com" class="text-blue-800" target="_blank"> Systech Digital Limited, </a> <span class="italic text-sm dark:text-gray-400">House-01, Road-16, Sector-07, Uttara, Dhaka</span>
											</div>
										</div>
										<div class="ml-4 text-gray-700 dark:text-gray-300 mt-3">
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
								<li class="mb-6 ml-4">
									<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
									<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">April 2019 - April-2020</time>
									<h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300">
										Junior Software Engineer
									</h2>
									<div class="mt-0">
										<div>
											<div class="font-semibold text-base">
												<a href="https://systechdigital.com" class="text-blue-800" target="_blank"> Systech Digital Limited, </a> <span class="italic text-sm dark:text-gray-400">House-01, Road-16, Sector-07, Uttara, Dhaka</span>
											</div>
										</div>
										<div class="ml-4 text-gray-700 dark:text-gray-400 mt-3">
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
								<li class="mb-6 ml-4">
									<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
									<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">Dec 2018 - April 2019</time>
									<h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300">
										Full Stack Laravel Developer
									</h2>
									<div class="mt-0">
										<div>
											<div class="font-semibold text-base">
												<a href="https://softnio.com" class="text-blue-800" target="_blank"> Softnio, </a> <span class="italic text-sm dark:text-gray-400">House-165, Lane No 3, Mohakhali DOHS, Dhaka</span>
											</div>
										</div>
										<div class="ml-4 text-gray-700 dark:text-gray-400 mt-3">
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
					</div>

					<div class="">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-7 inline mb-3 w-7 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path d="M12 14l9-5-9-5-9 5 9 5z" />
								<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
							</svg>
							<h1 class="mb-4 inline text-2xl text-gray-700 dark:text-ternary-light font-bold"> Education Qualification</h1>
						</div>
						<div class="ml-3">
							<ul class="relative border-l border-gray-200">
								<li class="mb-6 ml-4">
									<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
									<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">2015 - 2018</time>
									<h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300">
										Bachelor of Computer Science and Engineering
									</h2>

									<div class="mt-0">
										<div>
											<div class="font-semibold text-base text-gray-700 dark:text-gray-400">
												IUBAT- International University of Business Agriculture and Technology
											</div>
										</div>
										<div class="text-gray-700 dark:text-gray-400">
											<ul class="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400 text-sm">
												<li><strong>Major courses:</strong> Software Engineering, Programming C, C++, JAVA, Programming Structure, Database Management System</li>
												<li><strong>Passing Year:</strong> 2018</li>
												<li><strong>CGPA:</strong> 3.87/4.00</li>
											</ul>
										</div>
									</div>
								</li>
								<li class="mb-6 ml-4">
									<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
									<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">2011 - 2013</time>
									<h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300">
										Higher Secondary School Certificate (HSC)
									</h2>

									<div class="mt-0">
										<div>
											<div class="font-semibold text-base text-gray-700 dark:text-gray-400">
												Government Sundarban Adarsha College, Khulna
											</div>
										</div>
										<div class="text-gray-700 dark:text-gray-400">
											<ul class="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400 text-sm">
												<li><strong>Group/Subject:</strong> Science</li>
												<li><strong>Passing Year:</strong> 2013</li>
												<li><strong>GPA:</strong> 4.70/5.00</li>
											</ul>
										</div>
									</div>
								</li>
								<li class="mb-6 ml-4">
									<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
									<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">2010 - 2011</time>
									<h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300">
										Secondary School Certificate (SSC)
									</h2>

									<div class="mt-0">
										<div>
											<div class="font-semibold text-base text-gray-700 dark:text-gray-400">
												Nakipur HC Pilot Model High School, Shyamnagar, Satkhira
											</div>
										</div>
										<div class="text-gray-700 dark:text-gray-400">
											<ul class="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400 text-sm">
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
	</div>
</template>
