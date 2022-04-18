import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import { FileDropzone } from '../aaa-components/file-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {COLORS} from 'src/theme/colors';
import Axios from 'axios';
import domain from "../../utils/domain";
import { useRouter } from 'next/router';

function VendorProfileDetails (props) {
  const router = useRouter();
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
    logo: '',
    banner: '',
    vendorId: props.user.vendorId,
    pageReady: false,
    disabled: false,
    hidden: true,
    showOpenArrow: true,
    showCloseArrow: false,
  });

  useEffect(() => {
    getVendor();
  }, [values.logo]);


  async function saveVendor(e) {
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
    let logo = await Axios.get(`${domain}/file/vendor/logo/${values.vendorId}`);
    let banner = await Axios.get(`${domain}/file/vendor/banner/${values.vendorId}`);
    let vendor = request.data;
    setValues({
      ...values,
      logo: logo.data.url,
      banner: banner.data.url,
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

  function flipValues() {
    setValues({
      ...values,
      hidden:!values.hidden,
      showCloseArrow: !values.showCloseArrow,
      showOpenArrow: !values.showOpenArrow,
    })
  }

  async function logoSelected (event) {
    const file = event.target.files[0];
    const fileDetails = new FormData();
    fileDetails.append("vendorId", values.vendorId);
    fileDetails.append("uploadFile", file);
    fileDetails.append("type", "logo");
    fileDetails.append("side", "vendor");
    let savedFile = await Axios.post(`${domain}/file`, fileDetails, { headers: {'Content-Type': 'multipart/form-data'}});
    setValues({
      ...values,
      logo: '',
    })
}

async function bannerSelected (event) {
  const file = event.target.files[0]
  const fileDetails = new FormData();
  fileDetails.append("vendorId", values.vendorId);
  fileDetails.append("uploadFile", file);
  fileDetails.append("type", "banner");
  fileDetails.append("side", "vendor");
  let savedFile = await Axios.post(`${domain}/file`, fileDetails, { headers: {'Content-Type': 'multipart/form-data'}});
  setValues({
    ...values,
    logo: '',
  })
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
              <h3>Company</h3>
              <p>Update your company details.</p>
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
              md={3}
              xs={12}
            >
              <h5>Logo</h5>
            </Grid>
            <Grid
              item
              md={9}
              xs={12}
            >
              <h5>Banner</h5>
            </Grid>
                       <Grid
            item
            md={3}
            xs={12}
            >
                      <div className="fileUploadButton">
                      <label htmlFor="file-upload" className="file-upload">
                      <Box
                              sx={{
                                backgroundColor: 'background.default',
                                backgroundImage: `url(${values.logo})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                backgroundRepeat: "no-repeat",
                                borderRadius: 1,
                                padding: 1,
                                display: 'flex',
                                height: 200,
                                justifyContent: 'right',
                                overflow: 'hidden',
                                '&:hover': {
                                  backgroundColor: 'action.hover',
                                  cursor: 'pointer',
                                  opacity: 0.8
                                }
                              }}>
                                                      <FontAwesomeIcon
                        className="awesomeAboutPhoto"
                        icon={faEdit}
                        color="grey"
                        size='1x'
                      />
                                </Box>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/x-png, image/jpeg, image/jpg"
                        onChange={logoSelected}
                        style={{display: "none"}}
                      />
                    </div>                                
              </Grid>
              <Grid
            item
            md={9}
            xs={12}
            >
                      <div className="bannerUploadButton">
                      <label htmlFor="banner-upload" className="banner-upload">
                      <Box
                              sx={{
                                backgroundColor: 'background.default',
                                backgroundImage: `url(${values.banner})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                backgroundRepeat: "no-repeat",
                                borderRadius: 1,
                                padding: 1,
                                display: 'flex',
                                height: 200,
                                justifyContent: 'right',
                                overflow: 'hidden',
                                '&:hover': {
                                  backgroundColor: 'action.hover',
                                  cursor: 'pointer',
                                  opacity: 0.8
                                }
                              }}>
                                                      <FontAwesomeIcon
                        className="awesomeAboutPhoto"
                        icon={faEdit}
                        color="grey"
                        size='1x'
                      />
                                </Box>
                      </label>
                      <input
                        id="banner-upload"
                        type="file"
                        accept="image/x-png, image/jpeg, image/jpg"
                        onChange={bannerSelected}
                        style={{display: "none"}}
                      />
                    </div>                                
              </Grid>
              <Grid
            item
            md={9}
            xs={5}
            >
              </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
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
            color="primary"
            variant="contained"
            type="submit"
          >
            Save
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
