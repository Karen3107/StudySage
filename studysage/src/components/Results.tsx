import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';


interface ResultsProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

// Dashboard of Page
const Results: React.FC<ResultsProps> = () => {
  const [subjectDetails, setSubjectDetails] = useState([
    { name: 'Subject 1', description: 'Maths 2 unit is a detail bc blah blah...' },
    { name: 'Subject 2', description: 'Description for Subject 2...' },
    { name: 'Subject 3', description: 'Description for Subject 3...' },
    { name: 'Subject 4', description: 'Description for Subject 4...' },
    { name: 'Subject 5', description: 'Description for Subject 5...' },
    { name: 'Subject 6', description: 'Description for Subject 6...' }
  ]);

  return (
    <>
      <Typography variant='h2'>Results</Typography>
      {subjectDetails.map((subject, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content-${index}`}
            id={`panel-header-${index}`}
          >
            <div>
              <Typography>{subject.name}</Typography>
              <Typography>80% Match</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {subject.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <div>

      </div>
    </>
  )
}

export default Results;