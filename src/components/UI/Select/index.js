import React from 'react';
import { array, bool, func, number, string, oneOfType } from 'prop-types';
import * as S from './styles';

const Select = ({
  data,
  disabled,
  initialValue,
  label,
  name,
  onSelect,
  placeholder,
  selected,
  selectId,
  selectLabel,
  valueId,
}) => {
  return (
    <S.SelectWrapper>
      <S.SelectLabel>{selectLabel}</S.SelectLabel>
      <S.SelectStyled
        id={selectId}
        disabled={disabled}
        value={selected}
        onChange={onSelect}
        data-testid={`QV_SELECT_${selectId.toUpperCase()}`}
      >
        {!!placeholder && <option value={initialValue}>{placeholder}</option>}
        {data.map(option => (
          <option
            value={valueId? option[valueId] : option}
            key={valueId ? `${name}_${option[valueId]}` : `${name}_${option}`}
          >
            {label ? option[label] : option}
          </option>
        ))}
      </S.SelectStyled>
      <box-icon type="solid" name="chevron-down" />
    </S.SelectWrapper>
  );
};

Select.defaultProps = {
  onSelect: () => {},
  initialValue: 0,
  data: [],
  selectLabel: '',
};

Select.propTypes = {
  onSelect: func.isRequired,
  selected: oneOfType([string, number]),
  initialValue: oneOfType([string, number]),
  placeholder: string,
  disabled: bool,
  data: array.isRequired,
  label: string,
  name: string.isRequired,
  selectId: string.isRequired,
  selectLabel: string,
};

export default Select;
