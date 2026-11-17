import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap'

export {
  Col as AppCol,
  Collapse as AppCollapse,
  Container as AppContainer,
  Form as AppForm,
  Nav as AppNav,
  Navbar as AppNavbar,
  NavbarBrand as AppNavbarBrand,
  NavbarToggler as AppNavbarToggler,
  NavItem as AppNavItem,
  NavLink as AppNavLink,
  Row as AppRow,
}

export function AppButton({ color = 'primary', ...props }) {
  return <Button color={color} {...props} />
}

export function AppBadge({ color = 'primary', ...props }) {
  return <Badge color={color} {...props} />
}

export function AppCard({ bodyClassName, children, ...props }) {
  return (
    <Card {...props}>
      <CardBody className={bodyClassName}>{children}</CardBody>
    </Card>
  )
}

export function AppInput(props) {
  return <Input {...props} />
}

export function AppTextArea(props) {
  return <Input type="textarea" {...props} />
}

export function AppField({
  as = 'input',
  groupClassName = 'mb-3',
  id,
  label,
  ...inputProps
}) {
  const Control = as === 'textarea' ? AppTextArea : AppInput

  return (
    <FormGroup className={groupClassName}>
      <Label htmlFor={id}>{label}</Label>
      <Control id={id} {...inputProps} />
    </FormGroup>
  )
}

export function AppIconLink({ icon: Icon, children, ...props }) {
  return (
    <a
      className="d-flex align-items-center gap-2 text-decoration-none"
      {...props}
    >
      <Icon aria-hidden="true" size={18} />
      {children}
    </a>
  )
}
