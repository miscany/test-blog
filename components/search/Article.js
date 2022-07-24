import styled from "styled-components";
import Link from "next/link";
import COLORS from "../../Data/colors";
import Image from "next//image";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
const ArticleElem = styled.div`
  background-color: #fff;
  border: 1px solid ${(props) => props.colors.darkBlue};
  display: flex;
  justify-content: space-between;
  width: 236px;
  height: 120px;
  align-items: center;
  padding: 8px;
  margin-bottom: 16px;
  overflow: hidden;
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
  }
`;

const IconCont = styled.div``;

const Article = (props) => {
  return (
    <Link href={`/article/${props.article.title}`} passHref>
      <a title={props.article.title} rel="noopener noreferrer">
        <ArticleElem colors={COLORS}>
          {props.article.title.length > 40 ? (
            <h6>{props.article.title}</h6>
          ) : (
            <h5>{props.article.title} </h5>
          )}

          <div className="icon-cont" colors={COLORS}>
            <ArrowSmRightIcon className="lrg-icon" />
          </div>
        </ArticleElem>
      </a>
    </Link>
  );
};

export default Article;
