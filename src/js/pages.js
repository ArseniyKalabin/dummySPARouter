import gif from '../img/404.gif';

const pages = {
    page: {
        "id1": {
            title: "Main",
            text: "<h1>Main page</h1>"
        },
        "id2": {
            title: "About",
            text: "<h1>About page</h1>"
        },
        "id3": {
            title: "Profile",
            text: "<h1>Profile page</h1>"
        },
        "id4": {
            title: "Contact",
            text: "<h1>Contact page</h1>"
        },
        "404": {
            title: "404",
            text: `<h1>Not found</h1><img src=${gif}>`
        }
    },
    getPage(id) {
        return this.page[id] ? this.page[id] : this.page["404"];
    }
}

export default pages;