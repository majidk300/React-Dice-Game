import { useState } from "react"
import styled from "styled-components"

const RoleDice = ({roleDice,currentDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
};

export default RoleDice


const DiceContainer = styled.div`
   margin-top: 48px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   

   p{
   font-size: 24px;
   }

   .dice{
      cursor: pointer;
   }

`;
