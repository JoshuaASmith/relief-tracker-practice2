const React = require('react')
const {Link} = require('react-router')

const Efforts = React.createClass({
    getInitialState() {
        return {efforts: []}
    },
    componentDidMount() {
        this.props.allDocs('efforts', (err, efforts) => {
            if (err)
                return console.log(err.message)
            this.setState({efforts})
        })
    },
    render() {
        const listEfforts = effort => <li key={effort.id}>
            <Link to={`/efforts/${effort.id}/show`}>{effort.name}</Link>
        </li>
        return (
            <div>
                <h1>Efforts List</h1>
                <ul>
                    {this.state.efforts.map(listEfforts)}
                </ul>
                <Link className="db" to="/efforts/new">New Effort</Link>
                <Link to="/">Home</Link>
            </div>
        )
    }
})

module.exports = Efforts
