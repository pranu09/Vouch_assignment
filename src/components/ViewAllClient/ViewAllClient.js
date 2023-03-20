import React, { useState } from 'react';
import Dots from '../../images/Dots.png'
import './ViewAllClient.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Data } from '../dummyData/Data';
import Paper from '@mui/material/Paper';
import searchIcon from '../../images/search.png'
import ButtonIcon from '../../images/Export.png'
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';


const ViewAllClient = () => {

    const [page, setpage] = useState(0);
    const [showActionModel, setShowActionModel] = useState(false);
    const [rowsPerPage, setrowsPerPage] = useState(5);
 

    return (
        <>
            <div className="container-fluid Dashboard ">
                <div className="row">
                    <div className="title w-100">
                        <p className='TITLE_VIEW'>View Clients</p>
                    </div>

                    <div className="breadcome w-100">
                        <span className="mr-1">Client Master</span>
                        <span className="ml-2 last_child_breadcome">/ View Clients</span>
                    </div>
                    <div className="col-lg-12 px-3 mt-3 d-flex justify-content-between align-items-center py-3 bg-white">
                        <div className='view-client-searchBar'>
                            <img className='searchIcon' src={searchIcon} />
                            <input className='searchSidebar' type="text" placeholder='Search modules' />
                        </div>
                        <div className='filter_export' >
                            <div className='select_columns'>
                                <select className='select-dropdown' name="" id="">
                                    <option value="Columns">Columns</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='export_button'>
                                <img src='./icon/Download.png' alt="b" className='export-icon' />
                                <button style={{
                                    backgroundColor: "transparent",
                                    outline: "none",
                                    border: "none", color: "#153AC7",
                                    fontWeight: 700

                                }}> Export</button>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_mainbody col-lg-12 p-0">
                       


                        <table className='dashboard-table'>
                            <thead>
                                <tr className='thead-row'>
                                    <th className='table-data thead-data'>Company Name</th>
                                    <th className='table-data thead-data'>Email Address</th>
                                    <th className='table-data thead-data'>Phone No</th>
                                    <th className='table-data thead-data'>Contact Person</th>
                                    <th className='table-data thead-data'>Facilitator</th>
                                    <th className='table-data thead-data'>Sites</th>
                                    <th className='table-data thead-data'>Tenants</th>
                                    <th className='table-data thead-data'>Tenant Groups</th>
                                    <th className='table-data thead-data'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Data.map((ele, i) => {
                                        return (
                                            <tr className='table-row'>
                                                <th className="table-data">
                                                    <div className='profile-container'>
                                                        <img src={ele.logo} alt="" className='profile-photo' />
                                                        <span>{ele.Company_name}</span>
                                                    </div>
                                                </th>
                                                <th className="table-data">{ele.Email_Address}</th>
                                                <th className="table-data">{ele.phone}</th>
                                                <th className="table-data">{ele.Contact_Person}</th>
                                                <th className="table-data">{ele.Facilitator}</th>
                                                <th className="table-data">{ele.Sites}</th>
                                                <th className="table-data">{ele.Tenants}</th>
                                                <th className="table-data">{ele.Tenant_Groups}</th>
                                                <th className="table-data span-dot "><div className='d-flex span-dot justify-content-center align-items-center position-relative' onClick={() => setShowActionModel(!showActionModel)} >
                                                    <img className="span-dot" src={Dots} />
                                                </div></th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>


                    </div>

                    <div className="col-lg-12 p-0 py-2 bg-white d-flex justify-content-between p-3 align-items-center mobile-pagination1">
                        <Pagination count={50} boundaryCount={3} color="primary" shape="rounded" hidePrevButton hideNextButton />
                        <div className="pre-next_button">
                            <button style={{
                                backgroundColor: "transparent",
                                outline: "none",
                                border: "none",
                                fontWeight: 700

                            }} className='Previous_button'><img src="./icon/pre.png" alt="" /> Previous</button>
                            <button style={{
                                // backgroundColor: "transparent",
                                outline: "none",
                                border: "none",
                                fontWeight: 700

                            }} className='Next_button'> Next <img src="./icon/next.png" alt="" /></button>

                        </div>
                    </div>
                </div>

            </div>

            {/* modal */}

            {showActionModel && <div className='action-modal' onClick={() => setShowActionModel(false)}>
                {/* <div className='d-flex align-items-center justify-content-end'> <img className='modal-icons mr-1' src={searchIcon} alt="" /></div> */}
                <div className='d-flex align-items-center'>
                    <RemoveRedEyeIcon className='mr-3' />
                    {/* <img className='modal-icons mr-2' src={searchIcon} alt="" /> */}
                    <span>View Details</span></div>
                <div className='d-flex align-items-center'>
                    <EditIcon className='mr-3' /><span>Edit</span></div>
                <div className='d-flex align-items-center'> <BlockIcon className='mr-3' />  <span>Block Access</span></div>
                <div className='d-flex align-items-center'><DeleteOutlineSharpIcon className='mr-3' /> <span>Delete</span></div>

            </div>}
        </>
    )
}

export default ViewAllClient