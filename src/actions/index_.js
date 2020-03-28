//const SET_INPUT = 'SET_INPUT';
//const SET_PREVIOUSNUM = 'SET_PREVIOUSNUM';
//const SET_CURRENTNUM = 'SET_CURRENTNUM';
//const SET_OPERATOR = 'SET_OPERATOR';

export function setInput(text) {
    return { type: 'SET_INPUT', text }
}

export function setPreviousNum(text) {
    return { type: 'SET_PREVIOUSNUM', text }
}

export function setCurrentNum(text) {
    return { type: 'SET_CURRENTNUM', text }
}

export function setOperator(text) {
    return { type: 'SET_OPERATOR', text }
}