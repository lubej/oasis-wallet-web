import * as React from 'react'
import { render } from '@testing-library/react'
import { FromBleLedger } from '..'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe('<FromLedger />', () => {
  it('should render component', () => {
    const { container } = render(<FromBleLedger />)

    expect(container).toMatchSnapshot()
  })
})
