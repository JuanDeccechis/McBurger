import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: '',
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }
    
    handleChangeInput(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            value: value,
        });
    }
    
    handleKeyPress(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          event.stopPropagation();
        }
    }
    
    validateInput(event) {
        const { hasError } = this.props;
        let input = event.target;
        let name = event.target.name;
        let errorMessage = null;
        switch (true) {
            case !input.value:
                errorMessage = `Debes ingresar tu ${name}.`;
            break;
            case hasError:
                errorMessage = `${name} incorrecta.`;
            break;
            case input.minLength > -1 && input.value.length < input.minLength:
                errorMessage = `Tu ${name} debe contener al menos ${input.minLength} caracteres.`;
            break;
            case input.maxLength > -1 && input.value.length > input.maxLength:
                errorMessage = `Tu ${name} debe contener hasta ${input.maxLength} caracteres.`;
            break;
            default:
                errorMessage = null;
            break;
        }
    
        this.setState({ error: errorMessage });
    }

    render() {
        const { error } = this.state;
        const { placeholder, name, minLength, maxLength, type, className, hasIconLeft } = this.props;
        let childrenWithExtraProp = [];
    
        if (this.props.children) {
            childrenWithExtraProp = React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                    className: `${child.props.className} ${error ? "with-error error-text" : ''}`
                });
              });
        }
        return (
            <>
                <fieldset aria-hidden="true" className={`input-icons input-margin ${error ? "error-color" : ''}`}>
                    <legend>
                        <span className={`text2 ${error ? "error-color" : ''}`}>{`${placeholder ? placeholder : name} *`}</span>
                    </legend>
                    {this.props.children && 
                        childrenWithExtraProp[0] /* el ícono */}
                    
                    <input
                        id={name}
                        name={name}
                        className={`text1 ${hasIconLeft ? "icon-left" : ''}
                            ${error=== null ? "valid" : error ? "error" : ''
                        } ${className ? className : ''}`}
                        type={type}
                        required
                        minLength={minLength}
                        maxLength={maxLength}
                        value={this.state.value}
                        onChange={this.handleChangeInput}
                        onKeyPress={this.handleKeyPress}
                        onBlur={this.validateInput}
                    />
                    
                    {childrenWithExtraProp[1] /* el ojo */}
                </fieldset>
                {error &&
                    <span className="text2 error-text error-color">{error}</span>
                }
            </>
        );
    }  
}
    
export default Input;