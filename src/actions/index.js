export function setInput(text) {
    return { type: 'SET_INPUT', payload: text }
}

export function setPreviousNum(text) {
    return { type: 'SET_PREVIOUSNUM', payload: text }
}

export function setCurrentNum(text) {
    return { type: 'SET_CURRENTNUM', payload: text }
}

export function setOperator(text) {
    return { type: 'SET_OPERATOR', payload: text }
}

export  function  setResult(text) {
    return { type: 'SET_RESULT', payload: text }
}