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

const profiles = [
  {
    image: colton,
    name: "Colton Smith",
    description: "Verified Buyer",
    message:
      "“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”",
  },
  {
    image: irene,
    name: "Irene Roberts",
    description: "Verified Buyer",
    message:
      "“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”",
  },
  {
    image: anne,
    name: "Anne Wallace",
    description: "Verified Buyer",
    message:
      "“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommendthem to everyone! ”",
  },
];

const ratedPlaces = ["Reviews", "Report Guru", "BestTech"];
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
            {ratedPlaces.map((ratedPlace) => (
              <RatingContainer>
                <StarsContainer>
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </StarsContainer>
                <RatingText>Rated 5 Stars in {ratedPlace}</RatingText>
              </RatingContainer>
            ))}
          </RatingsContainer>
        </TopContainer>

        <CardsContainer>
          {profiles.map((profile) => (
            <Card>
              <Container>
                <ImageContainer>
                  <Image src={profile.image} />
                </ImageContainer>
                <NamesContainer>
                  <Name>{profile.name}</Name>
                  <Title>{profile.description}</Title>
                </NamesContainer>
              </Container>
              <CardText>{profile.message}</CardText>
            </Card>
          ))}
        </CardsContainer>
      </InnerContainer>
      <Bottom />
    </MainContainer>
  );
};

export default Main;
