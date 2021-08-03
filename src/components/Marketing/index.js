import React from "react";
import {
  MarketingSection,
  MarketingHeading,
  MarketingWrap,
  Img,
  MarketingContent,
} from "../Marketing/MarketingElements";

const Marketing = () => {
  return (
    <>
      <MarketingSection id="/Marketing">
        <MarketingHeading>Wiara</MarketingHeading>
        <MarketingWrap>
          <Img src="/images/14.jpg" alt="..." />
          <MarketingContent>
            <h3>Charyzmat</h3>
            <h5>19 grudnia 2020'</h5>
            <p>
              "Cały depozyt boskości masz w swoim wnętrzu. Duch Święty
              zamieszkał w tobie, stałeś się świątynią Ducha Świętego. Te skarby
              mądrości i umiejętności, te skarby związane z mocą z autorytetem,
              z mądrością, z rozeznawaniem te skarby ze zdolnością do tworzenia
              nowych rzeczy, te umiejętności stwarzania są w twoim wnętrzu, bo
              Duch Święty mieszka w tobie. Masz siłę i moc, którą czas ujawnić."
            </p>
            <p>
              <em>dr Anna Saj</em>
            </p>
          </MarketingContent>
        </MarketingWrap>
      </MarketingSection>
    </>
  );
};

export default Marketing;
