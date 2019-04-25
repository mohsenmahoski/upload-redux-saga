import { Button, Position, Toaster } from "@blueprintjs/core";
import * as React from 'react';
import  Progress from "./Progress";

export default class Toast extends React.Component {
   refHandlers = {
     toaster: (ref) => this.toaster = ref,
   };
   componentDidMount(){
    const {onEnd} = this.props;
    this.toaster.show({ message: <Progress onEnd={onEnd}/> });
   }
   render() {
     return (
         <Toaster position={Position.TOP_RIGHT} ref={this.refHandlers.toaster} />
     )
  }
}