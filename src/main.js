import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { createMetaManager, defaultConfig, plugin as metaPlugin } from 'vue-meta'
import VueAnalytics from 'vue-analytics';

const feather = require('feather-icons');
feather.replace();
const metaManager = createMetaManager(false, {
	...defaultConfig,
	meta: { tag: 'meta', nameless: true },
});

createApp(App)
	.use(router)
	.use(BackToTop)
	.use(Toast)
	.use(VueLoading)
	.use(metaManager)
	.use(metaPlugin)
	.use(VueAnalytics, {
		id: '319570402'
	})
	.mount('#app');

const appTheme = localStorage.getItem('theme');


// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
