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
<LinkWithTooltip tooltip={<span>skoʊp</span>} href="https://ssl.gstatic.com/dictionary/static/sounds/de/0/scope.mp3" id="tooltip-0">Scope</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>əz</span>} id="tooltip-1">is</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-2">the</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>sɛt</span>} id="tooltip-3">set</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>əv</span>} id="tooltip-4">of</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>rulz</span>} id="tooltip-5">rules</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>ðət</span>} id="tooltip-6">that</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>dəˈtɜrmənz</span>} id="tooltip-7">determines</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>wɛr</span>} id="tooltip-8">where</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-9">and</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>haʊ</span>} id="tooltip-10">how</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-11">a</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>ˈvɛriəbəl</span>} id="tooltip-12">variable</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>(aɪˈdɛntəˌfaɪər)</span>} id="tooltip-13">(identifier)</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>kən</span>} id="tooltip-14">can</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>bi</span>} id="tooltip-15">be</LinkWithTooltip>{"\u00a0"}
<LinkWithTooltip tooltip={<span>lʊkt-ʌp.</span>} id="tooltip-16">looked-up.</LinkWithTooltip>{"\u00a0"}
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