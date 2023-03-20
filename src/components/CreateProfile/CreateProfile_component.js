import React, { useState } from 'react'
import "@fontsource/nunito-sans";
import TextField from '@mui/material/TextField';
import { Grid, FormControl, Select, InputLabel } from '@mui/material';
import { Container } from '@mui/material';
import './CreateProfile.css'
import Frame58 from '../../images/Frame58.png'
import SuffixIcon from '../../images/SuffixIcon.png'
import Vector from '../../images/Vector.png'



const CreateProfileComponent = ({ setActiveTab }) => {


  return (
    <>
      <Container className='form_container pt-4' maxWidth={false}>

        <form>
          <h2 className='TITLE_VIEW'>Create Client Profile</h2>
          <p className='viewcli'>Add some basic information related to the client.</p>
          <Grid container spacing={2}>
            <Grid item xs={12} className="Company_logo">

              <img src={Frame58} alt="not found" />
              <div className='company_logo_name_des'>
                <h3 className='company_logo_name'>Company Logo</h3>
                <p>Logo ratio shoud be 1:1 and should be 120px X 120 px</p>
              </div>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item lg={6} xs={12} >
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">



                  <TextField required id="outlined-basic" placeholder="Company *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField id="outlined-basic" required placeholder="Website *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <InputLabel id="demo-simple-select-label" disabled>Select Business Category *</InputLabel>
                  <Select required id="outlined-basic" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <InputLabel id="demo-simple-select-label" disabled>Select Facility Management Company *</InputLabel>
                  <Select required id="outlined-basic" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="Company Email Address *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="Mobile Number *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={5} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <InputLabel id="demo-simple-select-label" disabled>Select State *</InputLabel>
                  <Select required id="outlined-basic" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={5} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <InputLabel id="demo-simple-select-label" disabled>Select City *</InputLabel>
                  <Select required id="outlined-basic" variant="outlined" />
                </FormControl>
              </Grid>

              <Grid item lg={2} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="Pincode *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField required id="outlined-basic" placeholder="GST Number *" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <TextField id="outlined-basic" placeholder="Fax Number *" variant="outlined" />
                </FormControl>
              </Grid>

              <Grid item lg={4.2} xs={12} className="d-flex align-items-center mb-4 justify-content-between button-mobile">
                <div className="button_save d-flex">
                  <div className="save_button">
                    <button className='d-flex mx-3 align-items-center justify-content-center w-30' onClick={() => setActiveTab("PATMENT_SETUP")} >
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

export default CreateProfileComponent;