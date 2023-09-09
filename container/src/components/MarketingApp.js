import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'

export const MarketingApp = () =>{
    const first = useRef()

    useEffect(()=>{
        mount(first.current)
    })
    return (
        <div ref={first}></div>
    )
}