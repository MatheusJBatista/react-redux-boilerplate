import { render, screen } from '@testing-library/react'
import Home from '@views/home/home'
import TemplateComponentTest from 'tests/template-component'

test('renders Home withou crashing', () => {
  render(
    <TemplateComponentTest>
      <Home />
    </TemplateComponentTest>
  )
})

test('renders Home with click reducer null should not crashing', () => {
  const state = { click: null }
  render(
    <TemplateComponentTest state={state}>
      <Home />
    </TemplateComponentTest>
  )
})

test('click-display paragraph should render properly the redux data', () => {
  const state = {
    click: {
      quantity: 100,
    },
  }
  render(
    <TemplateComponentTest state={state}>
      <Home />
    </TemplateComponentTest>
  )

  const clickDisplayElement = screen.getByText(`Quantidade de clicks: ${state.click.quantity}`)
  expect(clickDisplayElement).toBeInTheDocument()
})
