import React, { useState, useEffect } from "react";
import API from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/users/me") // assuming you have an endpoint
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!user) return (
    <div className="page-container">
      <div className="container">
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏳</div>
          <h2 style={{ color: '#6b7280' }}>Loading...</h2>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="container">
        <div className="card">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              margin: '0 auto 24px',
              color: 'white'
            }}>
              {user.username.charAt(0).toUpperCase()}
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1f2937', marginBottom: '8px' }}>
              Profile
            </h1>
            <p style={{ color: '#6b7280', fontSize: '16px' }}>
              Manage your account settings
            </p>
          </div>
          
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input 
                className="form-control" 
                value={user.username} 
                readOnly
                style={{ backgroundColor: '#f9fafb' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                className="form-control" 
                value={user.email} 
                readOnly
                style={{ backgroundColor: '#f9fafb' }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button className="btn btn-primary" style={{ flex: 1 }}>
                Edit Profile
              </button>
              <button className="btn btn-outline" style={{ flex: 1 }}>
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
