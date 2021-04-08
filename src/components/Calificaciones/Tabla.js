import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';


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

const Tabla = () => {


    useEffect(() => {
        document.body.classList.add("background-Image");
        return () => {
            document.body.classList.remove("background-Image");
        };
    });


    const classes = useStyles();

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
        <div>
            <TableContainer className={classes.scroll}>
                <Table>
                    <TableHead style={{ fontFamily: "Bebas-Bold", }}>
                        <TableRow>
                            {

                                tableHead.map((tableh, index) => {
                                    return (
                                        <TableCell align="center" key={`head-${index}`}
                                            style={{
                                                // border: 'none',
                                                color: 'cyan',
                                                fontFamily: "Bebas-Bold",
                                                fontSize: '1.5rem',
                                                textTransform: 'uppercase',
                                                background: '#102e30',
                                                width: '10px',
                                                border: "5px solid #286e7d"
                                            }}>
                                            {tableh}
                                        </TableCell>
                                    )
                                })
                            }


                            <TableCell align="center"
                                style={{
                                    width: '50%',
                                    // border: 'none',
                                    color: 'cyan',
                                    fontFamily: "Bebas-Bold",
                                    fontSize: '1.5rem',
                                    background: '#102e30',
                                    border: "5px solid #286e7d"
                                }}>
                                ULTIMOS5
                            </TableCell>


                            <TableCell align="center" style={{ marginTop: '10px' }}>
                                <div style={{
                                    display: 'flex',
                                    color: 'cyan',
                                    fontSize: '1.5rem',
                                    fontFamily: "Bebas-Bold",
                                    background: 'rgb(16, 46, 48)',
                                    padding: '7px',
                                    border: "5px solid #286e7d"
                                }}>
                                    {/* <p style={{}}>PROMEDIOS</p> */}
                                </div>
                                <div style={{ display: 'flex', fontSize: '1.5rem' }}>
                                    <div style={{
                                        fontSize: '1rem',
                                        borderRight: '5px solid rgb(40, 110, 125)',
                                        width: '49px',
                                        height: '42px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginLeft: '-9px',
                                        marginBottom: '-25px'
                                    }}>pts</div>

                                    <div style={{
                                        display: 'flex',
                                        width: '33%',
                                        border: "5px solid #286e7d",
                                        color: 'white',
                                        fontFamily: "Bebas-Bold",
                                        background: '#102e30',
                                        padding: '14px'
                                    }}>gf</div>
                                    <div style={{
                                        display: 'flex',
                                        width: '33%',
                                        border: "5px solid #286e7d",
                                        color: 'white', fontFamily: "Bebas-Bold",
                                        background: '#102e30',
                                        padding: '14px'
                                    }}>gc</div>
                                </div>
                            </TableCell>

                            <TableCell align="center">
                                <div style={{
                                    display: 'flex',
                                    color: 'cyan',
                                    fontSize: '1.5rem',
                                    fontFamily: "Bebas-Bold",
                                    background: 'rgb(16, 46, 48)',
                                    padding: '31px',
                                    border: "5px solid #286e7d"
                                }}>  PROYECTADO</div>
                                <div style={{ display: 'flex', fontSize: '1.5rem' }}>

                                    {/*  display: 'flex',
                                        width: '33%',
                                        border: "5px solid #286e7d",
                                        color: 'white',
                                        fontFamily: "Bebas-Bold",
                                        background: '#102e30',
                                        padding: '14px' */}
                                    <div style={{ padding: '14px', display: 'flex', width: '33%', border: "5px solid #286e7d", color: 'white', fontFamily: "Bebas-Bold", background: '#102e30' }}>CLAS</div>
                                    <div style={{ padding: '14px', display: 'flex', width: '33%', border: "5px solid #286e7d", color: 'white', fontFamily: "Bebas-Bold", background: '#102e30' }}>POS </div>
                                </div>
                            </TableCell>

                            <TableCell align="center" >
                                <div style={{
                                    display: 'flex',
                                    color: 'cyan',
                                    fontSize: '1.5rem',
                                    fontFamily: "Bebas-Bold",
                                    background: 'rgb(16, 46, 48)',
                                    padding: '31px',
                                    border: "5px solid #286e7d"
                                }}>1VS1OPEN</div>

                                <div style={{ display: 'flex', fontSize: '1.5rem' }}>
                                    <div align="center" style={{
                                        display: 'flex',
                                        width: '33%',
                                        border: "5px solid #286e7d",
                                        color: 'white',
                                        fontFamily: "Bebas-Bold",
                                        background: '#102e30',
                                        padding: '14px'
                                    }}>G</div>
                                    <div align="center" style={{
                                        display: 'flex',
                                        width: '33%',
                                        border: "5px solid #286e7d",
                                        color: 'white',
                                        fontFamily: "Bebas-Bold",
                                        background: '#102e30',
                                        padding: '14px'
                                    }}>P</div>
                                </div>

                            </TableCell>

                            <TableCell align="center" >
                                <div style={{
                                    display: 'flex',
                                    color: 'cyan',
                                    fontSize: '1.5rem',
                                    fontFamily: "Bebas-Bold",
                                    background: 'rgb(16, 46, 48)',
                                    padding: '31px',
                                    border: "5px solid #286e7d"
                                }}>1VS1DEF</div>
                                <div style={{ display: 'flex', fontSize: '1.5rem' }}>
                                    <div align="center" style={{
                                        display: 'flex',
                                        width: '33%',
                                        border: "5px solid #286e7d",
                                        color: 'white',
                                        fontFamily: "Bebas-Bold",
                                        background: '#102e30',
                                        padding: '14px'
                                    }}>G</div>
                                    <div align="center"
                                        style={{
                                            display: 'flex',
                                            width: '33%',
                                            border: "5px solid #286e7d",
                                            color: 'white',
                                            fontFamily: "Bebas-Bold",
                                            background: '#102e30',
                                            padding: '14px'
                                        }}>P</div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody style={{ fontFamily: "Bebas-Bold", padding: '10px' }}>
                        {statics.map((row, index) => (
                            <TableRow key={`tournament-${index}`}>
                                {
                                    tableHead.map((tableh, index) => {
                                        return (
                                            <TableCell align="center" key={`body-${index}`}
                                                style={{
                                                    border: "5px solid #286e7d",
                                                    color: 'white',
                                                    fontFamily: "Bebas-Bold",
                                                    fontSize: '1.2rem',
                                                    background: '#244951',
                                                    marginTop: '10px'
                                                }}>
                                                {row[tableh]}
                                            </TableCell>
                                        )
                                    })
                                }
                                {/*  marginTop: '15px', */}
                                <TableCell align="center"
                                    style={{
                                        border: "5px solid #286e7d",
                                        display: 'flex',
                                        background: '#244951',
                                        height: '92px'
                                    }}
                                >
                                    {row.last_matches.map((lm, index) => (

                                        <p style={{ margin: 'none', background: '#244951', marginTop: '38px' }}>
                                            {

                                                lm.result == 'win' ? <PlayCircleFilledWhiteIcon style={{ color: 'green' }} />
                                                    :
                                                    lm.result == 'lost' ? <PlayCircleFilledWhiteIcon style={{ color: 'red' }} />
                                                        : <PlayCircleFilledWhiteIcon style={{ color: 'yellow' }} />
                                            }
                                        </p>

                                    ))}
                                </TableCell>

                                <TableCell align="center"
                                    style={{
                                        border: "5px solid #286e7d",
                                        background: '#244951',
                                        padding: '0px -7px'

                                    }}>
                                    {['ptos', 'gf', 'gc'].map((avg, index) => (

                                        <div key={`average-${index}`}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                color: 'white',
                                                border: "5px solid #286e7d",
                                                fontFamily: "Bebas-Bold",
                                                fontSize: '1rem',
                                            }}>
                                            {row.average[avg]}
                                        </div>
                                    ))}
                                </TableCell>


                                <TableCell align="center" style={{ border: "5px solid #286e7d", background: '#244951', }}>
                                    {['clas', 'pos'].map((proj, index) => (

                                        <TableCell key={`projection-${index}`}
                                            style={{
                                                border: 'none', color: 'white',
                                                fontFamily: "Bebas-Bold",
                                                fontSize: '1.2rem',
                                            }}>
                                            {row.projection[proj]}
                                        </TableCell>
                                    ))}
                                </TableCell>

                                <TableCell align="center" style={{
                                    borderBottom: "5px solid #286e7d",
                                    borderRight: "5px solid #286e7d",
                                    borderTop: "5px solid #286e7d",
                                    color: 'white',
                                    fontFamily: "Bebas-Bold",
                                    background: '#244951',
                                    fontSize: '1.2rem'
                                }}>
                                    <p>Betis</p>
                                </TableCell>


                                <TableCell align="center" style={{
                                    borderBottom: "5px solid #286e7d",
                                    borderRight: "5px solid #286e7d",
                                    borderTop: "5px solid #286e7d",
                                    color: 'white',
                                    fontFamily: "Bebas-Bold",
                                    background: '#244951',
                                    fontSize: '1.2rem'
                                }}>
                                    <p>Villarreal</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div >
    )
}

export default Tabla;
