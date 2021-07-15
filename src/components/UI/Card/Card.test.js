import { render } from '../../../setupTests';
import Card from '../Card';

const cardProps = {
  amount: '999',
  averageKm: '1000000',
  averagePrice: '999999',
  brand: 'TEST',
  model: 'XYZ',
  version: 'b0acc4f4e0ca7030b1f72b1701265997',
  year: '2021',
};

describe('<Card />', () => {
  it('renders Card properly', () => {
    const { getByTestId } = render(<Card {...cardProps}/>);
    const element = getByTestId('QV_CARD');
    expect(element).toBeInTheDocument();
    expect(element).not.toBeEmptyDOMElement();
    expect(element).toBeInstanceOf(HTMLElement);
  });
});