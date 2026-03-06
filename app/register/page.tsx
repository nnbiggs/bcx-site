'use client';

import { useState } from 'react';
import { PageHero } from '@/components/sections';

export default function Register() {
  const [formData, setFormData] = useState({
    athleteFirstName: '',
    athleteLastName: '',
    dateOfBirth: '',
    gender: '',
    parentGuardianName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    program: '',
    experience: '',
    medicalConditions: '',
    medications: '',
    allergies: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white min-w-0">
      <PageHero
        title="Register for BCX"
        subtitle="Join Bergen County Xpress and start your track & field journey"
      />

      {/* Registration Form */}
      <section className="py-10 sm:py-16" aria-label="Registration form">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' ? (
            <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center sm:p-8" role="status" aria-live="polite">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100" aria-hidden="true">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">Registration Submitted!</h2>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Thank you for registering with Bergen County Xpress. We'll review your application and contact you within 2-3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Athlete Information */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl sm:mb-6">Athlete Information</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="athleteFirstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="athleteFirstName"
                      name="athleteFirstName"
                      required
                      value={formData.athleteFirstName}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="athleteLastName" className="block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="athleteLastName"
                      name="athleteLastName"
                      required
                      value={formData.athleteLastName}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl sm:mb-6">Parent/Guardian Information</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="parentGuardianName" className="block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="parentGuardianName"
                      name="parentGuardianName"
                      required
                      value={formData.parentGuardianName}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                  />
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl sm:mb-6">Emergency Contact</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      required
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      required
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl sm:mb-6">Program Selection</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                      Program *
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      value={formData.program}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    >
                      <option value="">Select a program...</option>
                      <option value="seasonal">Seasonal</option>
                      <option value="annual">Annual</option>
                      <option value="elite">Elite</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="beginner">Beginner (No experience)</option>
                      <option value="some">Some experience</option>
                      <option value="experienced">Experienced</option>
                      <option value="competitive">Competitive athlete</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl sm:mb-6">Medical Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700">
                      Medical Conditions
                    </label>
                    <textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      rows={3}
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      placeholder="Please list any medical conditions we should be aware of..."
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
                      Current Medications
                    </label>
                    <textarea
                      id="medications"
                      name="medications"
                      rows={2}
                      value={formData.medications}
                      onChange={handleChange}
                      placeholder="List any medications..."
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                      Allergies
                    </label>
                    <input
                      type="text"
                      id="allergies"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      placeholder="List any allergies..."
                      className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700">
                        Insurance Provider
                      </label>
                      <input
                        type="text"
                        id="insuranceProvider"
                        name="insuranceProvider"
                        value={formData.insuranceProvider}
                        onChange={handleChange}
                        className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="insurancePolicyNumber" className="block text-sm font-medium text-gray-700">
                        Policy Number
                      </label>
                      <input
                        type="text"
                        id="insurancePolicyNumber"
                        name="insurancePolicyNumber"
                        value={formData.insurancePolicyNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full min-h-[44px] rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] sm:py-2 sm:text-sm transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Agreement */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 mt-0.5 shrink-0 rounded border-gray-300 text-[#c8102e] focus:ring-[#c8102e]"
                    aria-describedby="agreeToTerms-hint"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                    I agree to the terms and conditions, waiver of liability, and code of conduct. *
                  </label>
                </div>
                <p id="agreeToTerms-hint" className="mt-2 text-xs text-gray-500">
                  By checking this box, you acknowledge that you have read and agree to our terms and conditions.
                  A detailed waiver will be provided for signature at the first practice.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row sm:justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bcx-btn w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-busy={isSubmitting}
                  aria-live="polite"
                  aria-label={isSubmitting ? 'Submitting registration' : 'Submit registration'}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
