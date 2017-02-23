/**
 * Created by kevin1993 on 2017/2/23.
 */
import React, {Component} from 'react'
import BatchSelect from './BatchSelect'
import './stylesheet/Left.css'

class Left extends Component {

    render() {
        return (
            <div className="Background">
                {
                    this.props.datas.map((data) =>
                        <BatchSelect datas={data} key={Math.random()}/>
                    )
                }
            </div>
        )
    }

}
export default Left