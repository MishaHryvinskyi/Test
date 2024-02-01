 import React,{ Component } from "react";
 import shortid from "shortid";

 class Form extends Component{
    state = {
        name: '',
        phone: '',
        password: '',
        experience: 'junior',
        licence: false,
     }

    nameInputId = shortid.generate();
    passwordInputId = shortid.generate();
    phoneInputId = shortid.generate();

    handleChenge = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ 
            name: '',
            phone: '',
            password: '',
        });
    }

    handleLicenceChange = event => {
        this.setState({ licence:  event.currentTarget.checked})
    }

    render() {
        const { name, phone, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.nameInputId}>
                        Ім'я 
                    <input 
                        id={this.nameInputId}
                        type="text" 
                        value={name}
                        name="name" 
                        onChange={this.handleChenge}
                    />
                    </label>
                    <label htmlFor={this.phoneInputId}>
                        Телефон 
                    <input 
                        id={this.phoneInputId}
                        type="text" 
                        value={phone}
                        name="phone"
                        onChange={this.handleChenge}
                    />
                    </label>
                    <label htmlFor={this.passwordInputId}>
                        Пароль 
                    <input 
                        id={this.passwordInputId}
                        type="text" 
                        value={password}
                        name="password"
                        onChange={this.handleChenge}
                    />
                    </label>
                    <p>Ваш рівень:</p>
                    
                    <label htmlFor="">
                    junior <input 
                        type="radio" 
                        name="experience"  
                        value="junior"
                        onChange={this.handleChenge}
                        checked={this.state.experience === 'junior'}
                    />
                    </label>
                    <label htmlFor="">
                    middle <input 
                        type="radio" 
                        name="experience"  
                        value="middle"
                        onChange={this.handleChenge}
                        checked={this.state.experience === 'middle'}
                    />
                    </label>
                    <label htmlFor="">
                    senior <input 
                        type="radio" 
                        name="experience"  
                        value="senior"
                        onChange={this.handleChenge}
                        checked={this.state.experience === 'senior'}
                    />
                    </label>
                    
                    <label htmlFor="">
                    Погоджуюся <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.handleLicenceChange}/> 
                    </label>

                    <button type="submit" disabled={!this.state.licence}>Відправити</button>
                </form>
        )
    }
}

export default Form;