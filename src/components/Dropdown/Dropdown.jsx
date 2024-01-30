import React, { Component } from "react";
import { DropdownEl, DropdownMenu } from "./Dropdown.styled";

class Dropdown extends Component {
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }

    // show = () => {
    //     this.setState({ visible: true })
    // }

    // hide = () => {
    //     this.setState({ visible: false })
    // }

    render() {
        return (
            <DropdownEl>
                <button 
                    type="button" 
                    onClick={this.toggle}
                >
                    {this.state.visible ? "Сховати" : "Показати"}
                </button>
                {/* <button type="button" onClick={this.hide}>Сховати</button> */}
                {this.state.visible && <DropdownMenu>Випадаюче меню</DropdownMenu>}
            </DropdownEl>
        )
    }
}

export default Dropdown