import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import Axios from 'axios';
import domain from "../../utils/domain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEdit } from '@fortawesome/free-solid-svg-icons';
import {COLORS} from 'src/theme/colors';

function CreditAppDetails (props) {

    const [values, setValues] = useState({
        hidden: true,
        showOpenArrow: true,
        showCloseArrow: false,
    })

  useEffect(() => {
  }, []);

  function flipValues() {
    setValues({
      ...values,
      hidden:!values.hidden,
      showCloseArrow: !values.showCloseArrow,
      showOpenArrow: !values.showOpenArrow,
      disabled: true,
    })
  }

  return (
    <form
      autoComplete="off"
      noValidate
    >
      <Card>
      <Grid
            container
            spacing={3}
            onClick={flipValues}
          >
              <Grid
              item
              md={9}
              xs={9}
              m={3}
            >
              <h3>Standard Company Data</h3>
              <p>This information is autofilled for each company.</p>
            </Grid>
            <Grid
              item
              md={2}
              xs={2}
              mr={3}
              mt={4}
              align="right"
            >
              <div hidden={values.showOpenArrow}>
              <FontAwesomeIcon onClick={flipValues} 
              icon={faCircleXmark} 
              size="2x" 
              color={COLORS.closePlusButton}/>
              </div>
              <div hidden={values.showCloseArrow}>
              <FontAwesomeIcon onClick={flipValues}
              icon={faEdit} 
              size="2x" 
              color={COLORS.expandPlusButton}/>
              </div>
            </Grid>
              </Grid>
        <Divider />
        <CardContent hidden={values.hidden}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
              align="center"
            >
              <h3>Company Info</h3>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Company Name"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="State"
                variant="outlined"
                required
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Postal Code"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Primary Phone Number"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="A/P Email Address"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="A/P Phone Number"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              align="center"
            >
              <h3>Business History</h3>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Type of Business"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Years in Business"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Revenue"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="President Name"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="President Email Address"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              align="center"
            >
              <h3>Trade References</h3>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <p>Reference #1</p>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Reference Company Name"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Reference Company Phone"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Contact Person"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Length of Relationship"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <p>Reference #2</p>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Reference Company Name"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Reference Company Phone"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Contact Person"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Length of Relationship"
                required
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              align="right"
            >
          <Button
            color="primary"
            variant="contained"
            onClick={() => setValues({...values, hidden: true, showCloseArrow: false, showOpenArrow: true})}
          >
            Close
          </Button>
          </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
}

export default CreditAppDetails;
