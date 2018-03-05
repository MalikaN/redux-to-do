import React, { Component } from 'react';
import logo from './logo.svg';
import AddToDo,{CompleteToDo} from './Action';
import {connect} from 'react-redux';
import CompleteToDO from './Action';

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

  render() {
    const {value} = this.props;
    console.log('rdfsd')
    return (
      <div className="App">
        <input type="text" name="txttodod" value={this.state.txtValue} onChange={this.onTextChange}/>
        <button onClick={this.onButtonClick}>Click</button>
        <ul>
        {this.props.value.map((todoItem,i)=>(  
            
              todoItem.isCompleted ?             
              <li key={i}  onClick={()=>this.onTodoClick(todoItem.id)} style={{textDecoration:'line-through'}}>
                {todoItem.todoText} lol
              </li>   :
              <li key={i}  onClick={()=>this.onTodoClick(todoItem.id)}>
              {todoItem.todoText}-rofl
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
