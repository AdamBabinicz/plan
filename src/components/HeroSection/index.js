import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
    p: "Plan to raczej powołanie, jakaś zmiana, nasze szczęście… Wyraz Jego miłości, która dla nas chce jak najlepiej. Choć to wszystko wciąż jest gotowe dla nas, potrzebna jest nasza zgoda – współpraca z „planem Boga”, bo tylko wtedy zaakceptujemy w pełni swojej wolności to wszystko, w czym możemy uczestniczyć, co może dać nam wówczas Bóg.",
    em: "http://doniek.poczekaj.pl/bozy-plan",
  });
  return (
    <>
      <HeroMain id="Home">
        <HeroWrap>
          <Col>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/images/11.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Beata</h2>
                  <p>
                    Od 2016' działa w Katolickiej Odnowie w Duchu Św.
                    "RESURREXIT" w Radomiu
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
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
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/13.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2>Beata</h2>
                  <p>
                    Swoje życie poświęciła całkowicie Bogu, rodzinie i ludziom.
                  </p>
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
                "Wielu braci i wiele sióstr uważa, że jeśli w przeszłości
                grzeszyli i zawiedli Boga, to nie są w już stanie wypełnić
                Bożego planu dla swojego życia. Myślą, że gdyby w młodości
                całkowicie poddali swoje życie Bogu i żyli zgodnie z Jego wolą,
                wtedy nie narobiliby bałaganu w swoim życiu i mogliby żyć
                zgodnie z Jego planem, a teraz jest już za późno. Zgodnie z
                ludzką logiką brzmi to sensownie. Ale gdy spojrzymy do Słowa
                Bożego, wówczas przekonamy się, że Boże myśli oraz Boże drogi są
                zupełnie inne niż nasze. Że nawet dla takich osób nadal jest
                nadzieja."
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
              <p>{state.p}</p>
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
