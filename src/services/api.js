const config = {
    url: 'https://baconipsum.com/api/?type=all-meat',
};

const fetchSentences = () => new Promise((resolve, reject) => {
    fetch(config.url, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export default {
    fetchSentences,
};
