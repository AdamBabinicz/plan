import React from "react";

import {
  AboutSection,
  AboutContainer,
  HeadingText,
  Row,
  BlogContent,
  BlogDate,
  BlogDesc,
  BlogHeading,
  BlogImg,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutSection id="/About">
        <HeadingText>
          Jaka<span>jest?</span>
        </HeadingText>
        <AboutContainer>
          <Row>
            <BlogContent>
              <BlogImg src="/images/17.jpg" />
            </BlogContent>
            <BlogContent>
              <BlogHeading>W życiu kieruje się planem Bożym</BlogHeading>
              <BlogDate>23 czerwca 2019'</BlogDate> <br />
              <BlogDesc>
                „Gdyż Pan wodzi oczyma swymi po całej ziemi, aby wzmacniać tych,
                którzy szczerym sercem są przy nim”.
                <p>
                  <em>II Księga Kronik 16,9</em>
                </p>
              </BlogDesc>
              <br />
              <BlogDesc>
                „To, co muszę zrobić, by rozpoznać Boży plan w moim życiu, to
                przemienić swój sposób myślenia. Bez tego nie jestem w stanie
                rozeznać tego, co Bóg chce robić w moim życiu. Bez tego nie
                jestem w stanie podejmować właściwych decyzji …”.
                <p>
                  <em>dr Anna Saj</em>
                </p>
              </BlogDesc>
              <br />
              <BlogDesc>
                „Bóg pyta o nasze plany i poprzez wydarzenia pokazuje, czy
                idziemy w dobrą czy w złą stronę. To, co przede wszystkim nam
                daje, to miłość i wolność. A główne pytanie miłości to: co mogę
                dla ciebie zrobić? On ma szerszą perspektywę, wie, co nam
                pomoże, a co zaszkodzi, ale daje nam wolność i możliwość
                samodzielnego podejmowania decyzji.”
                <a
                  href="https://deon.pl/wiara/duchowosc/jak-wyglada-plan-boga-na-twoje-zycie,445217"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <em>deon.pl</em>
                  </p>
                </a>
              </BlogDesc>
              <br />
              <BlogDesc>
                "Podstawowa sprawa to wyciągnięcie wniosków z tego, co mówimy
                codziennie, czyli z Modlitwy Pańskiej - „bądź wola Twoja”.
                Jesteśmy zobowiązani do bardzo prostego i logicznego patrzenia
                na swoje życie. Jeżeli wszystko jest w ramach Opatrzności Bożej,
                wówczas to co się dzieje we mnie, wokół mnie jest znakiem Bożego
                działania."
                <a
                  href="https://www.fronda.pl/a/jak-rozpoznac-bozy-plan-na-twoje-zycie,53528.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <em>www.fronda.pl </em>
                  </p>
                </a>
              </BlogDesc>
            </BlogContent>
          </Row>
          <Row>
            <BlogContent>
              <BlogImg src="/images/16.jpg" />
            </BlogContent>
            <BlogContent>
              <BlogHeading>
                „Zaufaj Panu z całego serca i nie polegaj na własnym rozumie!”
                (Prz 3:5)
              </BlogHeading>
              <BlogDate>2020'</BlogDate> <br />
              <BlogDesc>
                „A wiemy, że Bóg współdziała we wszystkim ku dobremu z tymi,
                którzy Boga miłują, to jest z tymi, którzy według postanowienia
                jego są powołani” (List do Rzymian 8,28).
              </BlogDesc>
              <BlogDesc>
                „Gdyby Mi dusze ufały więcej, miałaby ziemia tylu świętych, ilu
                jest ludzi na ziemi” (Pan Jezus do s. Leoni Nastał).
                <a
                  href="https://milujciesie.pl/bog-ma-dobry-plan.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <em>milujciesie.pl</em>
                  </p>
                </a>
              </BlogDesc>
              <BlogDesc>
                „Powiadam ci, że się tym zajmę, jak lekarz. Uczynię nawet cud,
                jeśli będzie to potrzebne. […] Ufaj zatem tylko Mi, odpocznij we
                Mnie, całkowicie się na Mnie zdaj. Czynię cuda proporcjonalnie
                do twojego pełnego oddania się Mi i do oderwania się od twoich
                myśli. Rozrzucam skarby łask, kiedy jesteś ubogi, całkowicie”
                (Pan Jezus do ks. Dolindo).
                <a
                  href="https://milujciesie.pl/bog-ma-dobry-plan.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <em>milujciesie.pl</em>
                  </p>
                </a>
              </BlogDesc>
              <BlogDesc>
                „Żadna dusza, która wzywała miłosierdzia Mojego, nie zawiodła
                się ani nie doznała zawstydzenia” (Dz. 1541).
              </BlogDesc>
              <BlogDesc>
                „Troszczcie się o Królestwo Boże, a wszystko inne będzie wam
                dodane” (Łk 12,30).
              </BlogDesc>
              <BlogDesc>
                „Królestwo Boże to życie Moje w duszy ludzkiej” (Dz. 1784).
              </BlogDesc>
            </BlogContent>
          </Row>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

export default About;
