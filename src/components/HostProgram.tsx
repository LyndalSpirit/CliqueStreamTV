import React, { useState } from 'react';

interface HostApplication {
  name: string;
  email: string;
  talent: string;
  // Add other relevant fields as needed
}

const HostProgram: React.FC = () => {
  const [application, setApplication] = useState<HostApplication>({
    name: '',
    email: '',
    talent: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplication({
      ...application,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application data to your backend
    console.log('Submitted Application:', application);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you for your application!</h2>
        <p>We will review your submission and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Become a Host</h2>
      <p>
        Showcase your talent to a global audience and earn money by live streaming.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={application.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={application.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="talent">Talent:</label>
          <textarea
            id="talent"
            name="talent"
            value={application.talent}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other input fields as needed */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default HostProgram;