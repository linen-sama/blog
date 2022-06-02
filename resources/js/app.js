require('./bootstrap');
import { createApp, h } from 'vue';
import { App, plugin, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import route from "ziggy-js";
const el = document.getElementById('app');

const app = createApp({
    render: () => h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => require(`./Pages/${name}`).default
    })
});
app.config.globalProperties.$route = window.route;
app.provide('$route', window.route);
app.mixin({ methods: { route } }).use(plugin).component('InertiaHead', Head).component('InertiaLink', Link).mount(el);
InertiaProgress.init({ color: "#4B5563" });