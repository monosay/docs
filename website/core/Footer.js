/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="copyright">
          Copyright &copy; {currentYear} {'{mono}'}say is a product of <a target="_blank" href="https://monofor.com">MonoFor, Inc.</a>
          <br/>
          <small>Documentation built with <a target="_blank" href="https://docusaurus.io/">Docusaurus</a> and Hosted on <a target="_blank" href="https://github.com/monosay"><i className="fas fab fa-github"></i> Github</a></small>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
