import React from 'react'
import { render } from 'react-dom'
import ClothingCard from './ClothingCard'

class ClothingContainer extends React.Component {
    state = {
        clothes: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/clothes')
        .then(res => res.json())
        .then(data => {
            this.setState({clothes: data})
        })
    }

render() {
    return (
    <div>
    {this.state.clothes.map(article => <ClothingCard key={article.id} {...article} />)}
    </div>
    )
}

}

export default ClothingContainer