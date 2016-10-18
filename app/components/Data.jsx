var React = require('react');
var styleOrig = {
    fontSize: 12  
};

var styleTrans = {
    color: "red"
};

var Data = React.createClass({
    render: function() {
        return (
            <div>

<p className="orig" style={styleOrig}>
Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the<br />
<span className="translated" style={styleTrans}>skoʊp əz ðə  sɛt əv rulz  ðət  dəˈtɜrmənz wɛr   ənd haʊ ə ˈvɛriəbəl (aɪˈdɛntəˌfaɪər) kən bi lʊkt-ʌp. ðɪs lʊk-ʌp meɪ bi fər ði</span><br /> 
purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its<br />
<span className="translated" style={styleTrans}>ˈpɜrpəsəz əv əˈsaɪnɪŋ tə ðə ˈvɛriəbəl, wɪʧ ɪz ən ɛl-eɪʧ-ɛs (lɛft-hænd-saɪd) ˈrɛfərəns, ɔr ɪt meɪ bi fər ðə ˈpɜrpəsəz əv riˈtrivɪŋ ɪts</span><br />  
value, which is an RHS (right-hand-side) reference.<br /> 
<span className="translated" style={styleTrans}>ˈvælju, wɪʧ ɪz ən ɑr-eɪʧ-ɛs (raɪt-hænd-saɪd) ˈrɛfərəns.</span>
</p>

<p style={styleOrig}>
LHS references result from assignment operations. Scope-related assignments can occur either with the = operator or by<br />
<span className="translated" style={styleTrans}>
ɛl-eɪʧ-ɛs ˈrɛfərənsɪz rɪˈzʌlt frəm əˈsaɪnmənt ˌɑpəˈreɪʃənz. skoʊp-rɪˈleɪtɪd əˈsaɪnmənts kən əˈkɜr ˈiðər wɪð ði = ˈɑpəˌreɪtər ɔr baɪ</span><br />
passing arguments to (assign to) function parameters.<br />
<span className="translated" style={styleTrans}>ˈpæsɪŋ ˈɑrgjəmənts tʊ (əˈsaɪn tʊ) ˈfʌŋkʃən pəˈræmətərz.</span>
</p>

<p style={styleOrig}>
The JavaScript Engine first compiles code before it executes, and in so doing, it splits up statements like var a = 2; into two<br />
<span className="translated" style={styleTrans}>ə ˈʤɑvəˌskrɪpt ˈɛnʤən fɜrst kəmˈpaɪlz koʊd bɪˈfɔr ɪt ˈɛksəˌkjuts, ənd ɪn soʊ ˈduɪŋ, ɪt splɪts ʌp ˈsteɪtmənts laɪk var eɪ = 2;ˈɪntə tu</span><br />
separate steps:<br />
<span className="translated" style={styleTrans}>ˈsɛprət stɛps:</span>
</p>

<ol style={styleOrig}>
<li>First, var a to declare it in that Scope. This is performed at the beginning, before code execution.</li>
<li>Later, a = 2 to look up the variable (LHS reference) and assign to it if found.</li>
</ol>

<p style={styleOrig}>
Both LHS and RHS reference look-ups start at the currently executing Scope, and if need be (that is, they don't find what<br /> 
<span className="translated" style={styleTrans}>boʊθ ɛl-eɪʧ-ɛs ənd ɑr-eɪʧ-ɛs ˈrɛfərəns lʊk-ʌps stɑrt ət ðə ˈkɜrəntli ˈɛksəˌkjutɪŋ skoʊp, ənd ɪf nid bi (ðæt ɪz, ðeɪ doʊnt faɪnd wʌt<br /></span>
they're looking for there), they work their way up the nested Scope, one scope (floor) at a time, looking for the identifier, until<br />
<span className="translated" style={styleTrans}>ðɛr ˈlʊkɪŋ fər ðɛr), ðeɪ wɜrk ðɛr weɪ ʌp ðə ˈnɛstəd skoʊp, wʌn skoʊp (flɔr) ət ə taɪm, ˈlʊkɪŋ fər ði aɪˈdɛntəˌfaɪər, ənˈtɪl</span><br />
they get to the global (top floor) and stop, and either find it, or don't.<br />
<span className="translated" style={styleTrans}>ðeɪ gɛt tə ðə ˈgloʊbəl (tɑp flɔr) ənd stɑp, ənd ˈiðər faɪnd ɪt, ɔr doʊnt.</span> 
</p>

<p style={styleOrig}>
Unfulfilled RHS references result in ReferenceErrors being thrown. Unfulfilled LHS references result in an automatic,<br />
<span className="translated" style={styleTrans}>ʌnfʊlˈfɪld ɑr-eɪʧ-ɛs ˈrɛfərənsɪz rɪˈzʌlt ɪn ReferenceErrors ˈbiɪŋ θroʊn. ˌʌnfʊlˈfɪld ɛl-eɪʧ-ɛs ˈrɛfərənsɪz rɪˈzʌlt ɪn ən ˌɔtəˈmætɪk, </span><br />
implicitly-created global of that name (if not in "Strict Mode" [^note-strictmode]), or a ReferenceError (if in "Strict Mode" note-strictmode]).<br />
<span className="translated" style={styleTrans}>ɪmˈplɪsətli-kriˈeɪtəd ˈgloʊbəl əv ðət neɪm (ɪf nɑt ɪn "strɪkt moʊd" [^noʊt-strictmode]), ɔr ə ReferenceError (ɪf ɪn "strɪkt moʊd" 
[^note-strictmode]).</span>
</p>
</div>
      );
    }
});





module.exports = Data;


/*
    <span title="rain: listen to American pronunciation" data-src-mp3="http://dictionary.cambridge.org/media/english/us_pron/r/rai/rain_/rain.mp3" data-src-ogg="http://dictionary.cambridge.org/media/english/us_pron_ogg/r/rai/rain_/rain.ogg" class="circle circle-btn sound audio_play_button us"><i class="fcdo fcdo-volume-up">​</i>rain</span>
    <a href="https://ssl.gstatic.com/dictionary/static/sounds/de/0/scope.mp3">Scope</a>        
*/