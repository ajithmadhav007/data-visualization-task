import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const GammaUtility = props => {
    let valArr = [], count = 0;
    props.data.map((emt, index) => {
        //Creating multidimensional array
        if(emt.Alcohol!==count)
        {
            valArr[count] = [];
            count++;
        }
        let gamma = (Number(emt.Ash)*Number(emt.Hue))/Number(emt.Magnesium);
        return valArr[Number(emt.Alcohol)-1].push(gamma);
    })
    return (
        <Table bgClr={'#76f3e2'} name='Gamma' valArr={valArr}/>
    )
}

GammaUtility.propTypes = {
    data: PropTypes.array
}

export default GammaUtility


