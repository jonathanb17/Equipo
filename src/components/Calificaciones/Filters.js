import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "auto",
        marginTop: "10px",
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
}));

const data = [
    {
        id: 0,
        title: "TAREA",
        color: "#5e5085",
    },
    {
        id: 1,
        title: "JUGADOR",
        color: "#518a95",
    },
    {
        id: 2,
        title: "TIEMPO",
        color: "#a2876b",
    },
    {
        id: 3,
        title: "ENERGIA",
        color: "#6bacec",
    },
    {
        id: 4,
        title: "POTENCIA",
        color: "#2690b3",
    },
    {
        id: 5,
        title: "DISTANCIA",
        color: "#4b9d48",
    },
    {
        id: 6,
        title: "VELOCIDAD",
        color: "#ee4a38",
    },
    {
        id: 7,
        title: "OPERACIÓN",
        color: "#edbd3e",
    },
];

const Filters = (props) => {
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
                                {item.title}
                            </Typography>
                        </div>
                        <div></div>
                        <div className={classes.content}>
                            <div className={classes.text}>
                                <div>Barcelona vs Real Madrid</div>
                                <div>LA LIGA - 22/22/22</div>
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

export default Filters;
