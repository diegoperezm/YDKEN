/* This is temporal, I need to refactor this code*/

var React = require("react");

var FormText = React.createClass({
  getDefaultProps: function(){
    return {
      src : "http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
    };
  },
  handleSubmit: function (e){
    e.preventDefault();
    var word = this.refs.src.value;
    
    if(word.indexOf(' ') < 1 && word.length > 0) {
    var src = "https://ssl.gstatic.com/dictionary/static/sounds/de/0/"+ word + ".mp3";

        this.setState({
          src: src
    }); } else {
      alert("error, please use a single word");
    }
  },

  getInitialState: function(){
    return {
    src: this.props.src
    };
  },
  
  render: function(){
    
    var src = this.state.src;
    return (
        <div>
        <audio 
      controls
      src= {src}
      autoplay>
          Your browser does not support the <code>audio</code> element.
 </audio>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="src" />
            <button>search</button>
          </form>
        </div>
    );
  }
});


module.exports = FormText;




/*
const FormText = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 0) return 'success';
    else return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },
  
  handleSubmit: function (e) {
    e.preventDefault();
    alert(1);
  },
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Dictionary</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search Word"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <Button type="submit" >Search</Button>
          <FormControl.Feedback />
        </FormGroup>
      </form>
      
      );
  }
});
*/
