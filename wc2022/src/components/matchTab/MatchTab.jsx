import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MatchStatistic from '../../containers/MatchStatistic/MatchStatistic';
import { PostAboutMatch } from '../../scenes/AllPosts/Post';
import MatchEvent from '../../containers/MatchEvent/MatchEvent';
import MatchFormation from '../../containers/MatchFormation/MatchFormation';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    };
}

export default function MatchTab({ detail, homeTeam, awayTeam }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: 1 / 1.2 }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    sx={{ bgcolor: '#962d4c', color: 'white' }}
                >
                    <Tab label="Đội hình ra sân" {...a11yProps(0)} />
                    <Tab label="Diễn biến chính" {...a11yProps(1)} />
                    <Tab label="Thống kê" {...a11yProps(2)} />
                    <Tab label="Tin tức" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <Box
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChange={handleChangeIndex}
            // onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div style={{ color: 'black' }}>
                        <MatchFormation
                            home_team={detail?.home_team_lineup}
                            away_team={detail?.away_team_lineup}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div style={{ color: 'black' }}>
                        <MatchEvent event_home={detail?.home_team_events} event_away={detail?.away_team_events} />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div style={{ color: 'black' }}>
                        <MatchStatistic
                            homeStatistic={detail?.home_team_statistics}
                            awayStatistic={detail?.away_team_statistics}
                            homeTeam={homeTeam}
                            awayTeam={awayTeam}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <div style={{ color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PostAboutMatch idMatch={detail.id} />
                    </div>
                </TabPanel>
            </Box>
        </Box>
    );
}
