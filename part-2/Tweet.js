function Tweet(props) {
    
    return (
    <div>
        <h1>Tweet</h1>
        <h1>{props.username}</h1>
        <h2>{props.name} tweeted on {props.date}: </h2>
        <p>{props.message}</p>

    </div>)
}
    
// username, name, date, message