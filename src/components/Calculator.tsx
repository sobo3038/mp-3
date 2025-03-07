import { useState } from "react";
import { CalculatorContainer, StyledInput, ButtonContainer, CalculatorButton, CalculatorOutput } from "../StyledComponents";

function useCalculator() {
    const[firstNum,setFirstNum]=useState("");
    const[secondNum,setSecondNum]=useState("");
    const[output,setResult]=useState("");

    function getValues() {
        let first = Number(firstNum);
        let second = Number(secondNum);
        return {first,second};
    }
    function calculate(operation: string) {
        let {first,second}=getValues();
        let result; 
        if (operation==="add") {            //+
            result =first+second;
        } else if (operation==="subtract") {//-
            result = first-second;
        } else if (operation==="multiply") {//*
            result = first*second;
        } else if (operation==="divide") {  // /
            if (second===0) {
                result="Error";
            } else {
                result=first/second;
            }
        } else if (operation==="power") {   // ** 
            result=1;
            if (second>=0) {
                for (let i=0; i< second;i++) {
                    result*=first;
                }
            } else {
                for (let i=0; i<-second; i++) {
                    result*=first;
                }
                result=1/result;
            }
        }
        setResult(String(result));
    }
    
    function clearFields() {
        setFirstNum("");
        setSecondNum("");
        setResult("");
    }
    return {firstNum,setFirstNum,secondNum,setSecondNum,output,calculate,clearFields };
}

export function Calculator() {
    const {firstNum,setFirstNum,secondNum,setSecondNum,output,calculate,clearFields}=useCalculator();
    return (
        <CalculatorContainer>
            <h2>Calculator</h2>
            <label>First Number:</label>
            <StyledInput type="number" value={firstNum} onChange={(e) => setFirstNum(e.target.value)} />
            <label>Second Number:</label>
            <StyledInput type="number" value={secondNum} onChange={(e) => setSecondNum(e.target.value)} />
            <ButtonContainer>
                <CalculatorButton onClick={()=>calculate("add")}>+</CalculatorButton>
                <CalculatorButton onClick={()=>calculate("subtract")}>-</CalculatorButton>
                <CalculatorButton onClick={()=>calculate("multiply")}>*</CalculatorButton>
                <CalculatorButton onClick={()=>calculate("divide")}>/</CalculatorButton>
                <CalculatorButton onClick={()=>calculate("power")}>**</CalculatorButton>
                <CalculatorButton onClick={clearFields}>Clear</CalculatorButton>
            </ButtonContainer>
            <CalculatorOutput color={output==="Error" || Number(output)<0 ? "red":"black"}>
                {output}
            </CalculatorOutput>
        </CalculatorContainer>
    );
}
