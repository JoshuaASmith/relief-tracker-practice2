const React = require('react')
const {Link, Redirect} = require('react-router')

const EffortForm = React.createClass({
    getInitialState() {
        return {
            effort: {
                name: '',
                location_id: -1
            },
            success: false,
            locations: []
        }
    },
    componentDidMount() {
        this.props.allDocs('locations', (err, locations) => {
            this.setState({locations})
        })
    },
    handleChange(field) {
        return (e) => {
            let effort = this.state.effort
            effort[field] = e.target.value
            this.setState({effort})
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        this.props.post('efforts', this.state.effort, (err, body) => {
            if (err)
                return console.log(err)
            this.setState({success: true})
        })
    },
    render() {
        return (
            <div>
                {this.state.success
                    ? <Redirect to="/efforts"/>
                    : null}
                <h1>New Effort</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={this.state.effort.name} onChange={this.handleChange('name')} type="text"/>
                    </div>
                    <div>
                        <label>Location</label>
                        <select value={this.state.effort.location_id} onChange={this.handleChange('location_id')}>
                            <option value="-1">Choose</option>
                            {this.state.locations.map(loc => <option key={loc.id} value={loc.id}>{loc.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <Link to="/efforts">Return</Link>
            </div>
        )
    }
})

module.exports = EffortForm
