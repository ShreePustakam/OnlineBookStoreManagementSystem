import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/signupStyle.css';
import '../Styles/navbarStyle.css';
import addressService from '../Services/address.service';

function AddAddress() {

    const cId = sessionStorage.getItem("cId");

    const [streetArea, setStreetArea] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');

    const address = {
        streetArea,
        city,
        state,
        pincode,
        userId:cId,
    };

    const saveAddress = (e) => {
        e.preventDefault();
        if (streetArea) {
            //update
            addressService
                .update(cId, address)
                .then((response) => {
                    console.log('Address data updated successfully', response.data);
                })
                .catch((error) => {
                    alert(error.response.status);
                    console.log('Error code ' + error);
                    console.log('Something went wrong', error.response.data);
                });
        } else {
            //create
            addressService
                .create(cId, address)
                .then((response) => {
                    console.log('Address added successfully', response.data);
                })
                .catch((error) => {
                    console.log('something went wroing' + error.response);
                });
        }
    }

    useEffect(() => {
        if (cId) {
            addressService
                .get(cId)
                .then((address) => {
                    console.log(address.data);
                    setStreetArea(address.data.streetArea);
                    setCity(address.data.city);
                    setState(address.data.state);
                    setPincode(address.data.pincode);
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        }
    }, []);

    return <Container>
        <Row className="user">
            <Col>
                <img src="ProjectAssets\signup-image.jpg"></img>
            </Col>

            <Col>
                <h1 className="logo-font">Pustakam</h1>
                <div className="form signup-form">
                    <h2 className="form-title">Add Address</h2>
                    <form >
                        <div className="form-group">
                            <label for="isbn"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="isbn" id="isbn" placeholder="Street/Area"
                                value={streetArea}
                                onChange={(e) => setStreetArea(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label for="title"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="title" id="title" placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label for="description"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="description" id="description" placeholder="State" value={state}
                                onChange={(e) => setState(e.target.value)} />
                        </div>

                        <div className="form-group" style={{ marginBottom: 40 }}>
                            <label for="price"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="number" name="price" id="price" placeholder="Pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-success" onClick={(e) => saveAddress(e)}>
                            Save/Edit Address
                        </button>
                    </form>
                </div>
            </Col>
        </Row>
    </Container>
}

export default AddAddress;

