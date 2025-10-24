import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  over-flow: hidden;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  position: relative;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1100px;
  max-width: 1100px;
  height: 100%;
  gap: 70px;
  margin: 0px auto;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  max-width: 1100px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;
export const Heading = styled.h1`
  font-size: 54px;
  font-weight: bold;
  line-height: 85%;
  letter-spacing: -2px;
  color: ${colors.primary01};
`;
export const Text = styled.p`
  font-size: 19px;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: -0.6px;
  color: ${colors.primary02};
`;
export const RatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 542px;
  height: 100%;
  padding: 16px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  padding: 15px 25px;
  padding: 16px 32px;
  height: 49px;
  gap: 40px;
  background-color: ${colors.secondary01};
  border-radius: 8px;
  display: inline-flex;
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const FirstContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;
export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ThirdContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;
export const RatingText = styled.p`
  font-size: 17px;
  font-weight: bold;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${colors.primary01};
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  height: 270px;
  padding: 16px;
`;
export const Card = styled.div`
  display: flex;
  gap: 20px;
  border-radius: 8px;
  padding: 20px 32px;
  flex-direction: column;
  background-color: ${colors.primary01};
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Name = styled.h1`
  font-size: 17px;
  font-weight: bold;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${colors.white};
`;

export const Title = styled.h1`
  font-size: 17px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${colors.secondary02};
`;

export const CardText = styled.h1`
  font-size: 17px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.3px;
  color: ${colors.white};
`;

export const NamesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
