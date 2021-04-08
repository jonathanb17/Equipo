import { makeStyles } from "@material-ui/core/styles";
import cancha from '../../assets/cancha.png';

const useStyles = makeStyles(() => ({
    imagen: {
        width: "106%",
        height: "95%"
    },

}));

const Cancha = () => {

    const classes = useStyles();
    return (
        <>
            <img src={cancha} alt="" srcset="" className={classes.imagen} />
        </>
    )
}

export default Cancha;