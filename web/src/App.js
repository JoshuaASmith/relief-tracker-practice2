const React = require('react')
const {BrowserRouter, Match, Link, Miss} = require('react-router')
const About = require('./pages/about')
const Home = require('./pages/home')
const Efforts = require('./pages/efforts/index')
const ShowEffort = require('./pages/efforts/show')
const EffortForm = require('./pages/efforts/form')
const Service = require('./components/service')

const NoMatch = () => (
    <div>
        <h3>Page Not Found</h3>
        <Link to="/">Home</Link>
    </div>
)
const App = React.createClass({
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Match exactly pattern="/" component={Home}/>
                    <Match pattern="/about" component={About}/>
                    <Match exactly pattern="/efforts" component={Service(Efforts)}/>
                    <Match pattern="/efforts/:id/show" component={ShowEffort}/>
                    <Match exactly pattern="/efforts/new" component={Service(EffortForm)}/>
                    <Miss component={NoMatch}/>
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
