import React from 'react';
import {connect} from 'react-redux';
import List from '../list/list';
import './board.css';

const Board = (props)=>{

    var getReasons=()=>{
        var reasons = {
            pros: [],
            cons: []
        }
        props.reasons.map((item) => reasons[item.type].push(item));
        return reasons;
    }    

    return(  
        <div className="lists">
          <List type={'pros'} itemList= {getReasons().pros}/>
          <List type={'cons'} itemList= {getReasons().cons} />
        </div>
    )
}

function mapStateToProps(state){
    return{ 
        reasons:state.reasons,
    };
}
export default connect(mapStateToProps)(Board);
