import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InboxIcon from '@mui/icons-material/Inbox';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const TitleSection = () => {
  return (
    <div className="title-section">
        <div className="title-top">
          <h1>Daniel</h1>
          <h1>Mesu</h1>
        </div>

        <div className="title-bottom-section">
          
          <div className="title-contact">
            <Stack direction="column" spacing={1}>
              <div className="contact-block">
                <AlternateEmailIcon style={{color: "#cccccc"}} /> <h3>danielrojo1927@gmail.com</h3>
              </div>

              <div className="contact-block">
                <PhoneIphoneIcon style={{color: "#cccccc"}} /> <h3>+11 2696 5611</h3>
              </div>
            </Stack>
          </div>

          <div className="title-icons">
            <Stack direction="row" spacing={1}>
              <Chip
                avatar={<CodeIcon style={{color: "white"}} />}
                label="Codewars"
                variant="outlined"
                clickable
              />

              <Chip
                avatar={<LinkedInIcon style={{color: "white"}} />}
                label="LinkedIn"
                variant="outlined"
                clickable
              />

              <Chip
                avatar={<GitHubIcon style={{color: "white"}} />}
                label="Github"
                variant="outlined"
                clickable
              />
            </Stack>
          </div>

          <div>
            download CV
          </div>

        </div>
    </div>
  )
}
