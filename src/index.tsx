import React from "react"
import ReactDOM from 'react-dom';
import styled from './style.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <h1 className={styled.hello}>Hello, world!</h1>
  </React.StrictMode>,
  document.getElementById('root')
);