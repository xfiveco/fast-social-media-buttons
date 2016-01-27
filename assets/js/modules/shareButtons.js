/**
 * Displays number of shares in share buttons by calling SharedCount.com API
 */

'use strict';

module.exports = function() {

  /**
   * Share Buttons element
   */
  var shareButtons = document.querySelector(".js-share-button");

  // Check if there are any share buttons
  if (shareButtons) {
    callSharedCount();
  }

  /**
   * Call SharedCount.com API for number of shares
   */
  function callSharedCount() {

    var url = encodeURIComponent(location.href);
    var apikey = "39204aafa6140ee754899617c7dd6736ff50e08b";
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
      // We only display non-zero values
      if (count && count !== 0) {
        element.innerHTML = count;
      // If there are no shares, hide the count element inside the button
      } else {
        element.style.display = 'none';
      }
    }
  }
};
