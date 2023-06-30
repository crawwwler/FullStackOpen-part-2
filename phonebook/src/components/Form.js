const Form = ({ func, value, change }) => {
    return (
        <form onSubmit={func}>
            <div>
                name: <input
                    value={value.newName}
                    onChange={change.inputHandler}
                />
            </div>
            <div>
                number: <input
                    value={value.newNumber}
                    onChange={change.numHandler}
                />
            </div>
            <div>
                <button type="onsubmit">add</button>
            </div>
        </form>
    )
}

export default Form