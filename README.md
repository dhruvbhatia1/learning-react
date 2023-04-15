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
- useState() - use to create State Variables
- useEffect()
- Whenever a state variable updates, React rerenders the component

## Reconciliation Algorithm (React Fiber)

- In React, reconciliation is the process of updating the DOM to reflect changes in your application's state.

- When a component's state or props change, React needs to figure out which parts of the DOM need to be updated. To do this, it performs a process called reconciliation, which involves comparing the new state or props of a component with its previous state or props, and then determining what changes need to be made to the DOM.
