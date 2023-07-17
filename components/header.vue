<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useServiceStore } from '~/stores/service';
import { usePricingStore } from '~/stores/pricing';

import Logo from '~/assets/images/logo.svg';

const serviceStore = useServiceStore();
serviceStore.setService();
const data = ref(serviceStore.getService);

watch(() => serviceStore.getService, (newValue) => {
    data.value = newValue;
});

const pricingStore = usePricingStore();
pricingStore.setPricing();

const navigations: Array<Object> = [
    { name: "Home", href: "/", },
    { name: "About", href: "/about", },
    { name: "Service", href: "/service", children: true },
    { name: "Pricing", href: "/pricing", },
    { name: "Contact us", href: "/contact", },
];

const services = data;

const showForm = ref(false);

const handleShowForm = (): void => {
    showForm.value = showForm.value ? false : true;
};

const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const searchContainer = document.querySelector('.form-search-submit');

    if (searchContainer && !searchContainer.contains(target)) {
        showForm.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.navbar-header {
    background: $background;
    color: $color;

    .active {
        color: var(--blue);
    }

    .form-search-submit {
        position: relative;

        .search {
            z-index: 9;
            padding: 10px;
            background: var(--blue);
            position: absolute;
            left: -100px;
            top: 50px;

            .btn-search {
                background: $background;
                padding: 10px;
            }
        }
    }
}

.menu {
    list-style: none;
    display: flex;

    li {
        position: relative;

        .submenu {
            z-index: 999;
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            line-height: 30px;

            li {
                height: 100%;

                &:hover {
                    background: $background;
                }
            }
        }

        &:hover {
            .submenu {
                display: block;
                background: var(--blue);
                color: #ffffff;
                padding: 10px;
                width: 200px;
            }
        }
    }
}
</style>

<template>
    <header>
        <nav class="lg:px-10 py-5 navbar-header">
            <div class="flex justify-between items-center max-w-screen-xl">
                <nuxt-link class="flex items-center navbar-brand" to="/">
                    <img :src="Logo" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="text-2xl font-bold uppercase">Site Demo</span>
                </nuxt-link>
                <div class="lg:flex">
                    <div class="justify-between items-center w-auto lg:flex lg:w-auto lg:order-1 mr-10">
                        <ul class="flex flex-col text-1 font-medium uppercase lg:flex-row lg:space-x-10 lg:mt-0 menu">
                            <li v-for="(navigation, index) in navigations" :key="index">
                                <nuxt-link :to="navigation.href" class="flex items-center" exact-active-class="active"
                                    active-class="active">{{
                                        navigation.name }}
                                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6" v-if="navigation.children">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                    <ul class="submenu" v-if="navigation.children">
                                        <li v-for="(service, index) in services" :key="index">
                                            <nuxt-link :to="/service/ + service.id">{{ service.name }}</nuxt-link>
                                        </li>
                                    </ul>
                                </nuxt-link>

                            </li>
                        </ul>
                    </div>
                    <div class="quote_btn-container text-1 font-medium uppercase lg:flex lg:space-x-5 lg:order-2">
                        <form class="form-search-submit">
                            <button class="btn" type="button" @click="handleShowForm">
                                <fa icon="search" />
                            </button>
                            <div class="search flex" v-if="showForm">
                                <input type="text" placeholder="Enter keyword" />
                                <button class="btn btn-search" type="button">
                                    <fa icon="search" />
                                </button>
                            </div>
                        </form>
                        <NuxtLink to="/">
                            <fa icon="phone" />
                            <span class="ml-1">
                                Call : +0123456
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>