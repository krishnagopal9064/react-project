import React from "react";
import "./style.css";
import Table from "react-bootstrap/Table";

export default function Footer() {
  return (
    <>
      <div className="footer_outer2">
        <div className="container">
          <p className="footer_text2">
            ‡Instant cashback of 5% of order value is available for qualifying
            HDFC Bank Credit Cards & HDFC Credit Card EMI only. Offer is limited
            to Maximum Instant Cashback Amount of ₹6000 per successful single
            order of ₹54900 and above. Instant cashback is available for up to
            two orders per 90-day period with an eligible card. Any additional
            orders may be cancelled. Card eligibility is subject to terms and
            conditions between you and your card-issuing bank. Total transaction
            value is calculated after any trade-in credit or eligible discount
            is applied. Any subsequent order adjustment(s) or cancellation(s)
            may result in instant cashback being recalculated, and any refund
            may be adjusted to account for instant cashback reclaim, which may
            result in no refund being made to you. Offer may be revised or
            withdrawn at any time without any prior notice. Terms & conditions
            apply. Offer cannot be combined with Apple Store for Education or
            Corporate Employee Purchase Plan pricing. Multiple separate orders
            cannot be combined for instant cashback.
          </p>
            <ol>
              <li>
              <p className="footer_text2">
                Qualified purchasers can receive promotion savings when they
                purchase an eligible Mac or eligible iPad with eligible AirPods
                at a qualifying location. Only one pair of AirPods per eligible
                Mac or eligible iPad per qualified purchaser. Offer is subject
                to availability. Subject to terms and conditions herein.
                </p>
              </li>
            </ol>
          
          <hr />
          <div>
            <Table borderless responsive="lgiPad">
              <thead>
                <tr>
                  <th>Shop &amp; Learn</th>
                  <th>Services</th>
                  <th>Apple Store</th>
                  <th>For Business</th>
                  <th>Apple Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 
                    <span className="text_footer_try">Store</span>
                    <span className="text_footer_try">Mac</span>
                    <span className="text_footer_try">iPad</span>
                    <span className="text_footer_try">iPhone</span>
                    <span className="text_footer_try">Watch</span>
                    <span className="text_footer_try">AirPods</span>
                    <span className="text_footer_try">TV &mp; Home</span>
                    <span className="text_footer_try">AirTag</span>
                    <span className="text_footer_try">Accessories</span>
                    <span className="text_footer_try">Gift Cards</span>
                  </td>
                  <td>
                  <span className="text_footer_try">Apple Music</span>
                    <span className="text_footer_try">Apple TV+</span>
                    <span className="text_footer_try">Apple Arcade</span>
                    <span className="text_footer_try">iCloud</span>
                    <span className="text_footer_try">Apple One</span>
                    <span className="text_footer_try">Apple Books</span>
                    <span className="text_footer_try">Apple Podcast</span>
                    <span className="text_footer_try">Apple Store</span>
                    <span className="text_footer_try"><br /></span>
                    <span className="text_footer_try">Accounts</span>
                    <span className="text_footer_try">Manage Your Apple ID</span>
                    <span className="text_footer_try">Apple Store Account</span>
                    <span className="text_footer_try">iCloud.com</span>
                  </td>
                  <td>
                  <span className="text_footer_try">Way to Buy</span>
                    <span className="text_footer_try">Apple Trade In</span>
                    <span className="text_footer_try">Recycling Program</span>
                    <span className="text_footer_try">Order Status</span>
                    <span className="text_footer_try">Shopping Help</span>
                  </td>
                  <td>
                  <span className="text_footer_try">Apple for Business</span>
                  <span className="text_footer_try"><br /></span>
                  <span className="text_footer_try"><b>For Education</b></span>
                  <span className="text_footer_try">Apple and Education</span>
                  <span className="text_footer_try">Shop for Education</span>
                  <span className="text_footer_try">Shop for University</span>
                  <span className="text_footer_try"><b>For Healthcare</b></span>
                  <span className="text_footer_try">Apple in Healthcare</span>
                  <span className="text_footer_try">Health on Apple Watch</span>
                  </td>
                  <td>
                  <span className="text_footer_try">Accessibility</span>
                  <span className="text_footer_try">Environment</span>
                  <span className="text_footer_try">Privacy</span>
                  <span className="text_footer_try">Supplier Responsibility</span>
                  <span className="text_footer_try"><br /></span>
                  <span className="text_footer_try"><b>About Apple</b></span>
                  <span className="text_footer_try">NewsRoom</span>
                  <span className="text_footer_try">Apple Leadership</span>
                  <span className="text_footer_try">Career Opportunities</span>
                  <span className="text_footer_try">Investors</span>
                  <span className="text_footer_try">Ethics and Compliance</span>
                  <span className="text_footer_try">Events</span>
                  <span className="text_footer_try">Contact Apple</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <div className="container">
            <p className="footer_text_last">
              More ways to shop:{" "}
              <span className="text_blue">Find a retailer</span> near you. Or
              call <span className="text_blue">000800 040 1966</span> .
            </p>
            <hr />
            <p className="footer_text_last">
              <span className="footer_text_last2">
                Copyright © 2022 Apple Inc. All rights reserved.
              </span>
              <span className="footer_text_last3">Privacy Policy </span>{" "}
              <span> | </span>
              <span className="footer_text_last3"> Terms of Use </span>
              <span> | </span>
              <span className="footer_text_last3"> Sales Policy </span>
              <span> | </span>
              <span className="footer_text_last3"> Legal </span>
              <span> | </span>
              <span className="footer_text_last3"> Site Map</span>
              <span className="footer_text_last4">India</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
