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
import { faCircleXmark, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import {COLORS} from 'src/theme/colors';

function CustomCreditAppDetails (props) {

  const [values, setValues] = useState({
      hidden: true,
      showOpenArrow: true,
      showCloseArrow: false,
      vendorId: props.vendor._id,
      customCreditAppId: props.vendor.customCredAppId,
      qOne: " ",
      qTwo: "No Custom Question Set",
      qThree: "No Custom Question Set",
      qFour: "No Custom Question Set",
      qFive: "No Custom Question Set",
      qSix: "No Custom Question Set",
      qSeven: "No Custom Question Set",
      qEight: "No Custom Question Set",
      qNine: "No Custom Question Set",
      qTen: "No Custom Question Set",
      qOneSetNew: "Change your 1st custom question here",
      qTwoSetNew: "No Custom Question Set",
      qThreeSetNew: "No Custom Question Set",
      qFourSetNew: "No Custom Question Set",
      qFiveSetNew: "No Custom Question Set",
      qSixSetNew: "No Custom Question Set",
      qSevenSetNew: "No Custom Question Set",
      qEightSetNew: "No Custom Question Set",
      qNineSetNew: "No Custom Question Set",
      qTenSetNew: "No Custom Question Set",
      disabled: true,
      pageReady: false,
  })

  useEffect(() => {
  }, []);

  function allowEdit() {
    setValues({
      ...values,
      disabled : false,
    });
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
          >
              <Grid
              item
              md={9}
              xs={9}
              m={3}
            >
              <h3>Custom Questions</h3>
              <p>Set your custom questions here.</p>
            </Grid>
            <Grid
              item
              md={2}
              xs={2}
              mr={3}
              mt={5}
              align="right"
            >
              <div hidden={values.showOpenArrow}>
              <FontAwesomeIcon onClick={() => 
              setValues({...values, hidden: true,
                        showOpenArrow: true,
                        showCloseArrow: false,
                        })} 
              icon={faCircleXmark} 
              size="2x" 
              color={COLORS.closePlusButton}/>
              </div>
              <div hidden={values.showCloseArrow}>
              <FontAwesomeIcon onClick={() =>
               setValues({...values, hidden: false,
                        showOpenArrow: false,
                        showCloseArrow: true,
                        })}
              icon={faPlusCircle} 
              size="2x" 
              color={COLORS.expandPlusButton}/>
              </div>
            </Grid>
              <Divider/>
              </Grid>
        <Divider />
        <CardContent hidden={values.hidden}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label={values.qOne}
                value={values.qOneSetNew}
                required
                variant="outlined"
                disabled = {values.disabled}
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
            md={8}
            xs={12}> </Grid>
            <Grid
              item
              md={3}
              xs={6}
              align="right"
            >
          <Button
            color="warning"
            variant="contained"
            onClick={allowEdit}
          >
            Edit Details
          </Button>
          </Grid>
            <Grid
              item
              md={1}
              xs={6}
              align="right"
            >
          <Button
            color="primary"
            variant="contained"
            onClick={() => setValues({...values, hidden: true})}
          >
            Save
          </Button>
          </Grid>
          </Grid>
            </CardContent>
        <Divider />
      </Card>
    </form>
  );
}

export default CustomCreditAppDetails;
