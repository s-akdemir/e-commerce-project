import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    // Kayıt işlemini burada simüle edebilirsiniz.
    alert('Registration successful! Please login.');
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-slate-800">Create a new account</h2>
        <form className="space-y-6" onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-md" />
          <input type="password" placeholder="Password" required className="w-full p-3 border rounded-md" />
          <button type="submit" className="w-full py-3 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account? <Link to="/login" className="font-bold text-blue-500 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;