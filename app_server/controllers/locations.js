var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://sleepy-taiga-18602.herokuapp.com";
}

/* Get home page */

module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - Find a place to work with WiFi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with WiFi near you!'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium WiFi'],
            distance: '250m'
        }]
    });
};

/* Get Location info */

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'Is on Loc8r because it has accessible WiFi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            coords: {
                lat: 51.455041, 
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: ' 7:00am',
                closing: '7:00pm',
                closed: false
            },{
                days: 'Saturday',
                opening: ' 8:00am',
                closing: '5:00pm',
                closed: false
            },{
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: ' Simon Holmes',
                rating: 5,
                timestamp: ' 16 Jul 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
                },{
                author: ' Charlie Chaplin',
                rating: 3,
                timestamp: ' 16 June 2013',
                reviewText: 'It was ok. Coffee wasn\'t great, but the WiFi was fast.'    
            }]
        }
    });
};

/* Get Add review */

module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: { 
            title: 'Review Starcups' 
        }
    });
};


