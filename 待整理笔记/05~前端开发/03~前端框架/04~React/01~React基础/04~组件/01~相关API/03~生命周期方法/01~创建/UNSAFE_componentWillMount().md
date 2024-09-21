
## UNSAFE_componentWillMount()
UNSAFE_componentWillMount() （之前名为 componentWillMount）该生命周期方法即将过时，在新代码中应该避免使用它们

UNSAFE_componentWillMount() 在挂载之前被调用，通常，建议使用 constructor() 来初始化 state，避免在此方法中引入任何副作用或订阅，改用 componentDidMount()

用 componentDidMount()