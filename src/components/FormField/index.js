import React from 'react'




function FormField({ label ,type ,value, onChange, name }) {
    const Input = type === 'textarea' ? 'textarea' : 'input'
    return (
        <div>
            <label>
                {label} 
                <Input
                    type = {type}
                    name = {name}
                    value = {value}
                    onChange = {onChange}
                />
            </label>
        </div>
    )
}


export default FormField