import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editType} from '../../actions/index';
import Item from '../item/item';
import './list.css';


const List=(props)=>{
    const onDragStart=(e, id)=>e.dataTransfer.setData("id", id);
    const onDragOver=(e)=>e.preventDefault();
    const onDrop=(e,type)=>{
       let id = e.dataTransfer.getData("id");
       let data={type,id};      
       props.editType(data);
    }

    const renderListItems=()=>{
        return(  
            props.itemList.map((item,index) =>
                <Item 
                 key={item.id} 
                 item={item} 
                 index={index}
                 action={'edit'}
                 onDragStart={onDragStart}
                />
            )
        );
    }
        return(
            <div 
             className="list"
             onDragOver={(e)=>onDragOver(e)}
             onDrop={(e)=>{onDrop(e, props.type)}}
            >
                <p className="list-name">{props.type}</p>
                <div className="list-items">
                    {renderListItems()}
                    <Item 
                     index={props.itemList.length}
                     action={'add'}
                     type={props.type}
                     />
                </div>
            </div>
        )
}
function mapDispechToProps(dispatch){
    return bindActionCreators({editType}, dispatch)
}
export default connect(null, mapDispechToProps)(List);
