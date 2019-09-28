import React from 'react';
import styled, { css } from 'styled-components';

import './App.css';

const Button = styled.button`
  background-color: transparent
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  // display: block;

  :hover {
    cursor: pointer;
    border: 1px solid lightblue;
  }

  ${props => {
      console.log(props);
      return (
        props.primary &&
        css`
           background: palevioletred;
           color: white;
        `
      );
  }}
`;

// Inheriting and Extending stules
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const CustomizableButton = styled(Button)`
  color: ${props => props.style.color};
  background-color: ${props => props.style.backgroundColor};
`;

function App() {
  return (
    <div className="App">
      <Button >Clickity</Button>
      <Button primary>Primary button</Button>
      <TomatoButton>Tomato button</TomatoButton>
      <CustomizableButton
      style={{color: 'white', backgroundColor: 'blue'}}
      >
        Customized Button
      </CustomizableButton>
    </div>
  );
}

export default App;
