import { ThemeProvider } from 'react-bootstrap'

export default function GridProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      {children}
    </ThemeProvider>
  )
}
