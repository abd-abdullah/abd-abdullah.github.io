<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: "I am a full-stack web developer, and have been working in one of the BIG 2 companies for four years",
				},
				{
					id: 2,
					bio: "I'v four years of experienced in PHP Core, OOP, Codeigniter Framework, Laravel Framework. I have deep knowledge of different web technologies like Vue.js, jQuery, Ajax, HTML, CSS, Bootstrap, Tailwind css and MySql. During the last 4 years, I've already contributed to over a twenty projects and assisted with managing more than seven project for the clients. All the projects with description are listed in this portfolio site.",
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				<span class="block font-bold text-2xl"><strong>Md. Abdullah</strong></span>
				<span class="block"><strong>Address:</strong> House-01, Road-08, Sector-09, Uttara, Dhaka 1230</span>
				<span class="block"><strong>Contact No:</strong> +8801738-868597</span>
				<span class="block"><strong>Email:</strong> abdullah001rti@gmail.com</span>
			</p>
			<p v-for="bio in bios" :key="bio.id" class="text-justify font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
