import PropTypes from 'prop-types';
import { Overlay, ModalArea, ModalImg, CloseButton } from './Modal.styled';
import { PureComponent } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { imageURL, onClose } = this.props;

    return (
      <Overlay onClick={this.handleBackDropClick}>
        <ModalArea>
          <ModalImg
            src={imageURL}
            alt="Something img"
            width="80%"
            loading="lazy"
          />
          <CloseButton type="submit" onClick={onClose}>
            {ModalArea && <VscChromeClose size="34px" fill="#fff" />}
          </CloseButton>
        </ModalArea>
      </Overlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
