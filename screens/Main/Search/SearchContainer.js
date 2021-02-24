import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchPresenter from "./SearchPresenter";
import api from "../../../api";

const SearchContainer = ({ token }) => {
  const navigation = useNavigation();

  const [searching, setSearching] = useState(false);
  const [beds, setBeds] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [results, setResults] = useState();

  const triggerSearch = async () => {
    // call the api
    setSearching(true);
    const form = {
      ...(beds && { beds }),
      ...(bedrooms && { bedrooms }),
      ...(bathrooms && { bathrooms }),
      ...(maxPrice && { max_price: maxPrice }),
    };
    try {
      const { data } = await api.search(form, token);
      setResults(data);
    } catch (e) {
      console.warn(e);
    } finally {
      Keyboard.dismiss();
      setSearching(false);
    }
  };

  return (
    <SearchPresenter
      navigation={navigation}
      searching={searching}
      setBeds={setBeds}
      setBedrooms={setBedrooms}
      setBathrooms={setBathrooms}
      setMaxPrice={setMaxPrice}
      results={results}
      triggerSearch={triggerSearch}
      beds={beds}
      bedrooms={bedrooms}
      bathrooms={bathrooms}
      maxPrice={maxPrice}
    />
  );
};

export default SearchContainer;
