## Lifecycle 生命周期函数

生命周期函数是在组件的不同阶段可执行自定义功能的钩子。

- Mounting

  - [**`constructor()`**](#constructor)
  - `static getDerivedStateFromProps()`
  - ⚠️ [`UNSAFE_componentWillMount()`](UNSAFE_componentWillMount)
  - [**`render()`**](#render)
  - **`componentDidMount()`**
- Updating

  - `static getDerivedStateFromProps()`
  - `shouldComponentUpdate()`
  - **`render()`**
  - `getSnapshotBeforeUpdate()`
  - **`componentDidMount()`**
- Unmounting

  - **`componentWillUnmount()`**
- Error Handling
  - `static getDerivedStateFromError()`
  - `componentDidCatch()`

状态组件的3个生命周期阶段

状态组件主要通过3个生命周期阶段来管理，分别是 `MOUNTING`，`RECEIVE_PROPS` 和 `UNMOUNTING`。

1. 其中 `will` 前缀的方法是进入状态之前的调用，比如 `componentWillReceiveProps`，此方法中改变 state 不会二次渲染而是进行 state 合并，并且只有在 `componentDidUpdate` 后才能获取更新后的 this.state。如果想获取组件默认的 props，并且赋值给 State ，就可以在这里修改，达到UI上的效果。
2. `did` 的前缀表示进入状态之后调用，比如 `componentDidMount`，组件一般初始化都会在这里进行数据请求。

### 装载阶段 Mounting

装载阶段执行的方法会在组件实例被创建和插入DOM中时被调用，这个过程主要实现组件**状态的初始化**。

#### constructor

**构造函数**。在组件初始化的时候调用一次。

一个组件需要构造函数的目的：

- 设置初始化状态：因为组件的生命周期中任何函数都可能要访问 State，那么整个周期中第一个被调用的构造函数便是初始化 State 最理想的地方；
- 绑定成员函数上下文引用
  - 因为在 ES6 语法下，类的每个成员函数在执行时的 `this` 并不是和类实例自动绑定的；
  - 而在构造函数中 `this` 就是当前组件实例，所以，为了方便将来调用，往往在构造函数中将这个实例的特定函数绑定 `this` 为当前类实例；
  - 建议定义函数方法时直接使用箭头函数，就无须在构造函数中进行函数的 `bind` 操作。

在 ES6 中，在构造函数中通过 `this.state` 赋值完成状态初始化；通过给类属性（注意是类属性，而不是类实例对象的属性）`defaultProps` 赋值指定的 Props 初始值。

```js
class Sample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           foo: 'InitailValue' 
        }
    }
}

Sample.defaultProps = {
    bar: 'InitialValue'
}
```

#### static getDerivedStateFromProps(nextProps, prevState)

组件化实例化后和接受新 Props 时将会调用该生命周期函数。它应该返回一个对象来更新 State，或者返回 `null` 来表明新 Props 不需要更新任何 State。

与 `componentDidUpdate` 一起，这个新的生命周期应该覆盖传统 `componentWillReceiveProps` 的所有用例。

- ⚠️ 注意，如果父组件导致了组件的重新渲染，即使属性没有更新，这一方法也会被调用。如果你只想处理变化，你可能想去比较新旧值。
- 📌 调用`this.setState()` 通常不会触发 `getDerivedStateFromProps()`。

- 📌 该生命周期函数是一个静态函数，所以函数体内不能访问 this；
- 在组件装载和更新阶段都会被调用；

🌰 **示例：**

```js
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.translateX !== prevState.translateX) {
    return {
      translateX: nextProps.translateX
    }
  }
  return null;
}
```

> 💡 可用于装载阶段（Mounting）和更新阶段（Updating）
>
> 🎉 典型场景：表单获取默认值

#### UNSAFE_componentWillMount

**预装载函数**。在装载组件发生前被调用，其在渲染 `render()` 之前被调用。

📌 `componentWillMount` 方法的调用在 `constructor` 之后，在 `render` 之前，因此在此生命周期钩子函数里同步地设置组件内部状态 `setState` 将不会触发重新渲染。

避免在该方法中引入任何的副作用或订阅。对于这些使用场景，推荐使用 `constructor()` 来替代。

> 💡在该钩子函数中处理的操作，建议提前到构造函数中。
>
> 🗑此生命周期函数将在React v17正式废弃。

#### render

**渲染函数**。唯一的一定不能省略的函数，而且必须有返回值，返回 null 或 false 表示不渲染任何 DOM 元素。

当被调用时，其应该检查 `this.props` 和 `this.state` 并返回以下类型之一：

- **React元素**。通常是由 JSX 创建。该元素可能是一个原生DOM组件的表示，如`<div />`，或者是一个你定义的合成组件。
- **数组和片段**。让你返回多个元素的片段（Fragment）。
- **字符串和数字**。这些将被渲染为 DOM 中的 text node。
- **Protals**。由 [`ReactDOM.createPortal`](http://react.yubolun.com/docs/portals.html) 创建。
- **布尔值和 `null`**。什么都不渲染（通常存在于  `return test && <Child />` 写法，其中 `test` 是布尔值。）

它是一个仅仅用于渲染的**纯函数**，返回值完全取决于 State 和 Props，不能在函数中任何修改 Props、State、请求数据等具有副作用的操作，不读写 DOM 信息，也不和浏览器交互（例如 `setTimeout`）。如果需要和浏览器交互，在 `componentDidMount()` 中或者其它生命周期方法完成相关事务。

📌 此渲染函数并不做实际的渲染动作（渲染到 DOM 树），它返回的只是一个 JSX 的描述对象（及组件实例），何时进行真正的渲染是有 React 库决定的。而 React 肯定是要把所有组件返回的结果综合起来，才能知道如何产生真实的 DOM 树。也就是说，只有 React 库调用所有组件的渲染函数之后，才有可能完成 DOM 装载，这时候才会依次调用 `componentDidMount` 函数作为装载的收尾。

保持 `render()` 纯粹，可以使服务器端渲染更加切实可行，也使组件更容易被理解。

> ⚠️请勿在此函数中使用 `setState` 方法。

#### componentDidMount

**挂载成功函数**。组件完全挂载到网页上时调用。

> 🔬该函数不会在 `render` 函数调用完成之后立即调用，因为 `render` 函数仅仅是返回了 JSX 的对象，并没有立即挂载到 DOM 树上，而 `componentDidMount` 是在**组件被渲染到 DOM 树（称为初始化渲染）**之后被调用的。另外，`componentDidMount` 函数在进行服务器端渲染时不会被调用（仅客户端有效）。

`componentDidMount` 通常用于加载外部数据（即发送网络请求），之所以在 `componentDidMount` 中而不是在构造函数中进行数据请求的原因在于：如果数据加载完毕后，即 Props 已经有值了，但是组件还没有渲染出来，会报错。但是这里有一些把数据拉取提前到 `constructor` 函数的思路：在 `contructor` 函数中，通过 Promise 来进行数据的请求，并且绑定到当前实例对象上，然后在 `componentDidMount` 中执行 Promise 把数据更新到 props 上。

在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 `this.getDOMNode()` 来获取相应 DOM 节点。适用于**需要初始化 DOM 节点的操作**。

如果想和其它 JavaScript 框架集成，使用 `setTimeout` 或者 `setInterval` 来设置定时器，或者发送 AJAX 请求，可以在该方法中执行这些操作。适用于 **AJAX 请求**。

> 📋适用场景：发送网络请求；初始化 DOM 节点操作；添加事件监听。

### 更新阶段 Updating

属性（Props）或状态（State）的改变会触发一次更新。当一个组件在被重新渲染时，这些方法将会被调用。

#### UNSAFE_componentWillReceiveProps(nextProps)

> ⚠️ 推荐使用 `getDerivedStateProps()` 生命周期。

- 即便 Props 没有发生变化，该函数亦有机会被调用；
- 在组件更新生命周期中，**只要**父组件的渲染函数（render）被调用，在渲染函数里被渲染的子组件就会经历更新过程，不管父组件传给子组件的 Props 有没有改变，都会触发子组件的 `componentWillReceiveProps` 函数；
- 💡通过 `this.setState()` 方法触发的更新过程不会调用这个函数；
- 因为，这个函数适合根据新的 Props 值（也就是参数 `nextProps`）来计算是不是要更新内部状态 State；而更新内部状态 State 的方法是 `this.setState()` ，如果 `this.setState()` 的调用导致 `componentWillReceiveProps` 再调用，那将是一个死循环。

通过 `this.props` 取得当前的 Props，nextProps 传入的是要更新的 Props。所以使用此方法要确保比较 `this.props` 和 `nextProps`，基于对比的结果去实现不同的行为，避免不必要的渲染。此外，你可以基于新的属性来设置组件的状态。

用此函数可以作为 React 在 Props 传入之后， `render()` 渲染之前更新 State 的机会。在该函数中调用 `this.setState()` 将会引起第二次渲染。

> 🎉 适用场景：更新 state 的值（比如重置）；比较 this.props 和 nextProps
>
> 🗑 此生命周期函数将在React v17正式废弃。
>
> ⚠️ 推荐使用 `static getDerivedStateFromProps()` 代替。

#### shouldComponentUpdate(nextProps, nextState)

每次组件因为 State 和 Props 变化而更新时，在**重新渲染前**该生命周期函数都会调用，让 React 知道当前 State 或 Props 的改变是否影响组件的输出。在一个更新生命周期中，组件及其子组件将根据该方法返回的布尔值来决定是否继续这次更新过程（重新渲染）。这样你可以在必要的时候阻止组件的渲染生命周期（Render Lifecycle）方法，避免不必要的渲染。默认行为是在每一次 State 的改变重新渲染，在大部分情况下你应该依赖于默认行为。

默认情况下，该方法默认返回 `true`，表示需要重新渲染。在 State 改变的时候避免细微的 Bug，但是如果总是小心地把 State 当做不可变的，在 `render()` 中只从 Props 和 State 读取值，此时你可以覆盖该方法，实现新老 Props 和 State 的比对逻辑。

当该方法返回的布尔值 `false` 告知 React 无须重新渲染时，`render`、`componentWillUpdate` 和 `componentDidUpdate` 等生命周期钩子函数都不会被调用。

💡 如果性能是个瓶颈，尤其是有几十个甚至上百个组件的时候，使用 `shouldComponentUpdate` 可以优化渲染效率，提升应用的性能。

> 🚫 此钩子函数在初始化渲染和使用了 forceUpdate 方法的情况下不会被调用。
>
> ⚠️ 请勿在此函数中使用 setState 方法，会导致循环调用。
>
> 🎈render 和 shouldComponentUpdate 也是 React 生命周期函数中唯二两个要求有返回结果的函数

#### UNSAFE_componentWillUpdate(nextProps, nextState)

**预更新函数**。这个方法是一个更新生命周期中重新渲染执行之前的最后一个方法。你已经拥有了下一个属性和状态，他们可以在这个方法中任由你处置。你可以利用这个方法在渲染之前进行最后的准备。

> 🎉 适用场景：根据 State 的 变化设置变量；派发事件；开始动画。
>
> 🚫 此钩子函数在初始化渲染的时候不会被调用。
>
> ⚠️ 请勿在此函数中使用 `setState` 方法，会导致循环调用。如果需要基于新的 Props 计算 State，建议使用 `componentWillRreceiveProps`。 
>
> 🗑 此生命周期函数将在React v17正式废弃。

#### render

渲染函数。

> ⚠️请勿在此函数中使用 setState 方法。

#### getSnapshotBeforeUpdate()

`getSnapshotBeforeUpdate` 生命周期渲染函数执行后，并在准备输出写入 DOM 前被调用，它能让你捕获一些从 DOM 中才能获取的（可能会变更的）信息（例如，元素重新渲染后页面各种定位位置的变更等）。

此生命周期返回的任何值将作为第三个参数传递给 `componentDidUpdate`。 （这个生命周期不是经常需要的，但可以用于在恢复期间手动保存滚动位置的情况。）

⚠️ 与`componentDidUpdate`一起，这个新的生命周期将覆盖旧版 `componentWillUpdate` 的所有用例。

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('#enter getSnapshotBeforeUpdate');
    return 'foo';
}

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('#enter componentDidUpdate snapshot = ', snapshot);
}
```

#### componentDidUpdate()

**更新完成函数**。

除了首次渲染之后调用 `componentDidMount` ，其他渲染之后都是调用 `componentDidUpdate`。

相比装配过程的生命周期函数，更新过程的生命周期函数使用的相对来说要少一些。常用的是 getDerivedStateFromProps、componentShouldUpdate，前者经常用于根据新 Props 的数据去设置组件的 State，而后者则是常用于优化，避免不必要的渲染。

> 🎉 适用场景：操作 DOM；发送网络请求。
>
> 🚫 此方法不会在初始化渲染的时候调用。

### 卸载阶段 Unmounting

当一个组件从DOM中移除时，该方法被调用。

#### componentWillUnmount()

**预卸载函数**。在组件卸载和销毁之前调用。可以利用这个生命周期方法去**执行任何清理任务**。

卸载过程只涉及一个函数 `componentWillUnmount`，当组件要从DOM树上删除前，会调用一次这个函数。这个函数经常用于去除 `componentDidMount` 函数带来的副作用，例如清除计时器、删除 `componentDidMount` 中创造的非 React 元素等。

⚠️ 在该方法中调用 `setState` 不会触发 `render`，因为所有的更新队列，更新状态都被重置为 `null`。

> 🎉 适用场景：删除 componentWillMount 或其它地方添加的事件监听；取消网络请求；取消定时器；解绑 DOM 事件。
>
> ⚠️ 请勿在此函数中使用 setState 方法。

### 捕捉错误 Error Handling

在渲染过程中发生错误时会被调用。

#### static getDerivedStateFromError(error)

这个生命周期钩子函数会在子孙组件跑出错误时执行。它接收抛出的错误作为参数并且需要返回值用于更新 State。

```jsx
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStatteFromError(){
        // Update state so the next render will show the fallback UI
        return { hasError: true }
    }
    render(){
        if (this.state.hasErro) {
            // You can render any custom fallback UI
            return <h1>Something went wwrong</h1>
        }
        
        return this.props.children
    }
}
```

#### componentDidCatch(error, info)

这个生命周期会在子孙组件抛出错误时调用。它接受两个参数：

* `error` - 抛出的错误对象
* `info` - 包含有关错误的信息的对象

错误边界是React组件，并不是损坏的组件树。错误边界捕捉发生在子组件树中任意地方的JavaScript错误，打印错误日志，并且显示回退的用户界面。错误边界捕捉渲染期间、在生命周期方法中和在它们之下整棵树的构造函数中的错误。

---

**参考资料：**

- [React V16.3即将更改的生命周期](http://web.jobbole.com/94406/)