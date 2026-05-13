import { useState } from "react";

export default function NameInput() {
    const [name, setName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <label className="px-2 font-bold">
                Name:
            </label>
            <input
                type="text"
                placeholder="Enter Name"
                value={ name }
                onChange={ handleChange }
            />
        </div>
        
    );
}