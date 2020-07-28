import React from 'react'
import Wardrobe from '../components/Wardrobe'
import Mannequin from '../components/Mannequin'
import ClothingForm from '../components/ClothingForm'
import SearchBar from '../components/SearchBar'

export default class MainContainer extends React.Component {
    state = {
        clothing : []
    }

    render() {

        return (
            <div>
                <SearchBar />
                <Mannequin /> 
                <Wardrobe />
                <ClothingForm />        
            </div>
        )
    }
}