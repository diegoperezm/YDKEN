var React = require('react');
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
var h1Style = { marginBottom: '3rem'};

const LinkWithTooltip = React.createClass({
  render() {
    let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;
    return (
      <OverlayTrigger
        overlay={tooltip} placement="top"
        delayShow={1} delayHide={5}
      >
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
});



const H1 = (
  <h1 style={h1Style}>You Don't Know JS: Scope & Closures: Review (TL;DR)</h1>
);

const pOne = (
  <p>
<LinkWithTooltip tooltip={<span>skoʊp</span>} id="tooltip-0">Scope</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əz</span>} id="tooltip-1">is</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-2">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>sɛt</span>} id="tooltip-3">set</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əv</span>} id="tooltip-4">of</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>rulz</span>} id="tooltip-5">rules</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðət</span>} id="tooltip-6">that</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>dəˈtɜrmənz</span>} id="tooltip-7">determines</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wɛr</span>} id="tooltip-8">where</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-9">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>haʊ</span>} id="tooltip-10">how</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-11">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈvɛriəbəl</span>} id="tooltip-12">variable</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(aɪˈdɛntəˌfaɪər)</span>} id="tooltip-13">(identifier)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>kən</span>} id="tooltip-14">can</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bi</span>} id="tooltip-15">be</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>lʊkt-ʌp.</span>} id="tooltip-16">looked-up.</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɪs</span>} id="tooltip-17">This</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>lʊk-ʌp</span>} id="tooltip-18">look-up</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>meɪ</span>} id="tooltip-19">may</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bi</span>} id="tooltip-20">be</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fər</span>} id="tooltip-21">for</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-22">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈpɜrpəsəz</span>} id="tooltip-23">purposes</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əv</span>} id="tooltip-24">of</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈsaɪnɪŋ</span>} id="tooltip-25">assigning</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tə</span>} id="tooltip-26">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-27">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈvɛriəbəl,</span>} id="tooltip-28">variable,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wɪʧ</span>} id="tooltip-29">which</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪz</span>} id="tooltip-30">is</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ən</span>} id="tooltip-31">an</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɛl-eɪʧ-ɛs</span>} id="tooltip-32">LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(lɛft-hænd-saɪd)</span>} id="tooltip-33">(left-hand-side)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərəns,</span>} id="tooltip-34">reference,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɔr</span>} id="tooltip-35">or</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-36">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>meɪ</span>} id="tooltip-37">may</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bi</span>} id="tooltip-38">be</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fər</span>} id="tooltip-39">for</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-40">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈpɜrpəsəz</span>} id="tooltip-41">purposes</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əv</span>} id="tooltip-42">of</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>riˈtrivɪŋ</span>} id="tooltip-43">retrieving</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪts</span>} id="tooltip-44">its</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈvælju,</span>} id="tooltip-45">value,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wɪʧ</span>} id="tooltip-46">which</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪz</span>} id="tooltip-47">is</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ən</span>} id="tooltip-48">an</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɑr-eɪʧ-ɛs</span>} id="tooltip-49">RHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(raɪt-hænd-saɪd)</span>} id="tooltip-50">(right-hand-side)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərəns.</span>} id="tooltip-51">reference.</LinkWithTooltip>
</p>
);

const pTwo = (
  <p>
<LinkWithTooltip tooltip={<span>ɛl-eɪʧ-ɛs</span>} id="tooltip-0">LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərənsɪz</span>} id="tooltip-1">references</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>rɪˈzʌlt</span>} id="tooltip-2">result</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>frəm</span>} id="tooltip-3">from</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈsaɪnmənt</span>} id="tooltip-4">assignment</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌɑpəˈreɪʃənz.</span>} id="tooltip-5">operations.</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp-rɪˈleɪtɪd</span>} id="tooltip-6">Scope-related</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈsaɪnmənts</span>} id="tooltip-7">assignments</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>kən</span>} id="tooltip-8">can</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈkɜr</span>} id="tooltip-9">occur</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈiðər</span>} id="tooltip-10">either</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wɪð</span>} id="tooltip-11">with</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ði</span>} id="tooltip-12">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>=</span>} id="tooltip-13">=</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɑpəˌreɪtər</span>} id="tooltip-14">operator</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɔr</span>} id="tooltip-15">or</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>baɪ</span>} id="tooltip-16">by</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈpæsɪŋ</span>} id="tooltip-17">passing</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɑrgjəmənts</span>} id="tooltip-18">arguments</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tʊ</span>} id="tooltip-19">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(əˈsaɪn</span>} id="tooltip-20">(assign</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tʊ)</span>} id="tooltip-21">to)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈfʌŋkʃən</span>} id="tooltip-22">function</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>pəˈræmətərz.</span>} id="tooltip-23">parameters.</LinkWithTooltip>{"\u0020"}
</p>
);

const pThree = (
  <p>
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-0">The</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈʤɑvəˌskrɪpt</span>} id="tooltip-1">JavaScript</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɛnʤən</span>} id="tooltip-2">Engine</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fɜrst</span>} id="tooltip-3">first</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>kəmˈpaɪlz</span>} id="tooltip-4">compiles</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>koʊd</span>} id="tooltip-5">code</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bɪˈfɔr</span>} id="tooltip-6">before</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-7">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɛksəˌkjuts,</span>} id="tooltip-8">executes,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-9">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-10">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>soʊ</span>} id="tooltip-11">so</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈduɪŋ,</span>} id="tooltip-12">doing,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-13">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>splɪts</span>} id="tooltip-14">splits</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ʌp</span>} id="tooltip-15">up</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈsteɪtmənts</span>} id="tooltip-16">statements</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>laɪk</span>} id="tooltip-17">like</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>var</span>} id="tooltip-18">var</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>eɪ</span>} id="tooltip-19">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>=</span>} id="tooltip-20">=</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>2;</span>} id="tooltip-21">2;</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɪntə</span>} id="tooltip-22">into</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tu</span>} id="tooltip-23">two</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈsɛprət</span>} id="tooltip-24">separate</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>stɛps:</span>} id="tooltip-25">steps:</LinkWithTooltip>{"\u0020"}
</p>
);

const oL = (
 <ol>
    <li><LinkWithTooltip tooltip={<span>fɜrst,</span>} id="tooltip-0">First,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>var</span>} id="tooltip-1">var</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-2">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tə</span>} id="tooltip-3">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>dɪˈklɛr</span>} id="tooltip-4">declare</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-5">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-6">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðət</span>} id="tooltip-7">that</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp.</span>} id="tooltip-8">Scope.</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɪs</span>} id="tooltip-9">This</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪz</span>} id="tooltip-10">is</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>pərˈfɔrmd</span>} id="tooltip-11">performed</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ət</span>} id="tooltip-12">at</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-13">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bɪˈgɪnɪŋ,</span>} id="tooltip-14">beginning,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bɪˈfɔr</span>} id="tooltip-15">before</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>koʊd</span>} id="tooltip-16">code</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌɛksəˈkjuʃən.</span>} id="tooltip-17">execution.</LinkWithTooltip>{"\u0020"}</li>
    <li><LinkWithTooltip tooltip={<span>ˈleɪtər,</span>} id="tooltip-0">Later,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>eɪ</span>} id="tooltip-1">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>=</span>} id="tooltip-2">=</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>2</span>} id="tooltip-3">2</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tə</span>} id="tooltip-4">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>lʊk</span>} id="tooltip-5">look</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ʌp</span>} id="tooltip-6">up</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-7">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈvɛriəbəl</span>} id="tooltip-8">variable</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ɛl-eɪʧ-ɛs</span>} id="tooltip-9">(LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərəns)</span>} id="tooltip-10">reference)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-11">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈsaɪn</span>} id="tooltip-12">assign</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tʊ</span>} id="tooltip-13">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-14">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪf</span>} id="tooltip-15">if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>faʊnd.</span>} id="tooltip-16">found.</LinkWithTooltip>{"\u0020"}</li>
  </ol>  
);

const pFour= (
<p>  
<LinkWithTooltip tooltip={<span>boʊθ</span>} id="tooltip-0">Both</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɛl-eɪʧ-ɛs</span>} id="tooltip-1">LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-2">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɑr-eɪʧ-ɛs</span>} id="tooltip-3">RHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərəns</span>} id="tooltip-4">reference</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>lʊk-ʌps</span>} id="tooltip-5">look-ups</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>stɑrt</span>} id="tooltip-6">start</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ət</span>} id="tooltip-7">at</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-8">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈkɜrəntli</span>} id="tooltip-9">currently</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɛksəˌkjutɪŋ</span>} id="tooltip-10">executing</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp,</span>} id="tooltip-11">Scope,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-12">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪf</span>} id="tooltip-13">if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>nid</span>} id="tooltip-14">need</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bi</span>} id="tooltip-15">be</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ðæt</span>} id="tooltip-16">(that</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪz,</span>} id="tooltip-17">is,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðeɪ</span>} id="tooltip-18">they</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>doʊnt</span>} id="tooltip-19">don't</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>faɪnd</span>} id="tooltip-20">find</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wʌt</span>} id="tooltip-21">what</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɛr</span>} id="tooltip-22">they're</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈlʊkɪŋ</span>} id="tooltip-23">looking</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fər</span>} id="tooltip-24">for</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɛr),</span>} id="tooltip-25">there),</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðeɪ</span>} id="tooltip-26">they</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wɜrk</span>} id="tooltip-27">work</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɛr</span>} id="tooltip-28">their</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>weɪ</span>} id="tooltip-29">way</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ʌp</span>} id="tooltip-30">up</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-31">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈnɛstəd</span>} id="tooltip-32">nested</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp,</span>} id="tooltip-33">Scope,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wʌn</span>} id="tooltip-34">one</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp</span>} id="tooltip-35">scope</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(flɔr)</span>} id="tooltip-36">(floor)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ət</span>} id="tooltip-37">at</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-38">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>taɪm,</span>} id="tooltip-39">time,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈlʊkɪŋ</span>} id="tooltip-40">looking</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fər</span>} id="tooltip-41">for</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ði</span>} id="tooltip-42">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>aɪˈdɛntəˌfaɪər,</span>} id="tooltip-43">identifier,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənˈtɪl</span>} id="tooltip-44">until</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðeɪ</span>} id="tooltip-45">they</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>gɛt</span>} id="tooltip-46">get</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tə</span>} id="tooltip-47">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-48">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈgloʊbəl</span>} id="tooltip-49">global</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(tɑp</span>} id="tooltip-50">(top</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>flɔr)</span>} id="tooltip-51">floor)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-52">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>stɑp,</span>} id="tooltip-53">stop,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-54">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈiðər</span>} id="tooltip-55">either</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>faɪnd</span>} id="tooltip-56">find</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt,</span>} id="tooltip-57">it,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɔr</span>} id="tooltip-58">or</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>doʊnt.</span>} id="tooltip-59">don't.</LinkWithTooltip>{"\u0020"}
</p>
);

const pFive = (
<p>
<LinkWithTooltip tooltip={<span>ˌʌnfʊlˈfɪld</span>} id="tooltip-0">Unfulfilled</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɑr-eɪʧ-ɛs</span>} id="tooltip-1">RHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərənsɪz</span>} id="tooltip-2">references</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>rɪˈzʌlt</span>} id="tooltip-3">result</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-4">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ReferenceErrors</span>} id="tooltip-5">ReferenceErrors</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈbiɪŋ</span>} id="tooltip-6">being</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>θroʊn.</span>} id="tooltip-7">thrown.</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌʌnfʊlˈfɪld</span>} id="tooltip-8">Unfulfilled</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɛl-eɪʧ-ɛs</span>} id="tooltip-9">LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərənsɪz</span>} id="tooltip-10">references</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>rɪˈzʌlt</span>} id="tooltip-11">result</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-12">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ən</span>} id="tooltip-13">an</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌɔtəˈmætɪk,</span>} id="tooltip-14">automatic,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪmˈplɪsətli-kriˈeɪtəd</span>} id="tooltip-15">implicitly-created</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈgloʊbəl</span>} id="tooltip-16">global</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əv</span>} id="tooltip-17">of</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðət</span>} id="tooltip-18">that</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>neɪm</span>} id="tooltip-19">name</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ɪf</span>} id="tooltip-20">(if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>nɑt</span>} id="tooltip-21">not</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-22">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>"strɪkt</span>} id="tooltip-23">"Strict</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>moʊd"</span>} id="tooltip-24">Mode"</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>[^noʊt-strictmode]),</span>} id="tooltip-25">[^note-strictmode]),</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɔr</span>} id="tooltip-26">or</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-27">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ReferenceError</span>} id="tooltip-28">ReferenceError</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ɪf</span>} id="tooltip-29">(if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-30">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>"strɪkt</span>} id="tooltip-31">"Strict</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>moʊd"</span>} id="tooltip-32">Mode"</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>[^noʊt-strictmode]).</span>} id="tooltip-33">[^note-strictmode]).</LinkWithTooltip>{"\u0020"}
</p>
);




var TextToolTip = React.createClass({
  render: function() {
    return (
      <div>
        {H1}
        {pOne}
        {pTwo}
        {pThree}
        {oL}
        {pFour}
        {pFive}
      </div>);
    }
});


module.exports = TextToolTip;
















/*

  <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">you probably</LinkWithTooltip>{"\u0020"}{"\u0020"}
  
  <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">have a</LinkWithTooltip>{"\u0020"}{"\u0020"}
  
  <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">whatever keytar</LinkWithTooltip>
  
  <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">twitter handle</LinkWithTooltip>
  
);
*/