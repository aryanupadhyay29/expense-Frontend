import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Add actual API call for authentication
      // For now, just set user data directly
      login({ username, email: username + "@example.com" });
      nav("/dashboard");
    } catch {
      setError("Login failed");
    }
  };

  return (
    <div className="page-container">
      <div className="auth-container">
        <div className="card">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: '800', 
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px'
            }}>
              Welcome Back
            </h1>
            <p style={{ color: '#6b7280', fontSize: '16px' }}>
              Sign in to your ExpenseIQ account
            </p>
          </div>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={submit}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input 
                className="form-control" 
                placeholder="Enter your username"
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                placeholder="Enter your password"
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
              Sign In
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ color: '#6b7280' }}>
              Don't have an account?{' '}
              <a href="/register" style={{ 
                color: '#3b82f6', 
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
