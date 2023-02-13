import { StyledResult, } from "./styled";

export const Result = ({ result }) => {
const { currencyTo, targetAmount, currencyFrom, sourceAmount } = result;

if (result !== "")
return(
        <StyledResult>
        {`${sourceAmount}`} {currencyFrom} = {`${targetAmount.toFixed(2)} 
        ${currencyTo}`}
        </StyledResult>
      );
};
  

export default Result;
