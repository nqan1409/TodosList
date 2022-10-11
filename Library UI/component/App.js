import html from '../core.js';
import { connect } from '../store.js';

const connecter = connect();

function App({ cats }) {
    return html`<h1>Ngọc Mai đáng iu nhất Trái Đất ❤️</h1>
        <ul>
            ${cats.map((cat) => `<li>${cat}</li>`)}
        </ul>
        <button onclick="dispacth('ADD', 'Mai')">Add a cat</button>`;
}

export default connecter(App);
