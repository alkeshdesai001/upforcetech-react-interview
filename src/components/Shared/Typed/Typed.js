import React from 'react';
import Typed from 'typed.js';

class TypedComp extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  toggle() {
    this.typed.toggle();
  }

  start() {
    this.typed.start();
  }

  stop() {
    this.typed.stop();
  }

  reset() {
    this.typed.reset();
  }

  destroy() {
    this.typed.destroy();
  }

  componentDidMount() {
    const { options } = this.props;
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.destroy();
  }

  render() {
    const {
      className,
      toggle,
      start,
      stop,
      reset,
      destroy,
      buttonClass,
    } = this.props;

    return (
      <div className='text'>
        <span
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el;
          }}
          className={className}
        />
        <div className='typedButtons'>
          {toggle && (
            <button className={buttonClass} onClick={() => this.toggle()}>
              Toggle
            </button>
          )}
          {start && (
            <button className={buttonClass} onClick={() => this.start()}>
              Start
            </button>
          )}
          {stop && (
            <button className={buttonClass} onClick={() => this.stop()}>
              Stop
            </button>
          )}
          {reset && (
            <button className={buttonClass} onClick={() => this.reset()}>
              Reset
            </button>
          )}
          {destroy && (
            <button className={buttonClass} onClick={() => this.destroy()}>
              Destroy
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default TypedComp;
