/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('get-started.html', language)}><i className="fas fa-book"></i> Let's Start</Button>
            <Button href={docUrl('api.html', language)}><i className="fas fa-code"></i> API</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'See your all bot analytics in one place',
        image: imgUrl('svg/analytics.svg'),
        imageAlign: 'top',
        title: 'Analytics',
      },
      {
        content: 'Check your users chat transcript',
        image: imgUrl('svg/conversations.svg'),
        imageAlign: 'top',
        title: 'Conversations',
      },
      {
        content: 'Manage your bot via multiple channels',
        image: imgUrl('svg/channels.svg'),
        imageAlign: 'top',
        title: 'Channels',
      },
      {
        content: 'Keep your bot data without additional db system',
        image: imgUrl('svg/data.svg'),
        imageAlign: 'top',
        title: 'Data',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection"
    style={{ textAlign: 'center' }}>
    <img src={imgUrl('svg/magician.svg')} style={{ maxWidth: '250px' }} />
    <h2>You don't need to know magic tricks!</h2>
    <MarkdownBlock>Your tool will give that power to you!</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: '<p>It is easy to integrate your bot with <strong>{mono}say</strong>. We will help you about many things that you need to know about bot development via our powerful services.</p>'
        +'<p>You don\'t even need a database platform for keeping your data for your bot. It is also easy to export your data to another platform.</p>'
        +'<p><br/>Just check out our;<br/><br/><a href="docs/get-started.html" class="button"><i class="fas fa-book"></i> Let\'s start</a><br/><br/>And start building <i class="far fa-smile"></i></p>',
        image: imgUrl('svg/developer.svg'),
        imageAlign: 'right',
        title: '<i class="fas fa-question-circle"></i> Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <div className="showCase"><Features /></div>
          <LearnHow />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
