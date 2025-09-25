import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  
  // State to manage hover effects for links (e.g., Dashboard, Login)
  const [hoverLink, setHoverLink] = useState(null); 
  // State to manage hover effect for the Logout button
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);

  // --- Style Definitions (Constants for clarity) ---

  const linkStyle = (isHovered) => ({
    textDecoration: 'none',
    color: isHovered ? '#10b981' : '#4b5563', // Green on hover
    padding: '8px 4px',
    fontWeight: '500',
    transition: 'color 0.15s ease, border-bottom 0.15s ease',
    borderBottom: isHovered ? '2px solid #10b981' : '2px solid transparent',
  });

  const buttonBaseStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '6px',
    backgroundColor: '#ef4444', 
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#dc2626', // Darker red on hover
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  };

  const logoutButtonStyle = isLogoutHovered 
    ? { ...buttonBaseStyle, ...buttonHoverStyle }
    : buttonBaseStyle;

  // --- Component Render ---

  return (
    <nav style={{ 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #e5e7eb',
      padding: '0 20px', 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '12px 0', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <Link to="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: '#1f2937', 
          textDecoration: 'none' 
        }}>
          ExpenseIQ
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {user ? (
            <>
              <ul style={{ 
                display: 'flex', 
                gap: '16px', 
                margin: 0, 
                padding: 0, 
                listStyle: 'none' 
              }}>
                {['Dashboard', 'Expenses', 'Groups', 'Payments', 'Profile'].map(label => {
                  const path = `/${label.toLowerCase()}`;
                  return (
                    <li key={label}>
                      <Link 
                        to={path} 
                        style={linkStyle(hoverLink === label)}
                        onMouseEnter={() => setHoverLink(label)}
                        onMouseLeave={() => setHoverLink(null)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                paddingLeft: '24px', 
                borderLeft: '1px solid #d1d5db' 
              }}>
                <span style={{ color: '#6b7280', fontWeight: '500', fontSize: '14px' }}>
                  Hi, {user.username}
                </span>
                <button 
                  onClick={() => { logout(); nav("/login"); }}
                  style={logoutButtonStyle}
                  onMouseEnter={() => setIsLogoutHovered(true)}
                  onMouseLeave={() => setIsLogoutHovered(false)}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <ul style={{ display: 'flex', gap: '16px', margin: 0, padding: 0, listStyle: 'none' }}>
              {['Login', 'Register'].map(label => {
                  const path = `/${label.toLowerCase()}`;
                  return (
                    <li key={label}>
                      <Link 
                        to={path} 
                        style={linkStyle(hoverLink === label)}
                        onMouseEnter={() => setHoverLink(label)}
                        onMouseLeave={() => setHoverLink(null)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}