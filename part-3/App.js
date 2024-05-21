function App() {
    return (
        <div>
            <Person name="Melisssa" age="27" hobbies={['writing', 'crochet', 'cosplay']} />
            <Person name="Scott" age="16" hobbies={['video games', 'running', 'dnd']} />
            <Person name="Sue" age="45" hobbies={['crochet', 'oboe']} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))