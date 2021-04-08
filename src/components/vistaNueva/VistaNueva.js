import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import diego from '../../assets/Enmascarar_grupo_1.png';


const useStyles = makeStyles(() => ({
    flexcontainer: {
        display: "flex",
        // flexWrap: "wrap"
    },

    flexitem: {
        minWidth: "75px",
        height: "80px",
        margin: "10px",
        flex: 1

        // width: "100px",
        // height: "100px",
        // padding: "10px",
        // margin: "5px"
    },
}));



const VistaNueva = () => {


    const cajas = [
        {
            id: 1,
            color: "red"
        },
        {
            id: 2,
            color: "red"
        },
        {
            id: 3,
            color: "red"
        },
        {
            id: 4,
            color: "red"
        },
        {
            id: 5,
            color: "green"
        },
        {
            id: 6,
            color: "green"
        },
        {
            id: 7,
            color: "green"
        },
        {
            id: 8,
            color: "green"
        },
        {
            id: 9,
            color: "#33FFF9"
        },
        {
            id: 10,
            color: "#33FFF9"
        },
        {
            id: 11,
            color: "#33FFF9",
            imagen: <img src={diego} alt="" style={{
                width: "50px",
                height: "50px",
                borderRadius: "150px",
                marginTop: "10px"
            }} />
        },
        {
            id: 12,
            color: "yellow",
        },
        {
            id: 13,
            color: "yellow",
            imagen: <img src={diego} alt="" style={{
                width: "50px",
                height: "50px",
                borderRadius: "150px",
                marginTop: "10px"
            }} />
        },
        {
            id: 14,
            color: "red"
        },
        {
            id: 15,
            color: "red"
        },
        {
            id: 16,
            color: "red"
        },
        {
            id: 17,
            color: "red"
        },
        {
            id: 18,
            color: "green"
        },
        {
            id: 19,
            color: "green"
        },
        {
            id: 20,
            color: "green"
        },
        {
            id: 21,
            color: "green"
        },
        {
            id: 22,
            color: "#33FFF9"
        },
        {
            id: 23,
            color: "#33FFF9"
        },
        {
            id: 24,
            color: "#33FFF9"
        },
        {
            id: 25,
            color: "yellow"
        },
        {
            id: 26,
            color: "yellow"
        },
    ];

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="xl" className={classes.flexcontainer}>
                <Grid container spacing={1}>
                    <>
                        {cajas.map((inf, i) => {
                            return (
                                <Grid
                                    item
                                    xs={1}
                                    sm={1}
                                    md={1}
                                    lg={1}
                                    key={`${inf.id}-${i}`}
                                    className={classes.flexitem}
                                    style={{ background: inf.color }}
                                >
                                    {inf.imagen}
                                </Grid>
                            );
                        })}
                    </>
                </Grid>
            </Container>

        </>
    )
}

export default VistaNueva;  