<script setup lang="ts">
import request from "@/utils/request";
import { ref, watch } from 'vue';

useHead(() => {
    return {
        title: 'Service detail',
    };
});

const route = useRoute();
const id = route.params.id;

let dataDetail = ref([]);

watch(() => id, (to, from) => {
    if (to != from) {
        request({ url: "/service/" + id }).then(response => {
            const {status, data} = response;
            if (status == 200) {
                if (data) {
                    dataDetail.value = data;
                }
            }
        })
    }
}, { immediate: true });
</script>

<template>
    <Service :data="dataDetail" />
</template>