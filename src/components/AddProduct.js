import React, { useState } from 'react'
import NavBar from './NavBar'
import './ContactUs.css'
import QrCodeGenerator from './QrCodeGenerator'
import axios from 'axios'


function AddProduct() {

 const [productDetails, setProductDetails] = useState({
    ProductName:"",
    Quantity:"",
    Price:"",
    Description:"",
    QRCode:""
})

const[qrPreview, setQrPreview] = useState(false)

const onTextChange = (e) => {
    setProductDetails({
        ...productDetails,
        [e.target.name]: e.target.value
    });
}

const generateQr =(e)=>{
  e.preventDefault();
  setProductDetails({
    ...productDetails,
    QRCode: "this is qr code",
  })
    setQrPreview(true);
}
const addProduct=(event)=>{
  event.preventDefault();
  axios.post("https://localhost:44347/api/AddProduct",productDetails)
  .then(res=> {
    alert("Product Added Successfully")
    console.log(res.data)
  }).catch(err => alert(err))
}
  return (
    <>
    <NavBar />
    <div>
    <section className="footer_get_touch_outer">
    <div className="container">
      <div className="footer_get_touch_inner grid-70-30">
        <div className="colmun-70 get_form">
          <div className="get_form_inner">
            <div class="get_form_inner_text">
              <h3>------Add Product------</h3>
            </div>
            <form >
              <div className="grid-50-50">
                <input type="text" onChange={onTextChange} placeholder="Product Name"  name='ProductName'/><br/>
                <input type="text" onChange={onTextChange} placeholder="Price" name='Price'/><br/>
                <input type="text" onChange={onTextChange} placeholder="Quantity" name='Quantity'/><br/>
                <textarea onChange={onTextChange} placeholder="Write Product Description..." name='Description' cols="30" rows="10"></textarea>
                <div className="grid-full">
                <div className='QrCodePreview'>
                    {qrPreview == false ? (
                    <p style={{display:"flex",justifyContent:"center" , marginTop:"150px" , color:"#dbdbdb"}}>
                        Your QR CODE 
                        PREVIEW HERE
                    </p>
                    ):(
                        <QrCodeGenerator value={productDetails.Description} />
                    )}
                </div>
                </div>
              </div>
              <div className="grid-full">
                <input  type="submit" onClick={generateQr} value="Generate QrCode" />
                {/* <textarea placeholder="About Your Project" cols="30" rows="10"></textarea> */}
                <input type="submit" value="Submit" onClick={addProduct}/>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
        </section>
        </div>
    </>
  )
}

export default AddProduct