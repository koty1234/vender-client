import PropTypes from 'prop-types';
import {
  Grid,
  Typography
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faIdBadge, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export const ReferenceItem = (props) => {
    const { reference } = props;

return (
    <Grid justifyContent="space-between" container>
              <Grid item>
              <Grid item>
              <Typography variant="h5">
                {reference.referenceName}
                </Typography>
                </Grid>
                <Grid item mt={1}>
              <Typography variant="body2">
              <FontAwesomeIcon
              icon={faIdBadge} 
              size="1x" 
              color={"gray"}
              style={{marginRight:2}}
              />
                {reference.referenceContact}
                </Typography>
                </Grid>
                <Grid item>
              <Typography variant="body2">
              <FontAwesomeIcon
              icon={faLocationDot} 
              size="1x" 
              color={"gray"}
              style={{marginRight:2}}
              />
                {reference.referenceAddress}
                </Typography>
                </Grid>
                <Grid item>
              <Typography variant="body2">
              <FontAwesomeIcon
              icon={faAt} 
              size="1x" 
              color={"gray"}
              style={{marginRight:2}}
              />
                {reference.referenceEmail}
                </Typography>
                </Grid>
                <Grid item>
              <Typography variant="body2">
              <FontAwesomeIcon
              icon={faPhone} 
              size="1x" 
              color={"gray"}
              style={{marginRight:2}}
              />
                {reference.referencePhoneNumber}
                </Typography>
                </Grid>
                <Grid item mt={1}>
              <Typography variant="body2">
                {"Last updated: " + reference.referenceUpdate}
                </Typography>
                </Grid>
                </Grid>
                <Grid item>
                <Grid item
                  sx={{
                  paddingX:2,
                  marginBottom:1,  
                  }}>
                <Typography
                  variant="h5"
                  align='center'
                  style={{color:"green"}}
                >
                {"10 Year"}
                  </Typography>
                  <Typography
                  marginTop={-1}
                  variant="body2"
                  align='center'
                  style={{color:"black"}}
                >
                credit history
                  </Typography>
                  </Grid>
                  <Grid item
                  sx={{
                  paddingX:2,  
                  marginBottom:1,
                  }}>
                <Typography
                  variant="h5"
                  align='center'
                  style={{color:"orange"}}
                >
                {"Sometimes"}
                  </Typography>
                  <Typography
                  marginTop={-1}
                  variant="body2"
                  align='center'
                  style={{color:"black"}}
                >
                pays on time
                  </Typography>
                  </Grid>
                  <Grid item
                  sx={{
                  paddingX:2, 
                  }}>
                <Typography
                  variant="h5"
                  align='center'
                  style={{color:"red"}}
                >
                {"Not"}
                  </Typography>
                  <Typography
                  marginTop={-1}
                  variant="body2"
                  align='center'
                  style={{color:"black"}}
                >
                recommended
                  </Typography>
                  </Grid>
                  </Grid>
                  </Grid>
);
};

ReferenceItem.propTypes = {
    reference: PropTypes.object.isRequired
};