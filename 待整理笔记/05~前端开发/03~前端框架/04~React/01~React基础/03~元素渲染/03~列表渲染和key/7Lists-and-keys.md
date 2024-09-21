我的总结：
1. 我们可以用map()渲染创建list
2. key设置的位置和唯一性
3. map可以嵌入JSX

# lists and keys

## basic list example
```JavaScript
class NumberList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const numberList=this.props.numberList;
        const list=numberList.map((item) => 
            <li id={item.toString()} key={item.toString()}>{item}</li>
        );

        return(
            <div>
                <ul>{list}</ul>
            </div>
        )
    }
}

const numberList=[1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numberList={numberList} />, document.getElementById('root'));

```

## 关于key的设置
```JavaScript
// 使用id
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

// We don’t recommend using indexes for keys if the order of items may change
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

## key设置的注意事项
1. A good rule of thumb is that elements inside the map() call need keys
2. Keys Must Only Be Unique Among Siblings
```JavaScript
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

```


## Embedding map() in JSX
```JavaScript
return(
    <div>
        <ul>
            {numberList.map((item) => 
                <li id={item.toString()} key={item.toString()}>{item}</li>
            )}
        </ul>
    </div>
);
```