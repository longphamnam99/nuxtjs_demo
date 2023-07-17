import { defineStore } from 'pinia';
import request from "@/utils/request";

export const usePricingStore = defineStore('pricing', {
    state: () => ({
        pricing: []
    }),

    getters: {
        getPricing: (state) => state.pricing
    },

    actions: {
        setPricing() {
            return new Promise(async (resolve, reject) => {
                const { status, data } = await request({ url: "/pricing" });
                if (status == 200) {
                    this.pricing = data;
                    resolve(data);
                } else {
                    this.pricing = [];
                    reject();
                }
            });
        },
    }
});