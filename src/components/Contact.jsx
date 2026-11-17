import { useState } from 'react'
import { BriefcaseBusiness, CodeXml, Mail, Phone } from 'lucide-react'
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
    required: true,
    as: 'textarea',
    rows: 3,
  },
]

function Contact() {
  const [formValues, setFormValues] = useState({
    name: profile.name,
    email: profile.email,
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
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
                      <AppField
                        key={field.id}
                        {...field}
                        onChange={handleChange}
                        value={formValues[field.name]}
                      />
                    ))}
                    <AppButton className="w-100" type="submit">
                      Send
                    </AppButton>
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
