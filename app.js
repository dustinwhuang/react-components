// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {done: false, hover: false};
  }

  onListItemClick() {
    this.setState({done: !this.state.done});
  }

  onListItemMouseEnter() {
    this.setState({hover: true});
  }

  onListItemMouseLeave() {
    this.setState({hover: false});
  }

  render() {
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseEnter={this.onListItemMouseEnter.bind(this)}
        onMouseLeave={this.onListItemMouseLeave.bind(this)}>
        {this.props.item}
      </li>
    );
  }

};

let GroceryList = (props) => (
  <ul>
  {
    props.groceryItems.map((item, key) => <GroceryListItem item={item} key={key}/>)
  }
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['Yogurt', 'Strawberries', 'Chocolate', 'Cookies']}/>, document.getElementById('app'));
