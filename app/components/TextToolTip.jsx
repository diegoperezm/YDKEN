var React = require('react');
import { Tooltip, OverlayTrigger } from 'react-bootstrap';


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


const text = (
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





var TextToolTip = React.createClass({
  render: function() {
    return (<div>{text}</div>);
  }
});


module.exports = TextToolTip;
















/*

  <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">you probably</LinkWithTooltip>
  
  <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">have a</LinkWithTooltip>
  
  <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">whatever keytar</LinkWithTooltip>
  
  <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">twitter handle</LinkWithTooltip>
  
);
*/