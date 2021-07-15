import { render } from '../../../setupTests';
import Select from '../Select';

const options = [
	'AUDI',
	'BMW',
	'BRM',
];

const selectProps = {
  data: options,
  disabled: false,
  initialValue: '0',
  name: 'brand',
  onSelect: () => null,
  placeholder: 'Selecione',
  selected: '',
  selectId: 'select_brand',
  selectLabel: 'Marca',
};

describe('<Select />', () => {
	it('renders Select properly', () => {
    const { getByTestId } = render(<Select {...selectProps}/>);
    const element = getByTestId(/QV_SELECT_/);

    expect(element).toBeInTheDocument();
  });
});