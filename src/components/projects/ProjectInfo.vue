<script>
import feather from "feather-icons";

export default {
	props: ["projectInfo"],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li v-for="info in projectInfo.companyInfos" :key="info" :class="['font-general-regular', info.title == 'Demo Link' ? 'text-indigo-600 font-bold dark:text-yellow-400' : 'text-ternary-dark dark:text-ternary-light']">
						<span>{{ info.title }}: </span>
						<a :href="info.title == 'Demo Link' ? info.details : '#'" :target="info.title == 'Demo Link' ? '_blank' : false" :class="[
								info.title == 'Demo Link' || info.title == 'Phone' ? 'hover:underline cursor-pointer' : ''
							]" aria-label="Project Demo Link and Phone">{{ info.details }}</a>
					</li>
				</ul>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.technologies.title }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.technologies.techs.join(', ') }}
				</p>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
				{{ projectInfo.projectDetailsHeading }}
			</p>
			<p v-for="projectDetail in projectInfo.projectDetails" :key="projectDetail.id" class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				{{ projectDetail.details }}
			</p>
		</div>
	</div>
</template>
