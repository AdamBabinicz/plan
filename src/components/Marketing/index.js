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
        <MarketingHeading>Jej wiara</MarketingHeading>
        <MarketingWrap>
          <Img src="/images/14.jpg" alt="..." />
          <MarketingContent>
            <h3>Obdarzona charyzmatami</h3>
            <h5>19 grudnia 2020'</h5>
            <p>
              "Cały depozyt boskości masz w&nbsp;swoim wnętrzu. Duch Święty
              zamieszkał w&nbsp;tobie, stałeś się świątynią Ducha Świętego. Te
              skarby mądrości i&nbsp;umiejętności, te skarby związane
              z&nbsp;mocą, z&nbsp;autorytetem, z&nbsp;mądrością,
              z&nbsp;rozeznawaniem, te skarby ze&nbsp;zdolnością do tworzenia
              nowych rzeczy, te umiejętności stwarzania są w&nbsp;twoim wnętrzu,
              bo Duch Święty mieszka w&nbsp;tobie. Masz siłę i&nbsp;moc, którą
              czas ujawnić."
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
