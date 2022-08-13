interface Pokemon {
  id: number;
  name: string;
}

const List = (props: Pokemon) => {
  return <li key={props.id}></li>;
};

export default List;
