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