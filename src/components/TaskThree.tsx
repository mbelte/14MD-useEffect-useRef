import { useState, useEffect, useRef } from 'react'

import Button from './Button'

export default function TaskThree() {
    const goldSquare = useRef<HTMLDivElement>()
    const cloneSquare = useRef<HTMLDivElement>()
    const movableSquare = useRef<HTMLDivElement>()

    return (
        <>
            <h2>
                Task 3
            </h2>
            <section className='section'>
                <h4>
                    Task 3.1
                </h4>
                <div className='squares'>
                    <div 
                    ref={ goldSquare }
                    className='square green'
                    ></div>
                    <Button
                        onClick={() => {
                            goldSquare.current?.classList.remove('green')
                            goldSquare.current?.classList.add('gold')
                        }}
                    >
                        Change color
                    </Button>
                </div>
            </section>
            <section className='section'>
                <h4>
                    Task 3.2
                </h4>
                <div className='squares'>
                    <div 
                        ref={ cloneSquare }
                        className='square green'
                    ></div>
                </div>
                <Button 
                    onClick={() => {
                        cloneSquare.current?.parentNode?.appendChild(
                            cloneSquare.current.cloneNode(true)
                        )
                    }}
                >
                    Clone div
                </Button>
            </section>
            <section className='section'>
                <h4>
                    Task 3.3
                </h4>
                <div className='squares'>
                    <div 
                        ref={ movableSquare }
                        className='square gold'
                    ></div>
                </div>
                <Button 
                    onClick={() => {
                        movableSquare.current?.classList.add('corner')
                    }}
                >
                    Send div to corner
                </Button>
            </section>
        </>
    )
}
