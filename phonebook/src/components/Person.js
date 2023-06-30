const Person = ({ person, func }) => {
    return (
        <li>{person.name} {person.number}
            <button onClick={func}> delete </button></li>
    )
}

export default Person