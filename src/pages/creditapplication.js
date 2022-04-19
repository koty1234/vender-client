import { useState, useEffect, useCallback } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  Link,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DashboardLayout } from '../components/dashboard-layout';
import { ApplicationPDF } from '../components/creditapp/invoice-pdf';
import { ArrowLeft as ArrowLeftIcon } from '../icons/arrow-left';
import { gtm } from '../components/lib/gtm';
import Axios from 'axios';
import domain from "../utils/domain";
import { ApplicationPreview } from 'src/components/creditapp/application-preview';

function CreditAppFull() {
  const [creditApp, setCreditApp] = useState({});
  const [viewPDF, setViewPDF] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [dateCompleted, setDateCompleted] = useState("");
  const [pageReady, setPageReady] = useState(false);


  async function getFullCreditApp() {
    let fullCreditApp = await Axios.get(`${domain}/masterapp/full/625c7d2a1b198febc6cedaa1`);
    setCreditApp(fullCreditApp.data);
    setCompanyName(fullCreditApp.data.companyName);
    setDateCompleted(fullCreditApp.data.dateCompleted);
    setPageReady(true);
  }


  useEffect(() => {
    getFullCreditApp();
    gtm.push({ event: 'page_view' });
  },[]);

  if(!pageReady) return null;
  return (
    <>
      <Head>
        <title>
          Dashboard: Invoice Details | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 3 }}>
            <Box sx={{ mb: 4 }}>
              <NextLink
                href="/dashboard/"
                passHref
              >
                <Link
                  color="textPrimary"
                  variant="subtitle2"
                >
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <ArrowBackIcon
                      fontSize="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="subtitle2">
                      Return
                    </Typography>
                  </Box>
                </Link>
              </NextLink>
            </Box>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <div>
                  <Typography variant="h4">
                    {companyName}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      {dateCompleted}
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid
                item
                sx={{ m: -1 }}
              >
                <PDFDownloadLink
                  document={<ApplicationPDF application={creditApp} />}
                  fileName="invoice"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    color="primary"
                    sx={{ m: 1 }}
                    variant="contained"
                  >
                    Download
                  </Button>
                </PDFDownloadLink>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3 }} />
          </Box>
          <ApplicationPreview application={creditApp}/>
        </Container>
      </Box>
    </>
  );
};

CreditAppFull.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

export default CreditAppFull;
