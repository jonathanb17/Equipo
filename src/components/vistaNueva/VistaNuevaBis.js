
import { makeStyles } from "@material-ui/core/styles";
import diego from '../../assets/Enmascarar_grupo_1.png';

const useStyles = makeStyles(() => ({
    flexcontainer: {
        display: "flex",
        flexWrap: "wrap"
    },

    flexitem1: {
        minWidth: "75px",
        height: "80px",
        margin: "10px",
        backgroundColor: "red",
        flex: 1
    },
    flexitem2: {
        minWidth: "75px",
        height: "80px",
        margin: "10px",
        backgroundColor: "green",
        flex: 1
    }, flexitem3: {
        minWidth: "75px",
        height: "80px",
        margin: "10px",
        backgroundColor: "SkyBlue",
        flex: 1
    },
    flexitem4: {
        minWidth: "75px",
        height: "80px",
        margin: "10px",
        backgroundColor: "yellow",
        flex: 1
    },
    img: {
        width: "50px",
        height: "50px",
        borderRadius: "150px",
        marginTop: "10px"
    }
}));


const VistaNuevaBis = () => {



    const classes = useStyles();

    return (
        <>
            <div className={classes.flexcontainer}>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem3}></div>
                <div className={classes.flexitem3}></div>
                <div className={classes.flexitem3}>
                    <img src={diego} alt="" srcset="" className={classes.img} />
                </div>
                <div className={classes.flexitem4}></div>
                <div className={classes.flexitem4}>
                    <img src={diego} alt="" srcset="" className={classes.img} />
                </div>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem1}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem2}></div>
                <div className={classes.flexitem3}></div>
                <div className={classes.flexitem3}></div>
                <div className={classes.flexitem3}></div>
                <div className={classes.flexitem4}></div>
                <div className={classes.flexitem4}></div>
            </div>
        </>
    )
}

export default VistaNuevaBis;  