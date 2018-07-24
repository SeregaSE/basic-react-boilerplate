const config = {
    url: 'https://api.coinmarketcap.com',
    version: 'v2',
};

class CoinMarketCap {
    constructor(url, version) {
        this.url = `${url}/${version}`;
    }

    getListings() {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/listings/`)
                .then(response => response.json())
                .then(listing => resolve(listing))
                .catch(error => reject(error));
        });
    }
}

const CoinMarketCapService = new CoinMarketCap(config.url, config.version);

export default CoinMarketCapService;
