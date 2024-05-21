function App() {
    return (
        <div>
            <Person name="Melisssa" age="27" hobbies={['writing', 'crochet', 'cosplay']} />
            <Person name="Scott" age="16" />
            <Person name="Sue" age="45" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))