import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await API.post("/auth/register", form);
    alert("Registered successfully!");
    navigate("/login");
  } catch (err) {
    console.error(err.response?.data || err.message);
    alert("Error registering: " + (err.response?.data?.message || err.message));
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
              Create Account
            </h1>
            <p style={{ color: '#6b7280', fontSize: '16px' }}>
              Join ExpenseIQ and start managing your expenses
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input 
                className="form-control" 
                placeholder="Choose a username"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email"
                className="form-control" 
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                placeholder="Create a password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })} 
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
              Create Account
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ color: '#6b7280' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ 
                color: '#3b82f6', 
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
