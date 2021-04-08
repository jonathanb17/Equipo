import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { Typography } from "@material-ui/core";

import green from '../../assets/iconos/Green.ico';
import red from '../../assets/iconos/red.ico';
import yellow from '../../assets/iconos/Yellow.ico';
import play from '../../assets/iconos/play_1.ico';

const Provando = () => {
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
            flexWrap: "wrap",
            backgroundColor: "#2b565f",
            justifyContent: "center",
            marginTop: "3px",
            marginRight: "3px",
            paddingLeft: "10px",
            padding: "23px",
            marginBottom: "5px",
            paddingBottom: "5px",
            maxHeight: "50px",

        },
        title: {
            textAlign: "center",
            height: "40px",
            margin: "auto",
            marginRight: "3px",
        },
        frontText: {
            height: "40px",
            margin: "auto",
            marginRight: "3px",
            fontSize: "14px",
            fontFamily: "Bebas-Bold",

        },
        text: {
            fontSize: "12px",
            fontFamily: "Bebas-Light",
            margin: "auto",
            marginRight: "10px",
            textAlign: "center",
        },
        icon: {
            margin: "auto",
            marginRight: "10px",
        },
        font: {
            fontFamily: "Bebas-Bold",
            color: "cyan",
            padding: "11px",
        },
    }));
    const classes = useStyles();

    const items = [
        {
            label: "TORNEO",
            color: "#2b565f",
            key: 0,
            subitems: [
                {
                    id: 0,
                    label: "AFA",
                },
                {
                    id: 1,
                    label: "LIBER",
                },
                {
                    id: 2,
                    label: "CARG",
                },
            ],
        },
        {
            label: "CAT",
            color: "#2b565f",
            key: 1,
            subitems: [
                {
                    id: 0,
                    label: "PROF",
                },
                {
                    id: 0,
                    label: "PROF",
                },
                {
                    id: 0,
                    label: "PROF",
                },
            ],
        },
        {
            label: "POS",
            color: "#2b565f",
            key: 2,
            subitems: [
                {
                    id: 0,
                    label: "25",
                },
                {
                    id: 0,
                    label: "25",
                },
                {
                    id: 0,
                    label: "25",
                },
            ],
        },
        {
            label: "PJ",
            color: "#2b565f",
            key: 3,
            subitems: [
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
            ],
        },
        {
            label: "G",
            color: "#2b565f",
            key: 4,
            subitems: [
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
            ],
        },
        {
            label: "E",
            color: "#2b565f",
            key: 5,
            subitems: [
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
            ],
        },
        {
            label: "P",
            color: "#2b565f",
            key: 6,
            subitems: [
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
            ],
        },
        {
            label: "GF",
            color: "#2b565f",
            key: 7,
            subitems: [
                {
                    id: 0,
                    label: "888",
                    play: <img src={play} alt="" srcset="" style={{ marginLeft: '5px', marginBottom: '-7px' }} />
                },
                {
                    id: 0,
                    label: "888",
                    play: <img src={play} alt="" srcset="" style={{ marginLeft: '5px', marginBottom: '-7px' }} />

                },
                {
                    id: 0,
                    label: "888",
                    play: <img src={play} alt="" srcset="" style={{ marginLeft: '5px', marginBottom: '-7px' }} />

                },
            ],
        },
        {
            label: "GC",
            color: "#2b565f",
            key: 8,
            subitems: [
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                    play: <img src={play} alt="" srcset="" style={{ marginLeft: '5px', marginBottom: '-7px' }} />
                },
                {
                    id: 0,
                    label: "888",
                    play: <img src={play} alt="" srcset="" style={{ marginLeft: '5px', marginBottom: '-7px' }} />
                },
            ],
        }, {
            label: "DG",
            color: "#2b565f",
            key: 10,
            subitems: [
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
            ],
        }, {
            label: "PTS",
            color: "#2b565f",
            key: 11,
            subitems: [
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
                {
                    id: 0,
                    label: "88",
                },
            ],
        }, {
            label: "ULTIMOS5",
            color: "#2b565f",
            key: 12,
            subitems: [
                {
                    id: 0,
                    rojo: <img src={red} alt="" srcset="" style={{ height: '20px', marginLeft: '-124px' }} />,
                    amarillo: <img src={yellow} alt="" srcset="" style={{ height: '20px', marginLeft: '0px' }} />,
                    verde: <img src={green} alt="" srcset="" style={{ height: '20px', marginLeft: '5px' }} />,
                    amarillo1: <img src={yellow} alt="" srcset="" style={{ height: '20px', marginRight: '-25px', marginLeft: '2px' }} />,
                    verde1: <img src={green} alt="" srcset="" style={{ height: '20px', marginLeft: '34px', marginRight: '-41px' }} />,
                },
                {
                    id: 0,
                    rojo: <img src={red} alt="" srcset="" style={{ height: '20px', marginLeft: '-124px' }} />,
                    amarillo: <img src={yellow} alt="" srcset="" style={{ height: '20px', marginLeft: '0px' }} />,
                    verde: <img src={green} alt="" srcset="" style={{ height: '20px', marginLeft: '5px' }} />,
                    amarillo1: <img src={yellow} alt="" srcset="" style={{ height: '20px', marginRight: '-25px', marginLeft: '2px' }} />,
                    verde1: <img src={green} alt="" srcset="" style={{ height: '20px', marginLeft: '34px', marginRight: '-41px' }} />,
                },
                {
                    id: 0,
                    rojo: <img src={red} alt="" srcset="" style={{ height: '20px', marginLeft: '-124px' }} />,
                    amarillo: <img src={yellow} alt="" srcset="" style={{ height: '20px', marginLeft: '0px' }} />,
                    verde: <img src={green} alt="" srcset="" style={{ height: '20px', marginLeft: '5px' }} />,
                    amarillo1: <img src={yellow} alt="" srcset="" style={{ height: '20px', marginRight: '-25px', marginLeft: '2px' }} />,
                    verde1: <img src={green} alt="" srcset="" style={{ height: '20px', marginLeft: '34px', marginRight: '-41px' }} />,
                },

            ],
        }, {
            label: "PROMEDIOS",
            color: "#2b565f",
            key: 13,
            subitems: [
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                },
            ],
        }, {
            label: "PROYECTADO",
            color: "#2b565f",
            key: 14,
            subitems: [
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                },
            ],
        }, {
            label: "1VS1OPEN",
            color: "#2b565f",
            key: 15,
            subitems: [
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                },
            ],
        },
        {
            label: "1VS1DEF",
            subcaja: [
                {
                    id: 0,
                    sub: "Hola"
                },
                {
                    id: 0,
                    sub: "Holoa"
                },
                {
                    id: 0,
                    sub: "Holoas"
                }
            ],
            color: "#2b565f",
            key: 16,
            subitems: [
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888",
                },
                {
                    id: 0,
                    label: "888"
                },
            ],
        },
    ];

    return (
        <div className={classes.root}>
            {items.map((item, key) => {
                return (
                    <div className={classes.container} key={key}>
                        <div
                            className={classes.title}
                            style={{ backgroundColor: item.color }}
                        >
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                className={classes.font}
                            >
                                {item.label}

                                {item.sub}

                            </Typography>
                        </div>
                        {/* segunda iteracion */}
                        {item.subitems.map((subitem, key) => {
                            return (
                                <div className={classes.content} key={key}>
                                    <div className={classes.frontText}>
                                        <label>{subitem.label}</label> {subitem.play}
                                        {subitem.rojo} {subitem.amarillo}{subitem.verde}{subitem.amarillo1}{subitem.verde1}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Provando;
