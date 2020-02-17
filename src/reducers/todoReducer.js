export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]





export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.derp,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE_COMPLETED":
      return (state.map(item => {
        console.log("item", item)
        if (item.id === action.derp) {
          return { ...item, completed: !item.completed }
        }
        else {
          return item
        }
      }))
    case "REMOVE_TODO":
      return (state.filter(state => !state.completed));
    default: return state;
  }
}


