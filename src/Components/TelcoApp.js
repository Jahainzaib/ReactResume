import React from "react";

export default function TelcoRecharge() {
  return (
    <>
      {/* PROJECT INTRO */}
      <div className="container-xxl py-6" id="projectheading">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-4">
                <div className="years flex-shrink-0 text-right me-4">
                  <h1 className="display-1 mb-0">TELCO RECHARGE SYSTEM</h1>
                  <h5 className="mb-0">RETAIL DEALER RECHARGE SYSTEM</h5>
                </div>
              </div>

              <p className="mb-4">
                This project is a complete Telco Recharge & Dealer Management
                platform developed for retail dealers in Oman. The system
                enables dealers to perform mobile recharges, purchase vouchers,
                manage wallet balances, upload payment proofs, and track all
                transactions through a clean, user-friendly dashboard.
              </p>

              <p className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>
                Multi-Operator Recharge & Voucher System
              </p>
              <p className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>
                Dealer Wallet & Credit Management
              </p>
              <p className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>
                Secure Payment & Document Management
              </p>
            </div>

            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3 mb-4 portfolio-container">
                <div className="col-sm-12 portfolio-item">
                  <a href="img/telco-dashboard.png" data-lightbox="portfolio">
                    <img
                      className="img-fluid rounded"
                      src="img/telco-dashboard.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DASHBOARD */}
      <div className="container-fluid bg-light my-2">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp">
            <div className="col-lg-6">
              <h3 className="display-5 mb-0">Dealer Dashboard</h3>
            </div>
          </div>

          <p className="mb-4">
            The dashboard provides dealers with a real-time overview of their
            credit limit, utilized amount, and available balance. Visual charts
            and summaries help dealers quickly understand their financial
            position and daily activity without navigating complex menus.
          </p>

          {/* Dashboard Screenshot */}
          <div className="row g-3 mb-4 portfolio-container">
            <div className="col-sm-12 portfolio-item wow fadeInUp">
              <a
                className="btn-outline-secondary border-2 mx-1"
                href="img/telco-dashboard.png"
                data-lightbox="portfolio"
              >
                <img
                  className="img-fluid rounded"
                  src="img/telco-dashboard.png"
                  alt="Dealer Dashboard"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT & BANK TRANSFER */}
<div className="container-xl py-5 px-5" id="projectheading">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-12 wow fadeInUp">
        <h1 className="display-1 mb-2" style={{ fontSize: "2.5rem" }}>
          Dealer Payments
        </h1>

        {/* Sub Heading */}
        <h5 className="text-muted mb-4 text-center">
          Secure Payment Gateway & Bank Transfer Integration
        </h5>

        <p className="mb-4 text-center">
          Dealers can add funds to their wallet using multiple payment
          methods, including card payments and bank transfers. For bank
          transfers, dealers upload payment receipts which are later
          reviewed and approved by the admin team.
        </p>
      </div>

      <div className="col-lg-4 wow fadeInUp">
        <a href="img/telco-dealer-payment.png" data-lightbox="portfolio">
          <img
            className="img-fluid rounded"
            src="img/telco-dealer-payment.png"
            alt="Dealer Payment Options"
          />
        </a>
      </div>

      <div className="col-lg-4 wow fadeInUp">
        <a href="img/telco-bank-transfer.png" data-lightbox="portfolio">
          <img
            className="img-fluid rounded"
            src="img/telco-bank-transfer.png"
            alt="Bank Transfer Payment"
          />
        </a>
      </div>

      <div className="col-lg-4 wow fadeInUp">
        <a href="img/telco-card-payment.png" data-lightbox="portfolio">
          <img
            className="img-fluid rounded"
            src="img/telco-card-payment.png"
            alt="Card Payment Gateway"
          />
        </a>
      </div>
    </div>
  </div>
</div>


      {/* RECHARGE & VOUCHER */}
      <div className="container-xl py-5 px-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp">
              <h1 className="display-1 mb-4" style={{ fontSize: "2.5rem" }}>
                Mobile Recharge & Voucher System
              </h1>

              <p className="mb-4 text-center">
                The recharge module allows dealers to instantly top-up customer
                mobile numbers across supported telecom operators. Voucher
                purchase functionality is also available, enabling dealers to
                sell predefined voucher denominations directly from the system.
              </p>
            </div>

            <div className="col-lg-4 wow fadeInUp">
              <a href="img/telco-recharge.png" data-lightbox="portfolio">
                <img
                  className="img-fluid rounded"
                  src="img/telco-recharge.png"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-4 wow fadeInUp">
              <a href="img/telco-voucher.png" data-lightbox="portfolio">
                <img
                  className="img-fluid rounded"
                  src="img/telco-voucher.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-4 wow fadeInUp">
              <a href="img/telco-receipt.png" data-lightbox="portfolio">
                <img
                  className="img-fluid rounded"
                  src="img/telco-receipt.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TRANSACTION HISTORY */}
      <div className="container-xl py-5 px-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp">
              <h1 className="display-1 mb-4" style={{ fontSize: "2.5rem" }}>
                Transaction History
              </h1>

              <p className="mb-4 text-center">
                A detailed transaction history section provides complete
                visibility into all recharges, voucher sales, wallet top-ups,
                and adjustments. Dealers can filter records by date, type, and
                operator for easy reconciliation.
              </p>
            </div>

            <div className="col-lg-12 wow fadeInUp">
              <a href="img/telco-transactions.png" data-lightbox="portfolio">
                <img
                  className="img-fluid rounded"
                  src="img/telco-transactions.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DOCUMENT MANAGEMENT */}
      <div className="container-xl py-5 px-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp">
              <h1 className="display-1 mb-4" style={{ fontSize: "2.5rem" }}>
                Document Management
              </h1>

              <p className="mb-4 text-center">
                Dealers can upload and manage documents such as payment
                receipts, invoices, and supporting files. The document
                management module ensures transparency, traceability, and smooth
                coordination between dealers and administrators.
              </p>
            </div>

            <div className="col-lg-12 wow fadeInUp">
              <a href="img/telco-documents.png" data-lightbox="portfolio">
                <img
                  className="img-fluid rounded"
                  src="img/telco-documents.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
