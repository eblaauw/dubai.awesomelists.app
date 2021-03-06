import React from "react"
import PlacesJSON from './../../data/places.json';
const List = () => (
    <div className="relative">
        <div className="smallShadowRight w-full">
            <ul className="overflow-x-scroll overflow-y-hidden whitespace-no-wrap py-4">
                {
                    Object.keys(PlacesJSON.categories).map((e, i) => {
                        return (
                            <a href={'#' + PlacesJSON.categories[i].category_id} className="font-medium hover:font-bold py-4">
                                <li key={i} className="inline-block bg-white mr-3 p-4 shadow-sm hover:shadow-md rounded-lg border-gray-100 border-2">
                                    <span type="img" className="text-center pr-2">{PlacesJSON.categories[i].category_emoji}</span>
                                    <span>{PlacesJSON.categories[i].category_name}</span>
                                </li>
                            </a>
                        )
                    })}

            </ul>
        </div>
    </div>
)

export default List;