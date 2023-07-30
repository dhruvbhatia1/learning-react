Creating a food ordering app using Real Time Swiggy API.


https://github.com/dhruvbhatia1/learning-react/assets/65610188/728de8d1-c1bb-4e43-b0c1-0d6a8c2f5969




# Learning React Notes

## Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling files
- Compress files
- Consistent Hashing
- Code Splitting
-  Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- Tree Shaking - remove unused code
- Different dev and prod bundles

## React Hooks
- Normal JS utility Functions provided by React
- we have to import these functions.
- 2 most commonly used hooks
- useState() - use to create Local State Variables inside your functional components.
- useEffect() - use to create side effects inside your functional components.
- Whenever a state variable updates, React rerenders the component

## useEffect()
- useEffect(callback, [dependencies])
- if no dependencies, callback runs on every render
- if empty array, callback runs on first render
- if dependencies, callback runs on first render and when dependencies change

## Reconciliation Algorithm (React Fiber)

- In React, reconciliation is the process of updating the DOM to reflect changes in your application's state.

- When a component's state or props change, React needs to figure out which parts of the DOM need to be updated. To do this, it performs a process called reconciliation, which involves comparing the new state or props of a component with its previous state or props, and then determining what changes need to be made to the DOM.

## Routing
- Client Side Routing: In client-side routing, the routing logic is handled entirely on the client-side (in the browser). When a user navigates to a different page or route within the application, the browser loads the necessary JavaScript files and updates the DOM to render the new content. The URL in the address bar changes, but the browser doesn't make a new request to the server. Instead, the client-side JavaScript framework or library, such as React or Angular, intercepts the URL change and updates the UI accordingly. This approach provides a smooth and interactive user experience as the pages load quickly since the server is not involved in rendering each page.
- Server Side Routing: In server-side routing, the routing logic is handled on the server. When a user navigates to a different page or route, the browser sends a new request to the server. The server processes the request, generates the appropriate HTML content for the requested route, and sends it back to the browser. This approach involves a full page reload with each navigation, as the server sends a complete new HTML response. Server-side routing is the traditional approach used in traditional web applications and websites.

### Single Page Application (SPA)
- Single Page Application (SPA) is a type of web application that follows the client-side routing approach. It is a web application that dynamically updates the content on a single HTML page without requiring a full page reload for each navigation. SPAs are typically built using JavaScript frameworks or libraries, such as React, Angular, or Vue.js. The initial page load includes the necessary JavaScript and CSS files, and subsequent route changes are handled by the client-side JavaScript, which updates the UI without involving the server.

## React lifecycle 
- Parent Constructor
- Parent Render
    - Child1 Constructor
    - Child1 Render
    - Child2 Constructor
    - Child2 Render
    - Child1 ComponentDidMount
    - Child2 ComponentDidMount
- Parent ComponentDidMount

## Chunking / Code Splitting / Lazy Loading / Dynamic Bundling / On Demand Loading
- Code Splitting is a feature supported by bundlers like Webpack and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
- Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

## Higher Order Components (HOC)
- Higher Order Component is a function that takes a component as an argument and returns a new component.
- A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
- generally used for
    - Code reuse, logic and bootstrap abstraction (means we can use the same logic in multiple places)
    - Render Highjacking (means we can render something else in place of the wrapped component)
    - State abstraction and manipulation (means we can add state to the wrapped component)
    - Props manipulation (means we can add props to the wrapped component)

## Controlled and Uncontrolled Components
- In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

## Lifting State Up
- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.   

## Props Drilling
- Props drilling is the process we have to follow when we have a deeply nested component structure, and we need to pass data from a component that is higher up the tree to a component that is lower down the tree. In this case, we have to pass the data through all the components in between, even though they don’t need the data themselves. This is called props drilling.
- The problem with props drilling is that it makes the code harder to maintain. If we need to change the data we are passing down, we have to change the code in all the components in between. This is not ideal.
- The solution to this problem is to use React Context. React Context allows us to pass data down the component tree without having to pass props manually at every level. This makes the code easier to maintain.

## React Context
- React Context is a feature that was introduced in React 16.3. It allows us to pass data down the component tree without having to pass props manually at every level. This makes the code easier to maintain.
