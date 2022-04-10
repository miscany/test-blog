import { useRef, useCallback, useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const Select = ({
  title,
  regions,
  value,
  updateValue,
  defaultOptionLabel,
  searchPlaceholder,
  data,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(
    value !== "" ? regions.indexOf(value) : null
  );
  const [options, setOptions] = useState(regions);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef();

  // Hide dropdown if clicked outside of dropdown
  const handleClickOutside = useCallback(
    (e) => {
      if (
        showDropdown &&
        e.target.closest(".dropdown") !== dropdownEl.current
      ) {
        setShowDropdown(false);
        setSearch("");
      }
    },
    [showDropdown, setShowDropdown, dropdownEl, data]
  );

  const changeSelectedHandler = (item, name, index) => {
    setSelectedValue(item);
    setSelectedIndex(index);
    setShowDropdown(false);
    updateValue(item);
  };

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    const filteredOptions = regions.filter((opt) => {
      return opt.toLowerCase().includes(e.target.value.trim().toLowerCase());
    });
    setOptions(filteredOptions);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="form__group">
      <label>{title}</label>
      <div className="dropdown" ref={dropdownEl}>
        <input
          name={title}
          type="hidden"
          value={value}
          onChange={(e) => updateValue(name, value)}
        />
        <div
          className="dropdown__selected"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedValue
            ? selectedValue
            : defaultOptionLabel
            ? defaultOptionLabel
            : "Please select one option"}
        </div>
        {showDropdown && (
          <Dropdown
            searchPlaceholder={searchPlaceholder}
            search={search}
            searchChangeHandler={searchChangeHandler}
            selectedValue={selectedValue}
            selectedIndex={selectedIndex}
            changeSelectedHandler={changeSelectedHandler}
            name={title}
            regions={options}
          />
        )}
      </div>
    </div>
  );
};

export default Select;