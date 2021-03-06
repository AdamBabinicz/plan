import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const CommentSection = styled.div`
  /* padding-top: 7rem; */
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

export const CommentHeading = styled.h1`
  font-size: 3rem;
  padding: 2rem 5%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CommentWrap = styled.div`
  padding: 1rem 5%;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  border-top: 0.1rem solid #000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 6rem;
  }
`;

export const Col = styled.div`
  flex: 1 1 50%;
`;

export const Img = styled.img`
  max-width: 50%;
  height: auto;
  padding-top: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CHeading = styled.h2`
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  padding-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const PostDate = styled.h4`
  color: #f54748;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const CommentText = styled.p`
  color: #827f7f;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;
`;

export const ButtonReplay = styled(LinkS)`
  color: #fff;
  background: #f54748;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.7rem 3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const PHeading = styled.h2`
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  padding: 3rem;
  text-align: center;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 50%;
  height: 5rem;
  padding: 1rem 2rem;
  font-weight: 400;
  font-size: 1.8rem;
  border: 1px solid #767575;
  margin: 1rem;

  &.active,
  &:focus {
    outline: none;
    color: #767575;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TextArea = styled.textarea`
  width: 50%;
  height: 15rem;
  padding: 1rem 2rem;
  font-weight: 400;
  font-size: 1.8rem;
  border: 1px solid #767575;
  margin: 1rem;

  &.active,
  &:focus {
    outline: none;
    color: #767575;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

export const BtnLink = styled(LinkS)`
  background: #f54748;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
