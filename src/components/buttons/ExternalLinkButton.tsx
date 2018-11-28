import React from 'react';

interface Props {
  text: string;
  _href: string;
  _target: string;
  styleSpan?: string;
  styleLink?: string;
  handleClick?: any;
}

class ExternalLinkButton extends React.Component<Props> {
  render() {
    const { text, _href, _target, styleSpan, styleLink, handleClick } = this.props;

    return (
      <a className={`link-button ${styleLink}`} href={_href} target={_target} rel="noopener" onClick={handleClick}>
        <span className={`btn btn-outline-primary ${styleSpan}`}>{text}</span>
      </a>
    );
  }
}

export default ExternalLinkButton;
