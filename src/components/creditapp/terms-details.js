import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextArea,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import Axios from 'axios';
import domain from "../../utils/domain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEdit } from '@fortawesome/free-solid-svg-icons'
import {COLORS} from 'src/theme/colors';

function TermsDetails (props) {

  const [values, setValues] = useState({
      tandc: "",
      hidden: true,
      vendorId: props.user.vendorId,
      customCredAppId: props.customCredAppId,
      showOpenArrow: true,
      showCloseArrow: false,
      disabled: true,
  })

  function flipValues() {
    setValues({
      ...values,
      hidden:!values.hidden,
      showCloseArrow: !values.showCloseArrow,
      showOpenArrow: !values.showOpenArrow,
    })
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  async function saveCustomCredApp() {
    const vendorData = {
      tandc: values.tandc,
    }
    await Axios.patch(`${domain}/vendor/customcreditapp/${values.customCredAppId}`, vendorData);
    flipValues();
  }

  async function getCustomCredApp() {
    let request = await Axios.get(`${domain}/vendor/customcreditapp/${values.customCredAppId}`);
    setValues({
      ...values,
      tandc: request.data.tandc,
    });

  }

  useEffect(() => {
    getCustomCredApp();
  }, []);

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
              <h3>Terms and Conditions</h3>
              <p>Set your custom terms and conditions here.</p>
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
            >
              <TextField
                fullWidth
                multiline
                rows={30}
                onChange={handleChange}
                label="Terms and Conditions"
                name="tandc"
                value={values.tandc} />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
            </Grid>
            <Divider />
            <Grid
              item
              md={12}
              xs={6}
              align="right"
            >
          <Button
            color="primary"
            variant="contained"
            onClick={saveCustomCredApp}
          >
            Save Details
          </Button>
          </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
}

export default TermsDetails;
