var React = require("react");
var Content = require("Content");
var NavBar = require("NavBar");

var Main = React.createClass({
    render: function(){
        return (
<div>
    <NavBar />
        <Content />
</div>    
    );
  }
});


module.exports = Main;