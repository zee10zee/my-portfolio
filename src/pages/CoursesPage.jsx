import { AppContainer } from '../components/ui/AppUI.jsx'

export function CoursesPage() {
  return (
    <section
      aria-labelledby="courses-title"
      className="courses-page content-section"
    >
      <AppContainer className="py-5 text-center">
        <p className="section-eyebrow mb-2">Courses</p>
        <h1 className="section-title mb-3" id="courses-title">
          Coming soon
        </h1>
        <p className="text-muted mb-0">
          Course details and updates will be shared here soon.
        </p>
      </AppContainer>
    </section>
  )
}
