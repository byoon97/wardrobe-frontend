import React from "react";
import Wardrobe from "../components/Wardrobe";
import Mannequin from "../components/Mannequin";
import ClothingForm from "../components/ClothingForm";
import SearchBar from "../components/SearchBar";
import OutfitList from "../components/OutfitList";
import ClothingCard from "../components/ClothingCard";
import FilterBar from "../components/FilterBar"

export default class MainContainer extends React.Component {
  state = {
    clothing: [],
  };

  render() {
    return (
      <div>
        <SearchBar />
        <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <Mannequin />
            <ClothingForm />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <ClothingCard />
            <FilterBar />
            <Wardrobe />
            <OutfitList />
          </div>
        </div>
      </div>
    );
  }
}
