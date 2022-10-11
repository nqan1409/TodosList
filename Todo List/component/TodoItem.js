import html from '../core.js';
import { connect } from '../store.js';

function TodoItem({ todo, index, editIndex }) {
    return html`
        <li
            class="${todo.completed && 'completed'} ${editIndex === index &&
            'editing'}"
        >
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${todo.completed && 'checked'}
                    onchange="dispacth('toggle', ${index})"
                />
                <label ondblclick="dispacth('startEdit', ${index})"
                    >${todo.title}</label
                >
                <button
                    class="destroy"
                    onclick="dispacth('destroy', ${index})"
                ></button>
            </div>
            <input
                class="edit"
                value="${todo.title}"
                onkeyup="event.keyCode === 13 && dispacth('endEdit', this.value.trim()) || event.keyCode === 27 && dispacth('cancleEdit')"
                onblur="dispacth('endEdit', this.value.trim())"
            />
        </li>
    `;
}

export default connect()(TodoItem);
