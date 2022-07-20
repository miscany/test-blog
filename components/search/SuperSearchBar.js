import React from "react";
import styled from "styled-components";
import SuperSearchTagBox from "./SuperSearchTagBox";

const TagInput = styled.div`
  border: 1px solid black;
  padding: 5px;
  background-color: ${(props) => props.colors.darkGrey};
  box-shadow: 0px 5px 25px 3px rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;

  input {
    border-radius: 0.25rem;
    border: 1px solid black;
    outline: none;
  }
`;

const SuperSearchBar = (props) => {
  return (
    <TagInput colors={props.colors}>
      <SuperSearchTagBox
        pushTag={props.pushTag}
        removeSearchTag={props.removeSearchTag}
        tags={props.tags}
        colors={props.colors}
        text={props.text}
        updateText={props.updateText}
        submitSearch={props.submitSearch}
        pushSearchTag={props.pushSearchTag}
        removeTag={props.removeTag}
        filterTags={props.filterTags}
      />
    </TagInput>
  );
};

export default SuperSearchBar;
