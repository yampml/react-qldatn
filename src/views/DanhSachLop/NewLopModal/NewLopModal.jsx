import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FormControl from '@material-ui/core/FormControl';

function getModalStyle() {
    const top = 55;
    const left = 56;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 170,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 10,
    },
    menu: {
        width: 200,
    },
    formControl: {
        paddingBottom: "10px",
        margin: "27px 0 0 0",
        position: "relative"
      },
}
);

class SimpleModal extends Component {
    state = {
        name: 'nda',
        
    };

    handleChangeText = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open}
                    onClose={this.props.onClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div style={{float: "right", height: "60px"}}>
                                    <IconButton onClick={this.props.onClose}>
                                        <Icon>
                                            clear
                                        </Icon>
                                    </IconButton>
                                </div>
                                <Card>
                                    <CardHeader color="primary">
                                        <h5 style={{ padding: "0px", margin: "0px"}}>THÊM LỚP</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={5}>
                                                <CustomInput
                                                    labelText="Tên Lớp"
                                                    id="tenLớp"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={5}>
                                                <CustomInput
                                                    labelText="Khoa quản lí"
                                                    id="khoa"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={5}>
                                                <CustomInput
                                                    labelText="Số lượng sinh viên"
                                                    id="soluongSV"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={5}>
                                                <CustomInput
                                                    labelText="Hình thức"
                                                    id="hình thức"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                    </CardBody>
                                    <CardFooter>
                                        <Button color="primary">Lưu</Button>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                            
                        </GridContainer>
                        <SimpleModalWrapped />
                    </div>

                </Modal>
            </div>
        );
    }
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;