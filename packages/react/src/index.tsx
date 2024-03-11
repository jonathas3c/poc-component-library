import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray900',
  borderRadius: '$md',
})

export function App() {
  return (
    <div>
      <h1>Teste</h1>
      <Button>Teste</Button>
    </div>
  )
}
