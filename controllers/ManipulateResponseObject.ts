interface CoinDataAdpterInterface {
  getObject(): string;
}

class APiTypeOne {
  getBooks() {
    const books = [
      {title: 'Book 1', author: 'Author 1'},
      {title: 'Book 2', author: 'Author 2'},
      {title: 'Book 3', author: 'Author 3'},
    ];

    return 'title,author\r\n';
  }
}
class APiTypeTwo {
  getBooks() {
    const books = [
      {title: 'Book 1', author: 'Author 1'},
      {title: 'Book 2', author: 'Author 2'},
      {title: 'Book 3', author: 'Author 3'},
    ];

    return 'title,author\r\n';
  }
}

class CoinDataTypeOneAdapter implements CoinDataAdpterInterface {
  coins: APiTypeOne;

  constructor(coins: APiTypeOne) {
    this.coins = coins;
  }

  getObject(): string {
    return this.coins.getBooks();
  }
}

class CoinDataTypeTWoAdapter implements CoinDataAdpterInterface {
  coins: APiTypeOne;

  constructor(coins: APiTypeOne) {
    this.coins = coins;
  }

  getObject(): string {
    return this.coins.getBooks();
  }
}

class Client {
  adaptor: CoinDataAdpterInterface;
  constructor(adaptor: CoinDataAdpterInterface) {
    this.adaptor = adaptor;
  }

  getResult() {
    return this.adaptor.getObject();
  }
}

const aPiTypeOne = new APiTypeOne();
const coinDataTypeOneAdapter = new CoinDataTypeOneAdapter(aPiTypeOne);

const aPiTypeTwo = new APiTypeTwo();
const coinDataTypeTwoAdapter = new CoinDataTypeTWoAdapter(aPiTypeTwo);

const client = new Client(coinDataTypeOneAdapter);

client.getResult();

const apiCoinMarketCap = {
  name: 'Bitcoin',
};

const apiTradingView = {
  symbol: 'Bitcoin',
};

const apiWallex = {
  id: 'Bitcoin',
};