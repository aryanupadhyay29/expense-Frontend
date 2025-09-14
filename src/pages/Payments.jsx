import React, { useState, useEffect } from "react";
import API from "../services/api";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    API.get("/payments")
      .then(res => setPayments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <div className="container">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1f2937', margin: 0 }}>
              💳 Payments
            </h1>
            <button className="btn btn-primary">
              Record Payment
            </button>
          </div>
          
          {payments.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>💳</div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#6b7280', marginBottom: '8px' }}>
                No payments yet
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '16px' }}>
                Record your first payment to start tracking settlements
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '16px' }}>
              {payments.map(pay => (
                <div key={pay.id} className="card" style={{ padding: '20px', margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', margin: '0 0 4px 0' }}>
                        {pay.description}
                      </h3>
                      <p style={{ color: '#6b7280', margin: 0 }}>
                        Payment details
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '20px', fontWeight: '700', color: '#10b981', margin: 0 }}>
                        ${pay.amount}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
