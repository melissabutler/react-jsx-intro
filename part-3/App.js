function App() {
    return (
        <div>
            <Person name="Melisssa" age="27" hobbies={[{'text': 'writing'}, {'text': 'crochet'}, {'text': 'cosplay'}]} />
            <Person name="Scott" age="16" hobbies={[{'text': 'video games'}, {'text': 'running'}, {'text':'dnd'}]} />
            <Person name="Sue" age="45" hobbies={[{'text': 'crochet'}, { 'text':'oboe'}]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))