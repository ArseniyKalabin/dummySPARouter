import html from '../../index.html';
import '../scss/style.scss';
import pages from './pages.js';
import Router from './router.js';
import Render from './render.js';

const router = new Router();
const render = new Render("root");

router.addRoute("404", render.content(pages.getPage(["404"])));
router.addRoute("/", render.content(pages.getPage(["id1"])));
router.addRoute("/about", render.content(pages.getPage(["id2"])));
router.addRoute("/profile", render.content(pages.getPage(["id3"])));

router.init();