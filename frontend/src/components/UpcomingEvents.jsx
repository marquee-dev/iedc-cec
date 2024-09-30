import React, {  useState } from "react";
import { Typography, Box, Card, CardContent, CardMedia, Button } from "@mui/material";
import ScrollTrigger from "react-scroll-trigger";
import { styled } from "@mui/system";
import Innovex from "../assets/innovex.png"

// Styled components
const EventCard = styled(Card)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(200px)',
  transition: 'all 4s cubic-bezier(0.25, 0.6, 0.25, 1)',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}));

const EventsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height:'90vh',
  flexDirection:'row',
  gap: '50px',
}));

const UpcomingEvents = () => {
  const [visible, setVisible] = useState(false);


  const handleEnterViewport = () => {
    setVisible(true);
  };

  return (
    
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "130vh",
        padding: 4,
      }}
    >
      <Typography mt={5} color="white" variant="h4" component="div">
                  UPCOMING EVENTS
                </Typography>
      <EventsContainer  >
        
          <ScrollTrigger onEnter={handleEnterViewport}>
            <EventCard sx={{ width: { xs: '50vw', md: '20vw' }, backgroundColor:"black", borderRadius:'20px', height:{md:'50vh',xs:'50vh'}, display:'flex',flexDirection:'column',marginTop:'3vh' }} className={visible ? "visible" : ""}>
              <CardMedia
                component="img"
                height="260"
                image={Innovex} // Event image from the backend
                alt="image"
              />
              <CardContent sx={{color:'white'}}>
                <Typography variant="h6" component="div">
                  Innovex
                </Typography>
                <Typography variant="body2" >
                  Price: 100
                </Typography>
                <Button sx={{border:'1px solid black',marginTop:'1vh',color:'black',backgroundColor:'#ffb510',fontWeight:600}}>Book Now</Button>
              </CardContent>
            </EventCard>
            
          </ScrollTrigger>
          
      </EventsContainer>
    </Box>
  );
};

export default UpcomingEvents;
