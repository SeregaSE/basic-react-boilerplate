const noopAsync = () => new Promise((resolve) => {
    resolve([]);
});

export default {
    getListings: noopAsync,
};