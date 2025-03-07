import styled from "styled-components";
import { useState } from "react";
import {CalculatorContainer,Input,ButtonContainer, CalcButton, Output } from "../StyledComponents";


export const CalculatorContainer = styled.div`
    width: 400px;
    margin: 20px auto;
    text-align: center;
    border: 10px solid #1e3a8a;
    border-radius: 30px;
    background-color: white;
    padding: 10px;
`;

export const Input = styled.input`
    width: 95%;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    padding: 10px;

`;

export const ButtonContainer = styled.div`
    margin: 10px;
`;

export const CalcButton = styled.button`
    padding: 8px;
    margin: 5px;
    font-size: 15px;
    background-color: #1e3a8a;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: blue;
    }
`;

export const Output = styled.h3`
    color: ${(props) => (props.color ? props.color : "black")};
`;

export function Calculator() {
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    function getValues() {
        return {
            first: Number(firstNumber),
            second: Number(secondNumber),
        };
    }

    function addition() {
        const { first, second } = getValues();
        setOutput(String(first + second));
    }

    function subtraction() {
        const { first, second } = getValues();
        setOutput(String(first - second));
    }

    function multiplication() {
        const { first, second } = getValues();
        setOutput(String(first * second));
    }

    function division() {
        const { first, second } = getValues();
        if (second === 0) {
            setOutput("Error");
        } else {
            setOutput(String(first / second));
        }
    }

    function power() {
        const { first, second } = getValues();
        let result = 1;
        if (second >= 0) {
            for (let i = 0; i < second; i++) {
                result *= first;
            }
        } else {
            for (let i = 0; i < -second; i++) {
                result *= first;
            }
            result = 1 / result;
        }
        setOutput(String(result));
    }

    function clearFields() {
        setFirstNumber("");
        setSecondNumber("");
        setOutput("");
    }

    return (
        <CalculatorContainer>
            <h2>Calculator</h2>
            <label>First Number:</label>
            <Input
                type="number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />

            <label>Second Number:</label>
            <Input
                type="number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />

            <ButtonContainer>
                <CalcButton onClick={addition}>+</CalcButton>
                <CalcButton onClick={subtraction}>-</CalcButton>
                <CalcButton onClick={multiplication}>*</CalcButton>
                <CalcButton onClick={division}>/</CalcButton>
                <CalcButton onClick={power}>**</CalcButton>
                <CalcButton onClick={clearFields}>Clear</CalcButton>
            </ButtonContainer>

            <Output color={output === "Error" || Number(output) < 0 ? "red" : "black"}>
                {output}
            </Output>
        </CalculatorContainer>
    );
}
