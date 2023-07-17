<script lang="ts" setup>
import { useServiceStore } from '~/stores/service';
import { usePricingStore } from '~/stores/pricing';
import { ref, watch } from 'vue';

useHead(() => {
  return {
    title: 'Home',
  };
});

const serviceStore = useServiceStore();
const services = ref(serviceStore.getService);

watch(() => serviceStore.getService, (newValue) => {
  services.value = newValue;
});

const pricingStore = usePricingStore();
const packages = ref(pricingStore.getPricing);

watch(() => pricingStore.getPricing, (newValue) => {
  packages.value = newValue;
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
</style>

<template>
  <div>
    <Slideshow />
    <Service :data="services" />
    <About />
    <Pricing :data="packages" />
    <Contact />
  </div>
</template>

