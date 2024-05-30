<script>
export default {
	data: () => {
		return {
			skillsHeading: 'My Technical Skills',
			skills: [
			'PHP',  'Laravel', 'Livewire', 'Tailwind', 'JavaScript', 'jQuery', 'Ajax', 'Vue.js', 'MySql', 'Bootstrap', 'HTML5', 'CSS', 'SCSS', 'Git', 'cPanel'
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ skillsHeading }}
		</p>
		<div class="gap-2 grid justify-items-center grid-cols:3 sm:grid-cols-7 mt-10 sm:mt-14">
			<div v-for="skill in skills" :key="skill" class="bg-gray-100 hover:text-indigo-500 border border-ternary-light cursor-pointer dark:bg-secondary-light dark:border-ternary-dark font-bold mb-3 md:w-24 lg:w-36 w-full py-5 rounded-lg shadow-sm text-gray-500">
				{{ skill }}
			</div>
		</div>
	</div>
</template>
