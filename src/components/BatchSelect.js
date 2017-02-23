import React, {Component} from 'react'
import './stylesheet/BatchSelect.css'
import Select from './Select.js'

class BatchSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {value: false}
    }

    handleChange(event) {
        this.props.datas.sub.forEach((s)=>s.checked = event.target.checked)
        this.setState({value: event.target.checked})
    }

    render() {
        return (
            <div className="BatchSelect">
                <div className="TitleNode">
                    <div className="Title">
                        <input type="checkbox"
                               onChange={this.handleChange.bind(this)}
                               checked={this.state.value}
                        />
                        {this.props.datas.title}
                    </div>
                    <Select data={this.props.datas.sub} key={Math.random()}/>
                </div>
            </div>
        )
    }

}
export default BatchSelect