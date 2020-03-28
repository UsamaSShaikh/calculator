import React, {useRef, useEffect} from 'react';
import './App.css';
import Button from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import { setInput, setPreviousNum, setCurrentNum, setOperator, setResult } from './actions/index';
function App() {
    const dispatch = useDispatch();
    const input = useSelector(state => state.input);
    const previousNum = useSelector(state => state.previousNum);
    const currentNum = useSelector(state => state.currentNum);
    const operator = useSelector(state => state.operator);
    const result = useSelector(state => state.result);

    const outputTxtRef = useRef(null);

    function evaluate() {
        dispatch(setCurrentNum(input));
        console.log(previousNum+" : "+currentNum+" : "+operator);
    }

    const numberClick = (e) => {
        if(e.target.id === '=') {
            evaluate();
        }
        else
        {
            dispatch(setInput(e.target.id));
        }
    }

    const operatorClick = (e) => {
        dispatch(setPreviousNum(input));
        dispatch(setOperator(e.target.id));
    }

    let numArray = [1,2,3,4,5,6,7,8,9,0,'.','='];
    const numBtns = numArray.map((number) => {
        return (<Button key={number} onClick={numberClick} title={number}></Button>)
    });

    let operatorArray = ['/','*','-','+'];
    const operatorBtns = operatorArray.map((sign) => {
        return (<Button key={sign} onClick={operatorClick} title={sign}></Button>)
    });

    let specialOperatorArray = ['%','CE','C','DEL'];
    const specialOperatorBtns = specialOperatorArray.map((sign) => {
        return (<Button key={sign} onClick={numberClick} title={sign}></Button>)
    });

    useEffect(() => {
        outputTxtRef.current.innerText = input;
    }, [input]);

    useEffect(() => {
        outputTxtRef.current.innerText = '';
    }, [operator]);

    useEffect(() => {
        //console.log(previousNum+" : "+currentNum+" : "+operator);
        if(operator === '/') {
            const result = Number(previousNum) / Number(currentNum);
            dispatch(setResult(result));
        }
        if(operator === '*') {
            const result = Number(previousNum) * Number(currentNum);
            dispatch(setResult(result));
        }
        if(operator === '-') {
            const result = Number(previousNum) - Number(currentNum);
            dispatch(setResult(result));
        }
        if(operator === '+') {
            const result = Number(previousNum) + Number(currentNum);
           dispatch(setResult(result));
        }
    }, [currentNum]);

    useEffect(() => {
        outputTxtRef.current.innerText = result;
        //console.log(previousNum+" : "+currentNum+" : "+operator+" : "+result);
    }, [result]);

    return (
        <div className="App">
          <header className="App-header">
              Calculator
              <div className="container">
                  <div><label className="outputTxt" ref={outputTxtRef}></label></div>
                  <div className="splbtns">
                      {specialOperatorBtns}
                  </div>
                  <div className="main">
                      <div className="numbtns">
                          {numBtns}
                      </div>
                      <div className="operatorBtns">
                          {operatorBtns}
                      </div>
                  </div>
              </div>
          </header>
        </div>
    );
}

export default App;
