export default function logger(reducer) {
    return (prevState, action, agrs) => {
        console.group(action);
        console.log('Prev State:', prevState);
        console.log('Action Arguments:', agrs);
        const newState = reducer(prevState, action, agrs);
        console.log('New State:', newState);
        console.groupEnd();
        return newState;
    };
}
