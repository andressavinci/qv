import { render } from '../../../setupTests';
import App from '../App';

describe('<App />', () => {
  it('renders App properly', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('QV_APP');

    expect(element).toBeInTheDocument();
  });
});