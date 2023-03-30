class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to My Blog</h1>
                <p>This is the homepage of your custom blog website.</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
