// Write your code here
// Write your code here

import './index.css'

const PlanetItem=props=>{
    const {planetsDetails}=props
    const{name,imageUrl,description}=planetsDetails

    return(

        <div className='item-container'>
            
            <img src={imageUrl}  alt={`planet ${name}`} className='image' />
            <h1 className='name'>{name}</h1>
            <p className='description'>{description}</p>
        </div>
    )
}

export  default  PlanetItem