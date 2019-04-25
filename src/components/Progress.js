import * as React from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from "@blueprintjs/core";

export class Progress extends React.Component{
    UNSAFE_componentWillReceiveProps(nextProps, nextState){
         console.log('UNSAFE_componentWillReceiveProps',nextProps.progress);
         if(nextProps.progress === 1){
            const {onEnd} = this.props;
            onEnd();
         }
    }
    render() {
        const {progress} = this.props;
        return (
            <ProgressBar className="toast-upload-bar" intent="primary" value={progress}/>
        );
    }
};
const mapStateToProps = (state) => ({
    progress: state.progress,
});
export default connect(mapStateToProps, null)(Progress);