import React from 'react'
import NavBar from './NavBar'
import './AboutUs.css'

function AboutUs() {
  return (
    <>
    <NavBar />
    <div>
    <section class="about-us">
    <div class="about">
      {/* <!--<img src="girl.png" class="pic">--> */}
      <div class="text">
        <h2>Blockchain</h2>
          <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.
             Business runs on information. The faster it's received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more. And because members share a single view of the truth, you can see all details of a transaction end to end, giving you greater confidence, as well as new efficiencies and opportunities.</p>
        {/* <div class="data">
        <a href="#" class="hire">Hire Me</a>
        </div> */}
      </div>
    </div>
  </section>

    </div>
    </>
  )
}

export default AboutUs