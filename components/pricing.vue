<script setup lang="ts">

defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
.pricing {
    .title {
        font-size: 30px;
    }

    .box {
        &:hover {
            .box-side {
                color: #ffffff !important;
                background: #ff4646;
                transition: 0.3s;
            }


            p,
            .name {
                color: #ffffff !important;
            }

            .more-info {
                a {
                    background: #ff4646;
                    transition: 0.3s;
                }
            }
        }

        .price-box {
            font-size: 24px;

            span {
                font-size: 40px;
            }
        }

        .detail-box {
            line-height: 30px;

            .name {
                font-size: 23px;
                color: var(--blue);
            }
        }
    }

    .more-info {
        a {
            padding: 10px 30px;
            background: var(--blue);
            color: #ffffff;
            border-radius: 8px;
            width: auto;
            display: inline-block;
        }
    }
}
</style>

<template>
    <section class="py-10">
        <div class="container mx-auto px-20">
            <div class="pricing">
                <h2 class="title font-bold text-center">
                    Our Pricing
                </h2>
                <div class="grid md:grid-cols-3 gap-10 py-5">
                    <div v-for="(item, index) in data" :key="index">
                        <div class="box">
                            <div
                                class="box-side mb-4 flex flex-col items-center rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div class="price-box mb-4">
                                    <h2>$ <span class="font-bold">{{ item.price }}</span></h2>
                                </div>
                                <div class="detail-box mb-4 text-base text-center">
                                    <p class="uppercase font-bold mb-2 name">{{ item.package }}</p>
                                    <p class="text-gray-500">{{ item.ram }}</p>
                                    <p class="text-gray-500">{{ item.disk }}</p>
                                    <p class="text-gray-500">{{ item.backup }}</p>
                                    <p class="text-gray-500">{{ item.security }}</p>
                                    <p class="text-gray-500">{{ item.access }}</p>
                                    <p class="text-gray-500">{{ item.support }}</p>
                                </div>
                            </div>
                            <div class="more-info text-center">
                                <nuxt-link to="/pricing">See detail</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>