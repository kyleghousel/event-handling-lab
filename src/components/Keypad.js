// Code Keypad Component Here

const Keypad = () => {
    const handleInput = () => {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={handleInput}/>
        </div>
    )
}

export default Keypad;
