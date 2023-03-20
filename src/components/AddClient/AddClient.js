import React, { useState } from 'react'
import CreateProfileComponent from '../CreateProfile/CreateProfile_component'
import ModuleSetupComponent from '../ModuleSetup/ModuleSetup_component'
import PaymentPlanComponent from '../PaymentPlan/PaymentPlan_component'
import ThemSetup from '../ThemeSetup/ThemSetup'
import BellIcon from '../../images/bellIcon.png'
import './AddClient.css'

const AddClient = () => {
    const [activeTab,setActiveTab] = useState("CREATE_PROFILE")
  return (
    <>
  <div className='container-view'>
    <div className="row-container-mobile pl-3 pr-3">
      <div className="title w-100">
        <h2 className="TITLE_VIEW">Add client</h2>
      </div>

      <div className="breadcome w-100 viewcli d-flex justify-content-between align-items-center ">
        <div>
        <span className="mr-2">Client Master</span>
        <span className="mx-2 ">/ Add Client</span>
        {activeTab === "CREATE_PROFILE" ? <span className="ml-2 last_child_breadcome">/ Create Profile</span>:
          activeTab === "PATMENT_SETUP" ?  <span className="ml-2 last_child_breadcome">/ Payment Setup</span>:
          activeTab === "THEME_SETUP" ?  <span className="ml-2 last_child_breadcome">/ Theme Setup</span>:
          activeTab === "MODULES_SETUP" ?  <span className="ml-2 last_child_breadcome">/ Modules Setup</span>:""
}
        </div>
        <div>
          <img src={BellIcon} className="mr-4" alt=""/>
        </div>
      </div>
      </div>
       <div className="all-tabs-container mt-3 w-100 ">
       <div className={activeTab === "CREATE_PROFILE" ? "col-md-3 active-tab paddingClass":"col-md-3 paddingClass "} onClick={() => setActiveTab("CREATE_PROFILE")}>01 Create Profile</div>
       <div className={activeTab === "PATMENT_SETUP" ? "col-md-3 active-tab paddingClass":"col-md-3 paddingClass"} onClick={() => setActiveTab("PATMENT_SETUP")}>02 Payment Setup</div>
       <div className={activeTab === "THEME_SETUP" ? "col-md-3  active-tab paddingClass":"col-md-3 paddingClass"} onClick={() => setActiveTab("THEME_SETUP")}>03 Theme Setup</div>
       <div className={activeTab === "MODULES_SETUP" ? "col-md-3  active-tab paddingClass":"col-md-3 paddingClass"} onClick={() => setActiveTab("MODULES_SETUP")}>04 modules Setup</div>
      </div>
     
        
      {activeTab === "CREATE_PROFILE" ? < CreateProfileComponent setActiveTab={setActiveTab}/>:
       activeTab === "PATMENT_SETUP" ? < PaymentPlanComponent setActiveTab={setActiveTab}/> :
       activeTab === "THEME_SETUP" ? < ThemSetup setActiveTab={setActiveTab}/> :
       activeTab === "MODULES_SETUP" ? < ModuleSetupComponent/> :
        ""
       }
     </div>
      </>
  )
}

export default AddClient;