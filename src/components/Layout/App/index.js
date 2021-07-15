import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from './styles';
import { Card, Select } from "../../UI"

const priceApiUrl = "http://creditas-price-api.herokuapp.com/brands"

function App() {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [models, setModels] = useState([]);
  const [model, setModel] = useState("");
  const [years, setYears] = useState([]);
  const [year, setYear] = useState("");
  const [versions, setVersions] = useState([]);
  const [version, setVersion] = useState("");
  const [car, setCar] = useState();

  useEffect(() => {
    const getBrands = async () => {
      try {
        const { data } = await axios.get(`${priceApiUrl}`);
        setBrands(data);
      } catch ({ response }) {
        console.log(response);
      }
    };

    getBrands();
  }, []);

  function handleBrandSelection(selected) {
    setBrand(selected);
    setModel('');
    setModels([]);
    setYear("");
    setYears([]);
    setVersion("");
    setVersions([]);
    setCar("");

    const getModels = async () => {
      try {
        const { data } = await axios.get(`${priceApiUrl}/${selected}/models`);
        setModels(data);
      } catch ({ response }) {
        console.log(response);
      }
    };

    getModels();
  }

  function handleModelSelection(selected) {
    setModel(selected);
    setYear("");
    setYears([]);
    setVersion("");
    setVersions([]);
    setCar("");

    const getYears = async () => {
      try {
        const { data } = await axios.get(`${priceApiUrl}/${brand}/models/${selected}/years`);
        const uniqueYears = new Set(data);
        setYears([...uniqueYears].sort());
      } catch ({ response }) {
        console.log(response);
      }
    };

    getYears();
  }

  function handleYearSelection(selected) {
    setYear(selected);
    setVersion("");
    setVersions([]);
    setCar("");

    const getVersions = async () => {
      try {
        const { data } = await axios.get(`${priceApiUrl}/${brand}/models/${model}/years/${selected}/versions`);
        setVersions(data);
      } catch ({ response }) {
        console.log(response);
      }
    };

    getVersions();
  }

  function handleVersionSelection(selected) {
    setVersion(selected);
    setCar("");

    const getCar = async () => {
      try {
        const { data } = await axios.get(`${priceApiUrl}/${brand}/models/${model}/years/${year}/versions/${selected}`); 
        setCar(data);
      } catch ({ response }) {
        console.log(response);
      }
    };

    getCar();
  }

  return (
    <S.AppWrapper data-testid="QV_APP">
      <S.AppHeader>
        <h1>Quanto vale meu carro?</h1>
      </S.AppHeader>
      <S.AppMain>
        <S.AppContent>
          <Select
            selectId="select_brand"
            name="brand"
            data={brands}
            disabled={false}
            initialValue={0}
            onSelect={(e) => {
              handleBrandSelection(e.target.value);
            }}
            placeholder="Selecione uma marca"
            selected={brand}
            selectLabel="Marca"
          />
          <Select
            selectId="select_model"
            name="model"
            data={models}
            disabled={false}
            initialValue={0}
            onSelect={(e) => {
              handleModelSelection(e.target.value);
            }}
            placeholder="Selecione um modelo"
            selected={model}
            selectLabel="Modelo"
          />
          <Select
            selectId="select_year"
            name="year"
            data={years}
            disabled={false}
            initialValue={0}
            onSelect={(e) => {
              handleYearSelection(e.target.value);
            }}
            placeholder="Selecione um ano"
            selected={year}
            selectLabel="Ano"
          />
          <Select
            selectId="select_version"
            name="version"
            data={versions}
            disabled={false}
            initialValue={0}
            label="version"
            onSelect={(e) => {
              handleVersionSelection(e.target.value);
            }}
            placeholder="Selecione uma versão"
            selected={version.versionId}
            valueId="versionId"
            selectLabel="Versão"
          />
          {car && <Card 
            amount={car?.qtd}
            averageKm={car?.kmMedio}
            averagePrice={car?.precoMedio}
            brand={car?.brand}
            model={car?.model}
            version={car?.version}
            year={car?.modelYear}
          />}
        </S.AppContent>
      </S.AppMain>
    </S.AppWrapper>
  );
}

export default App;
