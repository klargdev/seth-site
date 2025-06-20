import React, { useState } from 'react';
import kowriLogo from '../assets/images/png/kowri.png';
import DLogo from '../assets/images/png/5.jpg';
import EVERA from '../assets/images/png/EVERA.png';

// Fetch USSD code securely from environment variable
const KOWRI_USSD_CODE = import.meta.env.VITE_KOWRI_PAYMENT_URL || '*227*842#';

const Donate = () => {
  const [showUssdMessage, setShowUssdMessage] = useState(false);

  // Function to check if the device is a mobile phone
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  // Handle USSD dial
  const handleDonateClick = () => {
    if (!KOWRI_USSD_CODE) {
      alert('Payment service is currently unavailable. Please try again later.');
      return;
    }

    if (isMobileDevice()) {
      try {
        // Encode the USSD code and open the phone dialer
        const encodedUSSD = KOWRI_USSD_CODE.replace(/#/g, '%23');
        window.location.href = `tel:${encodedUSSD}`;
      } catch (error) {
        alert('Failed to initiate payment. Please dial manually.');
      }
    } else {
      // Show the styled message for non-mobile users
      setShowUssdMessage(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 text-center">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white mb-6">
        Support the Memorial
      </h1>

      {/* Logo Section */}
      <img src={DLogo} alt="Kowri Pay" className="w-40 mx-auto mb-4" />
      <p className="text-gray-300 mb-4">
        Your contribution helps us honor their memory and continue the legacy.
      </p>

      {/* Donation Instructions */}
      <div className="donation-instructions bg-funeral-darkest text-gray-300 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">How to Donate</h2>
        <ol className="list-decimal pl-6 space-y-2 text-left">
          <li>
            Click the <strong>Donate Now</strong> button below OR dial{' '}
            <strong>*227*842#</strong>
          </li>
          <li>Enter your <strong>name</strong> and send.</li>
          <li>Enter the <strong>amount</strong> you want to donate and send.</li>
          <li>Follow the on-screen prompts to complete your donation.</li>
        </ol>
      </div>

      {/* Donate Button */}
      <button
        onClick={handleDonateClick}
        className="w-full bg-funeral-accent hover:bg-funeral-medium text-white py-3 rounded-md transition-all"
      >
        Donate Now
      </button>

      {/* Styled USSD Message */}
      {showUssdMessage && (
        <p className="mt-4 text-lg text-white font-bold">
          📞 Please dial <strong>*227*842#</strong> on your phone to donate.
        </p>
      )}

      {/* Secure Payment Info */}
      <p className="text-sm text-gray-400 mt-4">
        Secure payments powered by Kowri.
      </p>

      {/* Payment Logos */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <img src={EVERA} alt="MTN MoMo" className="w-14 h-10" />
        <img src={kowriLogo} alt="Kowri Pay" className="w-14 h-10" />
      </div>
    </div>
  );
};

export default Donate;
