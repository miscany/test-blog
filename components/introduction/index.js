import styled from "styled-components";
import SectionTwo from "./SectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SubmitBtn from "../../components/Buttons/SubmitBtn";
const Content = styled.div`
  padding-top: 6rem;
  background-color: #fff;
  text-align: center;

  .button-spec {
    display: none;
  }
`;

const SectionOne = styled.div`
  max-width: 640px;
  margin: 0 auto;

  & > * {
    margin-bottom: 2rem;
  }
  .hero {
    max-width: 100%;
    margin: 0 auto;
    margin-top: 6rem;
    img {
      width: 100%;
    }
  }
`;

const Introduction = (props) => {
  return (
    <Content>
      <SectionOne className="section">
        <h1>Welcome Primal Enjoyer</h1>
        <p className="contrast">
          {" "}
          Primal diet officially created by Aajonus Vonderplanitz. Aajonus ate
          his first bite of raw meat in September of 1976. He had released his
          first book, "We Want To Live" in 1997, and had been working with 100s
          of patients at this point.
        </p>
        <SubmitBtn text="Primal Search" link="/" className="button-spec" />
        <div className="hero">
          <img src="/logo.jpg" alt="Aajonus" />
        </div>
      </SectionOne>

      <SectionTwo />
      <SectionThree />

      <SectionFour />
    </Content>
  );
};

export default Introduction;
