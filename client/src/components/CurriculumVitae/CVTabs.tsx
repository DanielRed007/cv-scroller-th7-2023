import React, { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { labelSection } from "../../data/labels";
import { AboutMe } from '../sections/AboutMe';
import { Education } from '../sections/Education';
import { Experience } from '../sections/Experience';
import { Skills } from '../sections/Skills';
import { Customers } from '../sections/Customers';

interface CVTabsProps{
    tabClass: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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

export const CVTabs = ({ tabClass }: CVTabsProps) => {

    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                className={tabClass}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderColor: 'divider', paddingLeft: "7rem", marginTop: "14rem" }}
            >
                {
                    labelSection.map((label,idx) => (
                        <Tab sx={{fontFamily: "Oswald", fontSize: "18px"}} label={label} key={idx} />
                    ))
                }
            </Tabs>

            <div style={{width: "1000px"}}>
                <TabPanel value={value} index={0}>
                    <AboutMe />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Education />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Experience />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Skills />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Customers />
                </TabPanel>
            </div>
        </>
    )
}
