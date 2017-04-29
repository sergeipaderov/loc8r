/* Get home page */

module.exports.homelist = function(req, res) {
    res.render('locations-list', {title: 'Home'});
};

/* Get Location info */

module.exports.locationInfo = function(req, res) {
    res.render('index', {title: 'Location info'});
};

/* Get Add review */

module.exports.addReview = function(req, res) {
    res.render('index', {title: 'Add review'});
};


