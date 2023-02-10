import { Typeahead } from "react-bootstrap-typeahead";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "@mui/material/Button";
import style from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";

const SearchBar = () => {
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
        <button className="btn"><MdKeyboardVoice /></button>
      </div>
    </>
  );
};

export default SearchBar;
