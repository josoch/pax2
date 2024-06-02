import React, { useState } from 'react';
import '../css/SignIn.css';

const SignIn = () => {
    const [formType, setFormType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://familyapp.ocholi.com/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                // Handle successful login (e.g., redirect to home page)
                console.log('Login successful:', data);
            } else {
                // Handle login error
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('https://familyapp.ocholi.com/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                // Handle successful signup (e.g., redirect to home page)
                console.log('Signup successful:', data);
            } else {
                // Handle signup error
                setError(data.message || 'Signup failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="wrapper">
                <div className="title-text">
                    <div className={`title ${formType}`}>{formType === 'login' ? 'Login' : 'Signup'}</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            type="radio"
                            name="slide"
                            id="login"
                            checked={formType === 'login'}
                            onChange={() => setFormType('login')}
                        />
                        <input
                            type="radio"
                            name="slide"
                            id="signup"
                            checked={formType === 'signup'}
                            onChange={() => setFormType('signup')}
                        />
                        <label htmlFor="login" className="slide login">Login</label>
                        <label htmlFor="signup" className="slide signup">Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form onSubmit={handleLoginSubmit} className="login" style={{ display: formType === 'login' ? 'block' : 'none' }}>
                            <div className="field">
                                <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="pass-link"><a href="#">Forgot password?</a></div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">Sign up if not yet registered!</div>
                            {error && <div className="error">{error}</div>}
                        </form>
                        <form onSubmit={handleSignupSubmit} className="signup" style={{ display: formType === 'signup' ? 'block' : 'none' }}>
                            <div className="field">
                                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                            {error && <div className="error">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
