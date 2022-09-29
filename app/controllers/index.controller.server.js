export function displayHome(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', myName: 'Thiago'} );
};

export function displayAbout(req, res, next) {
    res.render('index', { title: 'About', page: 'about'} );
};

export function displayProjects(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'} );
};

export function displayServices(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'} );
};

export function displayContact(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'} );
};