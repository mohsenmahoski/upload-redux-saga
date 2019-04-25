import * as React from 'react';
import { connect } from 'react-redux';
import { uploadRequest } from '../actions';
import  AppToaster  from "./toaster";
import Progress from "./Progress";
import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../../node_modules/@blueprintjs/core/lib/css/blueprint.css';

export class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
          toast:false
      }
      this._onEnd = this._onEnd.bind(this);
    }
    upload = e => {
        this.setState({toast:true});
        const [ file ] = e.target.files || e.dataTransfer.files;
        this.props.onUpload(file);
    }
    _onEnd(){
        this.setState({
            toast:false
        });
    }
    render() {
        const {toast} = this.state;
        return (
            <span>
                {toast ? <AppToaster onEnd={this._onEnd}/> : null}
                <input
                    type="file"
                    onChange={ this.upload }
                />
            </span>
        );
    }
};
const mapStateToProps = (state) => ({
    progress: state.progress,
});
const mapDispatchToProps = (dispatch) => ({
    onUpload: (file) => {
        dispatch(uploadRequest(file));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);