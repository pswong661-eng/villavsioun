/**
 * Villa Visoun — single source of truth for contact, legal, booking, and facts.
 * Visible chrome (footer, sticky bar, 404) reads from this object.
 * Keep head meta + JSON-LD in HTML aligned with these values (no invented claims).
 */
(function (global) {
  'use strict';

  var SITE = {
    brand: 'Villa Visoun',
    tagline: 'Traditional teak family villa near Old Town Luang Prabang',
    siteUrl: 'https://www.villavisoun.com/',
    canonical: 'https://www.villavisoun.com/',
    operator: 'Sounada Concept Sole Co. Ltd.',
    operatorLine: 'Villa Visoun is operated by Sounada Concept Sole Co. Ltd.',
    copyright: '\u00a9 2026 Villa Visoun. All rights reserved.',
    locationLine: 'Villa Visoun \u2022 Nam Khan Riverside \u2022 Near Old Town Luang Prabang, Laos',
    // streetAddress matches the Google Business Profile; no verified postalCode
    streetAddress: 'Ban Visoun, Hom 2',
    addressLocality: 'Luang Prabang',
    addressRegion: 'Luang Prabang Province',
    addressCountry: 'LA',
    addressCountryName: 'Laos',
    geo: { latitude: 19.887536, longitude: 102.140423 },
    mapsUrl: 'https://maps.app.goo.gl/ATwfQqYV9UTGGgYCA',
    telephoneDisplay: '+856 20 55 910 077',
    telephoneTel: '+8562055910077',
    email: 'alcapone.ericio@agentmail.to',
    emailSubject: 'Villa Visoun enquiry',
    emailBody: 'Hi, I saw Villa Visoun online. Please send availability.',
    airbnbUrl: 'https://www.airbnb.com/rooms/51207885?source_impression_id=p3_1784564821_P3p9fYojk3taNBdD',
    airbnbReviewsUrl: 'https://www.airbnb.com/rooms/51207885?source_impression_id=p3_1784564821_P3p9fYojk3taNBdD#reviews',
    tripUrl: 'https://www.trip.com/hotels/detail/?hotelId=132861614',
    guidebookUrl: 'https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F3248666&s=67&unique_share_id=964be24e-4ede-4fe0-a3bc-d9984ec4c50d',
    identifier: '51207885',
    ratingValue: '4.98',
    reviewCount: '44',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    beds: 3,
    checkin: '2:00 PM',
    checkinWindow: '2:00 PM to 8:00 PM',
    checkout: '11:00 AM',
    petsAllowed: true,
    host: 'Superhost Eric',
    ogImage: 'https://www.villavisoun.com/og-hero.jpg',
    heroImage: 'https://www.villavisoun.com/hero.avif'
  };

  SITE.mailto = function () {
    return 'mailto:' + SITE.email +
      '?subject=' + encodeURIComponent(SITE.emailSubject) +
      '&body=' + encodeURIComponent(SITE.emailBody);
  };

  SITE.mailtoSimple = function () {
    return 'mailto:' + SITE.email;
  };

  SITE.telHref = function () {
    return 'tel:' + SITE.telephoneTel;
  };

  global.VILLA_VISOUN = SITE;
})(typeof window !== 'undefined' ? window : this);
