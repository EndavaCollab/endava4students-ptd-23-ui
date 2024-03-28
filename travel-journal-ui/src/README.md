# Travel Journal 

This is a React application, using the version 18.2.0. The other library used is react-router-dom, version 6.14.2.

## Overview of the application

This is a walkthrough of the starting point of this project.


### App.jsx

This is the main component that goes rendered.
We're adding here all the routes.

For safety we're checking if the user is authenticated:
```jsx
  const { isAuthenticated } = useContext(AuthContext);
```

By using this value we add conditions in creating routes for the application:

```jsx
function App() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            {isAuthenticated && <Navbar />}
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? <Home /> : <Navigate to="/login" replace />
                    }
                />
            </Routes>
        </>
    );
}
```

The `Navbar` will appear only when the user is authenticated, as for the other routes, when we're sending the element prop, we're adding the condition of sending the user to that specific route or redirect him to the `/login` page.


## Login.jsx

For the login part, we're creating 2 states to store the email and the password. The purpose is to have the values stored by the user when it writes in the inputs.

For the submit part, we will encrypt the password in the sha-256 format. We're using js-sha256: 0.9.1 version of the library, the whole purpose is for security reasons.

The fetching method will be a `POST` and the body will contain the email and hashedPassword, if the promise is successful, the data received will be a boolean, that the user is authenticated or not, this will be stored in our context and navigate the user to the `Home` page.

Keep in mind that currently we don't handle any FE validations for the inputs, this will be required in the future to be added.

## Register.jsx

Similar to what we do in the `Login`, we're adding here 2 additional states for name and surname.
The password is hashed and if we receive the data we're sending the user directly to the `Login` page.

Just as for `Login` this does not contain validations.

## Home.jsx

This is the main page of the application, think of it as landing page.

## Navbar.jsx

This will persist as long as the user is authenticated, if we click logout the global variable which is true will be false and send us to the `Login` page.

# Utilities

The `config.js` is used to add our URL for our API, currently is accessed from a file named `.env`. In order to add it in your root folder create a file named `.env` and add:

```dotenv
VITE_APP_API_URL=YOUR_URL
```

It is important to start with `VITE_APP`.

To access your API, in `config.js` use the following syntax:

```js
const MY_URL = import.meta.env.VITE_APP_NAMED_PICKED;
```

# Guidelines

## Functional Components vs Class Components

- **Functional Components**: Use functional components (also known as stateless components) whenever possible. They are simpler, easier to read, and perform better. Use hooks (e.g., `useState`, `useEffect`) to manage state and side effects.

- **Class Components**: Avoid using class components unless you have a specific reason (e.g., working with legacy code or using lifecycle methods). Class components are more verbose and harder to understand.

## State Management

- **Local State**: React components can manage their own state using the `useState` hook.

  Example:
  ```javascript
  import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const decreaseCount = () => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    };

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
      </div>
    );
  };

  export default Counter;

  ## Keep State Close to Where It’s Used

- **Component-Level State**: Avoid global state for every piece of data. Instead, keep state close to where it’s needed. If a component doesn’t use a particular piece of state, it shouldn’t manage it.

- **Context API**: For sharing state across multiple components, consider using the React Context API. It allows you to create a global state accessible by any component within a specific context.

- **Use Immutability for State Updates**: When updating state, create a new copy of the state object rather than modifying the existing one. This prevents unintended side effects and ensures predictable behavior.

    Example:
    ```javascript
    // Incorrect (mutating the original array):
    const addTodo = (newTodo) => {
        todos.push(newTodo);
        setTodos(todos);
    };

    // Correct (creating a new array):
    const addTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

## Styling

- **External CSS Files**:
  - **Separation of Concerns**: Keep your styles separate from your components. Create external CSS files (e.g., `styles.css`) and import them into your components.
  - **Component-Specific Styles**: Each component should have its own CSS file. This ensures that styles are scoped to the relevant component.
  - **Importing CSS**:
    ```javascript
    // MyComponent.js
    import React from 'react';
    import './MyComponent.css'; // Import your CSS file

    const MyComponent = () => {
      // Component logic...
      return <div className="my-component">Hello, World!</div>;
    };

    export default MyComponent;
    ```

- **Class Naming Conventions**:
  - **BEM (Block Element Modifier)**: Consider using BEM for class naming. It helps maintain a consistent and predictable structure for your CSS classes.
    ```css
    /* styles.css */
    .my-component {
      /* Component styles... */
    }

    .my-component__title {
      /* Styles for the title within MyComponent... */
    }
    ```

- **Inline Styles**:
  - **Avoid Inline Styles**: While React allows inline styles using the `style` prop, it's generally better to avoid them. Inline styles mix HTML and CSS, making your code less maintainable (see [article 1](https://medium.com/@daboigbae/bad-ways-youre-probably-using-react-part-12-overusing-inline-styles-%EF%B8%8F-2cadf1bd9936#:~:text=Overdoing%20inline%20styles%20means%20you,it%27s%20a%20straight-up%20nightmare!) and [article 2](https://www.linkedin.com/pulse/stop-using-inline-styles-react-js-azeem-aleem/)).
  - **Exceptions**: Use inline styles for dynamic properties (e.g., setting colors based on state or props).
    ```javascript
    const MyComponent = ({ isActive }) => {
      const buttonStyle = {
        backgroundColor: isActive ? 'green' : 'gray',
      };

      return (
        <button style={buttonStyle}>Click Me</button>
      );
    };
    ```

- **Global vs. Local Styles**:
  - **Global Styles**: Use global styles sparingly. If you need global styles (e.g., for layout or typography), create a separate global CSS file (e.g., `global.css`) and import it in your main `index.js` or `App.js`.
  - **Local Styles**: Prefer local styles within components. This prevents unintended side effects and keeps styles isolated.

## Component Structure

- **Component Files**: Organize your components into separate files. Each component should have its own file.

- **Folder Structure**: Consider grouping related components into folders (e.g., `components`, `containers`, `layouts`). Keep your project organized.

## Code Formatting

- **Prettier**: A package like Prettier may be used to format your code consistently. [Set up](https://medium.com/@grantsky0503/setup-eslint-and-prettier-in-react-app-7c46b37697f6l) Prettier in your project and configure it to match your preferred style.

## Best Practices

- **Avoid Mutations**: Do not mutate state or props directly. Use functions like `setState` or `useState` to update state.

- **Destructuring**: Destructure props and state to improve readability. For example:

```javascript
// Instead of this:
const MyComponent = (props) => {
  const name = props.name;
  // ...

// Use destructuring:
const MyComponent = ({ name }) => {
  // ...
```

- **Conditional Rendering**: Use conditional rendering to dynamically display components based on certain conditions. This is useful for showing or hiding elements based on user input or application state.

```javascript 
  const MyComponent = ({ isVisible }) => {
    return isVisible ? <div>Visible</div> : null;
  };
```

- **List Rendering**: When rendering lists, use the `map` function to iterate over your data and return a component for each item. Remember to provide a unique `key` prop to each child in a list.

```javascript 
  const MyListComponent = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
```