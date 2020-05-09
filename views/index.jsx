const React = require('react');

class Index extends React.Component {
    render() {
        let todos = this.props.todos;
        let count = this.props.count;
        return(
            <body>
                <h1>To Do List</h1>
        {count <= 0 ? <h3>There are no todos!</h3> : <ul>{todos.map((item, ind) => {
            return(
                <li>{`${item.name} - ${item.isDone === false ? 'Not Done' : 'Done'}`}
                    <form action={`/todos/${item._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE"/>
                    </form>
                </li>
            )
        })}</ul>}
        <hr/>
        <form action="/todos/new" method="POST">
            <input type="text" name="name"/>
            <input type="submit"/>
        </form>
            </body>
        )
    }
}

module.exports = Index;