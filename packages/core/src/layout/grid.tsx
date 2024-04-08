'use client'

import { Container, Row, Col } from 'react-bootstrap'

interface IGridProps {
  container: boolean
  children: React.ReactNode
}

export default function Grid({ container, children, ...props }: IGridProps) {
  return (
    <>
      {container ? (
        <Container>
          <Row>{children}</Row>
        </Container>
      ) : (
        <Col {...props}>{children}</Col>
      )}
    </>
  )
}
