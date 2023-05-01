import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "@mui/material/Button";
import style from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("All");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=AIzaSyB2N5UT2XMF5BB96S5wEVauTxjFMklOB5s`
      )
      .then((response) => {
        if (response.status !== 200) return;
        console.log(response.data.items);
      })
      .catch((err) => {
        console.log(err.code);
      });
  }, []);
  return (
    <>
      <div className={`${style.typeAheadContainer}`}>
        <FormGroup>
          <InputGroup>
            <Typeahead
              options={["react crash course", "frontend crash course"]}
              id="form-example"
              labelKey="capital"
              placeholder="Search"
              className={`${style.typeAhead}`}
            />
            <Button>
              <BsSearch />
            </Button>
          </InputGroup>
        </FormGroup>
      </div>
      <div className={style.mcp}>
        <button className="btn">
          <MdKeyboardVoice />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
