import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import 'react-dual-listbox/lib/react-dual-listbox.css';

import Typography from '@material-ui/core/Typography';

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
function TabContainer(props) {
    return (
        <Typography component="div" >
            { props.children }
        </Typography>
    );
}


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
});

class SimpleModal extends Component {
    state = {
        name: 'nda',

        currentTabValue: 0,

        selectedSinhVien: ['one'],
        optionsSinhVien: [
            { value: 'one', label: 'Option One' },
            { value: 'two', label: 'Option Two' },
        ],

        selectedGiangVien: ['one'],
        optionsGiangVien: [
            { value: 'one', label: 'Option One' },
            { value: 'two', label: 'Option Two' },
        ],
    };


    handleTabValueChange = (event, currentTabValue) => {
        this.setState({ currentTabValue });
    };


    handleChangeText = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const { currentTabValue } = this.state;
        const listboxSV = (
            <GridContainer>
                <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                    <h5>Thêm Sinh viên</h5>
                    <DualListBox
                        options={ this.state.optionsSinhVien }
                        selected={ this.state.selectedSinhVien }
                        onChange={ (selectedSinhVien) => {
                            this.setState({ selectedSinhVien });
                        } }
                        icons={ {
                            moveLeft: <Icon>chevron_left</Icon>,
                            moveAllLeft: [
                                <Icon key={ 1 }>chevron_left</Icon>,
                                <Icon key={ 2 }>chevron_left</Icon>
                            ],
                            moveRight: <Icon>chevron_right</Icon>,
                            moveAllRight: [
                                <Icon key={ 1 }>chevron_right</Icon>,
                                <Icon key={ 2 }>chevron_right</Icon>
                            ],
                            // moveDown: <span className="fa fa-chevron-down" />,
                            // moveUp: <span className="fa fa-chevron-up" />,
                        } }
                    />
                </GridItem>
            </GridContainer>
        );
        const listboxGV = (
            <GridContainer>
                <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                    <h5>Thêm giảng viên</h5>
                    <DualListBox
                        options={ this.state.optionsGiangVien }
                        selected={ this.state.selectedGiangVien }
                        onChange={ (selectedGiangVien) => {
                            this.setState({ selectedGiangVien });
                        } }
                        icons={ {
                            moveLeft: <Icon>chevron_left</Icon>,
                            moveAllLeft: [
                                <Icon key={ 1 }>chevron_left</Icon>,
                                <Icon key={ 2 }>chevron_left</Icon>
                            ],
                            moveRight: <Icon>chevron_right</Icon>,
                            moveAllRight: [
                                <Icon key={ 1 }>chevron_right</Icon>,
                                <Icon key={ 2 }>chevron_right</Icon>
                            ],
                            // moveDown: <span className="fa fa-chevron-down" />,
                            // moveUp: <span className="fa fa-chevron-up" />,
                        } }
                    />
                </GridItem>
            </GridContainer>
        );

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={ this.props.open }
                    onClose={ this.props.onClose }
                >
                    <div style={ getModalStyle() } className={ classes.paper }>
                        <GridContainer>
                            <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                <div style={ { float: "right", height: "60px" } }>
                                    <IconButton onClick={ this.props.onClose }>
                                        <Icon>
                                            clear
                                        </Icon>
                                    </IconButton>
                                </div>
                                <Card>
                                    <CardHeader color="primary">
                                        <h5 style={ { padding: "0px", margin: "0px" } }>TẠO HỘI ĐỒNG</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                                                <CustomInput
                                                    labelText="Khoa"
                                                    id="tenKhoa"
                                                    formControlProps={ {
                                                        fullWidth: true
                                                    } }
                                                />
                                            </GridItem>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                                                <CustomInput
                                                    labelText="Phòng"
                                                    id="email-address"
                                                    formControlProps={ {
                                                        fullWidth: true
                                                    } }
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                                <CustomInput
                                                    labelText="Thời gian"
                                                    id="city"
                                                    formControlProps={ {
                                                        fullWidth: true
                                                    } }
                                                />
                                            </GridItem>
                                        </GridContainer>

                                        <GridContainer>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                                <div className={ classes.root }>
                                                    <AppBar position="static" color="default">
                                                        <Tabs
                                                            value={ currentTabValue }
                                                            onChange={ this.handleTabValueChange }
                                                            scrollable
                                                            scrollButtons="on"
                                                            indicatorColor="primary"
                                                            textColor="primary"
                                                        >
                                                            <Tab label="Danh sách sinh viên" icon={ <PhoneIcon /> } />
                                                            <Tab label="Danh sách giảng viên" icon={ <FavoriteIcon /> } />
                                                        </Tabs>
                                                    </AppBar>
                                                    { currentTabValue === 0 && <TabContainer>{ listboxSV }</TabContainer> }
                                                    { currentTabValue === 1 && <TabContainer>{ listboxGV }</TabContainer> }
                                                </div>
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