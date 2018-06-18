// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './Redux/action';
import * as selectors from './Redux/selector';

import Table from './Component/Organism/ItemList';

type Props = {
    fields: Array<Object>,
    appName: string,
    initApp: Function,
    checkText: Function,
};

type State = {};

class App extends React.PureComponent<Props, State> {
    render() {
        return <Table fields={this.props.fields} checkText={this.props.checkText}/>;
    }

    componentDidMount() {
        this.props.initApp();
        document.title = this.props.appName;
    }
}

const mapStateToProps = (state: Object): Object => ({
    fields: selectors.fields(state),
    appName: selectors.applicationName(state),
});

const mapDispatchToProps = (dispatch: Function): Object => ({
    initApp: bindActionCreators(actions.appActions.requestAppInitialize, dispatch),
    checkText: bindActionCreators(actions.fieldActions.requestRuleCheck, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
