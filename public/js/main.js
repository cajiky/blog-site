import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import {lightTheme, darkTheme} from '../styles/themes';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to My Blog</h1>
                <p>This is the place holder for my blog/resume page.</p>
            </div>
        );
    }
    componentDidMount(){
        console.log('our component did mout!')
    }
}

ReactDOM.render(
<ThemeProvider theme={darkTheme}>
    <App />
</ThemeProvider>,
document.getElementById('root'));
