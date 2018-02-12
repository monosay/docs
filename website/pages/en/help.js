/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Help extends React.Component {
  render() {
    const supportLinks = [
      {
        content:
          'Learn more using the [documentation on this site.](/test-site/docs/en/doc1.html)',
        title: 'Browse Docs',
      },
      {
        content: 'Ask questions about the documentation and project',
        title: 'Join the community',
      },
      {
        content: "Find out what's new with this project",
        title: 'Stay up to date',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Need help?</h2>
            </header>
            <p>If this documentation still doesn't help you, You can reach us via email.</p>
            <p>support <i className="fas fa-sm fa-at"></i> monosay.com</p>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
