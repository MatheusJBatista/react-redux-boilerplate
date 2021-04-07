import { render, screen } from '@testing-library/react'
import Home from '@views/home/home'
import TemplateComponentTest from 'test-setup/template-component'

import environment from '@environment/'

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

  const clickDisplayElement = screen.getByText(`${environment.myNameIs} you clicked ${state.click.quantity} times`)
  expect(clickDisplayElement).toBeInTheDocument()
})
