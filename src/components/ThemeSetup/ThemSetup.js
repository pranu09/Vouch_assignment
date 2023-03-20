import { Grid,FormControlLabel, IconButton, InputAdornment, Radio, TextField } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import SuffixIcon from '../../images/SuffixIcon.png'
import Vector from '../../images/Vector.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import './ThemSetup.css'

const ThemSetup = ({ setActiveTab }) => {
    return (
        <div className='frame_56 pt-4'>
            <div className="frame_57">
                <p className='TITLE_VIEW'>Theme Setup</p>
                <p className="viewcli">Add information about the client to give them a personalized experience.</p>
            </div>

            <div className="Text_field_frame">
            <TextField
                    fullWidth
                    size='small'
                    id="outlined-required"
                    label="Primary Color"
                    defaultValue="#153AC7"
                    sx={{
                        paddingRight:3
                    }}
                    InputProps={{
                       
                        startAdornment: (
                            <InputAdornment position="start">
                                <div style={{ width: "15px", height: "15px", backgroundColor: "blue", borderRadius: "50%" }}></div>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <InfoOutlinedIcon sx={{ color: "#B8BABC" }}/>
                            </InputAdornment>
                        ),

                    }}

                />
                <p className='Input_hex mt-2'>Add Hex Value.</p>
            </div>
            <div className="frame_67">
                <div className="frame_68">
                    <p className="frame_68_title">Login Theme</p>
                    <p frame_68_subtitle>Select the look and feel of the login page.</p>
                </div>
                <div className="frame_147">
                    <div className="frame_109">
                        <div className="radio_button">
                            <FormControlLabel value="end" control={<Radio sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 20,
                                },
                            }} />} label="Use color" />
                        </div>
                        <div className="frame_64">
                            <TextField
                                // hiddenLabel
                                size='small'
                                sx={{
                                    background: "#FFFFFF",
                                    /* Grey/Light/75% */

                                    border: "1px solid #ECECEC",
                                    borderRadius: "8px",
                                }}
                                // id="outlined-required"
                                // label="Primary Color"
                                defaultValue="#F8F9FD"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <div style={{ width: "15px", height: "15px", backgroundColor: "#F8F9FD", borderRadius: "50%", border: "1px solid #ECECEC" }}></div>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <InfoOutlinedIcon sx={{ color: "#B8BABC" }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame_110">
                <div className="frame_436">
                    <p>Where Should be the login modal?</p>
                </div>
                <div className="frame_435">
                    <div className="frame_432">
                        <div className="frame_429">
                            <div className="alignment_div">
                                <div className="frame_429_outer justify-content-end p-3">
                                    <div className="frame_429_inner">

                                    </div>
                                </div>
                                <div className="radio_button">
                                    <FormControlLabel value="end" control={<Radio sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 20,
                                        },
                                    }} />} label="Left" />
                                </div>
                            </div>
                            <div className="alignment_div">
                                <div className="frame_429_outer justify-content-end p-3">
                                    <div className="frame_429_inner">

                                    </div>
                                </div>
                                <div className="radio_button">
                                    <FormControlLabel value="end" control={<Radio sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 20,
                                        },
                                    }} />} label="Right" />
                                </div>
                            </div>
                            <div className="alignment_div">
                                <div className="frame_429_outer justify-content-center p-3">
                                    <div className="frame_429_inner">

                                    </div>
                                </div>
                                <div className="radio_button">
                                    <FormControlLabel value="end" control={<Radio sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 20,
                                        },
                                    }} />} label="Center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Grid item lg={4.2} xs={12} className="d-flex align-items-center mb-4 justify-content-between button-mobile">
                <div className="button_save d-flex">
                  <div className="save_button">
                    <button className='d-flex mx-3 align-items-center justify-content-center w-100' onClick={() => setActiveTab("MODULES_SETUP")} >
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

        </div>
    )
}

export default ThemSetup;