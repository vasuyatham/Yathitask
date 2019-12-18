import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router-dom';

export class Client extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            quantity: '',
            formData: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit(event) {


        this.state.formData = {
            username: this.state.username,
            email: this.state.email,
            quentity: this.state.quantity
        }
        if (!this.state.username == '' && !this.state.email == '' && !this.state.quantity == '') {
            alert("1.username---" + this.state.username + "2.email--" + this.state.email + "3.---" + this.state.quantity)
        }
    }

    handleChange = e => {
    
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <Form className=''>
                            <Input label="Enter The  Name" floatingLabel={true}
                                required={true}
                                name="username"
                                onChange={this.handleChange}
                                state={this.state.username} />
                            <Input label="Enter Email Address" type="email"
                                floatingLabel={true} required={true}
                                name="email"
                                onChange={this.handleChange}
                                state={this.state.email} />
                            <Input label="Enter The bricks Quantity"
                                floatingLabel={true} required={true}
                                name="quantity"
                                state={this.state.quantity}
                                onChange={this.handleChange} />
                            <Button variant="raised"
                                onClick={this.handleSubmit}>Submit</Button>

                        </Form>
                    </Col>
                    <Col xs="3"></Col>
                </Row>
                <div className="tabletop" style={{marginTop:"50px"}}>
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <Link to="/table"><Button variant="raised"
                            >Admin Dashboard</Button></Link>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>

                </div>
            </Container>

        );
    }
}

export default Client
