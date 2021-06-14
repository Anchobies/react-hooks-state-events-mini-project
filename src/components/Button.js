import React from 'react'

function Button({ category, selectedCategory, onChangeSelected }) {
    const handleSelect = event => {
        onChangeSelected(event.target.textContent);
    }

    return (
        <button onClick={handleSelect} className={selectedCategory === category ? "selected" : null}>{category}</button>
    )
}

export default Button;