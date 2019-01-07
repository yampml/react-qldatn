import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
// core components

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";

import Typography from '@material-ui/core/Typography';
function TabContainer(props) {
    return (
        <Typography component="div" >
            { props.children }
        </Typography>
    );
}


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
        },
        display: "inline"
    }
};


class ShowSinhVien extends Component {
    state = {
        id: this.props.match.params.id,
        mssv: "102150256",
        tenSV: "Phạm Văn Mách",
        tenDeTai: "Xây dựng website thương mại điện tử ",
        diachi: "88 Lê Độ",
        ngaysinh:"2/3/1996",
        tenLop: "14T2",
        email: "machpham88@gmail.com",
        sdt: "098237888",
        mota:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis malis affectus. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Atqui reperies, inquit, in hoc quidem pertinacem; Quamquam id quidem, infinitum est in hac urbe; Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare; Quamquam id quidem licebit iis existimare, qui legerint. Cui Tubuli nomen odio non est? Duo Reges: constructio interrete. Idemne potest esse dies saepius, qui semel fuit? Dic in quovis conventu te omnia facere, ne doleas. Tu enim ista lenius, hic Stoicorum more nos vexat. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Nam memini etiam quae nolo, oblivisci non possum quae volo. Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare"
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <GridContainer>
                <Grid>
                    <NavLink to="/giangvien/quanlysinhvien">Danh sách sinh viên</NavLink> > { this.state.tenSV }
                </Grid>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>{ this.state.tenSV }</h4>
                    </CardHeader>
                    <CardBody>
                        <form className={ classes.container } noValidate autoComplete="off">
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
                                    <TextField
                                        id="standard-name"
                                        label="Tên sinh viên"
                                        style={ { margin: 8 } }
                                        className={ classes.textField }
                                        value={ this.state.tenSV }
                                        onChange={ this.handleChange('tenSV') }
                                        margin="normal"
                                        disabled={ !this.state.isEditing }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 2 }>
                                    <TextField
                                        id="standard-name"
                                        label="MSSV"
                                        style={ { margin: 8 } }
                                        className={ classes.textField }
                                        value={ this.state.mssv }
                                        onChange={ this.handleChange('mssv') }
                                        margin="normal"
                                        disabled={ !this.state.isEditing }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 12 } md={ 2 }>
                                    <TextField
                                        id="standard-name"
                                        label="Lớp"
                                        style={ { margin: 8 } }
                                        className={ classes.textField }
                                        value={ this.state.tenLop }
                                        onChange={ this.handleChange('tenLop') }
                                        margin="normal"
                                        disabled={ !this.state.isEditing }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 12 } md={ 2 }>
                                    <TextField
                                        id="standard-name"
                                        label="Ngày sinh"
                                        style={ { margin: 8 } }
                                        className={ classes.textField }
                                        value={ this.state.ngaysinh }
                                        onChange={ this.handleChange('ngaysinh') }
                                        margin="normal"
                                        disabled={ !this.state.isEditing }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 12 } md={ 2 }>
                                    <TextField
                                        id="standard-name"
                                        label="Email"
                                        style={ { margin: 8 } }
                                        className={ classes.textField }
                                        value={ this.state.email }
                                        onChange={ this.handleChange('Email') }
                                        margin="normal"
                                        disabled={ !this.state.isEditing }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                    />
                                </GridItem>
                               
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 2}>
                                    <TextField
                                        id="standard-name"
                                        label="Địa chỉ"
                                        style={ { margin: 8 } }
                                        className={ classes.textField }
                                        value={ this.state.diachi }
                                        onChange={ this.handleChange('diachi') }
                                        margin="normal"
                                        disabled={ !this.state.isEditing }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 12 } md={ 2 }>
                                    <TextField
                                        id="standard-name"
                                        label="Số điện thoại"
                                        style={ { margin: 8 } }
                                        className={ classes.textField }
                                        value={ this.state.sdt }
                                        onChange={ this.handleChange('sdt') }
                                        margin="normal"
                                        disabled={ !this.state.isEditing }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                                    <TextField
                                        id="standard-full-width"
                                        label="Tên đề tài"
                                        style={ { margin: 8 } }
                                        value={ this.state.tenDeTai }
                                        onChange={ this.handleChange('tenDeTai') }
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                        InputProps={ {
                                            style: { "color": "black" }
                                        } }
                                        disabled={ !this.state.isEditing }
                                        multiline
                                        fullWidth
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                    <TextField
                                        id="standard-full-width"
                                        label="Mô tả"
                                        style={ { margin: 8 } }
                                        value={ this.state.mota }
                                        onChange={ this.handleChange('mota') }
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={ {
                                            shrink: true
                                        } }
                                        InputProps={ {
                                            disableUnderline: !this.state.isEditing,
                                            style: { "color": "black" }
                                        } }
                                        disabled={ !this.state.isEditing }
                                        multiline
                                        fullWidth
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
                                <NavLink to="/giangvien/quanlysinhvien/1/baocao"> <Button color="primary">Duyệt Báo Cáo</Button></NavLink>
                                </GridItem>
                            </GridContainer>
                        </form>


                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(ShowSinhVien);
