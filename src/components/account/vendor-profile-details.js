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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {COLORS} from 'src/theme/colors';
import Axios from 'axios';
import domain from "../../utils/domain";

function VendorProfileDetails (props) {
  const [values, setValues] = useState({
    companyName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    presidentName: '',
    yib:'',
    businessPhonee: '',
    businessEmail: '',
    website: '',
    vendorId: props.user.vendorId,
    pageReady: false,
    disabled: true,
    hidden: true,
    showOpenArrow: true,
    showCloseArrow: false,
  });

  useEffect(() => {
    getVendor();
  }, []);


  async function saveVendor() {
    const vendorData = {
      companyName: values.companyName,
      address: values.address,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      presidentName: values.presidentName,
      yib: values.yib,
      businessPhone: values.businessPhone,
      businessEmail: values.businessEmail,
      website: values.website,
    }

  await Axios.patch(`${domain}/vendor/${values.vendorId}`, vendorData);
  }

  async function getVendor() {
    let request = await Axios.get(`${domain}/vendor/${values.vendorId}`);
    let vendor = request.data;
    setValues({
      ...values,
      companyName: vendor.companyName || "",
      address: vendor.address || "",
      city : vendor.city || "",
      state : vendor.state || "",
      postalCode : vendor.postalCode || "",
      presidentName : vendor.presidentName || "",
      yib : vendor.yib || "",
      businessPhone: vendor.businessPhone || "",
      businessEmail: vendor.businessEmail || "",
      website : vendor.website || "",
      pageReady: true,
    });
  }

  function allowEdit() {
    setValues({
      ...values,
      disabled : false,
    });
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  if(values.pageReady){
  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit = {saveVendor}
    >
      <Card sx={{mt:2}}>
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
              <h3>Company</h3>
              <p>Update your company details.</p>
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
                        disabled: true,
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
                helperText="Please specify the first name"
                label="Company Name"
                name="companyName"
                onChange={handleChange}
                required
                value={values.companyName}
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
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
                disabled = {values.disabled}
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
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
                disabled = {values.disabled}
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
                name="state"
                onChange={handleChange}
                value={values.state}
                variant="outlined"
                disabled = {values.disabled}
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
                name="postalCode"
                onChange={handleChange}
                value={values.postalCode}
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
                label="President's Name"
                name="presidentName"
                onChange={handleChange}
                required
                value={values.presidentName}
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
                label="Years in Business"
                name="yib"
                onChange={handleChange}
                required
                value={values.yib}
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
                label="Primary Business Phone"
                name="businessPhone"
                onChange={handleChange}
                required
                value={values.businessPhone}
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
                label="Primary Business Email"
                name="businessEmail"
                onChange={handleChange}
                required
                value={values.businessEmail}
                variant="outlined"
                disabled = {values.disabled}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Website"
                name="website"
                onChange={handleChange}
                required
                value={values.website}
                variant="outlined"
                disabled = {values.disabled}
              />
            </Grid>
        <Divider />
        <Grid
              item
              md={12}
              xs={6}
              align="right"
            >
          <Button
            color="warning"
            variant="contained"
            onClick={allowEdit}
            sx={{mr:2}}
          >
            Edit Details
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled = {values.disabled}
          >
            Save Details
          </Button>
          </Grid>
        </Grid>
        </CardContent>
      </Card>
    </form>
  );
}
else return null;
}

export default VendorProfileDetails;
