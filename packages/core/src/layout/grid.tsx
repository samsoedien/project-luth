'use client'

import { Container, Row, Col, type ColProps } from 'react-bootstrap'

interface IGridProps extends ColProps {
  container?: boolean
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
