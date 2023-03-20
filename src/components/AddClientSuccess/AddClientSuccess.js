import "./AddClientSuccess.css"
import SuccessIcon from '../../images/success.png'
import ProductBox from "../ProductBox/ProductBox"
import { Success } from '../dummyData/Success.js'


const AddClientSuccess = () => {
  return (
    <div className="container-view">
      <div className="row pl-3 pr-3">
        <div className="title w-100">
          <h2 className='TITLE_VIEW'>Add client</h2>
        </div>

        <div className="breadcome viewcli w-100">
          <span className="mr-2">Client Master</span>
          <span className="mx-2">/ Add Client</span>
          <span className="ml-2 last_child_breadcome">/ Success</span>
        </div>

        <div className="order-success-notification w-100 nameclient-success">
          <div className="f-flex align-items-center">
            <img src={SuccessIcon} alt="" className="mr-2" />
            <span>You have successfully added Infosys.</span>
          </div>
          <div className="nameclient-success client-button-mobile">
            <button className="client-master-btn ">Go to Client Master</button>
            <button className="add-more-client-btn" >Add More Clients</button>
          </div>
        </div>
        <div className="box-container mt-4 d-flex flex-wrap">
          {Success.map((ele, i) => < ProductBox ele={ele} key={i} />)}

        </div>
      </div>
    </div>
  )
}

export default AddClientSuccess;