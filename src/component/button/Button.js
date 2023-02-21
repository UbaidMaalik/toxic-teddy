import styled, { css } from "styled-components";

const Button = styled.a`
  padding: 10px;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-right: 13px;
  color: #fff;
  width: 87px !important;
  height: 47px;
  cursor: pointer;

  ${(props) =>
    props.secondNavBtn &&
    css`
      padding: 10px;
      text-decoration: none;
      border: 1px solid #fff;
      border-radius: 10px;
      margin-right: 13px;
      color: #fff;
      width: 56px !important;
      height: 47px;
    `}

  ${(props) =>
    props.bannerBtn &&
    css`
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border: 1px solid #fff;
      border-radius: 10px;
      width: 150px;
      height: 47px;
      margin-right: 2em;
      color: #fff;
      background: #281e2a;
    `}
`;

export default Button;
