import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from '../scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCircleXmark, faClock, faDollarSign, faEdit, faPeopleGroup, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {COLORS} from 'src/theme/colors';
import { padding } from '@mui/system';

export const ApplicationPreview = (props) => {
  const { application, ...other } = props;

  return (
    <Paper {...other}>
      <Scrollbar>
        <Box
          sx={{
            minWidth: 800,
            p: 5,
          }}
        >
          <Grid
            container
            justifyContent="space-between"
          >
            <Grid item>
              
              <Typography variant="body2">
                Application Date:
                </Typography>
                <Typography variant="subtitle2">
                {application.dateCompleted}
              </Typography>
            </Grid>
            <Grid item mt={-4}>
              <img src={application.logo} width={150}/>
              </Grid>
            <Grid item mt={-2}>
              <Typography
                align="right"
                variant="h4"
              >
                {application.status.toUpperCase()}
              </Typography>
              <Typography
                align="right"
                variant="subtitle2"
              >
                Application #
                {"000203"}
              </Typography>
            </Grid>
          </Grid>
          <hr style={{border:0, 
                height: 0,
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                marginTop:8}}></hr>
                 <Grid item>
              <Typography
                align="center"
                variant="h6"
                marginTop={2}
              >
                Business Information
              </Typography>
              </Grid>
          <Box sx={{ my: 3 }}>
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="h6">
                {application.companyName}
                </Typography>
                <Typography variant="body1">
                  {application.address}
                </Typography>
                <Typography variant="body1">
                  {application.phoneNumber}
                </Typography>
                <Typography variant="body1">
                  {application.email}
                </Typography>
              </Grid>

              <Grid item mr={3}>
                <Grid item display="flex" alignItems="left">
                <Typography
                  variant="body1"
                >
              <FontAwesomeIcon
              icon={faClock} 
              size="1x" 
              color={COLORS.iconOnApplication}
              />
                {" "+application.yib + " years"}
                  </Typography>
                  </Grid>
                  <Grid item display="flex" alignItems="left">
                <Typography
                  variant="body1"
                >
              <FontAwesomeIcon
              icon={faBuilding} 
              size="1x" 
              color={COLORS.iconOnApplication}
              />
                {"  " + application.businessType}
                  </Typography>
                  </Grid>
                  <Grid item display="flex" alignItems="left">
                <Typography
                  variant="body1"
                >
              <FontAwesomeIcon
              icon={faDollarSign} 
              size="1x" 
              color={COLORS.iconOnApplication}
              />
                {"  " + "$500K - $1M"}
                  </Typography>
                  </Grid>
                  <Grid item display="flex" alignItems="left">
                <Typography
                  variant="body1"
                >
              <FontAwesomeIcon
              icon={faPeopleGroup} 
              size="1x" 
              color={COLORS.iconOnApplication}
              />
                {"  " + "20 - 49"}
                  </Typography>
                  </Grid>
                  </Grid>
            </Grid>
            <Grid item>
              <Typography
                align="center"
                variant="h6"
                marginTop={2}
              >
                Personnel Details
              </Typography>
              </Grid>

              <Grid item>
              <Typography
                align="center"
                variant="h6"
                marginTop={2}
              >
                References
              </Typography>
              </Grid>
              </Box>
              <Box sx={{border:1, borderRadius:1, borderColor:"#F1F1F1", padding:1}}>
              <Grid             
              container
              justifyContent="space-between">
              <Grid item>
              <Typography variant="h6">
                {application.refArray[0].referenceName}
                </Typography>
                </Grid>
                <Grid item>
              <Typography variant="h6">
                {application.refArray[0].referenceEmail}
                </Typography>
                </Grid>
                <Grid item>
              <Typography variant="h6">
                {application.refArray[0].referencePhoneNumber}
                </Typography>
                </Grid>
                </Grid>
                <Grid container justifyContent="space-around" mt={2}>
                <Grid item display="flex" alignItems="left" 
                  sx={{backgroundColor:"green", 
                  paddingX:3,
                  paddingY:1,  
                  borderRadius:1}}>
                <Typography
                  variant="body1"
                >
                {"10 Year Relationship"}
                  </Typography>
                  </Grid>
                <Grid item display="flex" alignItems="left" 
                  sx={{backgroundColor:"yellow", 
                  paddingX:3,
                  paddingY:1, 
                  borderRadius:1}}>
                <Typography
                  variant="body1"
                >
                {"Sometimes pays on time"}
                  </Typography>
                  </Grid>
                  <Grid item display="flex" alignItems="left" 
                  sx={{backgroundColor:"red", 
                  paddingX:3,
                  paddingY:1, 
                  borderRadius:1}}>
                <Typography
                  variant="body1"
                >
                {"Not Recommended"}
                  </Typography>
                  </Grid>
                  </Grid>
                </Box>
          </Box>
          </Scrollbar>
    </Paper>
  );
};

ApplicationPreview.propTypes = {
    application: PropTypes.object.isRequired
};
