import { Box, Button, Grid, TextField } from '@mui/material';
import {React, useState} from 'react';
import Axios, * as others from "axios";
import { useRouter } from 'next/router';
import domain from "../../utils/domain";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContractorInfo from 'src/components/contractor/contractor-info';
import VendorTop from 'src/components/contractor/vendor-top';

function CreditAppForm ({notify}) {

    const [values, setValues] = useState({
        vendorId: "62558e4313dfed8fda1b9a1b",
        companyName: "",
        logo: "",
        pageReady: false,
      });

  return (
    <Grid
    container
  >
<VendorTop vendorId = {values.vendorId}/>
 <ContractorInfo />
 </Grid>
  );
  }

  export default CreditAppForm;
