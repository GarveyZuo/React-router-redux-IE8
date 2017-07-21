var React = require('react');


var ShowMessage = React.createClass({

	getInitialState: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in showMessage  the              Initial<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in  showMessage  the Initial");
		return {

		};
	},
	componentWillMount:function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in showMessage  the              WillMount<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in showMessage the WillMount");
	},
	componentDidMount: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in showMessage  the              DidMount<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in showMessage the DidMount");
	},
	shouldComponentUpdate:function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in showMessage  the              shouldUpdate<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in showMessage the shouldUpdate");
		return true;
	},
	componentDidUpdate: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in showMessage  the              DidUpdate<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in showMessage the DidUpdate");
	},
	componentWillUnmount: function(){
		var innerHtml = document.getElementById("messageBox").innerHTML;
		innerHtml += "in showMessage  the              WillUnmountMount<br/>";
		document.getElementById("messageBox").innerHTML=innerHtml;
		alert("in showMessage the WillUnmount");


		//对共享变量的还原复位
		document.getElementById("messageBox").innerHTML="";
	},
	render:function(){
		alert("in the showMessage RenderFunction");
		return(<div>
				This is the ShowMessage.js
				</div>
		);
	}

});

module.exports = ShowMessage;
