import React from "react";

import Container from "../components/Container";

const AboutMePage = () => {
  return (
    <Container>
      <div className="about-me__body">
        <p className="m-4 text-xl">
          Olá, Meu nome é Arthur Nascimento! Sou formado em Administração de
          Empresa pela Universidade Presbiteriana Mackenzie em São Paulo e
          pós-graduado em Gestão Estratégica de Negócios pela Faculdade das
          Américas.
        </p>
        <p className="m-4 text-xl">
          Trabalhei 7 anos no Banco Itaú onde adquirir muito conhecimento em
          análise através de indicadores chaves.
        </p>
        <p className="m-4 text-xl">
          Hoje sou consultor para pequenas e medias empresas e gerente
          financeiro de um grupo de empresas com mais de 100 funcionários que
          fatura mais de milhões de reais por mês.
        </p>
      </div>
    </Container>
  );
};

export default AboutMePage;
