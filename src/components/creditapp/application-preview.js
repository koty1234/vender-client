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
import { faAt, faBuilding, faCircleXmark, faClock, faDollarSign, faEdit, faIdBadge, faLocationDot, faPeopleGroup, faPerson, faPhone, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {COLORS} from 'src/theme/colors';
import { padding, style } from '@mui/system';
import { ReferenceItem } from './reference-item';

export const ApplicationPreview = (props) => {
  const { application, ...other } = props;

  console.log(application);

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
              <Box sx={{border:1, borderRadius:1, borderColor:"#F1F1F1", padding:2, marginBottom:2}}>
              <ReferenceItem reference={application.refArray[0]} />
              </Box>
              <Box sx={{border:1, borderRadius:1, borderColor:"#F1F1F1", padding:2, marginBottom:2}}>
              <ReferenceItem reference={application.refArray[1]} />
              </Box>
              <Box sx={{border:1, borderRadius:1, borderColor:"#F1F1F1", padding:2, marginBottom:2}}>
              <ReferenceItem reference={application.refArray[2]} />
              </Box>
          </Box>
          </Scrollbar>
    </Paper>
  );
};

ApplicationPreview.propTypes = {
    application: PropTypes.object.isRequired
};
