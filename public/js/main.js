let url = location.pathname;
if (url === '/p/7-market-average') {

  $.ajax({
    url: 'https://stocktown.versus.jp/api/index.php',
    type: 'GET',
    dataType: 'json',
    async: true,
    cache: false,
  }).done(function (data) {
    let dow_closing_price = parseInt(data[0].closing_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
    let n225_closing_price = parseInt(data[4].closing_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
    let nasdaq_closing_price = parseInt(data[2].closing_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
    let hongseng_closing_price = parseInt(data[1].closing_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
    let kospi_closing_price = parseInt(data[3].closing_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);

    $('#n225').html('<!-- TradingView Widget BEGIN -->\n' +
      '<div class="tradingview-widget-container">\n' +
      '  <div class="tradingview-widget-container__widget"></div>\n' +
      '  <div class="tradingview-widget-copyright"><a href="https://jp.tradingview.com/symbols/FRED-NIKKEI225/" rel="noopener" target="_blank"><span class="blue-text">NIKKEI225相場</span></a></div>\n' +
      '  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>\n' +
      '  {\n' +
      '  "symbol": "FRED:NIKKEI225",\n' +
      '  "width": 350,\n' +
      '  "height": 220,\n' +
      '  "locale": "ja",\n' +
      '  "dateRange": "12M",\n' +
      '  "colorTheme": "light",\n' +
      '  "trendLineColor": "rgba(41, 98, 255, 1)",\n' +
      '  "underLineColor": "rgba(41, 98, 255, 0.3)",\n' +
      '  "underLineBottomColor": "rgba(41, 98, 255, 0)",\n' +
      '  "isTransparent": false,\n' +
      '  "autosize": false,\n' +
      '  "largeChartUrl": ""\n' +
      '}\n' +
      '  </script>\n' +
      '</div>\n' +
      '<!-- TradingView Widget END -->');
    $('#dow').html('<!-- TradingView Widget BEGIN -->\n' +
      '<div class="tradingview-widget-container">\n' +
      '  <div class="tradingview-widget-container__widget"></div>\n' +
      '  <div class="tradingview-widget-copyright">TradingView提供の<a href="https://jp.tradingview.com/symbols/FRED-DJIA/" rel="noopener" target="_blank"><span class="blue-text">DJIA相場</span></a></div>\n' +
      '  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>\n' +
      '  {\n' +
      '  "symbol": "FRED:DJIA",\n' +
      '  "width": 350,\n' +
      '  "height": 220,\n' +
      '  "locale": "ja",\n' +
      '  "dateRange": "12M",\n' +
      '  "colorTheme": "light",\n' +
      '  "trendLineColor": "rgba(41, 98, 255, 1)",\n' +
      '  "underLineColor": "rgba(41, 98, 255, 0.3)",\n' +
      '  "underLineBottomColor": "rgba(41, 98, 255, 0)",\n' +
      '  "isTransparent": false,\n' +
      '  "autosize": false,\n' +
      '  "largeChartUrl": ""\n' +
      '}\n' +
      '  </script>\n' +
      '</div>\n' +
      '<!-- TradingView Widget END -->');
    $('#nasdaq').html('<!-- TradingView Widget BEGIN -->\n' +
      '<div class="tradingview-widget-container">\n' +
      '  <div class="tradingview-widget-container__widget"></div>\n' +
      '  <div class="tradingview-widget-copyright">TradingView提供の<a href="https://jp.tradingview.com/symbols/FRED-NASDAQ100/" rel="noopener" target="_blank"><span class="blue-text">NASDAQ100相場</span></a></div>\n' +
      '  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>\n' +
      '  {\n' +
      '  "symbol": "FRED:NASDAQ100",\n' +
      '  "width": 350,\n' +
      '  "height": 220,\n' +
      '  "locale": "ja",\n' +
      '  "dateRange": "12M",\n' +
      '  "colorTheme": "light",\n' +
      '  "trendLineColor": "rgba(41, 98, 255, 1)",\n' +
      '  "underLineColor": "rgba(41, 98, 255, 0.3)",\n' +
      '  "underLineBottomColor": "rgba(41, 98, 255, 0)",\n' +
      '  "isTransparent": false,\n' +
      '  "autosize": false,\n' +
      '  "largeChartUrl": ""\n' +
      '}\n' +
      '  </script>\n' +
      '</div>\n' +
      '<!-- TradingView Widget END -->');
    $('#hongseng').html('<!-- TradingView Widget BEGIN -->\n' +
      '<div class="tradingview-widget-container">\n' +
      '  <div class="tradingview-widget-container__widget"></div>\n' +
      '  <div class="tradingview-widget-copyright">TradingView提供の<a href="https://jp.tradingview.com/symbols/FRED-SP500/" rel="noopener" target="_blank"><span class="blue-text">SP500相場</span></a></div>\n' +
      '  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>\n' +
      '  {\n' +
      '  "symbol": "FRED:SP500",\n' +
      '  "width": 350,\n' +
      '  "height": 220,\n' +
      '  "locale": "ja",\n' +
      '  "dateRange": "12M",\n' +
      '  "colorTheme": "light",\n' +
      '  "trendLineColor": "rgba(41, 98, 255, 1)",\n' +
      '  "underLineColor": "rgba(41, 98, 255, 0.3)",\n' +
      '  "underLineBottomColor": "rgba(41, 98, 255, 0)",\n' +
      '  "isTransparent": false,\n' +
      '  "autosize": false,\n' +
      '  "largeChartUrl": ""\n' +
      '}\n' +
      '  </script>\n' +
      '</div>\n' +
      '<!-- TradingView Widget END -->');
    $('#kospi').html('<!-- TradingView Widget BEGIN -->\n' +
      '<div class="tradingview-widget-container">\n' +
      '  <div class="tradingview-widget-container__widget"></div>\n' +
      '  <div class="tradingview-widget-copyright">TradingView提供の<a href="https://jp.tradingview.com/symbols/KRX-KOSPI/" rel="noopener" target="_blank"><span class="blue-text">KOSPI相場</span></a></div>\n' +
      '  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>\n' +
      '  {\n' +
      '  "symbol": "KRX:KOSPI",\n' +
      '  "width": 350,\n' +
      '  "height": 220,\n' +
      '  "locale": "ja",\n' +
      '  "dateRange": "12M",\n' +
      '  "colorTheme": "light",\n' +
      '  "trendLineColor": "rgba(41, 98, 255, 1)",\n' +
      '  "underLineColor": "rgba(41, 98, 255, 0.3)",\n' +
      '  "underLineBottomColor": "rgba(41, 98, 255, 0)",\n' +
      '  "isTransparent": false,\n' +
      '  "autosize": false,\n' +
      '  "largeChartUrl": ""\n' +
      '}\n' +
      '  </script>\n' +
      '</div>\n' +
      '<!-- TradingView Widget END -->');

    console.log(data);

    console.log('freaf');
  }).fail(function (data) {
    alert('通信失敗！');
  });
}


if (url === '/p/9-search') {


  $.ajax({
    url: 'https://stocktown.versus.jp/api/stock.php',
    type: 'GET',
    dataType: 'json',
    async: true,
    cache: false,
    data: {search: getParam('value')}
  }).done(function (data) {
      console.log(data);

      $('#bord').click(function () {
        document.location = '/all?q=' + data[0].symbol;
      });
      $('.price-box__exchange').text(data[0][7]);
      $('.price-box__title').text(data[0].stock_name + '(' + data[0].symbol + ')');

      let closing_price = parseInt(data[0].closing_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
      let open_price = parseInt(data[0].open_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
      let high_price = parseInt(data[0].high_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
      let low_price = parseInt(data[0].low_price.replace(/\[/, ' ').replace(/\]/, ' '), 10);
      let volume = parseInt(data[0].volume.replace(/\[/, ' ').replace(/\]/, ' '), 10);


      $('#closing_price').text(closing_price);
      $('#open_price').text(open_price);
      $('#high_price').text(high_price);
      $('#low_price').text(low_price);
      $('#volume').text(volume);
      $('#trading_price').text(data[0].trading_price);
      let info = JSON.parse(data[0].info);

      // let balance_sheet = data[0].balance_sheet.replace(/(\s|&nbsp;)+/g, ' ');
      //
      // let bs = balance_sheet.match(/Total Stockholder Equity (.\S*)/);
      //
      // let bps = info.sharesOutstanding / 321195000;
      //
      // let pbr = closing_price / bps;
      //
      // $('#pbr').text(pbr);
      // $('#bps').text(bps);


      let test = $("<img>").attr("src", info.logo_url);

      $('.price-box__img').append(test);
      $('#marketCap').text(info.marketCap);
      let returnOnEquity = info.returnOnEquity * 100;
      $('#roe').text(Math.round(returnOnEquity) + '%');

      $('#sharesOutstanding').text(info.sharesOutstanding);
      $('#dividend').text(info.dividendYield);
      $('#short_ratio').text(info.shortRatio);


      $('#eps').text(info.trailingEps);
      let test3 = closing_price / info.trailingEps;

      $('#per').text(parseInt(test3, 10) + '倍');

      let test2 = [];

      $.each(JSON.parse(data[0].data), function (index, value) {

        $('#chart2').append(' <tr>\n' +
          '<td>' + value[0] + '</td>\n' +
          '<td>' + parseInt(value[1], 10) + '</td>\n' +
          '<td>' + parseInt(value[2], 10) + '</td>\n' +
          '<td>' + parseInt(value[3], 10) + '</td>\n' +
          '<td>' + parseInt(value[4], 10) + '</td>\n' +
          '</tr>\n'
        );

        test2.push(
          [new Date(value[0]), Math.floor(Number(value[1]))]
        );
        // test2.push({
        //   x: new Date(value[0]),
        //   y: [Number(value[1]), Number(value[2]), Number(value[3]), Number(value[4])]
        // });

      });
      // https://iexcloud.io/docs/api/#ceo-compensation
      //https://gray-code.com/html_css/side-by-side-for-text-and-thumbnail-image/
      //https://apexcharts.com/javascript-chart-demos/area-charts/datetime-x-axis/
      //<div class="price-box__body">
      //         <p class="price-box__price">-</p>
      //         <p class="price-box__description">-</p>
      //       </div>

      var options = {
        series: [{
          data: test2
        }],
        chart: {
          id: 'chart2',
          type: 'line',
          height: 230,
          toolbar: {
            autoSelected: 'pan',
            show: false
          }
        },
        colors: ['#546E7A'],
        stroke: {
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1,
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();

      var optionsLine = {
        series: [{
          data: test2
        }],
        chart: {
          id: 'chart1',
          height: 130,
          type: 'area',
          brush: {
            target: 'chart2',
            enabled: true
          },
          selection: {
            enabled: true,
            // xaxis: {
            //   min: new Date('19 Jun 2017').getTime(),
            //   max: new Date('14 Aug 2021').getTime()
            // }
          },
        },
        colors: ['#008FFB'],
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
          }
        },
        xaxis: {
          type: 'datetime',
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2
        }
      };


      var chart = new ApexCharts(document.querySelector("#chart-line2"), optionsLine);
      chart.render();


    }
  ).fail(function (data) {
    alert('通信失敗！');
  });
}

if (url === '/p/4-news') {
  $.ajax({
    url: 'https://stocktown.versus.jp/api/news.php',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    console.log(data);
    // <div class="box">
    //     <div class="text">
    //     <h3>見出しが入ります</h3>
    //     <p>親譲りの無鉄砲で小供の時から損ばかりしている。</p>
    //   </div>
    //   <div class="pict"><img src="data:image/jpeg;base64,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" alt="iojijoijoj"></div>
    //     </div>
    $.each(data, function (index, value) {
      const MAX_LENGTH = 30; //文字数上限
      let modStr = value.title;
      let description = value.description;
      let images = '<img style="width: 100px; height: 100px; border-radius: 10px;" src="' + value.urlToImage + '">';

      if (value.title.length > MAX_LENGTH) {
        modStr = value.title.substr(0, MAX_LENGTH) + '...'
      }
      if (value.description.length > 200) {
        description = value.description.substr(0, MAX_LENGTH) + '...'
      }
      if (!value.urlToImage) {
        images = '';
      }
      $('#news').prepend('' +
        '<div class="box">\n' +
        '  <div class="text">\n' +
        '    <h3><a href="' + value.url + '">' + modStr + '</a></h3>\n' +
        '    <p class="description">' + description + '</p>\n' +
        '    <p class="time"><i class="far fa-clock"></i>' + value.publishedAt + '</p>\n' +
        '    <p class="author"><i class="fas fa-at"></i>' + value.author + '</p>\n' +
        '  </div>\n' +
        ' <div class="pict">' + images + '</div>' +
        '</div>\n');
    });

  }).fail(function (data) {
    alert('通信失敗！');
  });
}

if (url === '/p/6-cheap') {

  $.ajax({
    url: 'https://stocktown.versus.jp/api/cheap.php',
    type: 'GET',
    dataType: 'json',
    data: {market: getParam('market')}
  }).done(function (data) {
    console.log(data);
    $.each(data, function (index, value) {
      $('#osusume').append('' +
        '    <tr><td> <a href="/p/2-search?value=' + value.symbol + '">' + value.stock_name + '</a></td>\n' +
        '      <td>' + value.acronym + '</td>\n' +
        '      <td>' + value.eps + '</a></td>\n' +
        '      <td>' + value.per + '</td>\n' +
        '      <td>' + value.roe + '</td>\n' +
        '      </tr>');
    });

  }).fail(function (data) {
    alert('通信失敗！');
  });
}

if (url === '/p/5-ipo') {
  $.ajax({
    url: 'https://stocktown.versus.jp/api/ipo.php',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    $.each(data, function (index, value) {

      $('#ipo').append('' +
        '    <tr><td class="icon bird">' + value.sector_name + '</td>\n' +
        '      <td>' + value.market_name + '</td>\n' +
        '      <td><a href="' + value.url + '">' + value.name + '</a></td>\n' +
        '      <td>' + value.date + '</td>\n' +
        '      <td>' + value.p_kari + '</td>\n' +
        '      </tr>');
    });

  }).fail(function (data) {
    alert('通信失敗！');
  });
}

function hoge(code) {
  if (13 === code) {
    const textbox = document.getElementById("search-text");
    const value = textbox.value;
    window.location.href = '/p/9-search?value=' + value; // 通常の遷移
  }
}

/**
 * Get the URL parameter value
 *
 * @param  name {string} パラメータのキー文字列
 * @return  url {url} 対象のURL文字列（任意）
 */
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent
  (results[2].replace(/\+/g, " "));
}

