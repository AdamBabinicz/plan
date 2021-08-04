import React from "react";
import {
  BlogSection,
  BlogHeading,
  BlogWrap,
  Col,
  Img,
  BlogContent,
} from "./BlogElement";

const Blog = () => {
  return (
    <>
      <BlogSection id="/Blog">
        <BlogHeading>Blog</BlogHeading>
        <BlogWrap>
          <Col>
            <Img src="/images/20.jpg " alt="..." />
            <BlogContent>
              <h3>Bóg ma dla Ciebie niezwykły plan</h3>
              <a
                href="https://adonai.pl/powolanie/?id=6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="subtitle">adonai.pl</p>
              </a>
              <p>
                "Niech będzie błogosławiony Bóg i&nbsp;Ojciec Pana naszego
                Jezusa Chrystusa: On napełnił nas wszelkim błogosławieństwem
                duchowym na wyżynach niebieskich - w&nbsp;Chrystusie. W&nbsp;Nim
                bowiem wybrał nas przed założeniem świata, abyśmy byli święci
                i&nbsp;nieskalani przed Jego obliczem. Z&nbsp;miłości
                przeznaczył nas dla siebie jako przybranych synów przez Jezusa
                Chrystusa"
              </p>
              <p>(Ef 1, 3-5).</p>
            </BlogContent>
          </Col>
          <Col>
            <Img src="/images/21.jpg " alt="..." />
            <BlogContent>
              <h3>Bóg pragnie mojego szczęścia</h3>
              <a
                href="http://marianki.eu/wspolnota/swiadectwa/47-careers-additional-info/114-bozy-plan.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="subtitle">marianki.eu</p>
              </a>
              <p>
                "Trzeba wiary, aby nie ulec zbyt racjonalistycznemu myśleniu.
                Trzeba ciszy, by Bóg mógł mówić. Potrzeba nam serca otwartego,
                by Jego łaska mogła działać cuda i&nbsp;odwagi, by to, co trudne
                nie&nbsp;przeraziło, nie&nbsp;zniechęciło. Trzeba zaufania, by
                to, co niezrozumiałe i&nbsp;trudne Jemu oddać oraz miłości, by
                odpowiedzieć - tak - Miłości... Warto było walczyć i&nbsp;warto
                walczyć nadal o&nbsp;to, by to Jego wola się spełniała..."
              </p>
              <p>(S.M. Małgorzata, s. Maryi Niepokalanej).</p>
            </BlogContent>
          </Col>
        </BlogWrap>
      </BlogSection>
    </>
  );
};

export default Blog;
