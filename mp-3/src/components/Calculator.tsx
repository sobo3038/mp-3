import styled from "styled-components";
import { useState } from "react";
import { CalculatorContainer, StyledInput, ButtonContainer, CalculatorButton,CalculatorOutput } from "../StyledComponents";

export function Calculator() {
    const [firstNum, setFirstNum]=useState("");
    const [secondNum, setSecondNum]=useState("");
    const [output, setResult]=useState("");

    function getValues() {
        let first=Number(firstNum);
        let second=Number(secondNum);
        return { first, second };
    }
    function addition() {
        let values=getValues();
        setResult(String(values.first+values.second));
    }
    function subtraction() {
        let values=getValues();
        setResult(String(values.first-values.second));
    }
    function multiplication() {
        let values=getValues();
        setResult(String(values.first*values.second));
    }
    function division() {
        let values=getValues();
        if (values.second===0) {
            setResult("Error");
        } else {
            setResult(String(values.first/values.second));
        }
    }
    function power() {
        let values= getValues();
        let result =1;
        if (values.second>=0) {
            for (let i=0; i<values.second; i++) 
            {
                result *= values.first;
            }
        } 
        else {
            for (let i=0; i<-values.second; i++) 
            {
                result*=values.first;
            }
            result= 1/result;
        }
        setResult(String(result));
    }
    function clearFields() {
        setFirstNum("");
        setSecondNum("");
        setResult("");
    }

    return (
        <CalculatorContainer>
            <h2>Calculator</h2>
            <label>First Number:</label>
            <StyledInput type="number" value={firstNum} onChange={(e) => setFirstNum(e.target.value)} />
            <label>Second Number:</label>
            <StyledInput type="number" value={secondNum} onChange={(e) => setSecondNum(e.target.value)}/>

            <ButtonContainer>
                <CalculatorButton onClick={addition}>+</CalculatorButton>
                <CalculatorButton onClick={subtraction}>-</CalculatorButton>
                <CalculatorButton onClick={multiplication}>*</CalculatorButton>
                <CalculatorButton onClick={division}>/</CalculatorButton>
                <CalculatorButton onClick={power}>**</CalculatorButton>
                <CalculatorButton onClick={clearFields}>Clear</CalculatorButton>
            </ButtonContainer>

            <CalculatorOutput color={output === "Error" || Number(output) < 0 ? "red" : "black"}>
                {output}
            </CalculatorOutput>
        </CalculatorContainer>
    );
}
