import { defineStore } from 'pinia';
import request from "@/utils/request";

export const useServiceStore = defineStore('service', {
    state: () => ({
        service: []
    }),

    getters: {
        getService: (state) => state.service
    },

    actions: {
        setService() {
            return new Promise(async (resolve, reject) => {
                const { status, data } = await request({ url: "/service" });
                if (status == 200) {
                    this.service = data;
                    resolve(data);
                } else {
                    this.service = [];
                    reject();
                }
            });
        },
    }
});