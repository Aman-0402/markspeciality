import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Subject is required.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

// Simulated submission: no backend is connected yet. Replace this function's
// body with a real API call (e.g. fetch('/api/contact', { method: 'POST', ... }))
// when a backend endpoint is available.
function submitContactForm(values) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, values }), 900);
  });
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus('submitting');

    try {
      await submitContactForm(values);
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-status form-status--success" role="status">
        <CheckCircle2 size={28} aria-hidden="true" />
        <h3>Message Sent</h3>
        <p>
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button type="button" className="button-ghost" onClick={() => setStatus('idle')}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {status === 'error' ? (
        <div className="form-status form-status--error" role="alert">
          <AlertCircle size={20} aria-hidden="true" />
          <span>Something went wrong. Please try again.</span>
        </div>
      ) : null}

      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="fullName"
            className="input"
            type="text"
            value={values.fullName}
            onChange={handleChange('fullName')}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName ? (
            <span className="field-error" id="fullName-error">
              {errors.fullName}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            id="email"
            className="input"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <span className="field-error" id="email-error">
              {errors.email}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            className="input"
            type="tel"
            value={values.phone}
            onChange={handleChange('phone')}
          />
        </div>

        <div className="field">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            className="input"
            type="text"
            value={values.company}
            onChange={handleChange('company')}
          />
        </div>

        <div className="field field--full">
          <label htmlFor="subject">
            Subject <span className="required">*</span>
          </label>
          <input
            id="subject"
            className="input"
            type="text"
            value={values.subject}
            onChange={handleChange('subject')}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject ? (
            <span className="field-error" id="subject-error">
              {errors.subject}
            </span>
          ) : null}
        </div>

        <div className="field field--full">
          <label htmlFor="message">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            className="textarea"
            value={values.message}
            onChange={handleChange('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message ? (
            <span className="field-error" id="message-error">
              {errors.message}
            </span>
          ) : null}
        </div>
      </div>

      <button type="submit" className="button" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
