import React from "react"
const PlacesDetail = (props) => {
    return (
        <div>
            <a href={props.data.link} target="_blank">
                <li className="border-gray-400 flex flex-row mb-2">
                    <div
                        className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"><span role="img">{props.data.icon}</span></div>
                        <div className="flex-1 pl-1">
                            <div className="">
                                <h3 className="font-medium text-lg md:py-1 inline-block mr-2">{props.data.name} </h3>
                                {props.data.tags ? (
                                    <div class="inline-block md:py-0 py-2">
                                        {props.data.tags.map((value, index) => {
                                            return <span className="mr-1 text-xs inline-flex items-center font-bold leading-sm  px-3 py-0.5 rounded-full bg-white text-gray-700 border">{value}</span>
                                        })}
                                    </div>
                                ) : null}
                            </div>
                            <div className="text-gray-600 text-sm">{props.data.description}</div>
                        </div>
                        {/* {props.data.location ? (
                            <div className="text-gray-600 text-xs">{props.data.location}</div>
                        ) : null
                        } */}
                    </div>
                </li>
            </a>
        </div>
    )
}

export default PlacesDetail;