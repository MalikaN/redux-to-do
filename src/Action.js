let nextTodoId=0;

export default function AddToDo(showVal){
    return{
        type:'ADD_TODOS',
        id:nextTodoId++,
        showVal
    }
}

export function CompleteToDo(todoId){
    return{
        type:'COMPLETE_TODOS',
        todoId
    }
}
