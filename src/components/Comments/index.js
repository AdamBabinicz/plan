import React from "react";
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
  ButtonWrap,
} from "../Comments/CommentElements";

const Comment = () => {
  return (
    <>
      <CommentSection id="/Comment">
        <CommentHeading>Pan mówi:</CommentHeading>
        <CommentWrap>
          <Row>
            <Img src="/images/19.jpg" alt="..." />
            <Col>
              <CHeading>Topornia</CHeading>
              <PostDate>Posted: 01/08/2021</PostDate>
              <CommentText>
                „Jestem bowiem świadomy zamiarów, jakie zamyślam co do was –
                wyrocznia Pana – zamiarów pełnych pokoju, a nie zguby, by
                zapewnić wam przyszłość, jakiej oczekujecie. Będziecie Mnie
                wzywać, zanosząc do Mnie swe modlitwy, a Ja was wysłucham.
                Będziecie Mnie szukać i znajdziecie Mnie, albowiem będziecie
                Mnie szukać z całego serca” (Jr 29,11-13).
              </CommentText>
            </Col>
            <ButtonReplay to="/">Replay</ButtonReplay>
          </Row>
          <Row>
            <Img src="/images/15.jpg" alt="..." />
            <Col>
              <CHeading>Bałtów</CHeading>
              <PostDate>Posted: 06/06/2021</PostDate>
              <CommentText>
                „Jeżeli ufność ich będzie wielka, hojności Mojej nie ma granic.
                […] Łaski z Mojego miłosierdzia czerpie się jednym naczyniem, a
                nim jest – ufność. Im dusza więcej zaufa, tym więcej otrzyma.
                Wielką mi są pociechą dusze o bezgranicznej ufności, bo w takie
                dusze przelewam wszystkie skarby swych łask. Cieszę się, że
                żądają wiele, bo Moim pragnieniem jest dawać wiele, i to bardzo
                wiele. Smucę się natomiast, jeżeli dusze żądają mało,
                zacieśniają swe serca” (Dz. 1602; 274).
              </CommentText>
            </Col>
            <ButtonReplay to="/">Replay</ButtonReplay>
          </Row>
          <PHeading>POST: Twój komentarz</PHeading>
          <Form>
            <Input type="text" placeholder="Imię lub Nick" />
            <Input type="text" placeholder="Email" />
            <TextArea type="textarea" placeholder="Komentarz ..." />
            <BtnWrap>
              <BtnLink to="/">Wyślij</BtnLink>
            </BtnWrap>
          </Form>
        </CommentWrap>
      </CommentSection>
    </>
  );
};

export default Comment;
