const Notification = ({ message }) => {

    if (message === null) {
        return null
    } else {
        const notiStyle = {
            color: 'white',
            fontStyle: 'BOLD',
            background: 'green',
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            bottomMargin: 10,
            fontSize: 20
        }

        return (
            <div style={notiStyle}>
                <br />
                {message}
                <br />
            </div>
        )
    }
}

export default Notification