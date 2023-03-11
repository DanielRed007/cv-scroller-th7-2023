import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import { CVTabs } from "./CVTabs";

const styles = {
    tabSection: {
        fontFamily: "Oswald"
    }
};

interface CVProps extends WithStyles<typeof styles> {}

const CurriculumVitae = ({ classes }: CVProps) => {

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: '#cccccc', display: 'flex', height: 900 }}
        >
            <CVTabs tabClass={classes.tabSection} />
        </Box>
    );
}

export default withStyles(styles)(CurriculumVitae)