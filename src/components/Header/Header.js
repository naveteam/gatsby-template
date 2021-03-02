import React from 'react'
import styled from 'styled-components'

import bg1 from 'images/bg_1.png'

const Header = () => (
  <Base>
    <Wrapper>
      <Text fontSize='32px' padding='0 0 0 30px' margin='0'>
        Uma conexão entre empresas e profissionais capacitados na área da programação
      </Text>
      <Text fontSize='16px' padding='0 0 50px 30px' margin='0'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
      </Text>
    </Wrapper>
    <Image src={bg1} />
  </Base>
)

const Base = styled.div`
  width: 100%;
  height: 456px;
  background: linear-gradient(to bottom, #00034e, #00034e 84.8%, #fff 0%, #fff 100%);
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`

const Text = styled.p`
  padding: 0;
  padding: ${({ padding }) => padding};
  margin-top: ${({ margin }) => margin};
  color: #fff;
  width: 465px;
  font-size: ${({ fontSize }) => fontSize};
`

const Image = styled.img`
  width: auto;
`

export default Header
