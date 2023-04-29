// Create a new context to store user data
export const UserContext = createContext();

// Define the initial state for the user data
const initialState = {
  isLoggedIn: false,
  username: '',
  email: '',
};

// Define the reducer function to update the state based on actions
function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        email: action.payload.email,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}

// Create a component that provides the user context to child components
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
