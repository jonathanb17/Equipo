import React, { useState, useEffect } from 'react'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const Union = () => {


    useEffect(() => {
        document.body.classList.add("background-Image");
        return () => {
            document.body.classList.remove("background-Image");
        };
    });


    // const classes = useStyles();

    const [statics, setStatics] = useState([]);

    const fechStatic = () => {
        const res = items.data; // al teer el enpoit cambiar item.data por la direccion del enpoint
        setStatics(res);
    }


    useEffect(() => {
        fechStatic()
    }, []);

    if (statics.length > 0) {
        console.log(statics);
    }

    useEffect(() => {
        document.body.classList.add("background-Image");
        return () => {
            document.body.classList.remove("background-Image");
        };
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



    const tableHead = [
        {
            id: 1,
            nombre: 'tournament'
        },
        {
            id: 2,
            nombre: 'category'
        },
        {
            id: 3,
            nombre: 'pos'
        },
        {
            id: 4,
            nombre: 'pj'
        },
        {
            id: 5,
            nombre: 'pg'
        },
        {
            id: 6,
            nombre: 'pe'
        },
        {
            id: 7,
            nombre: 'pp'
        },
        {
            id: 8,
            nombre: 'gf'
        },
        {
            id: 9,
            nombre: 'gc'
        },
        {
            id: 10,
            nombre: 'dg'
        },
        {
            id: 11,
            nombre: 'pts'
        },
        {
            id: 12,
            nombre: 'ultimos5'
        }

    ];



    return (
        <div>
            <table>
                <thead style={{ display: 'flex', justifyContent: 'center', margin: '10px', }}>
                    {
                        tableHead.map((tableh, index) => {
                            return (
                                <tr key={index} style={{}}>
                                    <th style={{
                                        padding: '10px',
                                        margin: '80px',
                                        background: '#102e30',
                                        color: 'cyan',
                                        height: '42px'
                                    }}>{tableh.nombre}</th>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <th style={{ background: '#102e30', color: 'cyan', }}>promedios
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>pts</th>
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>gf</th>
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>gc</th>
                        </th>
                    </tr>

                    <tr>
                        <th style={{ background: '#102e30', color: 'cyan', }}>promedios
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>gf</th>
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>gc</th>
                        </th>
                    </tr>


                    <tr>
                        <th style={{ background: '#102e30', color: 'cyan', }}>1vs1open
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>g</th>
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>p</th>
                        </th>
                    </tr>

                    <tr>
                        <th style={{ background: '#102e30', color: 'cyan' }}>1vs1def
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>g</th>
                            <th style={{ background: '#102e30', color: 'cyan', width: '100%', padding: '10px' }}>p</th>
                        </th>
                    </tr>

                </thead>

                <tbody style={{ fontFamily: "Bebas-Bold", padding: '10px' }}>
                    {
                        statics.map((row, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td style={{ display: 'flex' }}>
                                            <p> {row.tournament}</p>
                                            <p> {row.category}</p>
                                        </td>
                                    </tr>
                                </>


                            )
                        })
                    }
                </tbody>
            </table >
        </div >
    )
}

export default Union
