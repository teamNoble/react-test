/**
 * Created by kevin1993 on 2017/2/23.
 */

import React, {Component} from 'react'

class SelectBox extends Component {
    constructor(props) {
        super(props)
        this.state = {value: props.checked}
    }

    handleChange(event) {
        this.props.datas.checked = event.target.checked
        this.setState({value: event.target.checked})
    }

    render() {
        return (
            <div className="Title">
                <input type="checkbox"
                       onChange={this.handleChange.bind(this)}
                       checked={this.props.datas.checked}
                />
                {this.props.datas.title}
            </div>
        )
    }
}


export default SelectBox