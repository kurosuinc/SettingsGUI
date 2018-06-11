// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './Redux/action';
import * as selectors from './Redux/selector';

import Table from './Component/Organism/Table';

type Props = {
    fields: Array<Object>,
    initApp: Function,
};

type State = {};

class App extends React.PureComponent<Props, State> {
    render() {
        return <Table fields={this.props.fields}/>;
    }

    componentDidMount() {
        this.props.initApp();
    }
}

const mapStateToProps = (state: Object): Object => ({
    fields: selectors.fields(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    initApp: bindActionCreators(actions.appActions.requestAppInitialize, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
