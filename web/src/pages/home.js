const React = require('react')
const {Link} = require('react-router')

const Home = React.createClass({
    render() {
        return (
            <div>
                <h2>Homepage</h2>
                <h3>Menu</h3>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/efforts">Efforts</Link>
                    </li>
                    <li>
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li>
                        <Link to="/persons">Persons</Link>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = Home
