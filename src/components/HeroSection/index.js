import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  HeroMain,
  HeroWrap,
  Col,
  TextWrap,
  ButtonWrap,
  LinkBtn,
} from "./HeroElements";
import img1 from "../../images/18.jpg";
import Popup from "../Popup";

const HeroSection = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [state] = useState({
    title: "„Człowiek został powołany na świat, a więc jest światu potrzebny…”",
    img: img1,
    p0: "Plan to raczej powołanie, jakaś zmiana, nasze szczęście … Wyraz Jego miłości, która dla nas chce jak najlepiej. Choć to wszystko wciąż jest gotowe dla nas, potrzebna jest nasza zgoda – …",
    em: "http://doniek.poczekaj.pl",
  });
  return (
    <>
      <HeroMain id="Home">
        <HeroWrap>
          <Col>
            <Carousel>
              <Carousel.Item interval={6000}>
                <img
                  className="d-block w-100"
                  src="/images/11.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Beata</h2>
                  <p>
                    Od 2016' działa w&nbsp;Katolickiej Odnowie w&nbsp;Duchu Św.
                    "RESURREXIT" w&nbsp;Radomiu
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={6000}>
                <img
                  className="d-block w-100"
                  src="/images/23.jpg"
                  alt="Fifth slide"
                />
                <Carousel.Caption>
                  <h2>Beata</h2>
                  <p>Jasełka.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={6000}>
                <img
                  className="d-block w-100"
                  src="/images/22.jpg"
                  alt="Fourth slide"
                />
                <Carousel.Caption>
                  <h2>Beata</h2>
                  <p>Przedstawienie Bożego Narodzenia.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={6000}>
                <img
                  className="d-block w-100"
                  src="/images/13.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2>Beata</h2>
                  <p>
                    Swoje życie poświęciła całkowicie Bogu, rodzinie
                    i&nbsp;ludziom.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={6000}>
                <img
                  className="d-block w-100"
                  src="/images/12.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h2>Beata</h2>
                  <p>Animatorka życia duchowego</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <TextWrap>
              <h3>"Dobrze, że jesteś"</h3> <br />
              <h4>
                "Nie mamy poddawać się pod presję tego świata, ale mamy
                przemieniać się poprzez odnowę naszego myślenia."
              </h4>
              <p>
                <em>dr Anna Saj</em>
              </p>
              <p>
                "Wielu braci i&nbsp;wiele sióstr uważa, że&nbsp;jeśli
                w&nbsp;przeszłości grzeszyli i&nbsp;zawiedli Boga, to nie są
                w&nbsp;już stanie wypełnić Bożego planu dla swojego życia.
                Myślą, że&nbsp;gdyby w&nbsp;młodości całkowicie poddali swoje
                życie Bogu i&nbsp;żyli zgodnie z&nbsp;Jego wolą, wtedy nie
                narobiliby bałaganu w&nbsp;swoim życiu i&nbsp;mogliby żyć
                zgodnie z&nbsp;Jego planem, a&nbsp;teraz jest już za&nbsp;późno.
                Zgodnie z&nbsp;ludzką logiką brzmi to sensownie. Ale gdy
                spojrzymy do Słowa Bożego, wówczas przekonamy się, że&nbsp;Boże
                myśli oraz&nbsp;Boże drogi są zupełnie inne niż nasze.
                Że&nbsp;nawet dla takich osób nadal jest nadzieja."
              </p>
              <a href="https://www.chlebznieba.pl/index.php?id=929">
                <p>
                  <em>www.chlebxnieba.pl</em>
                </p>
              </a>
            </TextWrap>
            <ButtonWrap>
              <LinkBtn to="/Blog" primary="true">
                Czytaj
              </LinkBtn>
              <LinkBtn
                to="/"
                primary="true"
                onClick={() => setButtonPopup(true)}
              >
                Zobacz
              </LinkBtn>
            </ButtonWrap>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>{state.title}</h3>
              <br /> <br />
              <img src={state.img} alt="..." /> <br />
              <p>{state.p0}</p>
              <em>{state.em}</em>
              <br />
            </Popup>
          </Col>
        </HeroWrap>
      </HeroMain>
    </>
  );
};

export default HeroSection;
