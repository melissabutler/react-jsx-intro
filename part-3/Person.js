function Person(props) {
    let Name;
    if(props.name.length >= 8){
        Name = props.name.slice(0, 6)
    } else {
        Name = props.name
    }
    let reply;
    if(props.age >= 18){
        reply = "Please go vote!"
    } else {
        reply = "You must be 18 to vote"
    }
    // console.log(props.hobbies)
    return (
        <div>
            <p>Learn some information about this person.</p>
            <h1>Name: {Name} </h1>
            <h2>Age: {props.age}
            <p>{reply}</p></h2>
            <h3>Hobbies:</h3>
            <ul>
                {/* {props.hobbies.map(hobby => <li>{hobby}</li>)} */}
            </ul>
        </div>
    )
}