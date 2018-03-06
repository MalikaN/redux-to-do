export function addTodoItem(state=[],action){
    switch(action.type){
        case 'ADD_TODOS':
            const arr = [...state, {id: action.id, todoText: action.showVal, isCompleted: false}]
         return arr
        case 'COMPLETE_TODOS':
           return state.map((todocompleted)=>{
                if(action.todoId == todocompleted.id){
                    return {...todocompleted, isCompleted : !todocompleted.isCompleted }
                }
                return todocompleted
            })
           
        default:
         return state
    }
}