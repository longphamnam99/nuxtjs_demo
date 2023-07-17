<script setup lang="ts">

defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
.service {
    .title {
        font-size: 30px;
    }

    .box {
        .img-box {
            width: 75px;
            height: 75px;
            border-radius: 100%;
            background: var(--blue);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-transition: all .2s;
            transition: all .2s;
            padding: 10px;

            img {
                width: 100%;
                max-width: 45px;
                max-height: 45px;
                vertical-align: middle;
                border-style: none;
            }
        }

        .detail-box {
            .detail-title {
                font-size: 18px;
            }
        }
    }
}
</style>

<template>
    <section class="py-10">
        <div class="container mx-auto px-20">
            <div class="service">
                <h2 class="title font-bold text-center">
                    Our Services
                </h2>
                <div class="grid md:grid-cols-3 gap-10 py-5">
                    <div class="box flex flex-col items-center rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                        v-for="(service, index) in data" :key="index">
                        <div class="img-box mb-4">
                            <img :src="service.image" :alt="service.image">
                        </div>
                        <div class="detail-box mb-4 text-base text-center">
                            <h4 class="detail-title font-bold text-medium mb-4">{{ service.name }}</h4>
                            <p class="text-gray-600">{{ service.desc }}</p>
                        </div>
                        <div class="info-box">
                            <nuxt-link :to="'/service/' + service.id">Read more</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>