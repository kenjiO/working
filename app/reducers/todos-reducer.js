// gets imported into root reducer
const todos = (state = [], action) => {
  console.log('reducers/todos.js todos()');
  console.dir(state)
  console.dir(action)
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: action.id, text: action.text, completed: false}]
    case 'TOGGLE_TODO':
      var map =  state.map(item => {
        if (item.id !== action.id) {
          return item
        } else {
          return Object.assign({}, item, {completed: !item.completed})
        }
      });
      return map
    default:
      return state
  }
}

export default todos
//function(state, action) returns state