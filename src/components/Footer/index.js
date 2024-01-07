import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  MdLocationOn,
  MdEmail,
  MdLocalPhone,
  MdChevronRight,
} from "react-icons/md";
import {
  FooterSection,
  FooterWrap,
  FooterLogo,
  FooterLink,
  Col,
  Img,
  ContactInfo,
  FooterMenu,
  SocialIcon,
  SocialLink,
  ButtonReplay,
  LinkBtn,
  ImageBox,
  Input,
  TextArea,
  Form,
  CopySection,
  LinkCopy,
} from "./FooterElement";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterWrap>
          <Col>
            <FooterLogo to="Home">
              <Img src="/images/2.png" alt="..." />
            </FooterLogo>
            <ContactInfo>
              <span>
                <MdLocationOn /> Radom
              </span>
              <span>
                <MdLocalPhone /> xxx xxx xxx
              </span>
              <span>
                <MdEmail />
                {<a href="mailto:parafia@annuarita.pl">parafia@annuarita.pl</a>}
              </span>
            </ContactInfo>
            <SocialIcon>
              <SocialLink
                to="//www.facebook.com/beata.podymniak.96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </SocialLink>
              <SocialLink
                to="//www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                to="//twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink
                to="//www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialLink>
            </SocialIcon>
          </Col>
          <Col>
            <h3>Szybkie linki</h3>
            <FooterMenu>
              <FooterLink to="Home">
                <MdChevronRight />
                Start
              </FooterLink>
              {/* <FooterLink to="/">
                <MdChevronRight />
                Service
              </FooterLink> */}
              <FooterLink to="/About">
                <MdChevronRight />
                Beata
              </FooterLink>
              <FooterLink to="/Marketing">
                <MdChevronRight />
                Wiara
              </FooterLink>
              <FooterLink to="/Blog">
                <MdChevronRight />
                Blog
              </FooterLink>
              <FooterLink to="/Contact">
                <MdChevronRight />
                Kontakt
              </FooterLink>
            </FooterMenu>
          </Col>
          <Col>
            <h3>Instagram</h3>
            <ImageBox>
              <img src="/images/1.svg" alt="..." />
              <img src="/images/10.svg" alt="..." />
              <img src="/images/7.svg" alt="..." />
              <img src="/images/5.svg" alt="..." />
            </ImageBox>
          </Col>
          <Col>
            <h3>Kontakt</h3>
            <Form>
              <Input type="text" placeholder="Imię lub Nick" />
              <Input type="email" placeholder="Email" />
              <TextArea type="textarea" placeholder="Wiadomość" />
              <ButtonReplay>
                <LinkBtn type="submit">Wyślij</LinkBtn>
              </ButtonReplay>
            </Form>
          </Col>
        </FooterWrap>
      </FooterSection>
      <CopySection>
        <p>
          Radom 2021 - {new Date().getFullYear()}.
          <LinkCopy
            to="//a-g.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ag
          </LinkCopy>
        </p>
      </CopySection>
    </>
  );
};

export default Footer;
