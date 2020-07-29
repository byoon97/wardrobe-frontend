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
        clothes: [],
        outfits: [],
        selectedItem: null,
        selectedOutfit: null
    }

    componentDidMount() {
        fetch('http://localhost:3000/outfits')
        .then(res => res.json())
        .then(data => {
            this.setState({outfits: data})
        })
        fetch('http://localhost:3000/clothes')
        .then(res => res.json())
        .then(data => {
            this.setState({clothes: data})
        })
    }

    handleSelectedItem = (itemId) => {
        this.setState({selectedItem: itemId})
    }

    handleSelectedOutfit = (outfitId) => {
        this.setState({selectedOutfit: outfitId})
    }

    renderClothingCard = () => {
        if (this.state.selectedItem !== null) {
            let item = this.state.clothes.find(item => item.id === this.state.selectedItem)
            return <ClothingCard key={item.id} {...item}/>
        }
    }

    renderMannequin = () => {
        if (this.state.selectedOutfit !== null) {
            let outfit = this.state.outfits.find(outfit => outfit.id === this.state.selectedOutfit)
            return <Mannequin key={outfit.id} {...outfit} {...outfit.clothes}/>
        }
    }

    handleNewClothes = (newItem) => {
        this.setState ( { clothes: [...this.state.clothes, newItem] } )
    }

  render() {
      console.log(this.state)
    return (
      <div>
        <SearchBar />
        <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            {this.renderMannequin()}
            <ClothingForm handleNewClothes={this.handleNewClothes}/>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            {this.renderClothingCard()}
            <FilterBar />
            <Wardrobe clothes={this.state.clothes} handleSelectedItem={this.handleSelectedItem}/>
            <OutfitList outfits={this.state.outfits} handleSelectedOutfit={this.handleSelectedOutfit}/>
          </div>
        </div>
      </div>
    );
  }
}
