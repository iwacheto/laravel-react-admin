import React, { useState } from "react";
// @material-ui/core ../../components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core ../../components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import Modal from '../../components/Modal/Modal.jsx'
import Axios from "axios";



const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function AddChild() {
    const classes = useStyles();

    const [childName, setchildName] = useState('');

    const setChild = (event) => {
        setchildName(event.target.value);
    }

    const addChild = () => {
        const name = childName;
        axios.post('/add-child', {name:name})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
          
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>

                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                            <p className={classes.cardCategoryWhite}>Complete your profile</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>

                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput

                                        inputProps={{
                                            onChange: setChild,
                                            value: childName
                                        }}

                                        labelText="Име на детето"
                                        id="username"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>

                            </GridContainer>

                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick={addChild}>Update Profile</Button>
                        </CardFooter>

                    </Card>

                </GridItem>

            </GridContainer>
        </div>
    );
}
