<template>
    <app-header/>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <navbar />
        <slot></slot>
    </main>
    
</template>
<script>
import {computed} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";
import AppHeader from "../Partials/AppHeader";
import Navbar from "../Partials/Navbar";
export default {
    name: "DashboardLayout",
    components: {
        AppHeader,
        Navbar
    },
    setup() {
        const user = computed(() => usePage().props.value.auth.user);
        return {
            user
        }
    }
}
</script>