import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import COLORS from "../../../Data/colors";
import SectionIcon from "./SectionIcon";
import ArticleTitle from "./ArticleTitle";
const Container = styled.div`
  text-align: left;
  p {
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
    list-style: none;
  }
  li::before {
    content: "•";
    color: ${(props) => props.colors.green};
    display: inline-block;
    width: 1em;
    margin-left: 1rem;
  }
`;
const Header = styled.div`
  background-color: ${(props) => props.colors.ultraLightBlue};
  padding: 2rem 0;
  position: relative;
`;

const SelectCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ArticlesCont = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  .text-content {
    border: 1px solid ${(props) => props.colors.darkBlue};
  }
`;

const Article = styled.article`
  .article-text {
    width: 100%;
    background-color: ${(props) => props.colors.veryLightBlue};
    padding: 0.5rem;
    border: 1px solid ${(props) => props.colors.darkBlue};
  }
`;

const index = () => {
  const sections = [
    { title: 'Read "We Want To Live"', index: "1", link: "#one" },
    { title: "Listen To The Workshop", index: "2", link: "#two" },
    { title: "Listen To One Q&A (Optional)", index: "3", link: "#three" },
    { title: "Find Farms or Butchers Near You", index: "4", link: "#four" },
    { title: "Time To Eat Raw Meat", index: "5", link: "#five" },
  ];
  const SectionElems = sections.map((section) => {
    return (
      <SectionIcon
        key={nanoid()}
        title={section.title}
        index={section.index}
        link={section.link}
      />
    );
  });
  return (
    <Container className="section" colors={COLORS}>
      <Header colors={COLORS} className="sm-spacer">
        <h2>How Can You Start?</h2>
      </Header>
      <SelectCont className="md-spacer">{SectionElems}</SelectCont>
      <ArticlesCont colors={COLORS}>
        <Article colors={COLORS}>
          <ArticleTitle
            title='Read "We Want To Live" '
            index="1"
          ></ArticleTitle>
          <div className="article-text">
            <p>
              Read The Full Book “We Want To Live” By Aajonus Vonderplanitz. I’m
              not providing it here, but feel free to buy it in hardcopy, online
              pdf or I’m sure you can find it online for free.
            </p>
          </div>
        </Article>
        {/* End of Article #1*/}

        <Article colors={COLORS}>
          <ArticleTitle title="Listen To The Workshop" index="2" />
          <div className="article-text">
            <p>
              Listen to one of the workshops providing by Aajonus and listed
              here. It provides the basic introduction to the diet. It clarifies
              the theory behind raw meat, bacteria, and viruses.
            </p>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=ZJbgJmXIxAo&list=PLA4-m0Jyxx3mHBv5fxOwmyWYton1z_4qk"
              className="link"
            >
              Aajonus School of Life On Youtube
            </a>
          </div>
        </Article>
        {/* End of Article #2*/}

        <Article colors={COLORS}>
          <ArticleTitle title="Listen To One Q&A" index="3" />
          <div className="article-text">
            <p>
              The question & answers go into more in depth questions, so it is
              optional for beginners. It is live recordings of Aajonus talking
              about specific health conditions and how to reverse them with diet
              alone and specific formulas.
            </p>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCdHSzt83x7LjGcdNTJu2LSA/videos"
              className="link"
            >
              Q&As On Youtube
            </a>
          </div>
        </Article>
        {/* End of Article #3*/}

        <Article colors={COLORS}>
          <ArticleTitle title="Find Farms or Butchers Near You" index="4" />
          <div className="article-text">
            <p>
              Depending on your country there are most likely some sort of
              online tool to find high quality grass fed farms or butchers. The
              only problem with buying from farms is it typically frozen. You
              may need to buy from butchers, or specific buying clubs to get
              fresh. You can still get high quality dairy from these farms.{" "}
            </p>
            <h5 className="mar-one">Questions You Should Ask Include</h5>
            <ul className="mar-one">
              <li>Is This Grass Fed/Organic?</li>
              <li>Was This Chicken Fed Soy?</li>
              <li>Do your animals recieve hormones/vaccines/dewormers?</li>
              <li>Do you have organs & bone marrow?</li>
            </ul>

            <h5 className="mar-one">Here Are Some Online Tools For The US</h5>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.realmilk.com/raw-milk-finder/"
                  className="link"
                >
                  https://www.realmilk.com/raw-milk-finder/
                </a>
              </li>
              <li>
                <a target="_blank" href="" className="link"></a>
              </li>
              <li>
                <a target="_blank" href="" className="link"></a>
              </li>
            </ul>
          </div>
        </Article>
        {/* End of Article #4*/}

        <Article colors={COLORS}>
          <ArticleTitle title="Time To Eat Raw Meat" index="5" />
          <div className="article-text">
            <p>
              I would personally suggest just diving right into your first raw
              meal. Here is a good steak tartare recipe{" "}
              <a href="#" className="link">
                Dead Link
              </a>
              .
            </p>
            <h5 className="mar-one">
              Some foods which should be easy to get started with include...
            </h5>
            <ul className="mar-one">
              <li>
                Milkshakes (raw milk, eggs, honey, fruit (optional)){" "}
                <a href="#" className="link">
                  Dead Link
                </a>
              </li>
              <li>
                Fresh red meat (feel free to put this sauce on it){" "}
                <a href="#" className="link">
                  Dead Link
                </a>
              </li>
              <li>
                Raw Fish (try this recipe){" "}
                <a href="#" className="link">
                  Dead Link
                </a>
              </li>
              <li> Oysters</li>
              <li>Raw Dairy (raw cheese, butter</li>
              <li>
                Ice Cream (try this recipe){" "}
                <a href="#" className="link">
                  Dead Link
                </a>
              </li>
            </ul>
            <h5 className="mar-one">
              Some advanced foods you may not be ready for...
            </h5>
            <ul>
              <li></li>
            </ul>
          </div>
        </Article>
        {/* End of Article #5*/}
      </ArticlesCont>
    </Container>
  );
};

export default index;
