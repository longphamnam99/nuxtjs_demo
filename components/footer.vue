<script setup lang="ts">
import NavBullet from '~/assets/images/icon/nav-bullet.png';
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.footer {
    background: $background;
    color: $color;

    .info-contact {
        .title {
            font-size: 24px;
        }

        .contact_link_box {
            a {
                line-height: 30px;
            }

            .active {
                color: var(--blue);
            }

            .icon {
                font-size: 12px;
            }

            img {
                width: 10px;
                height: 10px;
            }
        }

        form {
            display: flex;
            flex-direction: column;

            input {
                border: none;
                border-bottom: 1px solid #ffffff;
                background-color: transparent;
                color: #ffffff;
                outline: none;
            }

            button {
                text-align: center;
                display: inline-block;
                padding: 10px 55px;
                background-color: $background;
                color: #ffffff;
                border-radius: 0;
                border: 1px solid #ff4646;
                -webkit-transition: all .3s;
                transition: all .3s;
                margin-top: 15px;
            }
        }
    }
}

.footer_section {
    background: $background;
    color: $color;
    .footer_license {
        border-top: 1px solid #ffffff;
    }
}
</style>

<template>
    <section class="footer">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-4 gap-10 px-20 py-10">
                <div class="w-full">
                    <div class="info-contact">
                        <h4 class="title font-medium text-white text-3">Address</h4>
                        <div class="contact_link_box flex flex-col mt-4">
                            <nuxt-link to="/" class="font-medium">
                                <fa icon="map-marker" class="flex items-center icon mr-3" /> <span>Location</span>
                            </nuxt-link>
                            <nuxt-link to="/" class="font-medium">
                                <fa icon="phone" class="flex items-center icon mr-3" /> Call +01 1234567890
                            </nuxt-link>
                            <nuxt-link to="/" class="font-medium">
                                <fa icon="envelope" class="flex items-center icon mr-3" /> demo@gmail.com
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="info-contact">
                        <h4 class="title font-medium text-white text-3">Links</h4>
                        <div class="contact_link_box flex flex-col mt-4">
                            <nuxt-link to="/" class="flex items-center font-medium" exact-active-class="active"
                                active-class="active">
                                <img :src="NavBullet" :alt="NavBullet" class="mr-3"> Home
                            </nuxt-link>
                            <nuxt-link to="/about" class="flex items-center	font-medium" exact-active-class="active"
                                active-class="active">
                                <img :src="NavBullet" :alt="NavBullet" class="mr-3"> About
                            </nuxt-link>
                            <nuxt-link to="/service" class="flex items-center font-medium" exact-active-class="active"
                                active-class="active">
                                <img :src="NavBullet" :alt="NavBullet" class="mr-3"> Services
                            </nuxt-link>
                            <nuxt-link to="/pricing" class="flex items-center font-medium" exact-active-class="active"
                                active-class="active">
                                <img :src="NavBullet" :alt="NavBullet" class="mr-3"> Pricing
                            </nuxt-link>
                            <nuxt-link to="/contact" class="flex items-center font-medium" exact-active-class="active"
                                active-class="active">
                                <img :src="NavBullet" :alt="NavBullet" class="mr-3"> Contact us
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="info-contact">
                        <h4 class="title font-medium text-white text-3">Info</h4>
                        <div class="contact_link_box flex flex-col mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex possimus nisi incidunt officia
                            delectus aliquam autem architecto earum minima ab sunt inventore corrupti, dolores doloribus est
                            sint vitae vero porro.
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="info-contact">
                        <h4 class="title font-medium text-white text-3">Subscribe</h4>
                        <form action="#" class="mt-4">
                            <input type="text" placeholder="Enter email">
                            <button type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer_section">
        <div class="container mx-auto">
            <div class="footer_license py-5">
                <p class="font-medium text-center">
                    © <span id="displayYear">2023</span> All Rights Reserved By
                    <nuxt-link to="/">Site Demo</nuxt-link>
                </p>
            </div>
        </div>
    </footer>
</template>