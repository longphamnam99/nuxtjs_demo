export default defineEventHandler(async (event) => {
    const packages: Array<Object> = [
        { price: "49", package: "Start up", ram: "2GB RAM", disk: "20GB SSD Cloud Storage", backup: "Weekly Backups", security: "DDoS Protection", access: "Full Root Access", support: "24/7/365 Tech Support" },
        { price: "99", package: "Standard", ram: "4GB RAM", disk: "50GB SSD Cloud Storage", backup: "Weekly Backups", security: "DDoS Protection", access: "Full Root Access", support: "24/7/365 Tech Support" },
        { price: "99", package: "Standard", ram: "8GB RAM", disk: "100GB SSD Cloud Storage", backup: "Weekly Backups", security: "DDoS Protection", access: "Full Root Access", support: "24/7/365 Tech Support" },
    ];

    const data = {
        status: 200,
        message: "ok",
        data: packages,
    }
    return data;
});