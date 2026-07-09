'use client';

import { useState, FormEvent } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import TreatmentPicker from './TreatmentPicker';

const TREATMENTS = [
  'Swedish Massage',
  'Deep Tissue Massage',
  'Hot Stone Therapy',
  'Aromatherapy',
  'Facial Treatment',
  'Body Scrub & Wrap',
  'Couple\'s Spa Package',
  'Foot Reflexology',
  'Head & Scalp Massage',
  'Other / Not Sure',
];

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
];

const SPA_WHATSAPP = '919286719152';

export default function BookingCTA() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `🌿 *New Appointment Request — Luxury Delhi Spa*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📅 *Date:* ${form.date}\n` +
      `🕐 *Time:* ${form.time}\n` +
      `💆 *Treatment:* ${form.treatment}\n` +
      (form.message ? `📝 *Note:* ${form.message}\n` : '') +
      `\nPlease confirm the appointment. Thank you!`
    );

    window.open(`https://wa.me/${SPA_WHATSAPP}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  // Get today's date in YYYY-MM-DD for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="section-spacing booking-section">
      <div className="container">
        <div className="booking-grid">

          {/* Left: Info */}
          <div className="booking-info">
            <span className="section-eyebrow">Reservations</span>
            <h2 className="booking-title">Book Your<br /><em>Spa Experience</em></h2>
            <p className="booking-desc">
              Fill in the form and your request will be sent directly to our team via WhatsApp. We'll confirm your slot within minutes.
            </p>

            <div className="booking-details">
              <div className="booking-detail-item">
                <span className="booking-detail-icon">🕘</span>
                <div>
                  <span className="booking-detail-label">Hours</span>
                  <span className="booking-detail-value">Daily: 9:00 AM — 9:00 PM</span>
                </div>
              </div>
              <div className="booking-detail-item">
                <span className="booking-detail-icon">📍</span>
                <div>
                  <span className="booking-detail-label">Locations</span>
                  <span className="booking-detail-value">Aerocity · Lajpat Nagar · Karol Bagh</span>
                </div>
              </div>
              <div className="booking-detail-item">
                <span className="booking-detail-icon">📞</span>
                <div>
                  <span className="booking-detail-label">Call Directly</span>
                  <a href="tel:+919286719152" className="booking-detail-value booking-phone-link">+91 92867 19152</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="booking-form-card">
            {submitted ? (
              <div className="booking-success">
                <span className="booking-success-icon">✅</span>
                <h3 className="booking-success-title">Request Sent!</h3>
                <p className="booking-success-desc">
                  Your appointment request has been sent to our team on WhatsApp. We'll confirm your booking shortly.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Book Another
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <DatePicker
                    id="date"
                    name="date"
                    value={form.date}
                    onChange={(date) => setForm(prev => ({ ...prev, date }))}
                    min={today}
                    label="Preferred Date *"
                  />
                  <TimePicker
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={(time) => setForm(prev => ({ ...prev, time }))}
                    options={TIME_SLOTS}
                    label="Preferred Time *"
                    placeholder="Select time"
                  />
                </div>

                <TreatmentPicker
                  id="treatment"
                  name="treatment"
                  value={form.treatment}
                  onChange={(treatment) => setForm(prev => ({ ...prev, treatment }))}
                  options={TREATMENTS}
                  label="Treatment *"
                  placeholder="Select a treatment"
                />

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Special Requests <span className="form-optional">(optional)</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Any allergies, preferences or notes..."
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary booking-submit-btn">
                  <span className="booking-whatsapp-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.137 1.535 5.874L.057 23.177a.75.75 0 0 0 .92.92l5.303-1.478A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 0 1-5.134-1.465l-.368-.218-3.813 1.063 1.02-3.72-.239-.382A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                  </span>
                  Send via WhatsApp
                </button>

                <p className="form-note">
                  Tapping the button will open WhatsApp with your details pre-filled. Our team will confirm within minutes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
