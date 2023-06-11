const cryptoData = [
  { name: 'Bitcoin', price: 60000, marketCap: 1000000000, history: [50000, 55000, 60000, 65000, 70000] },
  { name: 'Ethereum', price: 4000, marketCap: 500000000, history: [3500, 3800, 4000, 4200, 4500] },
  { name: 'Ripple', price: 1.5, marketCap: 200000000, history: [1.2, 1.4, 1.5, 1.6, 1.8] },
  { name: 'Litecoin', price: 200, marketCap: 100000000, history: [180, 190, 200, 210, 220] },
  { name: 'Cardano', price: 2, marketCap: 150000000, history: [1.8, 1.9, 2, 2.2, 2.4] },
  { name: 'Dogecoin', price: 0.3, marketCap: 40000000000, history: [0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34] },
  { name: 'Chainlink', price: 22, marketCap: 9000000000, history: [20, 21, 22, 23, 24, 25, 26]},
  { name: 'Stellar', price: 0.3, marketCap: 6000000000, history: [0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34] },
  { name: 'Polkadot', price: 15, marketCap: 20000000000, history: [14, 14.5, 15, 15.5, 16, 16.5, 17] },
  { name: 'Binance Coin', price: 280, marketCap: 43000000000, history: [270, 275, 280, 285, 290, 295, 300] },
  { name: 'Cardano', price: 1.5, marketCap: 50000000000, history: [1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7] },
  { name: 'Uniswap', price: 18, marketCap: 7000000000, history: [17, 17.5, 18, 18.5, 19, 19.5, 20] } ];

function renderCryptoList() {
  const cryptoListElement = document.getElementById('crypto-list');
  cryptoListElement.innerHTML = '';

  cryptoData.forEach(crypto => {
    const cryptoElement = document.createElement('div');
    cryptoElement.classList.add('crypto-item');
    cryptoElement.innerText = `${crypto.name} - ${crypto.price}$`;

    cryptoElement.addEventListener('click', () => {
      renderCryptoDetails(crypto);
    });

    cryptoListElement.appendChild(cryptoElement);
  });
}

function renderCryptoDetails(crypto) {
  const cryptoDetailsElement = document.getElementById('crypto-details');
  cryptoDetailsElement.innerHTML = '';

  const cryptoNameElement = document.createElement('h2');
  cryptoNameElement.innerText = crypto.name;

  const cryptoPriceElement = document.createElement('p');
  cryptoPriceElement.innerText = `Price: ${crypto.price}$`;

  const cryptoMarketCapElement = document.createElement('p');
  cryptoMarketCapElement.innerText = `Market Cap: ${crypto.marketCap}`;

  const chartContainer = document.createElement('div');
  chartContainer.classList.add('chart-container');

  const chartCanvas = document.createElement('canvas');
  chartCanvas.id = 'chart';

  chartContainer.appendChild(chartCanvas);

  cryptoDetailsElement.appendChild(cryptoNameElement);
  cryptoDetailsElement.appendChild(cryptoPriceElement);
  cryptoDetailsElement.appendChild(cryptoMarketCapElement);
  cryptoDetailsElement.appendChild(chartContainer);

  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Price',
        data: crypto.history,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  new Chart(chartCanvas, {
    type: 'line',
    data: chartData,
    options: chartOptions
  });
}

function initializeApp() {
  renderCryptoList();
}

window.addEventListener('load', initializeApp);
