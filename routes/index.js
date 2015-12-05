exports.index = function(req, res) {
	res.render('index');
};

exports.templates = function(req, res) {
	var name = req.params.name;
	res.render('templates/' + name);
};

exports.name = function(req, res) {

	// Grab the name from the view

	// rendering view with name
	var user = req.body.userInputName;
	res.redirect('movies/' + user);
};

exports.movies = function(req, res) {
	// Get name
	var user = req.params.user;
	console.log(user);

	// Render a new page called ('movies ')
	// And pass in the name
	res.render('movies', {user: user});

};
