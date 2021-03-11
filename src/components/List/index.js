import React from "react"
import PlacesJSON from './../../data/places.json';
const List = () => (
    <div className="relative">
    <div className="smallShadowRight w-full">
        <ul className="overflow-x-scroll overflow-y-hidden whitespace-no-wrap">
            {
                Object.keys(PlacesJSON.categories).map((e, i) => {
                    return (
                        <li className="inline-block bg-white mx-3 p-4 shadow-sm hover:shadow-md rounded-lg border-gray-100	 border-2">
                            <a href={'#' + PlacesJSON.categories[i].category_id} className="font-medium hover:font-bold">
                                <span type="img" className="text-center">{PlacesJSON.categories[i].category_emoji}</span>
                            </a>
                        </li>
                    )
                })}

        </ul>
    </div>
    </div>
)

export default List;