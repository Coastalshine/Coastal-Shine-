// src/pages/QuoteForm.jsx
import React, { useState } from 'react';

const QuoteForm = () => {
  const [service, setService] = useState('solar');

  return (
    <div className="quote-form-page">
      <h2>Request a Quote</h2>

      {/* Service Tabs */}
      <div className="service-tabs">
        <button onClick={() => setService('solar')} className={service === 'solar' ? 'active' : ''}>Solar Panels</button>
        <button onClick={() => setService('windows')} className={service === 'windows' ? 'active' : ''}>Windows</button>
        <button onClick={() => setService('billboard')} className={service === 'billboard' ? 'active' : ''}>Billboard</button>
      </div>

      <form className="quote-form">
        <label>
          Full Name:
          <input type="text" required />
        </label>

        <label>
          Email or Phone:
          <input type="text" required />
        </label>

        <label>
          Address / Suburb:
          <input type="text" />
        </label>

        {service === 'solar' && (
          <label>
            Number of Solar Panels (R40 each):
            <input type="number" min="0" />
          </label>
        )}

        {service === 'windows' && (
          <label>
            Estimated Time Needed (in hours, R600/hr):
            <input type="number" min="1" />
          </label>
        )}

        {service === 'billboard' && (
          <label>
            Billboard Size or Quantity:
            <input type="text" />
          </label>
        )}

        <label>
          Additional Notes:
          <textarea rows="3" />
        </label>

        <button type="submit">Submit Quote Request</button>
      </form>
    </div>
  );
};

export default QuoteForm;
