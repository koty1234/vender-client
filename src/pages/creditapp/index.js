import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { gtm } from '../../components/lib/gtm';
import CreditAppDetails  from "../../components/creditapp/credit-app-details";
import CustomCreditAppDetails  from "../../components/creditapp/custom-credit-app-details";
import { DashboardLayout } from '../../components/dashboard-layout';
import Axios from 'axios';
import domain from "../../utils/domain";
import TermsDetails from 'src/components/creditapp/terms-details';

function Account () {

  const [values, setValues] = useState({
    accountDetails: '',
    vendorDetails: '',
    vendorId: '',
    pageReady: false,
  });


  useEffect(() => {
    getVendor();
    gtm.push({ event: 'page_view' });
  }, []);



  async function getUser() {
    let request = await Axios.get(`${domain}/user/`);
    let userDetails = request.data;
    return userDetails;
  }

  async function getVendor() {
   let userDetails = await getUser();
    let request = await Axios.get(`${domain}/vendor/${userDetails.vendorId}`);
    let vendorDetails = request.data;
    setValues({
      ...values,
      vendorDetails : vendorDetails,
      accountDetails : userDetails,
      pageReady: true
    })
  }

  if(values.pageReady){
  return(
  <>
    <Head>
      <title>
        Account | Material Kit
      </title>
    </Head>
    <main>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h3"
        >
          Credit App Builder
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <CreditAppDetails user={values.accountDetails}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
          <CustomCreditAppDetails user={values.accountDetails} vendor={values.vendorDetails}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
          <TermsDetails user={values.accountDetails}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </main>
  </>
);

}
else return null;
}

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Account;
