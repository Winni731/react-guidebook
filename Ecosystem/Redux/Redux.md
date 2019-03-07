## Redux

> Redux is a predictable state container for JavaScript apps
>
> Redux 是一个可预测的 State 状态容器

Redux 参考了 Flux 的架构思想，对 Flux 中冗余部分（如 Dispatcher）进行简化，同时将 Elm 语言中函数式编程的思想融入其中。

[Redux 中文文档](https://github.com/camsong/redux-in-chinese)

### 三大原则

#### 单一数据源

**整个应用的状态数据被储存在一棵 Object Tree 中，并且只存在于唯一一个 Store 中。**

在传统的 MVC 架构中，我们可以根据需要创建无数个 Model，而 Model 之间可以互相监听、 触发事件甚至循环或嵌套触发事件，这些在 Redux 中都是不允许的。 

因为在 Redux 的思想里，一个应用永远只有唯一的数据源。我们的第一反应可能是：如果有一个复杂应用，强制要求唯一的数据源岂不是会产生一个特别庞大的 JavaScript 对象。 

实际上，使用单一数据源的好处在于整个应用状态都保存在一个对象中，这样我们随时可以提取出整个应用的状态进行持久化（比如实现一个针对整个应用的即时保存功能）。此外，这样 的设计也为服务端渲染提供了可能。 

至于我们担心的数据源对象过于庞大的问题，可通过了解 Redux 提供的工具函数 `combineReducers` 是如何化解的。 

> 📌 Flux 可能有多个 Store（区别于 Flux 的 Store，Redux 的 State 不会存放逻辑，操作数据在 Reducer 中处理。）

#### 状态是只读的

**只能通过触发事件（也就是触发 Action）来产生新的状态数据，Action 是一个用于描述已发生事件的普通对象。**

这一点和 Flux 的思想不谋而合，不同的是在 Flux 中，因为 Store 没有 `setter` 而限制了我们直接修改应用状态的能力，而在 Redux 中，这样的限制被执行得更加彻底，因为我们压根没有 Store。

在 Redux 中，我们并不会自己用代码来定义一个 Store。取而代之的是，我们定义一个 Reducer， 它的功能是根据当前触发的 Action 对当前应用的 State 进行迭代，这里我们并没有直接修改应用的 State，而是返回了一份全新的状态。

Redux 提供的 `createStore` 方法会根据 Reducer 生成 Store。最后，我们可以利用 `store.dispatch` 方法来达到修改状态的目的。

```js
store.dispatch({
    type: 'COMPLETE_TODO',
    index: 1
})

store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPELETED'
})
```

#### 使用纯函数执行修改 

**在 Reducer 中指定状态数据转换的逻辑。**

**纯函数：**

* 相同的输入，结果始终相同
* 不对外部环境进行操作

在 Redux 里，我们通过定义 Reducer 来确定状态的修改，而每一个 Reducer 都是纯函数，这意味着它没有副作用，即接受一定的输入，必定会得到一定的输出。

这样设计的好处不仅在于 Reducer 里对状态的修改变得简单、纯粹、可测试，更有意思的是， Redux 利用每次新返回的状态生成酷炫的时间旅行（time travel）调试方式，让跟踪每一次因为触发 Action 而改变状态的结果成为了可能。

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
    switch(action.type) {
            case 'SET_VISIBILITY_FILTER'
                return action.filter
            default 
                return state
    }
}
            
function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case 'COMPLTE_TODO':
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: true
                    })
                }
                return todo
            })
        default:
            return state
    }
}

import { combineReducers, createStore } from 'redux'
let reducer = combineReducers({ visibilityFilter: todos })
let store = createStore(reducer)
```

### 工作流程

Redux 工作步骤（考虑异步调用）

1. 组件引入
   * 引入 `connect`
   * 引入 `action`
   * 引入 `reducer`
   * 引入中间件
2. 组件 setState 加载：构造函数中，加载 state 的初始值
3. 组件动作
   * 组件中事件，触发 dispatch，将 action 发出，过段时间再执行 Reducer，修改 state 的值
   * mapDispatchToProps 函数触发
4. 组件传递 state
   * `reducer(state, action)` 获得 action 动作后的 state 值
   * 通过 mapStateToProps 函数，监听 store 变化，返回一个纯对象与数组的 props 结合，传递到 props

### 缺陷

* 一个组件所需要的数据，必须由父组件传过来，而不能像 Flux 中直接 从 Store 取。
* 当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会 re-render，可能会有效率影响，或者需要写复杂的 `shouldComponentUpdate` 进行判断。