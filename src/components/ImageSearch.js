import React, { useRef, useState, useEffect } from "react"
    
export const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState('')
    const ref = useRef('pizza')

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }


    const changeValue=(e)=> {
        return(
            ref.current = e.target.value
        )
    }   

    const [age,setAge] = useState(0)
    const [time,setTime] = useState(0)
    const [name,setName] = useState('')
    const [school,setSchool] = useState('')

const change=()=>{
    setAge(26)
    setTime(4)
    setName('ali')
    setSchool('tanta')
}

useEffect(()=>{
    console.log(`render`)
},[])

    return (
        <div className="overflow-hidden rounded max-w-sm my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex item-center border-b border-b-2 bordeer-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent 
                    border-none w-full 
                    text-gray-700 mr-3 py-1 px-2
                    leading-tight
                    focus:outline-none" placeholder="Search Image Term" type="text" />
                    <button className="flex-shrink-0  bg-teal-500 hover:bg-teal-700
                    border-teal-500 hover:border-teal-700 text-sm border-4 text-white
                    px-2 py-1 rounded " type="submit" >Search</button>
                </div>
            </form>
            {/* <button className="flex-shrink-0  bg-teal-500 hover:bg-teal-700
                    border-teal-500 hover:border-teal-700 text-sm border-4 text-white
                    px-2 py-1 rounded " onClick={()=> ref.current = 'burger'} >x</button> */}
            <button className="flex-shrink-0  bg-teal-500 hover:bg-teal-700
                    border-teal-500 hover:border-teal-700 text-sm border-4 text-white
                    px-2 py-1 rounded " onClick={change} >4 state</button>

{age} 
{time} 
{name} 
{school} 

            <input type="text" className="flex-shrink-0  bg-teal-500 hover:bg-teal-700
                    border-teal-500 hover:border-teal-700 text-sm border-4 text-white
                    px-2 py-1 rounded " onChange={changeValue} />

            {ref.current}
        </div>
    )
}
