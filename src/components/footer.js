import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import "../styles/footer.css";
import TsunamiIcon from "@mui/icons-material/Tsunami";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon /> <TwitterIcon />
            </div>
            <p> @ D<TsunamiIcon/>Adventure 2024 </p>
        </div>
    );
}

export default Footer;