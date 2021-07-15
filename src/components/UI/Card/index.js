import React from 'react';
import { string } from 'prop-types';
import * as S from './styles';

const Card = ({
  amount,
  averageKm,
  averagePrice,
  brand,
  model,
  version,
  year,
}) => {
  return (
    <S.CardWrapper data-testid={`QV_CARD`}>
      <S.CardTitle>{`${brand} ${model}`}</S.CardTitle>
      <S.CardText>{`${version}`}</S.CardText>
      <S.CardText>{`${year} / ${averageKm} Km em média`}</S.CardText>
      <S.CardText>{`Quantidade disponível: ${amount}`}</S.CardText>
      <S.CardText>{"Preço médio"}</S.CardText>
      <S.CardPrice>{`R$ ${Intl.NumberFormat('pt-br', {minimumFractionDigits: 0}).format(averagePrice)}`}</S.CardPrice>
    </S.CardWrapper>
  );
};

Card.propTypes = {
  amount: string,
  averageKm: string,
  averagePrice: string,
  brand: string,
  model: string,
  version: string,
  versionId: string,
  year: string,
};

export default Card;
