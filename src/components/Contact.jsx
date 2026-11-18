import { useState } from 'react'
import { BriefcaseBusiness, CodeXml, Mail, Phone } from 'lucide-react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { profile } from '../data/profile.js'
import {
  AppButton,
  AppCard,
  AppCol,
  AppContainer,
  AppField,
  AppForm,
  AppIconLink,
  AppRow,
} from './ui/AppUI.jsx'

const contactLinks = [
  { icon: Mail, href: `mailto:${profile.email}`, label: profile.email },
  {
    icon: Phone,
    href: `tel:${profile.phone}`,
    label: profile.phone,
  },
  {
    icon: CodeXml,
    href: profile.github,
    label: 'github.com/zee10zee',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    icon: BriefcaseBusiness,
    href: `mailto:${profile.email}`,
    label: `LinkedIn: ${profile.email}`,
  },
]

const contactFields = [
  {
    id: 'contactName',
    label: 'Name',
    name: 'name',
    autoComplete: 'name',
    placeholder: 'Your name',
    required: true,
  },
  {
    id: 'contactEmail',
    label: 'Email',
    name: 'email',
    autoComplete: 'email',
    placeholder: 'you@example.com',
    required: true,
    type: 'email',
  },
  {
    id: 'contactMsg',
    label: 'Message',
    name: 'message',
    placeholder: 'Write your message',
    required: true,
    as: 'textarea',
    rows: 3,
  },
]

function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'Email is not configured yet. Add the EmailJS service ID, template ID, and public key to the environment.',
      })
      return
    }

    setIsSending(true)
    setStatus(null)
    const senderName = String(formData.get('name') ?? '')

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: profile.email,
          username: senderName,
          subject: `Portfolio inquiry from ${senderName}`,
          reply_to: String(formData.get('email') ?? ''),
          userMessage: String(formData.get('message') ?? ''),
        },
        { publicKey },
      )
      form.reset()
      setStatus({ type: 'success', message: 'Your message has been sent.' })
    } catch (error) {
      console.error('Unable to send the contact message through EmailJS.', error)
      const errorDetails =
        error instanceof EmailJSResponseStatus
          ? `${error.status}: ${error.text}`
          : error instanceof Error
            ? error.message
            : 'Unexpected EmailJS error'
      setStatus({
        type: 'error',
        message: `Your message could not be sent. ${errorDetails}`,
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      aria-labelledby="contact-title"
      className="content-section py-5"
      id="contact"
    >
      <AppContainer>
        <AppRow className="justify-content-center">
          <AppCol lg={8}>
            <h2 className="text-center mb-4" id="contact-title">
              Reach me
            </h2>
            <p className="text-center text-muted mb-5">
              Contact me about web development or technical support.
            </p>
            <AppRow className="g-4">
              <AppCol md={6}>
                <AppCard
                  className="h-100 shadow-sm border-0"
                  bodyClassName="d-flex flex-column gap-3"
                >
                  {contactLinks.map(({ icon, label, ...linkProps }) => (
                    <AppIconLink key={label} icon={icon} {...linkProps}>
                      {label}
                    </AppIconLink>
                  ))}
                </AppCard>
              </AppCol>
              <AppCol md={6}>
                <AppCard className="h-100 shadow-sm border-0">
                  <AppForm onSubmit={handleSubmit}>
                    {contactFields.map((field) => (
                      <AppField key={field.id} {...field} />
                    ))}
                    <AppButton
                      className="w-100"
                      disabled={isSending}
                      type="submit"
                    >
                      {isSending ? 'Sending...' : 'Send'}
                    </AppButton>
                    {status && (
                      <p
                        aria-live="polite"
                        className={`mt-3 mb-0 ${
                          status.type === 'success' ? 'text-success' : 'text-danger'
                        }`}
                        role="status"
                      >
                        {status.message}
                      </p>
                    )}
                  </AppForm>
                </AppCard>
              </AppCol>
            </AppRow>
          </AppCol>
        </AppRow>
      </AppContainer>
    </section>
  )
}

export default Contact
