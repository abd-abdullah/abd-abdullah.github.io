<script>
import Button from "../reusable/Button.vue";
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification";

export default {
	components: { Button },
	data: () => {
		return {
			form: {
				name: "",
				email: "",
			},
		};
	},
	methods: {
		sendEmail() {
			//to sender
			const toast = useToast();
			let loader = this.$loading.show({
				// Optional parameters
				loader: "dots",
				color: "#6366f1",
			});

			emailjs
				.sendForm(
					"service_d0rbjon",
					"template_3utf8xw",
					this.$refs.form,
					"d7ILlehyR7RPlXcUs"
				)
				.then(
					() => {
						loader.hide();
						this.$refs.form.reset();
						toast.success(
							"Your query has been submitted successfully",
							{
								timeout: 2000,
							}
						);
					},
					() => {
						loader.hide();
						this.$refs.form.reset();
						toast.error("Something went wrong!", {
							timeout: 2000,
						});
					}
				);
		},
	},
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Contact Form
			</p>
			<form ref="form" @submit.prevent="sendEmail" class="font-general-regular space-y-7">
				<div>
					<label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="from_name">Full Name</label>
					<input class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="from_name" name="from_name" type="text" required="" v-model="form.name" placeholder="Your Name" aria-label="Name" />
				</div>
				<div>
					<label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="from_email">Email</label>
					<input class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="from_email" v-model="form.email" name="from_email" type="email" required="" placeholder="Your Email" aria-label="Email" />
				</div>
				<div>
					<label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="subject">Subject</label>
					<input class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="subject" name="subject" type="text" required="" placeholder="Subject" aria-label="Subject" />
				</div>

				<div>
					<label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="message">Message</label>
					<textarea class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="message" name="message" cols="14" rows="6" aria-label="Message"></textarea>
				</div>

				<div>
					<Button title="Send Message" class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500" type="submit" aria-label="Send Message" />
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
