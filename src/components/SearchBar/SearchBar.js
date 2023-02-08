import { Typeahead } from "react-bootstrap-typeahead";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Button from '@mui/material/Button';

const SearchBar = () => {
  return (
    <>
      <FormGroup>
        <InputGroup>
          <Typeahead
          options={["aref" , "saeed"]}
            id="form-example"
            labelKey="capital"
            placeholder="Select a capital..."
          />
          <Button>S</Button>
        </InputGroup>
      </FormGroup>
    </>
  );
};

export default SearchBar;
