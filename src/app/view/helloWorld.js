var React = require('react');

import { connect } from 'react-redux'

import * as HelloWorldActions from '../actions/helloWorld_Action';


var HelloWorld = React.createClass({

	getInitialState: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml  += "in helloWorld the              Initial<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in helloWorld the Initial");
		return{ //该函数必须有返回

		};
	},
	componentWillMount:function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in helloWorld  the              WillMount<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in helloWorld  the WillMount");
	},
	componentDidMount: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in  helloWorld the              DidMount<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in  helloWorld the DidMount");
	},
	shouldComponentUpdate:function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in  helloWorld the              shouldUpdate<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in  helloWorld the shouldUpdate");
		return true;
	},
	componentDidUpdate: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in helloWorld  the              DidUpdate<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in helloWorld  the DidUpdate");
	},
	componentWillUnmount: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in  helloWorld the              WillUnmount<br/>";
	  document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in  helloWorld the WillUnmount");


		//对共享变量的还原复位
		document.getElementById("messageBox").innerHTML="";
	},
	handleOnClick:function(){
		const {dispatch} = this.props;
		var temptNum = this.props.helloNumber;
		temptNum += 1;
		 dispatch(HelloWorldActions.set_helloWorldNumber(temptNum));//触发Action保存新的number数值
	},
	render:function(){
		alert("in the helloWorld Renderfunction");
		return(<div>
							<div>
								This is the HelloWorld Javascripts
							</div>
							<button onClick={this.handleOnClick}>
							changeNumber
							</button>
							<div id="HelloWorldResult">
							{this.props.helloNumber}
							</div>
				</div>
		);
	}

});

function mapResourceState(state) {
  const { helloNumber } = state.helloWorldReducer
	return{
		helloNumber:helloNumber
	}
}

export default connect(mapResourceState)(HelloWorld)
