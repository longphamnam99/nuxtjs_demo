<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.contact {
    .title {
        font-size: 30px;
    }

    .form {
        form {
            input {
                border-radius: 5px;
                border: 1px solid rgb(201, 201, 201);
                padding: 15px;
            }

            textarea {
                @extend input;
                padding: 5px;
            }

            button {
                background: #ff4646;
                border-radius: 5px;
                padding: 15px 40px;
                color: #ffffff;
            }
        }
    }
}
</style>

<template>
    <section class="py-10">
        <div class="container mx-auto px-20">
            <div class="contact">
                <h2 class="title font-bold text-center">
                    Get In Touch
                </h2>
                <div class="form px-80 text-center mt-4">
                    <form action="">
                        <input class="w-full mb-6" type="text" name="" id="" placeholder="Your name">
                        <input class="w-full mb-6" type="text" name="" id="" placeholder="Your email">
                        <input class="w-full mb-6" type="text" name="" id="" placeholder="Your phone">
                        <textarea class="w-full mb-6" name="" id="" cols="10" rows="4" placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>