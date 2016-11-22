const React = require('react')
const xhr = require('xhr')

const Service = (Component) => React.createClass({
    allDocs(model, callback) {
        xhr.get('http://localhost:4000/' + model, {
            json: true
        }, (err, response, body) => {
            callback(err, body)
        })
    },
    render() {
        return (<Component {...this.props} allDocs={this.allDocs}/>)
    }
})

module.exports = Service
