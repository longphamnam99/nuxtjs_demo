<script lang="ts" setup>
import { usePricingStore } from '~/stores/pricing';
import { ref, watch } from 'vue';

useHead(() => {
    return {
        title: 'Our Pricing',
    };
});
const pricingStore = usePricingStore();
const packages = ref(pricingStore.getPricing);

watch(() => pricingStore.getPricing, (newValue) => {
    packages.value = newValue;
});
</script>

<template>
    <Pricing :data="packages" />
</template>

<style scoped></style>
