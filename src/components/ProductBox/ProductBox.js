import "./ProductBox.css";
const ProductBox = ({ ele }) => {
  console.log(ele)

  return (
    <div className={`product-box ${ele.disabled ? "disabled_box" : ""}`} >
      <img src={ele.logo} alt="" className="product-top-img" />
      <div>
        <h5>{ele.name}</h5>
        <p className={`text-center ${ele.disabled ? "disabled_text-center" : ""}`}>{ele.client_no}</p>
      </div>
      <div className={`add-btn-container ${ele.disabled ? "disabled_box_but" : ""}`}>
        <button className={`add-btn ${ele.disabled ? "disabled_box_but_b" : ""}`}>{ele.button_1}</button>
      </div>
      <div className={`view-all ${ele.disabled ? "disabled_box_view-all" : ""}`}>
        View All
      </div>
    </div >
  )
}

export default ProductBox