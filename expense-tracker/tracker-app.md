React Notes: Understanding Global Context and useReducer (The Magic Box Edition)

1. Global Context: The Magic Box
What is Global Context?
* Imagine a magic box in the center of your app.
* This box stores all the important data (state) that multiple components need.
* Any component can open the box (consume the context) to get or change the data.
Key Players:
1. ``:
    * Creates the magic box (Global Context).
    * Provides a way to share state across components without passing props manually.
2. Provider:
    * Acts like the "delivery guy" for the magic box.
    * Wraps your app (or part of it) and gives all child components access to the magic box.
3. Consumer:
    * Any component that opens the magic box to use or update the data.

2. useReducer: The Magic Box Manager
What is useReducer?
* The manager of the magic box.
* Decides how the data (state) inside the box should change when someone makes a request.
How It Works:
1. Current State:
    * The data inside the magic box right now.
2. Action:
    * A request sent to the manager, saying: "Here’s what I want to do."
3. Reducer Function:
    * The manager’s rulebook.
    * Takes the current state and the action, then decides how to update the state.

3. Key Terms Explained Simply
Initial State:
* The starting contents of the magic box.
* Example:const initialState = {
*   expenses: [
*     { id: 1, text: "Coffee", amount: -5 },
*     { id: 2, text: "Salary", amount: 500 },
*   ],
* };
State and Dispatch:
* useReducer gives you:
    1. State: What’s currently inside the magic box.
    2. Dispatch: A way to send actions (requests) to the reducer. Example:
* const [state, dispatch] = useReducer(reducerFunction, initialState);
Actions:
* An action is like a letter to the manager saying what you want to do.
* Has two parts:
    1. Type: What kind of request is this? (e.g., "ADD_EXPENSE").
    2. Payload: Any extra data needed to perform the action. Example:
* {
*   type: "ADD_EXPENSE",
*   payload: { id: 3, text: "Snacks", amount: -10 },
* }
Payload:
* The "extra data" you send with an action.
* Example: If you want to add an expense, the payload might be { id: 3, text: "Snacks", amount: -10 }.

4. Reducer Function: The Manager’s Rulebook
The Reducer:
1. Takes the current state and the action.
2. Decides how to update the state based on the action’s type and payload.
Example:
function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state, // Keep the existing state.
        expenses: [...state.expenses, action.payload], // Add new expense.
      };
    default:
      return state; // If the action is unknown, return the current state.
  }
}

5. Putting It All Together
Step-by-Step:
1. Create the Context (Magic Box):
import { createContext, useReducer } from "react";

const GlobalContext = createContext();
2. Set Up the Provider (Delivery Guy):
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
3. Dispatch an Action:
When you want to change the state, use dispatch:
dispatch({
  type: "ADD_EXPENSE",
  payload: { id: 4, text: "Lunch", amount: -15 },
});
4. Use the State (Consume the Context):
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const ExpenseList = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      {state.expenses.map((expense) => (
        <p key={expense.id}>
          {expense.text}: ${expense.amount}
        </p>
      ))}
    </div>
  );
};

Example Workflow:
1. Initial State: Magic box starts with some expenses.
2. Add Expense: User submits a form with { text: "Dinner", amount: -20 }.
3. Dispatch Action: Form sends an action with the new expense as the payload.
4. Reducer Updates State: Reducer adds the new expense to the magic box.
5. UI Updates: Any component using the magic box sees the new expense immediately.

6. Visualizing the Flow
1. Initial State:
    * Magic box starts with expenses: [...].
2. User Action:
    * User fills out a form and clicks "Add Expense."
3. Dispatch:
    * Sends an action like { type: "ADD_EXPENSE", payload: {...} }.
4. Reducer:
    * Updates the state based on the action.
5. Updated State:
    * Magic box now contains the new expense.
6. Re-render:
    * Any component using the context updates automatically.

Key Takeaways:
* Global Context = The Magic Box.
* useReducer = The Magic Box Manager.
* Actions = Letters to the Manager (with a type and optional payload).
* Payload = Extra information for the Manager to do its job.
* Reducer = Rulebook that updates the box based on the action.
