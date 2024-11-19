import React, { useState } from 'react';
import BasePage from '../common/BasePage';
import Button from '../common/Button';
import Card from '../common/Card';
import GradientText from '../common/GradientText';
import Section from '../common/Section';
import LoadingSpinner from '../common/LoadingSpinner';
import { FormData } from '../../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <BasePage
      title="Contact Us"
      description="Get in touch with Evcod Software for your next project."
      keywords={['contact', 'software development', 'project inquiry']}
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Let's <GradientText>Connect</GradientText>
          </h1>
          <p className="text-xl text-gray-400">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <Section>
          <Card withGlassMorphism className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitSuccess && (
                <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300 mb-6">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 mb-6">
                  {submitError}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="small" />
                    <span className="ml-2">Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Card>
        </Section>

        {/* Contact Info */}
        <Section className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <h3 className="text-xl font-bold mb-4">
                <GradientText>Email</GradientText>
              </h3>
              <p className="text-gray-400">contact@evcod.com</p>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-bold mb-4">
                <GradientText>Phone</GradientText>
              </h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-bold mb-4">
                <GradientText>Location</GradientText>
              </h3>
              <p className="text-gray-400">San Francisco, CA</p>
            </Card>
          </div>
        </Section>
      </div>
    </BasePage>
  );
};

export default Contact;
