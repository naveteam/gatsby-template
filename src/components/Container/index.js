import Style from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1920px) {
    max-width: 1650px;
  }
`

export default Container
