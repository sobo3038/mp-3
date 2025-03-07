import styled from "styled-components";
import { useState } from "react";
import { CalculatorContainer, StyledInput, ButtonContainer, CalculatorButton,CalculatorOutput } from "../StyledComponents";

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
            <StyledInput
                type="number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />

            <label>Second Number:</label>
            <StyledInput
                type="number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />

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
