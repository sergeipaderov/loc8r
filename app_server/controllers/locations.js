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
            adress: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            adress: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            adress: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium WiFi'],
            distance: '250m'
        }]
    });
};

/* Get Location info */

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {title: 'Location info'});
};

/* Get Add review */

module.exports.addReview = function(req, res) {
    res.render('location-review-form', {title: 'Add review'});
};


