
import React from "react";
import Select from "react-select";
import { customStyles } from "../../constants/customStyles";
import { problemsList } from "../../constants/problemsList";

const ProblemDropdown = ({ onSelectChange } : any) => {
  return (
    <Select
      instanceId="problemDropdown"
      placeholder={`Filter By Problem`}
      options={problemsList}
      styles={customStyles}
      defaultValue={problemsList[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default ProblemDropdown;