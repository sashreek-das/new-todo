export function Todos(todos) {
console.log(todos.todos);
    return <div>
        {todos.todos.map(function(todo) {
            return <div key={todo.id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}