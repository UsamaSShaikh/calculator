import React, {useRef, useEffect} from 'react';
import './App.css';
import Button from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import { setInput, setPreviousNum, setCurrentNum, setOperator } from './actions/index';
function App() {
    const dispatch = useDispatch();
    const input = useSelector(state => state.input);
    const previousNum = useSelector(state => state.previousNum);
    const currentNum = useSelector(state => state.currentNum);
    const operator = useSelector(state => state.operator);

    //const [input, setInput] = useState('');
    //const [previousNum, setPrevious] = useState('');
    //const [currentNum, setCurrent] = useState('');
    //const [operator, setOperator] = useState('');

    function evaluate() {
        //setCurrent(input)
        dispatch(setCurrentNum(input));
        console.log(previousNum+" : "+currentNum+" : "+operator);
        if(operator === '/') {
            //const result = Number(previousNum) / Number(currentNum);
            //setInput(result);
        }
    }

    const numberClick = (e) => {
        if(e.target.id === '=') {
            evaluate();
        }
        else
        {
            //const newNum = input + e.target.id;
            //setInput(newNum);
            //dispatch({type:"SET_INPUT"});

            //console.log('Number Clicked '+e.target.id);
            dispatch(setInput(e.target.id));
        }
    }

    const operatorClick = (e) => {
        // setPrevious(input);
        // setInput("");
        // setOperator(e.target.id);

        //console.log('Operator Clicked '+e.target.id);
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

    const outputTxtRef = useRef(null);

    useEffect(() => {
        outputTxtRef.current.innerText = input;
        //console.log("useeffect: "+input);
    }, [input]);

    useEffect(() => {
        outputTxtRef.current.innerText = '';
        console.log(previousNum+" : "+currentNum+" : "+operator);
    }, [operator]);

    useEffect(() => {
        //outputTxtRef.current.innerText = '';
        console.log(previousNum+" : "+currentNum+" : "+operator);
    }, [currentNum]);

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
