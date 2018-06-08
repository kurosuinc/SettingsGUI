// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from './Redux/action';

const App = (props: {}) => (
    <h1>{'Hello world!'}</h1>
);

const mapStateToProps = (state: Object): Object => ({
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    initApp: bindActionCreators(actions.appActions.requestLoadSchemaFile, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
