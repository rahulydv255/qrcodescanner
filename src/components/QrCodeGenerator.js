import React from 'react'
import QRCode from "react-qr-code";


function QrCodeGenerator(props) {
    const{value} = props;
  return (
    <div style={{ height: "307px", margin: "0 auto", maxWidth: 270, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "307px", maxWidth: "100%", width: "100%" }}
    value={value}
    viewBox={`0 0 256 256`}
    />
</div>
  )
}

export default QrCodeGenerator