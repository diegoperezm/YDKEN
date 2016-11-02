/* This is temporary, I need to refactor this code*/
import React from 'react';

const playerStyle = {
  width: ' 100%'
};

const searchStyle = {
  width: ' 100%'
};


class FormText extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      src: "http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg",
      value: ''
    };
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
      event.preventDefault();
      var re = /[^a-zA-Z]/;
      var word = this.state.value.toLowerCase().trim();
      var url = "https://ssl.gstatic.com/dictionary/static/sounds/de/0/"+ word + ".mp3";
      
      if(!re.test(word)) {
      this.setState({src: url});
      } else { 
        alert("error: Bad Word (only one English  word per search, not numbers or characters)");
      }
  }

  
  render() {
    return (
      <div>
      <Player
        src={this.state.src} />
         <form>
            <input 
            style={searchStyle}
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>search</button>
          </form>
      </div>      
      );
   }
  
}


class Player extends React.Component {
   
   constructor(props){
     super(props);
     this.props =  this.props;
     this.handleError = this.handleError.bind(this);
   }
  
   handleError(event){
     event.preventDefault();
     alert("Word Not Found");
   }
  
  
  
  render(){
    return (
      <audio 
      controls
      style={playerStyle}
      onError={this.handleError}
      src={this.props.src}
      >
          Your browser does not support the <code>audio</code> element.
      </audio>
    );
  }
}


export default FormText;
