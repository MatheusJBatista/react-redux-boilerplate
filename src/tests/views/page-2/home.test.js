import { render, screen } from '@testing-library/react'
import Page2 from '@views/page-2/page-2'
import TemplateComponentTest from 'tests/template-component'

test('renders Page2 withou crashing', () => {
  const history = {
    goBack: () => console.log('i back one page'),
  }
  render(
    <TemplateComponentTest>
      <Page2 history={history} />
    </TemplateComponentTest>
  )
})
