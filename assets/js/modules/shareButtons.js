/**
 * Displays number of shares in share buttons by calling SharedCount.com API
 */

'use strict';

module.exports = function() {

  /**
   * Share Buttons element
   */
  var shareButtons = document.querySelector('.js-share-buttons');
  var url = encodeURIComponent(location.href);

  // Check if there are any share buttons
  if (shareButtons) {
    querySharedCount();
    updateShareUrls();
  }

  /**
   * Call SharedCount.com API for number of shares
   */
  function querySharedCount() {
    var apikey = "f1fb220a7cfd371ad071fd44c7745575397ed2d4"; // Please register at sharedcount.com for your own API key, this one is limited to xfiveco.github.io
    var request = new XMLHttpRequest();

    request.open('GET', '//free.sharedcount.com/?apikey=' + apikey + '&url=' + url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        displayCount('.js-fb-count', data.Facebook.total_count);
        displayCount('.js-linkedin-count', data.LinkedIn);
        displayCount('.js-googleplus-count', data.GooglePlusOne);
      }
    };

    request.send();
  }

  /**
   * Displays number of shares in a button
   * @param  {string} selector Button selector
   * @param  {number} count   Number of shares
   */
  function displayCount(selector, count) {
    var element = document.querySelector(selector);

    if (element) {
      // Only display counts bigger than zero
      if (count && count > 0) {
        element.innerHTML = count;
        element.classList.add('is-visible');
      }
    }
  }

  /**
   * Insert proper sharing URL to sharer links
   */
  function updateShareUrls() {
    var buttons = shareButtons.querySelectorAll('a');
    for (var i = 0; i < buttons.length; i++) {
      var new_url = buttons[i].getAttribute('href').replace('#url', url);
      buttons[i].setAttribute('href', new_url);
    }
  }
};
