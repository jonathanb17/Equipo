
import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';


import '../../index.css'


const useStyles = makeStyles({

    scroll: {
        '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 2px cyan'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'cyan',
        }
    }
});


const items =
{
    "ok": true,
    "data": [
        {
            "tournament": "afa",
            "category": "professional",
            "pos": 25,
            "pj": 23,
            "pg": 12,
            "pe": 5,
            "pp": 22,
            "gf": 15,
            "gc": 9,
            "dg": 6,
            "pts": 41,
            "last_matches": [
                {
                    "result": "win",
                    "url": "www.gloouds.com/video-analisys/401/player/34/plays"
                },
                {
                    "result": "lost",
                    "url": "www.gloouds.com/video-analisys/402/player/34/plays"
                },
                {
                    "result": "lost",
                    "url": "www.gloouds.com/video-analisys/403/player/34/plays"
                },
                {
                    "result": "tied",
                    "url": "www.gloouds.com/video-analisys/404/player/34/plays"
                },
                {
                    "result": "win",
                    "url": "www.gloouds.com/video-analisys/405/player/34/plays"
                }
            ],
            "average": {
                "ptos": 1.75,
                "gf": 2.5,
                "gc": 0.75
            },
            "projection": {
                "clas": "libetador",
                "pos": 3
            }
        },
        {
            "tournament": "libertador",
            "category": "professional",
            "pos": 24,
            "pj": 22,
            "pg": 11,
            "pe": 4,
            "pp": 21,
            "gf": 14,
            "gc": 8,
            "dg": 7,
            "pts": 42,
            "last_matches": [
                {
                    "result": "lost",
                    "url": "www.gloouds.com/video-analisys/401/player/34/plays"
                },
                {
                    "result": "lost",
                    "url": "www.gloouds.com/video-analisys/402/player/34/plays"
                },
                {
                    "result": "win",
                    "url": "www.gloouds.com/video-analisys/403/player/34/plays"
                },
                {
                    "result": "tied",
                    "url": "www.gloouds.com/video-analisys/404/player/34/plays"
                },
                {
                    "result": "win",
                    "url": "www.gloouds.com/video-analisys/405/player/34/plays"
                }
            ],
            "average": {
                "ptos": 2.75,
                "gf": 3.35,
                "gc": 1.35
            },
            "projection": {
                "clas": "4f",
                "pos": 7
            }
        },
        {
            "tournament": "afa",
            "category": "professional",
            "pos": 24,
            "pj": 22,
            "pg": 11,
            "pe": 4,
            "pp": 21,
            "gf": 14,
            "gc": 8,
            "dg": 5,
            "pts": 40,
            "last_matches": [
                {
                    "result": "win",
                    "url": "www.gloouds.com/video-analisys/401/player/34/plays"
                },
                {
                    "result": "tied",
                    "url": "www.gloouds.com/video-analisys/402/player/34/plays"
                },
                {
                    "result": "lost",
                    "url": "www.gloouds.com/video-analisys/403/player/34/plays"
                },
                {
                    "result": "tied",
                    "url": "www.gloouds.com/video-analisys/404/player/34/plays"
                },
                {
                    "result": "tied",
                    "url": "www.gloouds.com/video-analisys/405/player/34/plays"
                }
            ],
            "average": {
                "ptos": 1.75,
                "gf": 2.5,
                "gc": 0.75
            },
            "projection": {
                "clas": "32f",
                "pos": 5
            }
        }
    ],
    "message": "success"
}



const tableHead = ['tournament', 'category', 'pos', 'pj', 'pg', 'pe', 'pp', 'gf', 'gc', 'dg', 'pts'];

const ParteDos = () => {


    const useStyles = makeStyles((theme) => ({
        MuiTableCellroot: {
            padding: '0'
        }
    }));
    const classes = useStyles();


    useEffect(() => {
        document.body.classList.add("background-Image");
        return () => {
            document.body.classList.remove("background-Image");
        };
    });



    const [statics, setStatics] = useState([]);



    const fechStatic = () => {
        const res = items.data; // al teer el enpoit cambiar item.data por la direccion del enpoint
        setStatics(res);
    }


    useEffect(() => {
        fechStatic()
    }, [])

    if (statics.length > 0) {
        console.log(statics);
    }

    useEffect(() => {
        document.body.classList.add("background-Image");
        return () => {
            document.body.classList.remove("background-Image");
        };
    });

    return (
        <>
            <TableContainer className={classes.scroll}>
                <Table style={{}}>
                    <TableHead style={{ fontFamily: "Bebas-Bold" }}>
                        <TableRow>
                            {

                                tableHead.map((tableh, index) => {
                                    return (
                                        <TableCell align="center" key={`head-${index}`}
                                            style={{
                                                fontSize: '1rem',
                                                textTransform: 'uppercase',
                                                border: "3px solid #286e7d",
                                                background: '#102e30',
                                                color: 'cyan',
                                                padding: '1px 3px'
                                            }}>
                                            {tableh}
                                        </TableCell>
                                    )
                                })
                            }


                            <TableCell align="center"
                                style={{ fontSize: '1rem', border: "5px solid #286e7d", padding: '25px', background: '#102e30', color: 'cyan' }}>
                                ULTIMOS 5
                            </TableCell>


                            <TableCell align="center" style={{ fontSize: '1rem', border: "5px solid #286e7d" }}  >
                                <div style={{ marginLeft: '-14px', width: '97%', padding: '10px 16px', borderBottom: '3px solid rgb(40, 110, 125)', height: '35px', marginTop: '-14px', background: 'rgb(16, 46, 48)', color: 'cyan' }}>PROMEDIOS</div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ fontSize: '1rem', borderRight: '5px solid rgb(40, 110, 125)', width: '49px', height: '34px', background: 'rgb(16, 46, 48)', color: 'cyan', marginLeft: '-12px', marginBottom: '-25px' }}>pts</div>
                                    <div style={{ fontSize: '1rem', borderRight: "5px solid #286e7d", height: '34px', padding: '0 16px', background: '#102e30', color: 'cyan' }}>gf</div>
                                    <div style={{
                                        fontSize: '1rem',
                                        padding: '0px 17px',
                                        height: '34px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginLeft: '-2px',
                                        marginRight: '-12px'
                                    }}>gc</div>
                                </div>
                            </TableCell>

                            <TableCell align="center" style={{ fontSize: '1rem', border: "5px solid #286e7d" }} >
                                <div style={{ fontSize: '1rem' }}>PROYECTADO</div>
                                <div style={{}}>
                                    <div style={{ fontSize: '1rem' }}>CLAS</div>
                                    <div style={{ fontSize: '1rem' }}>POS </div>
                                </div>
                            </TableCell>

                            <TableCell align="center" style={{ fontSize: '1rem', border: "5px solid #286e7d" }} >
                                <div style={{ fontSize: '1rem' }}>1VS1OPEN</div>
                                <div style={{}}>
                                    <div align="center" style={{ fontSize: '1rem' }}>G</div>
                                    <div align="center" style={{ fontSize: '1rem' }}>P</div>
                                </div>
                            </TableCell>

                            <TableCell align="center" style={{ fontSize: '1rem', border: "5px solid #286e7d" }}  >
                                <div style={{ fontSize: '1rem' }}>1VS1DEF</div>
                                <div style={{}}>
                                    <div align="center" style={{ fontSize: '1rem' }}>G</div>
                                    <div align="center" style={{ fontSize: '1rem' }}>P</div>
                                </div>
                            </TableCell>
                            
                        </TableRow>
                    </TableHead>

                    <TableBody style={{}}>
                        {statics.map((row, index) => (
                            <TableRow key={`tournament-${index}`}>
                                {
                                    tableHead.map((tableh, index) => {
                                        return (
                                            <TableCell align="center" key={`body-${index}`} style={{ fontSize: '1rem', border: "5px solid #286e7d", color: 'white', padding: '0px' }}>
                                                {row[tableh]}
                                            </TableCell>
                                        )
                                    })
                                }
                                {/*  marginTop: '15px', */}
                                <TableCell className={classes.MuiTableCellroot} style={{ border: "7px solid #286e7d", padding: '0px', textAlign: 'center' }}>
                                    {row.last_matches.map((lm, index) => (

                                        <>
                                            {

                                                lm.result == 'win' ? <PlayCircleFilledWhiteIcon style={{ color: 'green' }} />
                                                    :
                                                    lm.result == 'lost' ? <PlayCircleFilledWhiteIcon style={{ color: 'red', }} />
                                                        : <PlayCircleFilledWhiteIcon style={{ color: 'yellow', }} />
                                            }
                                        </>

                                    ))}
                                </TableCell>

                                <TableCell align="center"
                                    style={{ border: "5px solid #286e7d", padding: '0px' }}>
                                    {['ptos', 'gf', 'gc'].map((avg, index) => (

                                        <div key={`average-${index}`}
                                            style={{ fontSize: '1rem', border: "5px solid #286e7d", color: 'white' }}>
                                            {row.average[avg]}
                                        </div>
                                    ))}
                                </TableCell>


                                <TableCell align="center" style={{ border: "5px solid #286e7d", padding: '0px' }}>
                                    {['clas', 'pos'].map((proj, index) => (

                                        <TableCell key={`projection-${index}`}
                                            style={{ fontSize: '1rem', border: "5px solid #286e7d", color: 'white', padding: '0px' }}>
                                            {row.projection[proj]}
                                        </TableCell>
                                    ))}
                                </TableCell>

                                <TableCell align="center" style={{ fontSize: '1rem', border: "5px solid #286e7d", color: 'white', padding: '0px' }}>
                                    <p>Betis</p>
                                </TableCell>


                                <TableCell align="center" style={{ fontSize: '1rem', border: "5px solid #286e7d", color: 'white', padding: '0px' }}>
                                    <p>Villarreal</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </ >
    )
}

export default ParteDos;
