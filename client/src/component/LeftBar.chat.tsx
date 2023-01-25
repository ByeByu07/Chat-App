import React, { useEffect } from 'react'
import upperFirstLetter from '../utilities/upperFirstLetter'

type LeftBarProps = {
    username:string
    socket:any
}

export default function LeftBar({username,socket}:LeftBarProps) {

    //sampai sini

    return <section className='basis-1/5 flex-col flex text-center border-2 border-sky-900  px-1 py-3 m-1'>
        <h1 className='bg-sky-500 rounded p-3 font-bold'>SIMPLE CHAT APP</h1>
        <h2 className='py-4'>Username : {upperFirstLetter(username)} </h2>
        <article className='my-5 grow'>
            <header>Users :</header>
            <section className='flex-col flex'>
                <span>bayu</span>
                <span>bayu</span>
                <span>bayu</span>
            </section>
        </article>
        <button className='rounded bg-red-500 px-4 py-1 mx-7 hover:bg-red-700'>LEAVE</button>
    </section>
}
