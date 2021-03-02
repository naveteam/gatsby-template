import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <div>
    <Text>Gastby boilerplate</Text>
  </div>
)

const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`

export default Header
