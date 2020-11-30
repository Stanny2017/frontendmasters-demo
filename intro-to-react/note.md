# some notes

1. Q:why use two library: react & react-dom ? 
A:ReactNative and ReactDOM both share the React Package.

2. useEffect is something can take place of componentDidMount, componentWillMount, componentDidUpdate. you can use many effects.

3. customHook can be useful for component when export setState!

4. `cross-dev`  mock data offline

5. use comment `// eslint-disable-next-line` to disable eslint warning

6. `static getDerivedStateFromProps()` is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

`getDerivedStateFromProps exists for only one purpose. It enables a component to update its internal state as the result of changes in props.`

