import { useState, useEffect } from 'react'

import Button from './Button'
import Input from './Input'

export default function TaskTwo() {
    const [clicks, setClicks] = useState(0)
    const [inputText, setText] = useState([])
    const [clicks2, setClicks2] = useState(100)
    const [inputText2, setText2] = useState([])

    useEffect(() => {
        console.log('FIRST RENDER')
    }, [])

    useEffect(() => {
        console.log('CHANGING COUNT')
    }, [clicks])

    console.log('RENDER')

    return (
        <>
            <h2>
                Task 2
            </h2>
            <section className='section'>
                <Button onClick={ () => setClicks(clicks + 1) }>
                    +
                </Button>
                <div>
                    Count: { clicks }
                </div>
                <Input 
                    placeholder='Type something ...'
                    value={ inputText }
                    onChange={ (event) => {
                        setText(event.currentTarget.value)
                    }} 
                />
                <div>
                    { inputText }
                </div>
            </section>
            <section className='section'>
                <Button onClick={ () => setClicks2(clicks2 + 1) }>
                    +
                </Button>
                <div style={{ fontSize: `${ clicks2 + 16 - 100}px` }}>
                    Count: { clicks2 }
                </div>
                <Input 
                    placeholder='Type something ...'
                    value={ inputText2 }
                    onChange={ (event) => {
                        const inputVal = event.currentTarget.value
                        setText2(inputVal)
                        document.title = inputVal
                    }} 
                />
                <div>
                    { inputText2 }
                </div>
            </section>
        </>
    )
}
