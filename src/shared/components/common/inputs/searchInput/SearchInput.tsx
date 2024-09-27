import React from "react";
import { Input } from "antd";

import "./SearchInput.scss";

const { Search } = Input;

const onSearch = (value: string) => {
  console.log(value);
};

export const SearchInput: React.FC = () => {
  return (
    <div className="search-input">
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  );
};
