import React from "react"
import PlacesJSON from './data.json';
import PlacesCategory from '../PlacesCategory'
const Places = () => (
    <div>
        {
            Object.keys(PlacesJSON.categories).map((e, i) => {
                return <PlacesCategory key={i} data={PlacesJSON.categories[i]}/>
            })
        }
    </div>
)

export default Places;