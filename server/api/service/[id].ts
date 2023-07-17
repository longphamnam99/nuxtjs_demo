export default defineEventHandler(async (event) => {
    const IconService = '/_nuxt/assets/images/icon/icon_service.png';

    const services: Array<Object> = [
        { id: 1, image: IconService, name: "Shared Hosting", desc: "Generators on the Internet tend to repeat predefined chunks as necessary" },
        { id: 2, image: IconService, name: "Dedicated Hosting", desc: "Generators on the Internet tend to repeat predefined chunks as necessary" },
        { id: 3, image: IconService, name: "Cloud Hosting", desc: "Generators on the Internet tend to repeat predefined chunks as necessary" },
        { id: 4, image: IconService, name: "VPS Hosting", desc: "Generators on the Internet tend to repeat predefined chunks as necessary" },
        { id: 5, image: IconService, name: "Wordpress Hosting", desc: "Generators on the Internet tend to repeat predefined chunks as necessary" },
        { id: 6, image: IconService, name: "Domain Name", desc: "Generators on the Internet tend to repeat predefined chunks as necessary" },
    ];

    const { id } = event.context.params;

    const data = {
        status: 200,
        message: "ok",
        data: [],
    }
    services.find(e => e.id == parseInt(id)) ? data.data.push(services.find(e => e.id == parseInt(id))) : [];
    return data;
});