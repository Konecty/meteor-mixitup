Package.describe({
	summary: "A Filter & Sort Plugin. For meteor."
});

Package.on_use(function (api) {
	api.use([
    	'jquery'
    ], ['client']);
    api.add_files([
        'vendor/build/jquery.mixitup.min.js',
    ], ['client']);
});