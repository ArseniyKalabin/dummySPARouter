class Render {

    constructor(rootID) {
        this.rootElement = document.getElementById(rootID);
        this.rootElement.appendChild(document.createElement("nav"));
        this.rootElement.appendChild(document.createElement("section"));
    }

    content = (page) => {
        const navContainer = document.querySelector('nav');
        const contentContainer = document.querySelector('section');
        return {
            nav(href, listener) {
                let link = document.createElement("a");
                link.setAttribute("href", href);
                link.innerText = page.title;
                link.onclick = event => {
                    event.preventDefault();
                    listener(href);
                };
                navContainer.appendChild(link);
            },
            page() {
                document.title = page.title;
                contentContainer.innerHTML = page.text;
            }
        }
    }
}

export default Render;