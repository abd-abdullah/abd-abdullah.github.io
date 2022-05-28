<script>
export default {
	props: ["projectImages"],
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div class="mb-10 sm:mb-0" v-for="projectImage in projectImages" :key="projectImage.id">
			<a :href="projectImage.img" target="_blank">
				<img :src="projectImage.img" class="cursor-pointer h-64 object-cover rounded-xl hover:shadow-xl shadow-lg w-full" :alt="projectImage.title" />
			</a>
		</div>
	</div>
</template>
