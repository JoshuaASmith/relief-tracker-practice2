const React = require('react')
const {Link} = require('react-router')

const EffortForm = React.createClass({
    render() {
        return (
            <div>
                <h1>New Effort</h1>
                <form>
                    <label>Name</label>
                    <input type="text"/>
                </form>
                <Link to="/efforts">Return</Link>
            </div>
        )
    }
})

module.exports = EffortForm
