import React from "react"
import PlacesJSON from './../Places/data.json'
const List = () => (
    <div>
        <ul>
            {
                Object.keys(PlacesJSON.categories).map((e, i) => {
                    return (
                        <li>
                            <a href={'#' + PlacesJSON.categories[i].category_id} className="font-medium hover:font-bold">
                                <span type="img" className="pr-2">{PlacesJSON.categories[i].category_emoji}</span>
                                {PlacesJSON.categories[i].category_name}</a>
                        </li>
                    )
                })}

        </ul>
    </div>
)

export default List;