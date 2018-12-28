import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};


class BaoCaoTienDo extends Component {
    state = {
        dotBaoCao: [
            {
                stt: 1,
            },
            {
                stt: 2,
            },
            {
                stt: 3,
            },
        ]
    }

    createDotBaoCao = () => {
        return (
            this.state.dotBaoCao.map((dot, index) => {
                return (
                    <GridContainer key={ index }>
                        <GridItem xs={ 12 } sm={ 12 } md={ 1 }>
                            <h4>Đợt { dot.stt }:</h4>
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                            <CustomInput
                                labelText="Thời gian bắt đầu"
                                id="tenKhoa"
                                inputProps={ {
                                    type: "date",
                                    defaultValue: "2018-01-01"
                                } }
                                formControlProps={ {
                                    fullWidth: true
                                } }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                            <CustomInput
                                labelText="Thời gian kết thúc"
                                id="email-address"
                                inputProps={ {
                                    type: "date",
                                    defaultValue: "2018-01-01"
                                } }
                                formControlProps={ {
                                    fullWidth: true
                                } }
                            />
                        </GridItem>
                    </GridContainer>
                );
            })
        );
    }

    addDotBaoCao = () => {
        let baoCaoState = this.state.dotBaoCao.slice();
        let len = baoCaoState.length;
        baoCaoState.push({ stt: len + 1 });
        this.setState({ dotBaoCao: baoCaoState });
    }

    render() {
        const { classes } = this.props;
        return (
            <GridContainer>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>QUẢN LÝ TIẾN ĐỘ</h4>
                        <p className={ classes.cardCategoryWhite }>
                            Handcrafted by NDA NDA
                        </p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <h4><strong>Thời gian đăng kí:</strong></h4>
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <CustomInput
                                            labelText="Thời gian bắt đầu"
                                            id="tenKhoa"
                                            inputProps={ {
                                                type: "date",
                                                defaultValue: "2018-01-01"
                                            } }
                                            formControlProps={ {
                                                fullWidth: true
                                            } }
                                        />
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <CustomInput
                                            labelText="Thời gian kết thúc"
                                            id="email-address"
                                            inputProps={ {
                                                type: "date",
                                                defaultValue: "2018-01-01"
                                            } }
                                            formControlProps={ {
                                                fullWidth: true
                                            } }
                                        />
                                    </GridItem>
                                </GridContainer>
                                <hr></hr>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <h4><strong>Thời gian báo cáo tiến độ:</strong></h4>
                                    </GridItem>
                                </GridContainer>
                                { this.createDotBaoCao() }
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <IconButton onClick={ this.addDotBaoCao }>
                                            <AddBoxIcon fontSize="inherit" />
                                            <span style={ { paddingRight: "10px", fontSize: "20px" } }>Tạo đợt báo cáo tiến độ mới</span>
                                        </IconButton>
                                    </GridItem>
                                </GridContainer>
                                <hr></hr>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <h4><strong>Thời gian bảo vệ:</strong></h4>
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <CustomInput
                                            labelText="Thời gian bắt đầu"
                                            id="tenKhoa"
                                            inputProps={ {
                                                type: "date",
                                                defaultValue: "2018-01-01"
                                            } }
                                            formControlProps={ {
                                                fullWidth: true
                                            } }
                                        />
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <CustomInput
                                            labelText="Thời gian kết thúc"
                                            id="email-address"
                                            inputProps={ {
                                                type: "date",
                                                defaultValue: "2018-01-01"
                                            } }
                                            formControlProps={ {
                                                fullWidth: true
                                            } }
                                        />
                                    </GridItem>
                                </GridContainer>

                                <CardFooter>
                                    <Button color="primary">Lưu</Button>
                                </CardFooter>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>


                <Timeline lineColor={ '#e86971' }>
                    <TimelineItem
                        key="001"
                        dateText="11/2010 – Present"
                        style={ { color: '#e86971' } }
                    >
                        <h3>Title, Company</h3>
                        <h4>Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="04/2009 – 11/2010"
                        dateInnerStyle={ { background: '#61b8ff', color: '#000' } }
                        bodyContainerStyle={ {
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        } }
                    >
                        <h3 style={ { color: '#61b8ff' } }>Title, Company</h3>
                        <h4 style={ { color: '#61b8ff' } }>Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateComponent={ (
                            <div
                                style={ {
                                    display: 'block',
                                    float: 'left',
                                    padding: '10px',
                                    background: 'rgb(150, 150, 150)',
                                    color: '#fff',
                                } }
                            >
                                11/2008 – 04/2009
      </div>
                        ) }
                    >
                        <h3>Title, Company</h3>
                        <h4>Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="004"
                        dateText="08/2008 – 11/2008"
                        dateInnerStyle={ { background: '#76bb7f' } }
                    >
                        <h3>Title, Company</h3>
                        <h4>Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                    </TimelineItem>
                </Timeline>

            </GridContainer>
        );
    }
}

export default withStyles(styles)(BaoCaoTienDo);
