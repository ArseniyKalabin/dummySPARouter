class Router {

    routes = {};

    constructor() {
        window.onpopstate = () => {
            this.makeRoute(window.location.pathname);
        }
    }

    addRoute = (url, render) => {
        this.routes[url] = render.page;
        if (url !== "404") render.nav(url, this.makeRoute);
    }

    makeRoute = url => {
        if (url !== window.location.pathname) {
            window.history.pushState(null, "", url);
        }
        this.routes[url] ? this.routes[url]() : this.routes["404"]();
    }

    init = () => {
        this.makeRoute(window.location.pathname);
    }
}
export default Router;