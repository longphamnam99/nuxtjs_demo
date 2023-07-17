<script lang="ts" setup>
import { useServiceStore } from '~/stores/service';
import { ref, watch } from 'vue';

useHead(() => {
    return {
        title: 'Our Services',
    };
});

const serviceStore = useServiceStore();
serviceStore.setService();
const data = ref(serviceStore.getService);

watch(() => serviceStore.getService, (newValue) => {
    data.value = newValue;
});
</script>

<template>
    <Service :data="data" />
</template>

<style scoped></style>
