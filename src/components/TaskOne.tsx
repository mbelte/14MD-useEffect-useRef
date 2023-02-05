import { useState, useEffect, useRef } from 'react'

import Button from './Button'
import Input from './Input'

const taskOneVars = {
    inputPlaceholder: 'Write something...',
    btnSubmitTxt: 'SUBMIT',
    btnTxt: 'POGA' 
}

export default function TaskOne() {
    const [inputText, setInputText] = useState([])
    const [listArray, setList] = useState([])
    const [btnState, setBtnState] = useState(true)
    const [btnClickCount, setBtnClick] = useState(0)
    const [squares, setSquare] = useState([])
    const [selectedColor, setColor] = useState('red')

    useEffect(() => {
        setTimeout(() => {
            setBtnState(false)
        }, 3000)
    }, [])

    function submitText() {
        setList([...listArray, inputText])
    }

    return (
        <>
            <h2>
                Task 1
            </h2>
            <section className='section'>
                <form 
                    className='form'
                    onSubmit={(event) => {
                        event.preventDefault()
                        submitText()
                    }}>

                    <Input 
                        placeholder={ taskOneVars.inputPlaceholder }
                        value={ inputText }
                        onChange={ (event) => {
                            setInputText(event.currentTarget.value)
                        }} 
                    />
                    <Button 
                        type='submit'
                        onClick={ () => {} }
                    >
                        { taskOneVars.btnSubmitTxt }
                    </Button>

                    <ul className='results-list'>
                        { 
                            listArray.length ? 
                                listArray.map((item, index) => <li key={ index }>{ item }</li>) 
                                    : '' 
                        }
                    </ul>
                </form>
            </section>
            <section className='section'>
                <Button 
                    disabled={ btnState }
                    onClick={ () => {
                        setBtnClick(btnClickCount + 1)
                    }}
                >
                    { btnClickCount ? `COUNT: ${btnClickCount}` : taskOneVars.btnTxt }
                    
                </Button>
                <div className='btn-clicks'>
                    {btnClickCount * 2}
                </div>
            </section>
            <section className='section'>
                <Button 
                    onClick={ () => {
                        setSquare([...squares, selectedColor ])
                    }}
                >
                    +
                </Button>
                <select 
                    className='select' 
                    defaultValue='red'
                    onChange={ (event) => {
                        setColor(event.currentTarget.value)
                    }}
                >
                    <option value='red'>Red</option>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='yellow'>Yellow</option>
                </select>
                <div className='squares'>
                    {squares.map((square, index) => {
                        return <div 
                                    key={index} 
                                    className='square'
                                    style={{ backgroundColor: square }}
                                ></div>
                        }
                    )}
                </div>
            </section>
        </>
    )
}
