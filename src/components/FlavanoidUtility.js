import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const FlavanoidUtility = props => {
    let valArr = [], count = 0;
    props.data.map((emt, index) => {
        //Creating multidimensional array
        if(emt.Alcohol!==count)
        {
            valArr[count] = [];
            count++;
        }
        return valArr[Number(emt.Alcohol)-1].push(Number(emt.Flavanoids));
    })
    return (
        <Table bgClr={'#76d5f3'} name='Flavanoids' valArr={valArr}/>
    )
}

FlavanoidUtility.propTypes = {
    data: PropTypes.array
}

export default FlavanoidUtility


