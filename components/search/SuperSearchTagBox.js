import React, { useEffect } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import COLORS from "../../Data/colors";
import SearchTag from "./SearchTag";
import { useState, useCallback, useRef } from "react";

const TagBoxElem = styled.div`
  border-radius: 0.5rem;
  max-height: 200px;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
  .form-dropdown {
    position: relative;
    padding: 10px;
  }
`;
const TagsCont = styled.div`
  margin: 10px;
  overflow: auto;
  position: relative;
`;

const InputLine = styled.input`
  width: 10rem;
  height: 2.5rem;
  margin-top: 5px;
  font-weight: bold;
  border-radius: 0.5rem !important;
  font-size: 1.25rem;
  &:focus {
    border-radius: 0.5rem 0.5rem 0 0 !important;
  }
  @media only screen and (max-width: 440px) {
    width: 144px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  width: 210px;
  border: 1px solid black;
  max-height: 210px;
  overflow-y: scroll;
  cursor: pointer;
  overflow-x: hidden;
  .item {
    padding-left: 4px;
    background-color: #fff;
    border-bottom: 1px solid ${(props) => props.colors.grey};
    &:hover {
      background: ${(props) => props.colors.green};
    }
  }
  @media only screen and (max-width: 1200px) {
    width: 180px;
  }
  @media only screen and (max-width: 440px) {
    width: 144px;
  }
`;
const SuperSearchTagBox = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef();
  console.log(props.filterTags);
  const lines = props.filterTags.map((tag) => {
    return (
      <div onClick={() => props.removeTag(tag.id)} id={tag.id} className="item">
        <p>{tag.title}</p>
      </div>
    );
  });
  const tags = props.tags.map((tag, index) => {
    return (
      <SearchTag
        removeSearchTag={props.removeSearchTag}
        key={nanoid()}
        id={tag.id}
        title={tag.title}
        color={tag.color}
      />
    );
  });

  const handleClickOutside = useCallback(
    (e) => {
      if (
        showDropdown &&
        e.target.closest(".form-dropdown") !== dropdownEl.current
      ) {
        setShowDropdown(false);
      }
    },
    [showDropdown, setShowDropdown, dropdownEl, props.filterTags]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  function Focus() {
    setShowDropdown(true);
  }

  return (
    <>
      <TagBoxElem colors={props.colors}>
        <TagsCont>{tags}</TagsCont>
      </TagBoxElem>
      <form
        className="form-dropdown"
        onSubmit={props.submitSearch}
        ref={dropdownEl}
      >
        <InputLine
          onFocus={Focus}
          type="text"
          value={props.text}
          onChange={props.updateText}
          placeholder="Search..."
        />
        {showDropdown && <Dropdown colors={COLORS}>{lines}</Dropdown>}
      </form>
    </>
  );
};

export default SuperSearchTagBox;
