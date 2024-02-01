import  Form  from "components/Form/Form";
import React, { Component } from "react";

class App extends Component {
    state = {
       
    };

    formSubmitHandler = data => {
        console.log("data", data);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.formSubmitHandler}/>
            </div>
        );
    }
}

export default App;