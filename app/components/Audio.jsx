import React from 'react';
var Sound = require('react-sound');

var Audio = React.createClass({
    render: function () {
        return (
          <Sound 
            url="https://ssl.gstatic.com/dictionary/static/sounds/de/0/scope.mp3"
            playStatus={Sound.status.STOPPED}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying} />
            
        );
     }
});









var Audio = React.createClass({
    render: function () {
        return (
          <Sound 
            url="https://ssl.gstatic.com/dictionary/static/sounds/de/0/scope.mp3"
            playStatus={Sound.status.STOPPED}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying} />
            
        );
     }
});


/*<audio controls><source src={"https://ssl.gstatic.com/dictionary/static/sounds/de/0/scope.mp3"} type="audio/mpeg"/>Your browser does not support the audio element.</audio>*/     

















module.exports = Audio;