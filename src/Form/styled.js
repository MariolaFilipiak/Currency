import styled from "styled-components";

export const Fieldset = styled.fieldset`
  padding: 10px;
  background-color: hsla(0, 0%, 75%, 0.874);
  max-width: 800px;
  margin: 0 auto;
  min-height: 490px;

  @media (max-width: 767px) {
    max-width: 100%;
    margin: 0 auto;
    min-height: 490px;
  }
`;

export const Legend = styled.legend`
  border: none;
  background-color: #343434;
  color: #eee;
  padding: 10px;
  font-size: 20px;
  text-align: left;
`;

export const LabelText = styled.span`
  display: inline-block;
  width: 35%;
  text-align: left;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;

  @media (max-width: 767px) {
    width: 90%;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    font-size: 17px;
    padding: 8px;
  }
`;

export const Input = styled.input`
  width: 55%;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  height: 25px;

  @media (max-width: 767px) {
    width: 90%;
    display: inline-block;
    text-align: left;
    padding: 5px;
    margin: 0 auto;
    font-size: 17px;
    text-align: center;
  }
`;

export const Current = styled.select`
  width: 55%;
  text-align: center;
  padding: 5px;
  font-size: 20px;
  height: 25px;

  @media (max-width: 767px) {
    width: 90%;
    display: inline-block;
    text-align: left;
    padding: 5px;
    margin: 0 auto;
    text-align: center;
    font-size: 17px;
  }
`;

export const Footer = styled.p`
  text-align: center;
  padding: 10px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
  }
`;

export const Loading = styled.p`
  width: 700px;
  height: 400px;
  padding: 25px;
display: flex;
justify-content:center;
align-items:center;
  max-width: 100%;
  font-size: 30px;
  line-height: 2;
  margin:0 auto;

  @media (max-width: 767px) {
    margin: 0 auto;
    width: 80%;
    text-align: center;
  }
`;

export const ErrorText = styled.p`
  color: red;
  width: 700px;
  height: 400px;
  padding: 25px;
  display: flex;
justify-content:center;
align-items:center;
  max-width: 100%;
  font-size: 30px;
  line-height: 2;

  @media (max-width: 767px) {
    margin: 0 auto;
    width: 80%;
    text-align: center;
  }
`;

export const ResultWindow = styled.span`
  display: inline-block;
  padding: 5px;
  margin-top: 8px;
  border: solid 1px #6c6c6c;
  background-color: white;
  width: 55%;
  height: 25px;


  @media (max-width: 767px) {
    width: 90%;
    display: inline-block;
    padding: 5px;
    font-size: 17px;
    text-align: center;
  }
`;



