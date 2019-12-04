import styled from 'styled-components';

const Header = styled.div`

`;
const Company = styled.span`
  font-family: dinpro-bold
`;
const AnalystHold = styled.button`
&hover: {
  color: black;
}
`;
const AnalystHoldImage = styled.img`
  background: url('/img/analyst-off.png') no-repeat;
  height: px;
  &hover: {
    background: white url('/img/analyst-on.png') 10px 10px no-repeat;
  }
`;
const RobinhoodOwners = styled.button`
  
`;
const RobinhoodOwnersImage = styled.img`
  background: url('/img/owners-off.png') 10px 10px no-repeat;
  height:15px;
  &hover: {
    background: white url('/img/owners-on.png') 10px 10px no-repeat;
  }
`;
const Ticker = styled.div.attrs((/* props */) => ({ id: "ticker" }))`

`;
const GainLoss = styled.div`
`;

export { Header, Company, AnalystHold, RobinhoodOwners, AnalystHoldImage, RobinhoodOwnersImage, Ticker, GainLoss };