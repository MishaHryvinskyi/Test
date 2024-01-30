import React,{ Component } from "react";
import css from './ColorPicker.module.css';

class ColorPicker extends Component {

    state ={
        activOptionIdx: 0,
    };

    setActiveIdx = index => {
        this.setState({ activOptionIdx: index, })
    }

    makeOptionClassName = (index) => {
        const optionClasses = [css.btnColorpicker];
        if(index === this.state.activOptionIdx) {
            optionClasses.push(css.colorPickerOptionsActive);
        }

        return optionClasses.join(' ');
    }

    render() {
        
        const { options } = this.props;
        const { activOptionIdx } = this.state;
        const { makeOptionClassName, setActiveIdx } = this;

        const { label } = options[activOptionIdx];

        return (
        <div className={css.mainColorpicker}>
            <h2>Color Picker</h2>
            <p>Вибрано колір: {label}</p>
            <div className={css.containerColorpicker}>
                {options.map(({ label, color }, index) => (
                    <button
                        className={makeOptionClassName(index)}
                        onClick={() => setActiveIdx(index)}
                        type="button"
                        key={label}
                        style={{ backgroundColor: color, }}
                    ></button>
                ))}
            </div>
        </div>)
    }
}

export default ColorPicker;