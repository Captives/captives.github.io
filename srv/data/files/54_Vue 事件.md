
## 事件
@[toc]

### JavaScript事件的三阶段
![aHR0cHM6Ly93d3cud2FuZ3lhbmFuLm9ubGluZTo4MDAwL21lZGlhLzIwMTkvMDkvZXZlbnQucG5n.png](1)

- 捕获阶段
- 目标阶段：执行当前对象的事件处理程序
- 冒泡阶段
:::info
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

## 事件修饰符
[查看文档](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)

在事件处理程序中调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：**方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节**。

为了解决这个问题，Vue.js 为`v-on`提供了事件修饰符。修饰符是由点开头的指令后缀来表示的。

- `.stop`  阻止单击事件继续传播
- `.prevent`   提交事件不再重载页面
- `.capture`  内部元素触发的事件先在此处理，然后才交由内部元素进行处理
- `.self`   只当在 event.target 是当前元素自身时触发处理函数 
- `.once`   点击事件将只会触发一次
- `.passive`   滚动事件的默认行为 (即滚动行为) 将会立即触发
- `.enter`    只有在`key`是`Enter`时调用`vm.submit()`
::: info 键盘事件修饰符
`.tab`、`.esc`、`.space`、`.up`、`.down`、`.left`、`.right`、`.delete` (捕获“删除”和“退格”键)等等
:::
 
 示例：
- @click.stop : 阻止事件冒泡
- @click.prevent : 阻止事件默认行为
- @click.self : 事件只作用在元素本身，而不是其子元素
- @click.capture : 使用事件捕获模式
- @click.once : 事件只触发一次 2.1.4新增
- @scroll.passive : 告诉浏览器这个事件的默认行为不会被取消 2.3.0新增
- @keyup.enter : 按键修饰符，enter被按下的时候触发
- @click.ctrl : 系统修饰符，Ctrl 被按下的时候触发 2.1.0新增
- @click.ctrl.exact : 有且只有 Ctrl 被按下的时候才触发 2.5.0新增

::: error
使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用`v-on:click.prevent.self`会阻止所有的点击，而`v-on:click.self.prevent`只会阻止对元素自身的点击。
:::


## 自定义事件
[查看文档](https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%AE%9A%E4%B9%89%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6)

可以通过`emits`选项在组件上定义已发出的事件。
```js
app.component('custom-form', {
  emits: ['inFocus', 'submit']
})
```
::: info Tip
建议定义所有发出的事件，以便更好地记录组件应该如何工作。
:::

### 验证抛出的事件
与`prop`类型验证类似，如果使用**对象语法**而不是**数组语法**定义发出的事件，则可以验证它。

要添加验证，将为事件分配一个函数，该函数接收传递给`$emit`调用的参数，并返回一个布尔值以指示事件是否有效。
```js
app.component('custom-form', {
  emits: {
    // 没有验证
    click: null,

    // 验证submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', { email, password })
    }
  }
})
```

## v-model
### v-model 参数

[查看文档](https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0)

默认情况下，组件上的`v-model`使用`modelValue`作为 prop 和`update:modelValue`作为事件。我们可以通过向`v-model`传递参数来修改这些名称：
```html
<my-component v-model:title="bookTitle"></my-component>
```
```js
app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `
})
```

### 多个 v-model 绑定
[查看文档](https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%A4%9A%E4%B8%AA-v-model-%E7%BB%91%E5%AE%9A)

通过利用以特定 prop 和事件为目标的能力，正如我们之前在`v-model`参数中所学的那样，我们现在可以在单个组件实例上创建多个`v-model`绑定。

每个`v-model`将同步到不同的 prop，而不需要在组件中添加额外的选项：

### 处理 v-model 修饰符

[查看文档](https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%A4%84%E7%90%86-v-model-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

学习表单输入绑定时，我们看到`v-model`有内置修饰符——`.trim`、`.number`和`.lazy`。但是，在某些情况下，你可能还需要添加自己的自定义修饰符。
```html
<div id="app">
  <my-component v-model.capitalize="myText"></my-component>
  {{ myText }}
</div>
```
```js
const app = Vue.createApp({
  data() {
    return {
      myText: ''
    }
  }
})

app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  template: `<input
    type="text"
    :value="modelValue"
    @input="emitValue">`
})

app.mount('#app')
```
添加到组件`v-model`的修饰符将通过`modelModifiers` prop 提供给组件。每当` <input/>`元素触发`input`事件时，我们都将字符串大写。
请注意，当组件的 created 生命周期钩子触发时，`modelModifiers`prop 会包含`capitalize`，且其值为 true 
 ——因为`capitalize`被设置在了写为``的 v-model 绑定上。
:::info
对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"：
:::
```html
<my-component v-model:description.capitalize="myText"></my-component>
```
```js
app.component('my-component', {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  template: `
    <input type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)">
  `,
  created() {
    console.log(this.descriptionModifiers) // { capitalize: true }
  }
})
```
<hr/>
