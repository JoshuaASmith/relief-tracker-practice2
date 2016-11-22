const React = require('react')
const About = require('./pages/about')
const Home = require('./pages/home')

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>HELLO WORLD</h1>
                <Home/>
                <About/>
            </div>
        )
    }
})

module.exports = App
