<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";
import projects from "../data/projects";

export default {
	name: "Projects",
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			project: {},
			singleProjectHeader: {
				singleProjectTitle: "",
				singleProjectDate: "",
				singleProjectTag: "",
			},
			projectImages: [
				{
					id: 1,
					title: "",
					img: "",
				},
			],
			projectInfo: {
				clientHeading: "",
				companyInfos: [],
				technologies: {
					title: "",
					techs: [],
				},
				projectDetailsHeading: "",
				projectDetails: [],
			},

			relatedProject: {
				relatedProjectsHeading: "",
				relatedProjects: [],
			},
		};
	},
	mounted() {
		feather.replace();
		this.getData();
	},
	updated() {
		feather.replace();
	},
	methods: {
		getData() {
			this.project = projects.find((x) => x.id == this.$route.params.id);
			this.singleProjectHeader = {
				singleProjectTitle: this.project.title,
				singleProjectDate: this.project.date,
				singleProjectCategory: this.project.category,
			};
			this.projectImages = this.project.projectImages;
			this.projectInfo = this.project.projectInfo;
			this.relatedProject.relatedProjectsHeading = "Related Projects";
			this.relatedProject.relatedProjects = this.filterRelatedProject();
		},

		filterRelatedProject() {
			return projects
				.filter((item) => {
					let category =
						item.category.charAt(0).toUpperCase() +
						item.category.slice(1);
					return (
						category.includes(this.project.category) &&
						item.id != this.project.id
					);
				})
				.slice(0, 3);
		},
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
