import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const styles = {
    root: {
      backgroundColor: 'red',
      color: 'white',
    },
    tabSection: {
        fontFamily: "Oswald"
    }
};
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

interface Props extends WithStyles<typeof styles> {}

const CurriculumVitae = ({ classes }: Props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: '#cccccc', display: 'flex', height: 900 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                className={classes.tabSection}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderColor: 'divider', padding: "2rem", marginTop: "14rem" }}
            >
                <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label="About Me" {...a11yProps(0)} />
                <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label="Education" {...a11yProps(1)} />
                <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label="Experience" {...a11yProps(2)} />
                <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label="Item Skills" {...a11yProps(3)} />
                <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label="Acomplishments" {...a11yProps(4)} />
                <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label="Certifications" {...a11yProps(5)} />
                <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label="References" {...a11yProps(6)} />
            </Tabs>
            

            <div style={{width: "1000px"}}>
                <TabPanel value={value} index={0}>
                    About Me
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Education
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Experience
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Skills
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Acomplishments
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Certifications
                </TabPanel>
                <TabPanel value={value} index={6}>
                    References
                </TabPanel>
            </div>
        </Box>
    );
}

export default withStyles(styles)(CurriculumVitae)