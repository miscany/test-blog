import styled from "styled-components";
import Link from "next/link";
import COLORS from "../../Data/colors";
import Image from "next//image";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
const ArticleElem = styled.div`
  background-color: #fff;
  border: 1px solid ${(props) => props.colors.grey};
  display: flex;
  justify-content: space-between;
  width: 236px;
  h6{
    color: #000;
  }
  
  align-items: center;
  padding: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  @media only screen and (max-width: 630px) {
    width: 100%;
    .lrg-icon {
      width: 32px;
      height: 32px;
    }
    .icon-cont {
      width: 32px !important;
      height: 32px !important;
    }
  }
  @media only screen and (max-width: 400px) {
    h5 {
      font-size: 18px;
    }
  }
  &:hover {
    h5,
    h6 {
      text-decoration: underline;
    }
    .icon-cont {
      background-color: ${(props) => props.colors.darkBlue};
    }
    .lrg-icon {
      color: ${(props) => props.colors.green};
    }
  }
  .icon-cont {
    transition: background-color 0.25s ease;
    background-color: ${(props) => props.colors.green};
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 46px;
    .lrg-icon {
      transition: color 0.25s ease;
    }
    margin-left: 8px;
  }
`;

const IconCont = styled.div``;

const Article = (props) => {
  return (
    <Link href={`/article/${props.article.title}`} passHref>
      <a title={props.article.title} rel="noopener noreferrer">
        <ArticleElem colors={COLORS}>
          <h6>{props.article.title}</h6>
        </ArticleElem>
      </a>
    </Link>
  );
};

export default Article;
