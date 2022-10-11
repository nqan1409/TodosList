const init = {
    cats: ['An'],
};

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'ADD':
            const [newCat] = args;
            return {
                ...state,
                cats: [...state.cats, newCat],
            };
            break;
        default:
            return state;
    }
}
