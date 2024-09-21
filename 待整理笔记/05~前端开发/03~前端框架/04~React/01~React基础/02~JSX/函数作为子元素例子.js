function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    // props.children 获取组件内的子元素内容
    items.push(props.children(i));
  }
  // 最终返回组装好的元素
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {index => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
