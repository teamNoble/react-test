import React, {Component} from 'react'
import './stylesheet/Select.css'
import SelectBox from './SelectBox'

class Select extends Component {
    constructor(props) {
        super(props)
        this.data = props.data
        this.state = {value: props.checked}
    }

    handleChange(event) {
        console.debug(event)
        this.setState({value: event.target.checked})
    }

    render() {
        return (
            <div className="TitleNode">
                {
                    this.data.map((sub) =>
                    <SelectBox datas={sub} key={Math.random()}/>
                    )
                }
            </div>
        )
    }
}
export default Select