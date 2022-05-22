import React from "react";
import styled from "styled-components";

const ButtonElem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-grow: 1;

  .btn-play {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 0 20px 30px;
    border-color: transparent transparent transparent #ffffff;
    cursor: pointer;
  }

  .btn-stop {
    height: 40px;
    width: 30px;
    border-left: 10px solid rgb(255, 255, 255);
    border-right: 10px solid rgb(255, 255, 255);
    cursor: pointer;
  }
`;

const Button = ({ play, isPlaying }) => {
  return (
    <ButtonElem>
      <div onClick={play} className={isPlaying ? "btn-stop" : "btn-play"}></div>
    </ButtonElem>
  );
};

export default Button;
