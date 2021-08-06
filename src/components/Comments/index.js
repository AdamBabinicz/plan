import React, { useState } from "react";
import Popup from "../Popup";
import {
  CommentSection,
  CommentHeading,
  CommentWrap,
  Row,
  Img,
  Col,
  CHeading,
  PostDate,
  CommentText,
  ButtonReplay,
  PHeading,
  BtnLink,
  BtnWrap,
  TextArea,
  Form,
  Input,
} from "../Comments/CommentElements";
import img1 from "../../images/20.jpg";
import img2 from "../../images/21.jpg";

const Comment = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [state] = useState({
    title: "Jezus powiedział do tłumów:",
    img: img1,
    p: "„Z kim mam porównać to pokolenie? Podobne jest do przesiadujących na rynku dzieci, które głośno przymawiają swym rówieśnikom: „Przygrywaliśmy wam, a nie tańczyliście; biadaliśmy, a wy nie zawodziliście”. Przyszedł bowiem Jan, nie jadł ani nie pił, a oni mówią: „Zły duch go opętał”. Przyszedł Syn Człowieczy, je i pije, a oni mówią: „Oto żarłok i pijak, przyjaciel celników i grzeszników”. A jednak mądrość usprawiedliwiona jest przez swe czyny”.",
    em: "https://profeto.pl",
    title1: "Św. Paweł pisze:",
    img1: img2,
    p1: "„Nie bierzcie wzoru z tego świata, lecz przemieniajcie się przez odnawianie umysłu, abyście umieli rozpoznać, jaka jest wola Boża: co jest dobre, co Bogu miłe i co doskonałe” (Rz 12, 2).",
    em1: "https://opoka.org.pl",
  });

  const [buttonPopup1, setButtonPopup1] = useState(false);

  return (
    <>
      <CommentSection id="/Comment">
        <CommentHeading>Pan mówi:</CommentHeading>
        <CommentWrap>
          <Row>
            <Img src="/images/19.jpg" alt="..." />
            <Col>
              <CHeading>Topornia</CHeading>
              <PostDate>Data: 01/08/2021</PostDate>
              <CommentText>
                „Jestem bowiem świadomy zamiarów, jakie zamyślam co do was –
                wyrocznia Pana – zamiarów pełnych pokoju, a&nbsp;nie zguby, by
                zapewnić wam przyszłość, jakiej oczekujecie. Będziecie Mnie
                wzywać, zanosząc do Mnie swe modlitwy, a&nbsp;Ja was wysłucham.
                Będziecie Mnie szukać i&nbsp;znajdziecie Mnie, albowiem
                będziecie Mnie szukać z&nbsp;całego serca” (Jr 29,11-13).
              </CommentText>
            </Col>
            <ButtonReplay to="/" onClick={() => setButtonPopup1(true)}>
              Zobacz
            </ButtonReplay>
            <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
              <h3>{state.title1}</h3>
              <br />
              <img src={state.img1} alt="..." /> <br />
              <p>{state.p1}</p>
              <em>{state.em1}</em>
              <br />
            </Popup>
          </Row>
          <Row>
            <Img src="/images/15.jpg" alt="..." />
            <Col>
              <CHeading>Bałtów</CHeading>
              <PostDate>Data: 06/06/2021</PostDate>
              <CommentText>
                „Jeżeli ufność ich będzie wielka, hojności Mojej nie ma granic.
                […] Łaski z&nbsp;Mojego miłosierdzia czerpie się jednym
                naczyniem, a&nbsp;nim jest – ufność. Im dusza więcej zaufa, tym
                więcej otrzyma. Wielką mi są pociechą dusze o&nbsp;
                bezgranicznej ufności, bo w&nbsp;takie dusze przelewam wszystkie
                skarby swych łask. Cieszę się, że&nbsp;żądają wiele, bo Moim
                pragnieniem jest dawać wiele, i&nbsp;to bardzo wiele. Smucę się
                natomiast, jeżeli dusze żądają mało, zacieśniają swe serca” (Dz.
                1602; 274).
              </CommentText>
            </Col>
            <ButtonReplay primary="true" onClick={() => setButtonPopup(true)}>
              Zobacz
            </ButtonReplay>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>{state.title}</h3>
              <br />
              <img src={state.img} alt="..." /> <br />
              <p>{state.p}</p>
              <em>{state.em}</em>
              <br />
            </Popup>
          </Row>
          <PHeading>Komentarz</PHeading>
          <Form
            name="contact v1"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
            // data-netlify-honeypot="bot-field"
          >
            <Input type="hidden" name="form-name" value="contact v1" />
            {/* <Input type="hidden" name="bot-field" /> */}
            <Input type="text" name="first-name" placeholder="Imię lub Nick" />
            <Input id="email" type="email" name="email" placeholder="Email" />
            <TextArea
              type="textarea"
              name="comments"
              placeholder="Komentarz ..."
            />
            <BtnWrap>
              <BtnLink type="submit">Wyślij</BtnLink>
            </BtnWrap>
          </Form>
        </CommentWrap>
      </CommentSection>
    </>
  );
};

export default Comment;
