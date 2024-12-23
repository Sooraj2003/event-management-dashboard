// src/utils/auth.js

export const isAuthenticated = () => {
    const cookies = document.cookie;  // Log all cookies
    console.log("Cookies:", cookies);  // Log the entire cookie string
  
    const tokenCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('token='));
  
    if (tokenCookie) {
      const tokenValue = tokenCookie.split('=')[1];
      console.log("Token found:", tokenValue);  // Log the token value
      return !!tokenValue;  // Return true if token exists
    }
  
    return false;  // Return false if no token is found
  };
  