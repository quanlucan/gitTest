import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// const element = <h1>Hello, quanlucan!</h1>
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


class Tick extends Component {
	render() {
		return (
			<div>
				<h1> hello quanlucan</h1>
				<p> it is {new Date().toLocaleTimeString()}</p>
			</div>

		)

	}
}


// 	const element = (
// 		<div>
// 			<h1> hello quanlucan</h1>
// 			<p> it is {new Date().toLocaleTimeString()}</p>
// 		</div>
// 	)
	

// }


ReactDOM.render(
		<Tick />,
		document.getElementById("root")
	);
// setInterval(tick,1000);