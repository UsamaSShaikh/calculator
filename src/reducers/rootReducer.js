const initialState = {
    counter: 0,
    input: '',
    previousNum: '',
    currentNum: '',
    operator: ''
}

function rootReducer(state = initialState, action) {
    console.log('rootReducer');
    switch (action.type) {
        case 'SET_INPUT':
            console.log('SET_INPUT: '+action.text);
            return { input: state.input + action.text };
        case 'SET_PREVIOUSNUM':
            console.log('SET_PREVIOUSNUM: '+action.text);
            return { previousNum: action.text };
        case 'SET_CURRENTNUM':
            console.log('SET_CURRENTNUM: '+action.text);
            return { currentNum: action.text };
        case 'SET_OPERATOR':
            console.log('SET_OPERATOR: '+action.text);
            return { input: '', operator: action.text };
        default:
            return state;
    }
}

export  default rootReducer;