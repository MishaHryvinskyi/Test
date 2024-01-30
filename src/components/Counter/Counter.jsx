import React from "react";
import Controls from "./Controls";

class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    }

    state = {
            value: this.props.initialValue,
        }
    
    handlerIncrement = () => {
        this.setState(prevState => ({ value: prevState.value + 1, }));
    }

    handleDecrement = () => {
        this.setState(prevState => ({ value: prevState.value - 1, }));
    }

    render() {
        return (
            <div>
                <span>{this.state.value}</span>
                <Controls 
                    onDecrement={this.handleDecrement} 
                    onIncrement={this.handlerIncrement}
                />
            </div>
        )
    }
}

export default Counter;