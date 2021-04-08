
import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';


// import '../../index.css'


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
                "clas": "libe",
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

const ParteTres = () => {


    const useStyles = makeStyles((theme) => ({
        MuiTableCellroot: {
            padding: '0'
        },
        table: {
            minWidth: 650,
        },
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
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead style={{}}>
                        <TableRow>
                            {

                                tableHead.map((tableh, index) => {
                                    return (
                                        <TableCell align="center" key={`head-${index}`}
                                            style={{
                                                fontSize: '1rem',
                                                // textTransform: 'uppercase',
                                                border: "3px solid #286e7d",
                                                background: '#102e30',
                                                color: 'cyan',
                                                padding: '1px 3px',
                                                fontFamily: "Bebas-Bold !important",
                                            }}>
                                            {tableh}
                                        </TableCell>
                                    )
                                })
                            }


                            <TableCell align="center"
                                style={{
                                    fontSize: '1rem',
                                    border: "5px solid #286e7d",
                                    padding: '25px',
                                    background: '#102e30',
                                    color: 'cyan',
                                    fontFamily: "Bebas-Bold !important",
                                }}>
                                ULTIMOS 5
                            </TableCell>


                            <TableCell align="center" component="th" scope="row"
                                style={{
                                    padding: '0 10px',
                                    width: '11%',
                                    fontSize: '1rem',
                                    border: "5px solid #286e7d"
                                }}>
                                <div style={{
                                    marginLeft: '-11px',
                                    width: '119%',
                                    borderBottom: '3px solid rgb(40, 110, 125)',
                                    height: '32px',
                                    marginTop: ' 2px',
                                    background: 'rgb(16, 46, 48)',
                                    color: 'cyan',
                                    textAlign: 'center',
                                    fontFamily: "Bebas-Bold"
                                }}>PROMEDIOS</div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ fontSize: '1rem', borderRight: '5px solid rgb(40, 110, 125)', width: '49px', height: '42px', background: 'rgb(16, 46, 48)', color: 'cyan', marginLeft: '-9px', marginBottom: '-25px', fontFamily: "Bebas-Bold" }}>PTS</div>
                                    <div style={{ fontSize: '1rem', borderRight: "5px solid #286e7d", height: '42px', padding: '0 16px', background: '#102e30', color: 'cyan', fontFamily: "Bebas-Bold" }}>GF</div>
                                    <div style={{
                                        fontSize: '1rem',
                                        padding: '0px 17px',
                                        height: '42px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginLeft: '-2px',
                                        marginRight: '-12px',
                                        fontFamily: "Bebas-Bold"
                                    }}>GC</div>
                                </div>
                            </TableCell>

                            <TableCell align="center"
                                style={{
                                    padding: '0 10px',
                                    width: '11%',
                                    fontSize: '1rem',
                                    border: "5px solid #286e7d"
                                }} >
                                <div style={{
                                    marginLeft: '-11px',
                                    width: '119%',
                                    borderBottom: '3px solid rgb(40, 110, 125)',
                                    height: '32px',
                                    marginTop: ' 2px',
                                    background: 'rgb(16, 46, 48)',
                                    color: 'cyan',
                                    textAlign: 'center',
                                    fontFamily: "Bebas-Bold"
                                }}>PROYECTADO</div>

                                <div style={{}}>
                                    <div style={{
                                        fontSize: '1rem',
                                        borderRight: '5px solid rgb(40, 110, 125)',
                                        width: '66px', height: '42px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginLeft: '-9px',
                                        marginBottom: '-25px',
                                        fontFamily: "Bebas-Bold"
                                    }}>CLAS</div>
                                    <div style={{
                                        marginLeft: '61px',
                                        fontSize: '1rem',
                                        borderRight: '5px solid rgb(40, 110, 125)',
                                        height: '42px',
                                        padding: '0px 7px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginBottom: '4px',
                                        marginTop: '-43px',
                                        width: '45%',
                                        fontFamily: "Bebas-Bold"
                                    }}>POST</div>
                                </div>

                            </TableCell>

                            <TableCell align="center"
                                style={{
                                    padding: '0 10px',
                                    width: '11%',
                                    fontSize: '1rem',
                                    border: "5px solid #286e7d"
                                }} >
                                <div style={{
                                    marginLeft: '-11px',
                                    width: '119%',
                                    borderBottom: '3px solid rgb(40, 110, 125)',
                                    height: '32px',
                                    marginTop: ' 2px',
                                    background: 'rgb(16, 46, 48)',
                                    color: 'cyan',
                                    textAlign: 'center',
                                    fontFamily: "Bebas-Bold"
                                }}>1VS1OPEN</div>
                                <div style={{}}>
                                    <div style={{
                                        fontSize: '1rem',
                                        borderRight: '5px solid rgb(40, 110, 125)',
                                        width: '66px', height: '42px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginLeft: '-9px',
                                        marginBottom: '-25px',
                                        fontFamily: "Bebas-Bold"
                                    }}>G</div>
                                    <div style={{
                                        marginLeft: '61px',
                                        fontSize: '1rem',
                                        borderRight: '5px solid rgb(40, 110, 125)',
                                        height: '42px',
                                        padding: '0px 7px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginBottom: '4px',
                                        marginTop: '-43px',
                                        width: '45%',
                                        fontFamily: "Bebas-Bold"
                                    }}>P</div>
                                </div>
                            </TableCell>

                            <TableCell align="center"
                                style={{
                                    padding: '0 10px',
                                    width: '11%',
                                    fontSize: '1rem',
                                    border: "5px solid #286e7d"
                                }} >
                                <div style={{
                                    marginLeft: '-11px',
                                    width: '119%',
                                    borderBottom: '3px solid rgb(40, 110, 125)',
                                    height: '32px',
                                    marginTop: ' 2px',
                                    background: 'rgb(16, 46, 48)',
                                    color: 'cyan',
                                    textAlign: 'center',
                                    fontFamily: "Bebas-Bold"
                                }}>1VS1OPEN</div>
                                <div style={{}}>
                                    <div style={{
                                        fontSize: '1rem',
                                        borderRight: '5px solid rgb(40, 110, 125)',
                                        width: '66px',
                                        height: '42px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginLeft: '-9px',
                                        marginBottom: '-25px',
                                        fontFamily: "Bebas-Bold"
                                    }}>G</div>
                                    <div style={{
                                        marginLeft: '61px',
                                        fontSize: '1rem',
                                        borderRight: '5px solid rgb(40, 110, 125)',
                                        height: '42px',
                                        padding: '0px 7px',
                                        background: 'rgb(16, 46, 48)',
                                        color: 'cyan',
                                        marginBottom: '4px',
                                        marginTop: '-43px',
                                        width: '45%',
                                        fontFamily: "Bebas-Bold"
                                    }}>P</div>
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
                                            <TableCell align="center" key={`body-${index}`}
                                                style={{
                                                    fontSize: '1rem',
                                                    border: "5px solid #286e7d",
                                                    color: 'white',
                                                    padding: '0px',
                                                    fontFamily: "Bebas-Bold",
                                                    textTransform: 'uppercase',
                                                }}>
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

                                {/*  
                                     <div key={`average-${index}`}
                                        style={{ display: 'inline-block', padding: '0 9px' }}>
                                        {row.average[avg]}
                                        </div> 


                                         <TableCell key={`average-${index}`}
                                            style={{
                                                display: 'inline-block',
                                                padding: '0  9px',
                                                borderRight: '3px solid red',
                                                fontSize: '1rem',
                                                color: 'white'
                                            }}>
                                            {row.average[avg]}
                                        </TableCell>


                                */}
                                {/* 'ptos', 'gf', 'gc' */}


                                <TableCell align="center"
                                    style={{
                                        border: "5px solid #286e7d",
                                        fontFamily: "Bebas-Bold",
                                        textTransform: 'uppercase',
                                        padding: '0'
                                    }}>
                                    {['ptos', 'gf', 'gc'].map((avg, index) => (

                                        <div key={`average-${index}`}
                                            style={{
                                                display: 'inline-block',
                                                padding: '0 9px',
                                                color: 'white',
                                                textTransform: 'uppercase',
                                                fontFamily: "Bebas-Bold",
                                            }}>
                                            {row.average[avg]}
                                        </div>
                                    ))}
                                </TableCell>


                                {/* padding: '0px'  */}

                                <TableCell align="center"
                                    style={{ border: "5px solid #286e7d", fontFamily: "Bebas-Bold", textTransform: 'uppercase', }}>
                                    {['clas', 'pos'].map((proj, index) => (

                                        <div key={`projection-${index}`}
                                            style={{ display: 'inline-block', color: 'white', padding: '0 9px' }}>
                                            {row.projection[proj]}
                                        </div>
                                    ))}
                                </TableCell>

                                <TableCell align="center"
                                    style={{ border: "5px solid #286e7d", padding: '0px', color: 'white', fontFamily: "Bebas-Bold", textTransform: 'uppercase' }}>
                                    <p>Betis</p>
                                </TableCell>


                                <TableCell align="center"
                                    style={{ border: "5px solid #286e7d", padding: '0px', color: 'white', fontFamily: "Bebas-Bold", textTransform: 'uppercase' }}>
                                    <p>Villarreal</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >

        </ >
    )
}

export default ParteTres;
