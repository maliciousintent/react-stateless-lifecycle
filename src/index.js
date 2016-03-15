/* eslint react/no-multi-comp:[0], react/display-name:[0] */

import React, { PropTypes as Type } from 'react';

class LifecycleComponent extends React.Component {
  componentDidMount() {
    this::this.props.handleComponentDidMount();
  }

  componentWillReceiveProps() {
    this::this.props.handleComponentWillReceiveProps();
  }

  render() {
    const { children } = this.props;

    return React.cloneElement(children, this.props);
  }
}

LifecycleComponent.propTypes = {
  children: Type.element.isRequired,
  handleComponentDidMount: Type.func.isRequired,
  handleComponentWillReceiveProps: Type.func.isRequired,
};

const wrapper = ({
    handleComponentDidMount,
    handleComponentWillReceiveProps,
  }) => Child => props => (
    <LifecycleComponent
      handleComponentDidMount={handleComponentDidMount}
      handleComponentWillReceiveProps={handleComponentWillReceiveProps}
      {...props}
    >
      <Child {...props} />
    </LifecycleComponent>
);

export default wrapper;
