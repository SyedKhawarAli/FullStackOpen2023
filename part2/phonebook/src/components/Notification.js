const Notification = ({ message, isDestructive = false }) => {
    const notificationStyle = {
        color: isDestructive ? "red" : "green",
        fontStyle: "italic",
        fontSize: 16,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    
    if (message === null) {
        return null
    }
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification