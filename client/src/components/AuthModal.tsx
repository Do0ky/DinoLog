/* STYLE */
import './AuthModal.css';
/* REACT */
import { useState } from 'react';

function AuthModal({ closeModal }: { closeModal: () => void }) {
    // Tab state
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");

    // Register form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error message state
    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

    // Validation for registration
    const validateRegister = () => {
        const newErrors: typeof errors = {};

        // Name: alphanumeric + '-' + '_'
        if (!/^[a-zA-Z0-9\-_]+$/.test(name.trim())) {
            newErrors.name = "Only letters, numbers, - and _ are allowed";
        }

        // Email: contain '@'
        if (!email.includes("@")) {
            newErrors.email = "Please enter a valid email";
        }

        // Password: > 6 chars, letters + numbers
        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
            newErrors.password = "Password must contain letters and numbers";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit handling
    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateRegister()) return;
        alert(`✔ Registered successfully: ${name}, ${email}`);
        closeModal();
    };

    return (
        <div className="auth-overlay" onClick={closeModal}>
            {/* Prevents click inside auth-modal from closing the modal */}
            <div className="auth-modal" onClick={ e => e.stopPropagation() }>

                {/* Tabs: Log In & Register */}
                <div className="auth-tabs">
                    <button
                        className={activeTab === "login" ? "active" : ""}
                        onClick={ () => setActiveTab("login") }
                    >
                        Log In
                    </button>

                    <button
                        className={activeTab === "register" ? "active" : ""}
                        onClick={ () => setActiveTab("register") }
                    >
                        Register
                    </button>
                </div>

                {/* Sliding drawer */}
                <div className="auth-drawer">
                    <div className={`drawer-inner ${activeTab}`}>
                        {/* Log In tab */}
                        <div className="drawer-panel login-panel">
                        {activeTab === "login" && (
                            <form className="auth-form">
                            <label>Email</label>
                            <input type="email" placeholder="fossil-hunter@rockmail.co" />

                            <label>Password</label>
                            <input type="password" placeholder="••••••••" />

                            <button type="submit" className="auth-submit">
                                Log In
                            </button>
                            </form>
                        )}
                        </div>

                        {/* Register tab */}
                        <div className="drawer-panel register-panel">
                        {activeTab === "register" && (
                            // noValidate disables built-in browser validation to display our err message
                            <form className="auth-form" onSubmit={handleRegisterSubmit} noValidate>

                            <label>Name</label>
                            <input 
                                type="text"
                                placeholder="FossilFinder"
                                value={name}
                                onChange={ (e) => setName(e.target.value) }
                            />
                            {errors.name && <small className="error">{errors.name}</small>}

                            <label>Email</label>
                            <input 
                                type="email"
                                placeholder="fossil-hunter@rockmail.co"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                            {errors.email && <small className="error">{errors.email}</small>}

                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                value={password}
                                onChange={ (e) => setPassword(e.target.value) }
                            />
                            {errors.password && <small className="error">{errors.password}</small>}

                            <button type="submit" className="auth-submit">
                                Create Account
                            </button>

                            </form>
                        )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AuthModal;