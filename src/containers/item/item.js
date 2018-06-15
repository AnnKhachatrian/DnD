import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add, edit, del} from '../../actions/index';
import './item.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            isDisabled: true,
            isDraggable: true,
        };
    }
    componentWillMount(){
        if(this.props.item){
            this.setState({value:this.props.item.text});
            return;
        }
        this.setState({
            isDraggable:false,
            isDisabled:false 
        });
    }
    
    
    handleKeyPress=(event)=>{
        if (event.key === 'Enter') {
            switch (this.props.action) {
                case "add":
                    if (!this.state.value.trim()) return; 
                    let newData={  
                        text: this.state.value,
                        type: this.props.type,
                    }       
                    this.props.add(newData);
                    this.setState({value:""});
                    break;
                case "edit":
                    if (!this.state.value.trim()){
                        this.props.del(this.props.item.id); 
                        this.setState({isDisabled:true})  
                        return;
                    }
                    let data={
                        id: this.props.item.id,
                        text: this.state.value,
                        type: this.props.item.type
                    }
                    this.props.edit(data);
                    this.setState({isDisabled:true}) ;
                    break;
                default: console.error('UNKNOWN ACTION');
            }            
        }      
    }

    handleChange=(event)=>this.setState({value: event.target.value});
    handleClick=()=>this.setState({isDisabled:false});
    render(){
        return(
            <div onClick={this.handleClick}>                              
                <div
                 className="item"
                 draggable={this.state.isDraggable}
                 onDragStart = {(e) => this.props.onDragStart(e, this.props.item.id)}
                >
                    <p className="index">
                        {this.props.index+1}
                    </p>
                    <input 
                     type="text" 
                     className="item_input"
                     value={this.state.value} 
                     onChange={this.handleChange} 
                     onKeyPress={this.handleKeyPress}
                     disabled={this.state.isDisabled}
                    />
                </div> 
            </div>
        )
    }
}
function mapDispechToProps(dispatch){
    return bindActionCreators({add, edit,del}, dispatch)
}

export default connect(null, mapDispechToProps)(Item);
