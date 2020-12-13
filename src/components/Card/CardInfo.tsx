import { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCurrencySymbol } from '../../utils/getCurrencySymbol';
import { getCurrentLocation } from '../../utils/getCurrentLocation';
import { getDistance } from '../../utils/getDistance';
import { getFormattedStartTime } from '../../utils/getFormattedStartTime';

interface IProps {
  title: string;
  start: string;
  latitude: number;
  longitude: number;
  cost: number;
  currency: string;
}

interface ILocation {
  lat: number;
  long: number;
}

const Container = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-top: 12px;
  border-radius: 12px;
  height: 38px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 18px;
`;

const EventInfo = styled.div``;

const Title = styled.span`
  line-height: 23px;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoText = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 15px;
  letter-spacing: normal;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
`;

const Ellipse = styled.div`
  width: 2px;
  height: 2px;
  margin: 6.5px 6px;
  background-color: rgba(255, 255, 255, 0.54);
`;

const EventPriceContainer = styled.div`
  height: 21px;
  border: solid 1px rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  text-align: center;
`;

const Price = styled.span`
  line-height: 15px;
  color: #fff;
  letter-spacing: normal;
  font-size: 12px;
  opacity: 0.6;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  margin: 4px 18px;
`;

const CardInfo: FunctionComponent<IProps> = ({
  title,
  start,
  latitude,
  longitude,
  cost,
  currency
}) => {
  const [userLocation, setUserLocation] = useState<ILocation>({
    lat: 0,
    long: 0
  });
  const formattedTime = getFormattedStartTime(start);

  useEffect(() => {
    getCurrentLocation(setUserLocation);
  }, []);

  const getCost = (): string => {
    if (cost === 0) {
      return 'free';
    }
    return getCurrencySymbol(currency) + cost;
  };

  return (
    <Container>
      <EventInfo>
        <Title>{title}</Title>
        <InfoContainer>
          <InfoText>{formattedTime.date}</InfoText>
          <Ellipse />
          <InfoText>{formattedTime.time}</InfoText>
          <Ellipse />
          <InfoText>
            {getDistance(userLocation, { lat: latitude, long: longitude })}
          </InfoText>
        </InfoContainer>
      </EventInfo>
      <EventPriceContainer>
        <Price>{getCost()}</Price>
      </EventPriceContainer>
    </Container>
  );
};

export default CardInfo;
