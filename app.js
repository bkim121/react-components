// TODO

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		};
	}

	onListItemHover() {
		this.setState({
			done: !this.state.done
		})
	}

	render() {

		var style = {
			fontWeight: this.state.done ? '700' : '100'
		};

		return (
			<li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.todo}</li>
		);

	}
}





// class GroceryListItem extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return (
// 			<li>{this.props.todo}</li>
// 		)
// 	}

// }

var GroceryList = (props) => (
	<ul>
		{props.todos.map(todo =>
			<GroceryListItem todo={todo} />
		)}
	</ul>
);





// var GroceryList= (props) => {

// 	var onListItemClick = (event) => {
// 		console.log('I got clicked');
// 	}

// 	return (
// 		<ul>
// 			<li onClick={onListItemClick}>{props.todos[0]}</li>
// 			<li>{props.todos[1]}</li>
// 			<li>{props.todos[2]}</li>
// 		</ul>
// 	)
// }






// var GroceryList = (props) => (
// 	<ul>
// 		<li>{props.todos[0]}</li>
// 		<li>{props.todos[1]}</li>
// 		<li>{props.todos[2]}</li>
// 	</ul>
// )

var App = () => (
	<div>
		<h2>Grocery List</h2>
		<GroceryList todos={['Cucumbers', 'Kale', 'Potatoes']} />
	</div>
);


ReactDOM.render(<App />, document.getElementById('app'));

