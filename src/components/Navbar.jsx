import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link className="navbar-brand" to="/">ExpenseIQ</Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {user ? (
            <>
              <ul className="navbar-nav" style={{ display: 'flex', gap: '8px', margin: 0, padding: 0 }}>
                <li><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                <li><Link className="nav-link" to="/expenses">Expenses</Link></li>
                <li><Link className="nav-link" to="/groups">Groups</Link></li>
                <li><Link className="nav-link" to="/payments">Payments</Link></li>
                <li><Link className="nav-link" to="/profile">Profile</Link></li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '16px', borderLeft: '1px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280', fontWeight: '500' }}>
                  Hi, {user.username}
                </span>
                <button 
                  className="btn btn-danger" 
                  onClick={() => { logout(); nav("/login"); }}
                  style={{ padding: '8px 16px', fontSize: '14px' }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <ul className="navbar-nav" style={{ display: 'flex', gap: '8px', margin: 0, padding: 0 }}>
              <li><Link className="nav-link" to="/login">Login</Link></li>
              <li><Link className="nav-link" to="/register">Register</Link></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
