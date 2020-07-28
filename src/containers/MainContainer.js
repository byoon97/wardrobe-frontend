import React from 'react'
import Wardrobe from './components/Wardrobe'
import Mannequin from './components/Mannequin'
import ClothingForm from './components/ClothingForm'

export default class MainContainer extends React.Component {
    state = {
        clothing : []
    }

    render() {

        return (
            <div> 
                <Wardrobe />
                <Mannequin />
                <ClothingForm />
            </div>
        )
    }
}