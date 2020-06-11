import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: '',
    };

    this.updateSrc = this.updateSrc.bind(this);
  }

  componentDidMount() {
    const { gravatar } = this.props;
    this.updateSrc(gravatar);
  }

  updateSrc(hash) {
    this.setState({
      src: `https://www.gravatar.com/avatar/${hash}`,
    });
  }

  render() {
    const { src } = this.state;
    const { name } = this.props;
    return (
      <nav>
        <div className="left">
          <h3>
            <img src={src} className="img" alt="avatar" />
            Jogador: {name}
          </h3>
        </div>
        <div className="right">
          <h3>{10 + 10} Pontos</h3>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatar: state.login.gravatar,
  name: state.login.name,
});

Navbar.propTypes = {
  gravatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Navbar);
