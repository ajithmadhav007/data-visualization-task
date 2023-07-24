import React from 'react'
import PropTypes from 'prop-types'
import Utils from './Utility'

const Table = props => {
    const rawData = ["Measure", "Mean", "Median", "Mode"];
    const setColRowData =()=>{
        return rawData.map((data, index)=>{
            return (
            <tr key={index}>
                {<td><b>{data!=="Measure"?`${props.name} ${data}`:data}</b></td>}
                {
                    props.valArr.map((v, i)=>{
                        return <td key={i}>{data==="Measure"?<b>Class {i+1}</b>:Utils[`calc${data}`](v)}</td>
                    })
                }
            </tr>
            )
        })
    }
    return (
        <div className='table-comp'>
            <table>
                <tbody> 
                    <tr><th colSpan={props.valArr.length+1} style={{backgroundColor: props.bgClr}}>{props.name}</th></tr>
                    {setColRowData()}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    valArr: PropTypes.array,
    bgClr: PropTypes.string,
    name: PropTypes.string
}

export default Table
