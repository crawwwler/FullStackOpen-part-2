const Search = ({ value, change }) => {
    return (
        <div>
            filter shown with <input value={value} onChange={change} />
        </div>
    )
}

export default Search