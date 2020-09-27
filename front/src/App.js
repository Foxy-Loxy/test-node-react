import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const initialFormData = {
  email: '',
  price: '',
}

function App() {
  const [ formData, sentFormData ] = useState(initialFormData);

  const handleChange = (e) => {
    sentFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (formData.email === '' && formData.price === '') {
      return;
    }
    fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
  }
  return (
    <div className="App">
        <div className="form">
          <label className="inputBlock">
            <p>Please fill email</p>
            <input onChange={handleChange} type="email" name="email"/></label>
          <label className="inputBlock">
            <p>Please fill price</p>
            <input onChange={handleChange} type="text" name="price" />
          </label>
          <button className="submitBtn" onClick={handleSubmit}>subscribe</button>
        </div>
    </div>
  );
}

export default App;
