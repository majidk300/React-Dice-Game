import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {

    const arrNumber = [
        1,2,3,4,5,6
    ]

    const numberSelectorSelector = (value) => {
      setSelectedNumber(value);
      setError("");
    }
   
    console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
        {
          arrNumber.map((value,i) =>
          <Box 
           isSelected={value===selectedNumber}
           key={i} onClick={ () => numberSelectorSelector(value)}>{value}</Box>
        )
        }
        </div>

        <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap; /* Enables wrapping for smaller screens */
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    align-items: center; /* Center-align for tablets */
    p {
      font-size: 18px;
    }
    .flex {
      gap: 16px;
    }
  }

  @media (max-width: 480px) {
    align-items: center;
    p {
      font-size: 14px;
    }
    .flex {
      gap: 12px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 700;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  /* Responsive Styles */
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    height: 48px;
    width: 48px;
    font-size: 10px;
  }
`;