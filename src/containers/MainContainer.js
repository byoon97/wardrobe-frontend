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
        selectedOutfit: null,
        filteredClothes: null
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

    deleteOutfit = (outfitId) => {
        let selectedOutfit = this.state.outfits.find(outfit => outfit.id === outfitId)
        fetch(`http://localhost:3000/outfits/${outfitId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            let newOutfitsArr = this.state.outfits.filter(outfit => outfit !== selectedOutfit)
            this.setState({outfits: newOutfitsArr})
        })
    }

    deleteClothe = (event, clotheId) => {
        event.preventDefault()
        fetch(`http://localhost:3000/clothes/${clotheId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            let newClothes = this.state.clothes.filter(clothe => clothe.id !== clotheId)
            this.setState({clothes: newClothes})
        }).catch(error => {
            console.log(error.message)
        })
    }

    handleFilter = (size) => {
        if (size === '') {
            this.setState({filteredClothes: null})
        } else if (size !== '') {
            let filteredClothes = this.state.clothes.filter(clothe => clothe.size === size)
            this.setState({filteredClothes: filteredClothes})
        }
    }

    renderClothes = () => {
        if (this.state.filteredClothes === null) {
            return <Wardrobe
            clothes={this.state.clothes}
             handleSelectedItem={this.handleSelectedItem}
             deleteClothe={this.deleteClothe}
             />
        } else if (this.state.filteredClothes !== []) {
            return <Wardrobe
            clothes={this.state.filteredClothes}
             handleSelectedItem={this.handleSelectedItem}
             deleteClothe={this.deleteClothe}
             />
        }
    }

  render() {
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
            <FilterBar handleFilter={this.handleFilter}/>
            {this.renderClothes()}
            <OutfitList
            outfits={this.state.outfits}
            handleSelectedOutfit={this.handleSelectedOutfit}
            deleteOutfit={this.deleteOutfit}
            />
          </div>
        </div>
      </div>
    );
  }
}
