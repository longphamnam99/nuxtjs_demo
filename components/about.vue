<script lang="ts" setup>
import BannerAbout from "@/assets/images/about/about-img.png";
</script>

<style scoped lang="scss">
.about {
    article {
        .title {
            font-size: 30px;
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
}
</style>

<template>
    <section class="py-10">
        <div class="container mx-auto px-20">
            <div class="about">
                <div class="grid md:grid-cols-2 gap-10 py-5">
                    <article>
                        <div class="title mb-4">
                            <h2 class="font-bold">About us</h2>
                        </div>
                        <div class="desc text-gray-500 font-medium mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam nam ex labore
                            officia
                            corrupti, rem quasi, consequatur saepe nostrum nisi dolore expedita impedit modi culpa?
                            Consectetur
                            deserunt tempore suscipit esse labore sequi at repudiandae distinctio optio, eius inventore
                            harum.
                        </div>
                        <div class="more-info">
                            <nuxt-link to="/about">Read more</nuxt-link>
                        </div>
                    </article>
                    <aside>
                        <img :src="BannerAbout" :alt="BannerAbout">
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>