/**
 * Renders shared footer / contact chrome from VILLA_VISOUN.
 * Hooks: [data-vv="footer"], [data-vv="operator"], [data-vv-href="email|mailto|tel|airbnb|trip|maps"]
 */
(function () {
  'use strict';
  var S = window.VILLA_VISOUN;
  if (!S) return;

  function setHref(sel, href) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.setAttribute('href', href);
    });
  }

  setHref('[data-vv-href="mailto"]', S.mailto());
  setHref('[data-vv-href="email"]', S.mailtoSimple());
  setHref('[data-vv-href="tel"]', S.telHref());
  setHref('[data-vv-href="airbnb"]', S.airbnbUrl);
  setHref('[data-vv-href="trip"]', S.tripUrl);
  setHref('[data-vv-href="maps"]', S.mapsUrl);
  setHref('[data-vv-href="airbnb-reviews"]', S.airbnbReviewsUrl);
  setHref('[data-vv-href="guidebook"]', S.guidebookUrl);
  setHref('[data-vv-href="home"]', S.siteUrl);

  document.querySelectorAll('[data-vv="email-text"]').forEach(function (el) {
    el.textContent = S.email;
  });
  document.querySelectorAll('[data-vv="phone-text"]').forEach(function (el) {
    el.textContent = S.telephoneDisplay;
  });
  document.querySelectorAll('[data-vv="operator"]').forEach(function (el) {
    el.textContent = S.operatorLine;
  });
  document.querySelectorAll('[data-vv="location-line"]').forEach(function (el) {
    el.textContent = S.locationLine;
  });
  document.querySelectorAll('[data-vv="copyright"]').forEach(function (el) {
    el.textContent = S.copyright;
  });

  document.querySelectorAll('[data-vv="footer"]').forEach(function (footer) {
    if (footer.getAttribute('data-vv-built') === '1') return;
    footer.innerHTML =
      '<p data-vv="location-line">' + S.locationLine + '</p>' +
      '<p class="footer-links">' +
        '<a data-vv-href="tel" href="' + S.telHref() + '">' + S.telephoneDisplay + '</a>' +
        '<span>&bull;</span>' +
        '<a data-vv-href="email" href="' + S.mailtoSimple() + '">Email</a>' +
        '<span>&bull;</span>' +
        '<a data-vv-href="trip" href="' + S.tripUrl + '" target="_blank" rel="noopener noreferrer">Trip.com</a>' +
        '<span>&bull;</span>' +
        '<a data-vv-href="airbnb" href="' + S.airbnbUrl + '" target="_blank" rel="noopener noreferrer">Official Airbnb</a>' +
        '<span>&bull;</span>' +
        '<a data-vv-href="maps" href="' + S.mapsUrl + '" target="_blank" rel="noopener noreferrer">Google Maps</a>' +
      '</p>' +
      '<p data-vv="copyright">' + S.copyright + '</p>' +
      '<p class="operator" data-vv="operator">' + S.operatorLine + '</p>';
    footer.setAttribute('data-vv-built', '1');
  });
})();
