const React = require('react')
const {Link} = require('react-router')
const xhr = require('xhr')

const ShowEffort = React.createClass({
    getInitialState() {
        return {effort: {}}
    },
    componentDidMount() {
        xhr.get('http://localhost:4000/efforts/' + this.props.params.id, {
            json: true
        }, (err, response, effort) => {
            if (err)
                console.log(err.message)
            this.setState({effort})
        })
    },
    render() {
        return (
            <div>
                <h3>Effort</h3>
                <h4>{this.state.effort.name}</h4>
                <Link to="/efforts">Return</Link>
            </div>
        )
    }
})

module.exports = ShowEffort
