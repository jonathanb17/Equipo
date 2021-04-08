import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    container: {
        width: "auto",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#4f718b",
        marginTop: "3px",
        marginRight: "3px",
        paddingLeft: "10px",
        marginBottom: "5px",
        paddingBottom: "5px",
    },
    title: {
        textAlign: "center",
        height: "40px",
        margin: "auto",
        marginRight: "3px",
    },
    text: {
        marginTop: "10px",
        marginRight: "15px",
        fontSize: "12px",
    },
    icon: {
        margin: "auto",
        marginRight: "10px",
    },
    font: {
        fontFamily: "Bebas-Bold",
        paddingTop: "6px",
    },
    titulo: {
        marginTop: "1px",
        padding: "5px"
    }
}));

const data = [
    {
        id: 0,
        title: "TORNEO",
        subt1: "AFA",
        subt2: "LIBER",
        subt3: "CARG",
        color: "#B1EFF4",
    },
    {
        id: 1,
        title: "CAT",
        subt1: "PROF",
        subt2: "PROF",
        subt3: "PROF",
        color: "#B1EFF4",
    },
    {
        id: 2,
        title: "POS",
        subt1: "25",
        subt2: "25",
        subt3: "25",
        color: "#B1EFF4",
    },
    {
        id: 3,
        title: "PJ",
        subt1: "88",
        subt2: "88",
        subt3: "88",
        color: "#B1EFF4",
    },
    {
        id: 4,
        title: "G",
        subt1: "88",
        subt2: "88",
        subt3: "88",
        color: "#B1EFF4",
    },
    {
        id: 5,
        title: "E",
        subt1: "88",
        subt2: "88",
        subt3: "88",
        color: "#B1EFF4",
    },
    {
        id: 6,
        title: "P",
        subt1: "88",
        subt2: "88",
        subt3: "88",
        color: "#B1EFF4",
    },
    {
        id: 7,
        title: "GF",
        subt1: "888",
        subt2: "888",
        subt3: "888",
        color: "#B1EFF4",
    },
    {
        id: 8,
        title: "GC",
        subt1: "888",
        subt2: "888",
        subt3: "888",
        color: "#B1EFF4",
    },
    {
        id: 9,
        title: "DG",
        subt1: "88",
        subt2: "88",
        subt3: "88",
        color: "#B1EFF4",
    },
    {
        id: 10,
        title: "PTS",
        subt1: "88",
        subt2: "88",
        subt3: "88",
        color: "#B1EFF4",
    },
    {
        id: 11,
        title: "ULTIMOS5",
        subt1: "*****",
        subt2: "*****",
        subt3: "*****",
        color: "#B1EFF4",
    },
    {
        id: 12,
        title: "PROMEDIOS",
        subt1: "888",
        subt2: "888",
        subt3: "888",
        color: "#B1EFF4",
    },
    {
        id: 13,
        title: "PROYECTADOS",
        subt1: "AFA",
        subt2: "LIBER",
        subt3: "CARG",
        color: "#B1EFF4",
    },
    {
        id: 14,
        title: "1VS1OfEN",
        subt1: "AFA",
        subt2: "LIBER",
        subt3: "CARG",
        color: "#B1EFF4",
    },
    {
        id: 15,
        title: "1VS1DEF",
        subt1: "AFA",
        subt2: "LIBER",
        subt3: "CARG",
        color: "#B1EFF4",
    },
];

const Calificaciones = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {data.map((item) => {
                return (
                    <div className={classes.container} key={item.id}>
                        <div
                            className={classes.title}
                            style={{ backgroundColor: item.color }}
                        >
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                className={classes.font}
                            >
                                <h3 className={classes.titulo}>{item.title}</h3>
                            </Typography>
                        </div>
                        <div></div>
                        <div className={classes.content}>
                            <div className={classes.text}>
                                <div><h5>{item.subt1}</h5></div>
                                <div><h5>{item.subt2}</h5></div>
                                <div><h5>{item.subt3}</h5></div>
                            </div>
                            <div className={classes.icon}>
                                <PlayCircleFilledIcon
                                    fontSize={"small"}
                                    style={{ color: "#9bf5fb" }}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Calificaciones;
