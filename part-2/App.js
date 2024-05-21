function App() {
    return (
        <div>
            <Tweet username="missakat" name="missa" date="10/10/10" message="Happy bday mom" />
            <Tweet />
            <Tweet />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))