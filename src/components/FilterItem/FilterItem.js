import React from "react";
import { filterSelector } from "../../redux/selector";
import FilterSlice from "../../slice/FilterSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterItem = ({ filterName }) => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const changeFilter = () => {
    dispatch(FilterSlice.actions.filterChange(filterName));
  };

  return (
    <span onClick={changeFilter}>
      <li
        className={`m-3 transition-colors  ${
          filter === filterName ? "category-active dark:text-white" : ""
        }`}>
        {filterName}
      </li>
    </span>
  );
};

export default FilterItem;
