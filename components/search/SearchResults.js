import styled from "styled-components";
import Article from "./Article";
import { nanoid } from "nanoid";
import { COLORS } from "../../Data/colors";
const ResultsCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SearchResults = (props) => {
  const sortedArticles = props.articles.sort((a, b) => {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  const articles = sortedArticles.map((article) => {
    return <Article article={article} key={nanoid()} />;
  });
  return <ResultsCont>{articles}</ResultsCont>;
};

export default SearchResults;
