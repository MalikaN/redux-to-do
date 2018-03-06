import React, { Component } from 'react';
import logo from './logo.svg';
import AddToDo,{CompleteToDo, inactiveTodos} from './Action';
import {connect} from 'react-redux';
import CompleteToDO from './Action';
import InactiveTodos from './Action';

class App extends Component {

  state={
    txtValue:'',
    todo:[],

  }

  onTextChange=(e)=>{
    this.setState({
      txtValue: e.target.value
    })

  }

  onButtonClick=()=>{
    this.setState({
      txtValue:''
     
    })
    this.props.dispatch(AddToDo(this.state.txtValue))
  }

  onTodoClick(todoId){
   this.props.dispatch(CompleteToDo(todoId))
  }

  onInactiveClick=()=>{
   this.props.dispatch(InactiveTodos())
    //console.log('vsdd')
  }
  render() {
    const {value} = this.props;
    return (
      <div className="App">
        <input type="text" name="txttodod" value={this.state.txtValue} onChange={this.onTextChange}/>
        <button onClick={this.onButtonClick}>Click</button>
        <label onClick={this.onInactiveClick}>Inactive</label>
        <a></a>
        <ul>
        {this.props.value.map((todoItem,i)=>(  
            
              todoItem.isCompleted ?             
              <li key={i}  onClick={()=>this.onTodoClick(todoItem.id)} style={{textDecoration:'line-through'}}>
                {todoItem.todoText}
              </li>   :
              <li key={i}  onClick={()=>this.onTodoClick(todoItem.id)}>
              {todoItem.todoText}
            </li>
        ))}
               </ul>
      
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    value:state
  }
}
export default connect(mapStateToProps)(App);
