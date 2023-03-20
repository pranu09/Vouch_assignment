import React from 'react'
import "@fontsource/nunito-sans";
import TextField from '@mui/material/TextField';
import { Grid, FormControl, FormLabel, Button, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { Container } from '@mui/material';
import Frame58 from '../../images/Frame58.png'
import SuffixIcon from '../../images/SuffixIcon.png'
import Vector from '../../images/Vector.png'
import IconBlock from '../../images/IconBlock.png'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './ModuleSetup.css'
import { useNavigate } from 'react-router-dom';



const ModuleSetupComponent = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <Container className='form_container pt-4' maxWidth={false}>

        <form>
          <h2 className='TITLE_VIEW'>Modules Setup</h2>
          <p className="viewcli">Select the modules that the client can use..</p>
          <Grid container spacing={2}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


              <Grid item lg={4} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">

                  <FormGroup aria-label="position" >

                    {/* <TextField id="outlined-basic" label="GST Number" variant="outlined" /> */}
                    <FormControlLabel style={{ fontWeight: 400 }} control={<Checkbox />} label="Home / Dashboard" />
                    <FormControlLabel control={<Checkbox />} label="Helpdesk" />
                    <FormControlLabel control={<Checkbox />} label="Assets" />
                    <FormControlLabel control={<Checkbox />} label="Daily Tasks" />
                    <FormControlLabel control={<Checkbox />} label="PPM" />
                    <FormControlLabel control={<Checkbox />} label="Employees" />
                    <FormControlLabel control={<Checkbox />} label="Profile" />
                    <FormControlLabel control={<Checkbox />} label="Transactions" />

                  </FormGroup>

                  {/* <TextField id="outlined-basic" label="Select City" variant="outlined" /> */}
                </FormControl>
              </Grid>


              <Grid item lg={8} xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled" >


                  <Grid container spacing={3} >
                    <Grid item lg={1} xs={2}>
                      <img src={IconBlock} className="IconBlock_img" />

                    </Grid>
                    <Grid item lg={7} xs={10} >
                      <h3 className='TITLE_VIEW'>Daily Tasks</h3>
                      <p className="viewcli">Select the sub modules that the client can use.</p>
                    </Grid>
                    <Grid item lg={4} xs={12} className="button-mobile extra-mob-pad">
                      <div className='visible_client_button'>
                        <img src="./icon/right_sign.png" />
                        <button  >
                          Visible to Client
                        </button>
                      </div>
                    </Grid>
                  </Grid>


                  <FormGroup aria-label="position" size="small">


                    <FormControlLabel control={<Checkbox />} label="Show All Sub Modules"
                   
                    />
                    <FormControlLabel control={<Checkbox />} label="Summmary" />
                    <FormControlLabel control={<Checkbox />} label="View Tasks" />
                    <FormControlLabel control={<Checkbox />} label="Create New Task" />
                    <FormControlLabel control={<Checkbox />} label="Logbook" />
                    <FormControlLabel control={<Checkbox />} label="Logsheet" />
                    <div className='px-5 d-flex flex-column'>
                      <FormControlLabel control={<Checkbox />} label="Logsheet" disabled />
                      <FormControlLabel control={<Checkbox />} label="Logsheet" disabled />
                    </div>

                  </FormGroup>

                </FormControl>
              </Grid>

              {/* </ThemeProvider> */}
              <Grid item lg={4.2} xs={12} className="d-flex align-items-center mb-4 justify-content-between button-mobile">
                <div className="button_save d-flex">
                  <div className="save_button">
                    <button className='d-flex mx-3 align-items-center justify-content-center w-30' onClick={e => navigate("/add_client_success")} >
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

export default ModuleSetupComponent;