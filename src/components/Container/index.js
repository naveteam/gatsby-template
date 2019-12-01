import Style from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 480px) {
    max-width: 478px;
  }

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 992px) {
    max-width: 990px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export default Container
