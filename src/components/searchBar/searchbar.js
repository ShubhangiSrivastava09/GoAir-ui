import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import debounce from "lodash.debounce";

import styles from "./searchbar.module.css";
import RadioGroup from "../radioGroup/radioGroup";
import CheckBox from "../checkBox/checkBox";
import TextInput from "../textInput/textInput";
import CustomButton from "../customButton/customButton";

const Searchbar = () => {
  const [countries, setCountries] = useState([]);
  const [desFrom, setDesFrom] = useState("");
  const [finalDes, setFinalDes] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countryNames = response?.data.map((country) => country.name.common);
      setCountries(countryNames.sort());
    } catch (error) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    const debounceFetch = debounce(fetchCountries, 500);
    debounceFetch();

    return () => debounceFetch.cancel();
  }, []);

  return (
    <Box className={styles.headContainer}>
      <Box className={styles.innerContainer}>
        <RadioGroup />
        <Box className={styles.searchContainer}>
          <Autocomplete
            className={styles.destBox}
            disablePortal
            options={countries}
            onChange={(event, value) => setDesFrom(value || "")}
            renderInput={(params) => (
              <TextInput
                {...params}
                label="From"
                size="small"
                variant="standard"
                height="35px"
              />
            )}
          />
          <Autocomplete
            className={styles.destBox}
            disablePortal
            options={countries}
            onChange={(event, value) => setFinalDes(value || "")}
            renderInput={(params) => (
              <TextInput
                {...params}
                label="To"
                size="small"
                variant="standard"
                height="35px"
              />
            )}
          />

          <TextInput
            label="Departure Date"
            variant="standard"
            size="small"
            height="35px"
            placeholder="Travel Date"
          />
          <TextInput
            label="Return Date"
            variant="standard"
            size="small"
            height="35px"
            placeholder="Travel Dates"
          />
          <TextInput
            label="Passenger & class"
            variant="standard"
            size="small"
            height="35px"
            placeholder="passenger type"
          />
          <Box className={styles.buttonContainer}>
            <CustomButton variant="contained" label="UPDATE SEARCH" />
          </Box>
        </Box>
        <CheckBox />
      </Box>
    </Box>
  );
};

export default Searchbar;
