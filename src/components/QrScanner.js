import { Button } from "@mui/material";
import React, {
  useEffect,
    useState
} from "react";
import { redirect, useNavigate } from "react-router-dom";
import QrReader from "react-web-qr-reader";
import NavBar from "./NavBar";
import Popup from "./Popup";

const QrScanner = () => {
  const delay = 500;

  const previewStyle = {
    height: 340,
    width: 420
  };

  const navigate = useNavigate();

  const[qrOpen,setQrOpen]= useState(true);

  const [result, setResult] = useState("No result");

  const title = "Do you want to visit?"

  useEffect(()=>{
    handleScan();
  })

  const handleScan = (result) => {
    setTimeout(() => {
    if (result) {
      setResult(result.data);
      console.log(result);
      setQrOpen(false)
      }
        alert("Please try again later or use different QR code...")
      }, 20000)
  };

  setTimeout(() => console.log('Initial timeout!'), 1000);
  
  const handleClick = ()=>{
    window.location = result;
    console.log(result)
  }
  const handleError = (error) => {
    console.log(error);
  };
  
  return (
    <>
    <NavBar/>

  {qrOpen ? (  
    <div style={{display:"flex", marginTop:"40px", justifyContent:"center"}}>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
    ): (
  <Popup popupTitle={title} popupContent={result} popupButtonTitle="Go to Website" handlePopupBtnClick={()=>window.location = result}/>

    )}
    {/* <div style={{marginTop:"10%"}}>
      <p>{result}</p>
      <br />
      <Button onClick={handleClick} variant="outlined" >Go to Page</Button>
    </div> */}

     </>
  );
};

export default QrScanner;
