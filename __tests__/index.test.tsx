import {fireEvent, render, screen} from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading, paragraph and an input', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      level: 1,
    });

    const paragraph = screen.getByTestId('roman-numeral-paragraph');
    const input = screen.getByTestId('user-number-input');

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  })

  it('changes output value shown in paragraph when input value changes', ()=>{
    render(<Home />);

    const paragraph = screen.getByTestId('roman-numeral-paragraph');
    const input = screen.getByTestId('user-number-input');

    fireEvent.change(input, {target: {value: 1}});
    expect(paragraph).toHaveTextContent("I");
  })

})
