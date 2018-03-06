export function addTodoItem(state=[],action){
    switch(action.type){
        case 'ADD_TODOS':
            const arr = [...state, {id: action.id, todoText: action.showVal, isCompleted: false,status:'ALL'}]
         return arr
        case 'COMPLETE_TODOS':
           return state.map((todocompleted)=>{
                if(action.todoId == todocompleted.id){
                    return {...todocompleted, isCompleted : !todocompleted.isCompleted,status:'COMPLETED' }
                }
                return todocompleted
            })
        case 'INACTIVE_TODOS':
        //console.log('reducer inavtive')
        let arr1=[]
            let inactives =state.map((inactive)=>{
                if(inactive.isCompleted == true){
                    arr1.push(inactive)
                   // return {inactive}
                }
            })
            console.log(arr1)
            
        default:
         return state
    }
}