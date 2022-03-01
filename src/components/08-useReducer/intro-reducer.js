// Estado inicial
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

// Construcción del reducer
const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }
  return state;
};

// Inicialización
let todos = todoReducer();

// Creación de un nuevo elemento para el reducer
const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

// Creación de la acción agregar
const agregarToDoAction = {
  type: "agregar",
  payload: newTodo,
};

// Llamado del reducer para actualizarlo
todos = todoReducer(todos, agregarToDoAction);

console.log(todos);
