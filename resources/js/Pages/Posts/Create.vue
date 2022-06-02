<template>
    <dashboard-layout>
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <h1>Create Post</h1>
                </div>
            </div>
        </div>
    </dashboard-layout>
</template>
<script>
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import DashboardLayout from "../Layouts/DashboardLayout.vue";
export default {
    name: "CreatePost",
    components: {
        DashboardLayout
    },
    setup() {
        const user = computed(() => usePage().props.value.auth.user);
        return {
            user
        }
    }
}
</script>