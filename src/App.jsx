// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './Redux/action';

type Props = {
    initApp: Function;
};

type State = {};

class App extends React.PureComponent<Props, State> {
    render() {
        return <h1>{'Hello world!'}</h1>;
    }

    componentDidMount() {
        this.props.initApp();
    }
}

const mapStateToProps = (state: Object): Object => ({
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    initApp: bindActionCreators(actions.appActions.requestAppInitialize, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
