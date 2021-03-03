import React from "react"
import PlacesDetail from "../PlacesDetail"

const PlacesCategory = (props) => {
    return (
        <div id={props.data.category_id}>
            <h1 className="text-3xl md:text-4xl font-black relative font-title mt-16">
                <span role="img" className="pr-4">{props.data.category_emoji}</span>
                <span>{props.data.category_name}</span>
            </h1>
            <ul class="flex flex-col py-4">
                {Object.keys(props.data.places).map((e, i) => {
                    return <PlacesDetail key={i} data={props.data.places[i]} />
                })}
            </ul>
        </div>
    )
}

export default PlacesCategory;