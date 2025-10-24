import {
  Heading,
  InnerContainer,
  MainContainer,
  Text,
  TopContainer,
  TextContainer,
  RatingsContainer,
  RatingContainer,
  RatingText,
  StarsContainer,
  FirstContainer,
  ThirdContainer,
  SecondContainer,
  CardsContainer,
  Container,
  ImageContainer,
  Image,
  NamesContainer,
  Name,
  Title,
  CardText,
  Card,
} from "./styles";

import colton from "../../assets/images/image-colton.jpg";
import irene from "../../assets/images/image-irene.jpg";
import anne from "../../assets/images/image-anne.jpg";

import Top from "../../assets/icons/bg-pattern-top-desktop.svg";
import Bottom from "../../assets/icons//bg-pattern-bottom-desktop.svg";
import Stars from "../../assets/icons/icon-star.svg";

const Main = () => {
  return (
    <MainContainer>
      <Top />
      <InnerContainer>
        <TopContainer>
          <TextContainer>
            <Heading>
              10,000+ of our <br /> users love our <br /> products.
            </Heading>
            <Text>
              We only provide great products combined with excellent <br />{" "}
              customer service. See what our satisfied customers are <br />{" "}
              saying about our services.
            </Text>
          </TextContainer>
          <RatingsContainer>
            <FirstContainer>
              <RatingContainer>
                <StarsContainer>
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </StarsContainer>
                <RatingText>Rated 5 Stars in Reviews</RatingText>
              </RatingContainer>
            </FirstContainer>
            <SecondContainer>
              <RatingContainer>
                <StarsContainer>
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </StarsContainer>
                <RatingText>Rated 5 Stars in Report Guru</RatingText>
              </RatingContainer>
            </SecondContainer>
            <ThirdContainer>
              <RatingContainer>
                <StarsContainer>
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </StarsContainer>
                <RatingText>Rated 5 Stars in BestTech</RatingText>
              </RatingContainer>
            </ThirdContainer>
          </RatingsContainer>
        </TopContainer>
        <CardsContainer>
          <FirstContainer>
            <Card>
              <Container>
                <ImageContainer>
                  <Image src={colton} />
                </ImageContainer>
                <NamesContainer>
                  <Name>Colton Smith</Name>
                  <Title>Verified Buyer</Title>
                </NamesContainer>
              </Container>
              <CardText>
                “ We needed the same printed design as the one we had ordered a
                week prior. Not only did they find the original order, but we
                also received it in time. Excellent! ”
              </CardText>
            </Card>
          </FirstContainer>
          <SecondContainer>
            <Card>
              <Container>
                <ImageContainer>
                  <Image src={irene} />
                </ImageContainer>
                <NamesContainer>
                  <Name>Irene Roberts</Name>
                  <Title>Verified Buyer</Title>
                </NamesContainer>
              </Container>
              <CardText>
                “ Customer service is always excellent and very quick turn
                around. Completely delighted with the simplicity of the purchase
                and the speed of delivery.”
              </CardText>
            </Card>
          </SecondContainer>
          <ThirdContainer>
            <Card>
              <Container>
                <ImageContainer>
                  <Image src={anne} />
                </ImageContainer>
                <NamesContainer>
                  <Name>Anne Wallace</Name>
                  <Title>Verified Buyer</Title>
                </NamesContainer>
              </Container>
              <CardText>
                “ Put an order with this company and can only praise them for
                the very high standard. Will definitely use them again and
                recommend them to everyone! ”
              </CardText>
            </Card>
          </ThirdContainer>
        </CardsContainer>
      </InnerContainer>
      <Bottom />
    </MainContainer>
  );
};

export default Main;
