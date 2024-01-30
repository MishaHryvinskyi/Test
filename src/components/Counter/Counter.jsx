import React from "react";

class Counter extends React.Component {
    handlerIncrement = (e) => {
        console.log("increment click");
        console.log(e)
    }

    handleDecrement = (e) => {
        console.log("decrement click")
    }
    render() {
        return (
            <div>
            <span>0</span>
    
            <div>
                <button type="button" onClick={this.handlerIncrement}>Збільшити на 1</button>
                <button type="button" onClick={this.handleDecrement}>Зменшити на 1</button>
            </div>
        </div>
        )
    }
}

export default Counter;