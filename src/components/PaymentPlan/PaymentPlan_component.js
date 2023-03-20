import React from 'react'
import "@fontsource/nunito-sans";
import TextField from '@mui/material/TextField';
import { Grid, FormControl, FormLabel, Button, FormControlLabel, Checkbox, FormGroup, Select, InputLabel, Radio } from '@mui/material';
import { Container } from '@mui/material';
import SuffixIcon from '../../images/SuffixIcon.png'
import Vector from '../../images/Vector.png'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './PaymentPlan.css'


const PaymentPlanComponent = ({ setActiveTab }) => {
  // c
  return (
    <>
      <Container className='form_container pt-4' maxWidth={false}>

        <form>
          <h2 className='TITLE_VIEW'>Payment Setup</h2>
          <p className="viewcli">Set up payments for the client.</p>
          <Grid container spacing={2}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {/* <ThemeProvider theme={formLabelsTheme}> */}
              <Grid item lg={12} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="Billing Address *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={5} xs={12} >
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">


                  
                  <InputLabel id="demo-simple-select-label" disabled>Select State *</InputLabel>
                  <Select required id="outlined-basic" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={5} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <InputLabel id="demo-simple-select-label" disabled>Select City *</InputLabel>
                  <Select required id="outlined-basic" placeholder="Select City *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={2} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="Pincode *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <InputLabel id="demo-simple-select-label" disabled>Select Number of Site Access *</InputLabel>
                  <Select required id="outlined-basic" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <div className="d-flex">
                    <TextField fullWidth required id="outlined-basic" placeholder="Rs. Payable Amount per Site *" variant="outlined" />
                    <TextField fullwidth id="outlined-basic" color="info" placeholder="Total:Rs. 000000" variant="outlined" />

                  </div>
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="Discount (%) *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="Reason *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <h3 className='Payment_mode_title'>Payment Mode</h3>
                  <FormGroup aria-label="position" row>

                    <FormControlLabel control={<Checkbox />} label="UPI" />
                    <FormControlLabel control={<Checkbox />} label="Net Banking" />
                    <FormControlLabel control={<Checkbox />} label="Cash" />
                    <FormControlLabel control={<Checkbox />} label="Cheque" />
                    <FormControlLabel control={<Checkbox />} label="Other" />

                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled" >
                  <h3 className='Payment_mode_title'>Payment Status</h3>
                  <FormGroup aria-label="position" row>

                    <FormControlLabel control={<Radio />} label="Paid" />
                    <FormControlLabel control={<Radio />} label="Pending" />


                  </FormGroup>

                </FormControl>
              </Grid>

              {/* </ThemeProvider> */}
              {/* <Grid item xs={6}>
                <Button variant="contained" onClick={() => setActiveTab("THEME_SETUP")} >
                  Save & Continue
                  <img src={SuffixIcon} />
                </Button>

                <Button variant="standard" >
                  <img src={Vector} />
                  Reset
                </Button>
              </Grid> */}
              
              <Grid item lg={4.2} xs={12} className="d-flex align-items-center mb-4 justify-content-between button-mobile">
                <div className="button_save d-flex">
                  <div className="save_button">
                    <button className='d-flex mx-3 align-items-center justify-content-center w-30' onClick={() => setActiveTab("THEME_SETUP")} >
                      Save & Continue
                    </button>
                    <img className='ml-3' src={SuffixIcon} />
                  </div>

                  <div className="reset_button">
                    <img className='' src={Vector} />
                    <button className='d-flex mx-3 align-items-center '>
                      Reset
                    </button>
                  </div>
                </div>
              </Grid>

            </Grid>

          </Grid>




        </form>
      </Container>
    </>
  )





}

export default PaymentPlanComponent;