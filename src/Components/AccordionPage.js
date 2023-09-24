import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AccordionPage.css";

function AccordionPage() {
  return (
    <div className="accordion">
      <div className="faq">FAQs</div>
      <Accordion style={{ backgroundColor: "#121212", color: "#fff" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#121212", color: "#fff" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionPage;
