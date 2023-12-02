import React, { useState, useEffect } from "react"
import { ImageSearch } from "./ImageSearch"


export const Card = ({ cardName }) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')


    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=40488810-80944babf0f4fcc78e7a635bb&q=${term}`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits)
                setIsLoading(false)
            }
            ).catch(err => console.error(err))

    }, [term])
    console.log(images)
    const allImages = images.map(image => {
        const tags = image.tags.split(',')
        return (
            <div>

                <img key={image.id} className="w-80 mb-8 h-72" src={image.largeImageURL} />
                <div className="px-6 py-2">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Photo by {image.user}
                    </div>
                    <ul>
                        <li>
                            <strong>Views : </strong>
                            {image.views}
                        </li>
                        <li>
                            <strong>Downloads : </strong>
                            {image.downloads}
                        </li>
                        <li>
                            <strong>Likes : </strong>
                            {image.likes}
                        </li>
                    </ul>

                </div>
                <div className="px-6 py-4">
                    {tags.map((tag, index) => {
                        return (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                {tag}
                            </span >
                        )
                    }
                    )}
                </div>
            </div>
        )
    })

    return (
        <>
            <ImageSearch searchText={((text) => { setTerm(text) })} />
            <div className=" rounded flex flex-row flex-wrap justify-between overflow-hidden ">
                {!isLoading && images.length === 0 && <h1 className="text-6xl py-4 text-center mx-auto mt-32">No Images Found</h1>}
                {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32 py-4">loading ....</h1> : allImages}
            </div>
            <p className="text-center text-6xl">
                {cardName}
            </p>
        </>
    )
}