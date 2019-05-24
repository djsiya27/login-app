import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { withRouter } from 'react-router'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/);

const formValid = ({formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach( val => {
    val.length > 0 && (valid = false);
 });

 // validate the form was filled out
 Object.values(rest).forEach(val => {
     val === null && (valid = false);
 });
    return valid;
};
class signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            password: null,
            phone: null,
            formErrors: {
                name: "",
                email: "",
                phone: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        this.props.history.push('/login');
        e.preventDefault();

        

        if(formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            Name: ${this.state.name}
            Email: ${this.state.email}
            Phone: ${this.state.phone}
            Password: ${this.state.password}
            `);

            
        } else {
            console.error("Form Invalid - display error message")
        }
    };

    

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        

        switch (name) {
            case 'name':
                formErrors.name =
                 value.length < 3 
                 ? "minimum 3 characters required"
                  : "";
            break;
            case 'email':
                formErrors.email = 
                emailRegex.test(value)  
                 ? ""
                  : "Invalid email address";
            break;
            case 'phone':
                formErrors.phone =
                value.length < 10 
                 ? "minimum 10 characters"
                  : "";
            break;
            case 'password':
                formErrors.password =
                value.length < 6 
                 ? "minimum 3 characters required"
                  : "";
            break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value }, () => console.log(this.state));
    };


    render() { 
        
        const { formErrors } = this.state;
        return ( 
            <Form onSubmit={this.handleSubmit} className="login-form"  noValidate >
            <h1 className="text-center">
            <span className="font-weight-bold">Sign Up Form</span>
            </h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" className={formErrors.name.length > 0 ? "error" : null} id="name" placeholder="Name" noValidate onChange={this.handleChange} />
                {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" className={formErrors.email.length > 0 ? "error" : null} id="email" placeholder="Email" noValidate onChange={this.handleChange}/>
                {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
                <Input type="phone" name="phone" className={formErrors.phone.length > 0 ? "error" : null} id="phone" placeholder="Phone" noValidate onChange={this.handleChange}/>
                {formErrors.phone.length > 0 && (
                    <span className="errorMessage">{formErrors.phone}</span>
                )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Password" noValidate onChange={this.handleChange}/>
                {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                )}
            </FormGroup>
            <Button type="submit" className="btn-lg btn-dark btn-block">
            Sign Up 
            </Button>
          
            </Form>
         );
    }
}
 
export default withRouter (signup);