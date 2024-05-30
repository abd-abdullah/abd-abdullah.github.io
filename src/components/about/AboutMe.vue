<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: "Hello! I am Md. Abdullah, a seasoned Senior Software Engineer with over six years of experience in developing and optimizing web applications. My expertise lies in PHP, JavaScript, and various frameworks such as Laravel and CodeIgniter, with a strong focus on performance enhancement and client satisfaction.",
				},
				{
					id: 2,
					bio: "Throughout my career, I have successfully led multiple projects, mentored junior developers, and managed VPS servers to ensure seamless deployments. My journey began as a Full Stack Laravel Developer at Softnio, where I developed an ICO (Token Sale) application and created several applications for Codecanyon. Later, I honed my skills at Systech Digital Limited, contributing to projects like the BIDA OSS microservice and enhancing membership and e-commerce platforms.",
				},
        {
					id: 3,
					bio: "Currently, at Zainiklab, I have played a pivotal role in improving the performance of a Learning Management System and developing the Zaialumni application for Codecanyon. I am committed to delivering high-quality software solutions and continuously improving my technical skills.",
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
				<span class="block"><strong>Address:</strong> House-184/ka, Road-01, Bagmara, Khulna 9000</span>
				<span class="block"><strong>Contact No:</strong> +8801738-868597</span>
				<span class="block"><strong>Email:</strong> abdullah001rti@gmail.com</span>
			</p>
			<p v-for="bio in bios" :key="bio.id" class="text-justify font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
