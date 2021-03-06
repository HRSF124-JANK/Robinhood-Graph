import React from 'react';
import Wrapper from '../styled-components/Wrapper';

const Header = (props) => {
	return (
		<Wrapper.Header backgroundColor={props.state.backgroundColor}>
			<Wrapper.TagsContainer>
				{props.state.tags.map((tag, idx) => {
					return <Wrapper.Tags key={idx} lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>&ensp;{tag}&ensp;</Wrapper.Tags>;
				})}
			</Wrapper.TagsContainer>
			<Wrapper.HeaderTopContainer>
				<Wrapper.Company>{`${props.state.name}`}</Wrapper.Company>
				<Wrapper.HeaderTopButtons>
					<Wrapper.AnalystHold backgroundColor={props.state.backgroundColor}>
						&emsp; &ensp; {props.state.analystHold.toFixed(0)}% Hold
						<Wrapper.AnalystHoldTooltip>{props.state.analystHold}% of analysts rate<br />{props.state.symbol} as a hold.</Wrapper.AnalystHoldTooltip>
						&ensp;
					</Wrapper.AnalystHold>
					&ensp;
					<Wrapper.RobinhoodOwners backgroundColor={props.state.backgroundColor}>
						&emsp; &ensp; {props.state.robinhoodOwners.toLocaleString()}
						<Wrapper.RobinhoodOwnersTooltip>{props.state.robinhoodOwners.toLocaleString()} people own<br />{props.state.symbol} on Robinhood.</Wrapper.RobinhoodOwnersTooltip>
						&ensp;
					</Wrapper.RobinhoodOwners>
				</Wrapper.HeaderTopButtons>
			</Wrapper.HeaderTopContainer>
			<Wrapper.FullTicker>$<Wrapper.Ticker>0</Wrapper.Ticker></Wrapper.FullTicker>
			<Wrapper.GainLoss>
				{`${props.state.gainlossSymbol}$${Math.abs(props.state.gainLoss).toFixed(2)} 
				(${props.state.gainlossSymbol}${Math.abs(props.state.gainLossPercent * 100).toFixed(2)}%) `}
				<Wrapper.ViewText>{props.state.viewText}</Wrapper.ViewText>
			</Wrapper.GainLoss>
		</Wrapper.Header>
	);
};

export default Header;
