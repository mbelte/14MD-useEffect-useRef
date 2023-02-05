type InputProps = {
    placeholder: string;
    value: string;
    type?: HTMLInputElement["type"];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ 
        placeholder, value, type = 'text', onChange 
                }: InputProps) => {

    return (
        <input 
            autoFocus={ true }
            type={ type } 
            value={ value }
            className='input'
            placeholder={ placeholder } 
            onChange={ onChange }
        />
    )
}

export default Input