import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '35%',
        maxWidth: 360,
        marginLeft: "60px",
        background: "#2b565f",
        color: "cyan",
        fontFamily: "Bebas-Bold ",
    },
}));

export default function Lista() {
    const classes = useStyles();
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List className={classes.root}>
            {['ARQ', 'DEF', 'MED', 'DEL', 'TOTAL'].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                style={{ color: 'cyan', fontFamily: "Bebas-Bold", }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={` ${value}`} style={{ marginLeft: "-25px" }} />
                    </ListItem>
                );
            })}
        </List>
    );
}