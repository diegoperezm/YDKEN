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


var H1 = React.createClass({
  render: function () {
    return (
      <h1 style={h1Style}>You Don't Know JS: Scope & Closures: Review (TL;DR)</h1>
    );
  }
});
  

var Pone = React.createClass({
  render: function () {
    return (
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
  }
});

var Ptwo = React.createClass({
  render: function () {
    return (
<p>
<LinkWithTooltip tooltip={<span>ɛl-eɪʧ-ɛs</span>} id="tooltip-52">LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərənsɪz</span>} id="tooltip-53">references</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>rɪˈzʌlt</span>} id="tooltip-54">result</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>frəm</span>} id="tooltip-55">from</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈsaɪnmənt</span>} id="tooltip-56">assignment</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌɑpəˈreɪʃənz.</span>} id="tooltip-57">operations.</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp-rɪˈleɪtɪd</span>} id="tooltip-58">Scope-related</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈsaɪnmənts</span>} id="tooltip-7">assignments</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>kən</span>} id="tooltip-59">can</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈkɜr</span>} id="tooltip-60">occur</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈiðər</span>} id="tooltip-61">either</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wɪð</span>} id="tooltip-62">with</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ði</span>} id="tooltip-63">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>=</span>} id="tooltip-64">=</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɑpəˌreɪtər</span>} id="tooltip-65">operator</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɔr</span>} id="tooltip-66">or</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>baɪ</span>} id="tooltip-67">by</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈpæsɪŋ</span>} id="tooltip-68">passing</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɑrgjəmənts</span>} id="tooltip-69">arguments</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tʊ</span>} id="tooltip-70">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(əˈsaɪn</span>} id="tooltip-71">(assign</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tʊ)</span>} id="tooltip-72">to)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈfʌŋkʃən</span>} id="tooltip-73">function</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>pəˈræmətərz.</span>} id="tooltip-74">parameters.</LinkWithTooltip>{"\u0020"}
</p>
    );
  }
});



var Pthree = React.createClass({
  render: function() {
    return (
<p>
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-75">The</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈʤɑvəˌskrɪpt</span>} id="tooltip-76">JavaScript</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɛnʤən</span>} id="tooltip-77">Engine</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fɜrst</span>} id="tooltip-78">first</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>kəmˈpaɪlz</span>} id="tooltip-79">compiles</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>koʊd</span>} id="tooltip-80">code</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bɪˈfɔr</span>} id="tooltip-81">before</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-82">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɛksəˌkjuts,</span>} id="tooltip-83">executes,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-84">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-85">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>soʊ</span>} id="tooltip-86">so</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈduɪŋ,</span>} id="tooltip-87">doing,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-88">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>splɪts</span>} id="tooltip-89">splits</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ʌp</span>} id="tooltip-90">up</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈsteɪtmənts</span>} id="tooltip-91">statements</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>laɪk</span>} id="tooltip-92">like</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>var</span>} id="tooltip-93">var</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>eɪ</span>} id="tooltip-94">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>=</span>} id="tooltip-95">=</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>2;</span>} id="tooltip-96">2;</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɪntə</span>} id="tooltip-97">into</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tu</span>} id="tooltip-98">two</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈsɛprət</span>} id="tooltip-99">separate</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>stɛps:</span>} id="tooltip-100">steps:</LinkWithTooltip>{"\u0020"}
</p>
    );
  }
});


var Ol = React.createClass({
  render: function(){
    return (
 <ol>
    <li><LinkWithTooltip tooltip={<span>fɜrst,</span>} id="tooltip-0">First,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>var</span>} id="tooltip-101">var</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-102">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tə</span>} id="tooltip-103">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>dɪˈklɛr</span>} id="tooltip-104">declare</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-105">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-106">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðət</span>} id="tooltip-107">that</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp.</span>} id="tooltip-108">Scope.</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɪs</span>} id="tooltip-109">This</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪz</span>} id="tooltip-110">is</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>pərˈfɔrmd</span>} id="tooltip-111">performed</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ət</span>} id="tooltip-112">at</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-113">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bɪˈgɪnɪŋ,</span>} id="tooltip-114">beginning,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bɪˈfɔr</span>} id="tooltip-115">before</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>koʊd</span>} id="tooltip-116">code</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌɛksəˈkjuʃən.</span>} id="tooltip-117">execution.</LinkWithTooltip>{"\u0020"}</li>
    <li><LinkWithTooltip tooltip={<span>ˈleɪtər,</span>} id="tooltip-118">Later,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>eɪ</span>} id="tooltip-119">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>=</span>} id="tooltip-120">=</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>2</span>} id="tooltip-121">2</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tə</span>} id="tooltip-122">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>lʊk</span>} id="tooltip-123">look</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ʌp</span>} id="tooltip-124">up</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-125">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈvɛriəbəl</span>} id="tooltip-126">variable</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ɛl-eɪʧ-ɛs</span>} id="tooltip-127">(LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərəns)</span>} id="tooltip-128">reference)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-129">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əˈsaɪn</span>} id="tooltip-130">assign</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tʊ</span>} id="tooltip-131">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt</span>} id="tooltip-132">it</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪf</span>} id="tooltip-133">if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>faʊnd.</span>} id="tooltip-134">found.</LinkWithTooltip>{"\u0020"}</li>
  </ol>  
    );
  }
});


var Pfour = React.createClass({
  render: function(){
    return (
<p>  
<LinkWithTooltip tooltip={<span>boʊθ</span>} id="tooltip-135">Both</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɛl-eɪʧ-ɛs</span>} id="tooltip-136">LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-137">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɑr-eɪʧ-ɛs</span>} id="tooltip-138">RHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərəns</span>} id="tooltip-139">reference</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>lʊk-ʌps</span>} id="tooltip-140">look-ups</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>stɑrt</span>} id="tooltip-141">start</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ət</span>} id="tooltip-142">at</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-143">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈkɜrəntli</span>} id="tooltip-144">currently</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈɛksəˌkjutɪŋ</span>} id="tooltip-145">executing</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp,</span>} id="tooltip-146">Scope,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-147">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪf</span>} id="tooltip-148">if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>nid</span>} id="tooltip-149">need</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>bi</span>} id="tooltip-150">be</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ðæt</span>} id="tooltip-151">(that</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪz,</span>} id="tooltip-152">is,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðeɪ</span>} id="tooltip-153">they</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>doʊnt</span>} id="tooltip-154">don't</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>faɪnd</span>} id="tooltip-155">find</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wʌt</span>} id="tooltip-156">what</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɛr</span>} id="tooltip-157">they're</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈlʊkɪŋ</span>} id="tooltip-158">looking</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fər</span>} id="tooltip-159">for</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɛr),</span>} id="tooltip-161">there),</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðeɪ</span>} id="tooltip-162">they</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wɜrk</span>} id="tooltip-163">work</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðɛr</span>} id="tooltip-164">their</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>weɪ</span>} id="tooltip-165">way</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ʌp</span>} id="tooltip-166">up</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-167">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈnɛstəd</span>} id="tooltip-168">nested</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp,</span>} id="tooltip-169">Scope,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>wʌn</span>} id="tooltip-171">one</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>skoʊp</span>} id="tooltip-172">scope</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(flɔr)</span>} id="tooltip-173">(floor)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ət</span>} id="tooltip-174">at</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-175">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>taɪm,</span>} id="tooltip-176">time,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈlʊkɪŋ</span>} id="tooltip-177">looking</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>fər</span>} id="tooltip-178">for</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ði</span>} id="tooltip-179">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>aɪˈdɛntəˌfaɪər,</span>} id="tooltip-181">identifier,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənˈtɪl</span>} id="tooltip-182">until</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðeɪ</span>} id="tooltip-183">they</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>gɛt</span>} id="tooltip-184">get</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>tə</span>} id="tooltip-185">to</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðə</span>} id="tooltip-186">the</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈgloʊbəl</span>} id="tooltip-187">global</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(tɑp</span>} id="tooltip-188">(top</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>flɔr)</span>} id="tooltip-189">floor)</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-190">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>stɑp,</span>} id="tooltip-191">stop,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ənd</span>} id="tooltip-192">and</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈiðər</span>} id="tooltip-193">either</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>faɪnd</span>} id="tooltip-194">find</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪt,</span>} id="tooltip-195">it,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɔr</span>} id="tooltip-196">or</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>doʊnt.</span>} id="tooltip-197">don't.</LinkWithTooltip>{"\u0020"}
</p>
    );
  }
});

var Pfive = React.createClass({
  render: function(){
    return (
<p>
<LinkWithTooltip tooltip={<span>ˌʌnfʊlˈfɪld</span>} id="tooltip-198">Unfulfilled</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɑr-eɪʧ-ɛs</span>} id="tooltip-199">RHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərənsɪz</span>} id="tooltip-200">references</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>rɪˈzʌlt</span>} id="tooltip-201">result</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-202">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ReferenceErrors</span>} id="tooltip-203">ReferenceErrors</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈbiɪŋ</span>} id="tooltip-204">being</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>θroʊn.</span>} id="tooltip-205">thrown.</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌʌnfʊlˈfɪld</span>} id="tooltip-206">Unfulfilled</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɛl-eɪʧ-ɛs</span>} id="tooltip-207">LHS</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈrɛfərənsɪz</span>} id="tooltip-208">references</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>rɪˈzʌlt</span>} id="tooltip-209">result</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-210">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ən</span>} id="tooltip-211">an</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˌɔtəˈmætɪk,</span>} id="tooltip-212">automatic,</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪmˈplɪsətli-kriˈeɪtəd</span>} id="tooltip-213">implicitly-created</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ˈgloʊbəl</span>} id="tooltip-214">global</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>əv</span>} id="tooltip-215">of</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ðət</span>} id="tooltip-216">that</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>neɪm</span>} id="tooltip-217">name</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ɪf</span>} id="tooltip-218">(if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>nɑt</span>} id="tooltip-219">not</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-220">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>"strɪkt</span>} id="tooltip-221">"Strict</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>moʊd"</span>} id="tooltip-222">Mode"</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>[^noʊt-strictmode]),</span>} id="tooltip-223">[^note-strictmode]),</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɔr</span>} id="tooltip-224">or</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ə</span>} id="tooltip-225">a</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ReferenceError</span>} id="tooltip-226">ReferenceError</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>(ɪf</span>} id="tooltip-227">(if</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>ɪn</span>} id="tooltip-228">in</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>"strɪkt</span>} id="tooltip-229">"Strict</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>moʊd"</span>} id="tooltip-230">Mode"</LinkWithTooltip>{"\u0020"}
<LinkWithTooltip tooltip={<span>[^noʊt-strictmode]).</span>} id="tooltip-231">[^note-strictmode]).</LinkWithTooltip>{"\u0020"}
</p>
    );
  }
});


var TextToolTip = React.createClass({
  render: function() {
    return (
      <div>
        <H1 />
        <Pone />
        <Ptwo />
        <Pthree />
        <Ol />
        <Pfour />
        <Pfive />
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