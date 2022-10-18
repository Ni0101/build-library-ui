import html from "../core.js";
import { connect } from "../store.js";
import Header from "./Header.js";
import TodoLists from "./TodoLists.js";
import Footer from "./Footer.js";

function App({ todos }) {
    return html `
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoLists()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)