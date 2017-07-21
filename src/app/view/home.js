var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;

var Home = React.createClass({
    mixins: [History],
  GoToHelleWorld:function(){
    this.history.pushState(null,'app/helloWorld');

  },
  GoToShowMessage:function(){
    this.history.pushState(null,'app/showMessage');
  },
  render:function(){

    return (
      <div>
      This is the home page!!!
      <button onClick={this.GoToHelleWorld} style={{marginRight:"30px",color:"red"}}>helloWorld</button>
      <button onClick={this.GoToShowMessage} style={{color:"green"}}>showMessage</button>
      <hr />
      <div id="messageBox" style={{marginTop:"50px",marginBottom:"50px"}}>
      {/*render中添加注释需要使用大括号，render函数中最外层只能有单个div */}
      </div>
      <hr />
      {this.props.children}
      </div>
    );

  }
});


module.exports = Home;
