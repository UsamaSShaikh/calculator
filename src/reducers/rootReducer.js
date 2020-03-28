const initialState = {
    input: '',
    previousNum: '',
    currentNum: '',
    operator: '',
    result: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_INPUT':
            console.log('SET_INPUT: '+ action.payload);
            return {
                ...state,
                input: state.input + action.payload 
            };
        case 'SET_PREVIOUSNUM':
            console.log('SET_PREVIOUSNUM: '+action.payload);
            return { 
                ...state,
                previousNum: action.payload
            };
        case 'SET_CURRENTNUM':
            console.log('SET_CURRENTNUM: '+ action.payload , state);
            return {
                ...state,
                currentNum: action.payload 
            };
        case 'SET_OPERATOR':
            console.log('SET_OPERATOR: '+ action.payload, state);
            return { 
                ...state,
                input: '',
                operator: action.payload
            };
        case 'SET_RESULT':
            console.log('SET_RESULT: '+ action.payload, state);
            return {
                ...state,
                input: '',
                operator: '',
                result: action.payload
            };
        default:
            return state;
    }
}

export  default rootReducer;