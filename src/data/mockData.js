// Orçamento total da educação no Brasil: R$ 100 bilhões
const TOTAL_BUDGET = 100;

// Distribuição por região (baseada em população e PIB)
const DISTRIBUICAO_REGIONAL = {
  Norte: 0.085,        // 8.5%
  Nordeste: 0.275,     // 27.5%
  'Centro-Oeste': 0.08, // 8%
  Sudeste: 0.42,       // 42%
  Sul: 0.14            // 14%
};

// Estrutura hierárquica completa de dados
export const DADOS_HIERARQUICOS = {
  Norte: {
    tam: TOTAL_BUDGET * DISTRIBUICAO_REGIONAL.Norte,
    estados: {
      'Acre': {
        tam: 0.35,
        mesorregioes: {
          'Vale do Acre': { tam: 0.20, microrregioes: { 'Rio Branco': { tam: 0.15, municipios: { 'Rio Branco': { tam: 0.12 } } } } },
          'Vale do Juruá': { tam: 0.15, microrregioes: { 'Cruzeiro do Sul': { tam: 0.10, municipios: { 'Cruzeiro do Sul': { tam: 0.08 } } } } }
        }
      },
      'Amazonas': {
        tam: 2.1,
        mesorregioes: {
          'Centro Amazonense': { tam: 1.5, microrregioes: { 'Manaus': { tam: 1.2, municipios: { 'Manaus': { tam: 1.0 } } } } },
          'Norte Amazonense': { tam: 0.6, microrregioes: { 'Rio Preto da Eva': { tam: 0.3, municipios: { 'Rio Preto': { tam: 0.15 } } } } }
        }
      },
      'Pará': {
        tam: 4.2,
        mesorregioes: {
          'Metropolitana de Belém': { tam: 2.5, microrregioes: { 'Belém': { tam: 2.0, municipios: { 'Belém': { tam: 1.5 }, 'Ananindeua': { tam: 0.5 } } } } },
          'Nordeste Paraense': { tam: 1.0, microrregioes: { 'Castanhal': { tam: 0.6, municipios: { 'Castanhal': { tam: 0.35 } } } } },
          'Sudeste Paraense': { tam: 0.7, microrregioes: { 'Marabá': { tam: 0.5, municipios: { 'Marabá': { tam: 0.35 } } } } }
        }
      },
      'Rondônia': {
        tam: 0.8,
        mesorregioes: {
          'Madeira-Guaporé': { tam: 0.5, microrregioes: { 'Porto Velho': { tam: 0.4, municipios: { 'Porto Velho': { tam: 0.35 } } } } },
          'Leste Rondoniense': { tam: 0.3, microrregioes: { 'Ji-Paraná': { tam: 0.2, municipios: { 'Ji-Paraná': { tam: 0.15 } } } } }
        }
      },
      'Roraima': {
        tam: 0.3,
        mesorregioes: {
          'Norte de Roraima': { tam: 0.2, microrregioes: { 'Boa Vista': { tam: 0.18, municipios: { 'Boa Vista': { tam: 0.15 } } } } }
        }
      },
      'Tocantins': {
        tam: 0.75,
        mesorregioes: {
          'Oriental do Tocantins': { tam: 0.4, microrregioes: { 'Palmas': { tam: 0.3, municipios: { 'Palmas': { tam: 0.25 } } } } },
          'Ocidental do Tocantins': { tam: 0.35, microrregioes: { 'Araguaína': { tam: 0.2, municipios: { 'Araguaína': { tam: 0.15 } } } } }
        }
      },
      'Amapá': {
        tam: 0.35,
        mesorregioes: {
          'Sul do Amapá': { tam: 0.25, microrregioes: { 'Macapá': { tam: 0.2, municipios: { 'Macapá': { tam: 0.18 } } } } }
        }
      }
    }
  },
  Nordeste: {
    tam: TOTAL_BUDGET * DISTRIBUICAO_REGIONAL.Nordeste,
    estados: {
      'Alagoas': {
        tam: 1.5,
        mesorregioes: {
          'Leste Alagoano': { tam: 0.9, microrregioes: { 'Maceió': { tam: 0.7, municipios: { 'Maceió': { tam: 0.6 } } } } },
          'Agreste Alagoano': { tam: 0.6, microrregioes: { 'Arapiraca': { tam: 0.4, municipios: { 'Arapiraca': { tam: 0.3 } } } } }
        }
      },
      'Bahia': {
        tam: 6.5,
        mesorregioes: {
          'Metropolitana de Salvador': { tam: 3.2, microrregioes: { 'Salvador': { tam: 2.5, municipios: { 'Salvador': { tam: 2.0 }, 'Lauro de Freitas': { tam: 0.3 } } } } },
          'Centro-Sul Baiano': { tam: 1.8, microrregioes: { 'Ilhéus-Itabuna': { tam: 0.9, municipios: { 'Ilhéus': { tam: 0.4 }, 'Itabuna': { tam: 0.3 } } } } },
          'Vale São-Franciscano': { tam: 1.5, microrregioes: { 'Juazeiro': { tam: 0.8, municipios: { 'Juazeiro': { tam: 0.5 } } } } }
        }
      },
      'Ceará': {
        tam: 4.2,
        mesorregioes: {
          'Metropolitana de Fortaleza': { tam: 2.8, microrregioes: { 'Fortaleza': { tam: 2.3, municipios: { 'Fortaleza': { tam: 1.8 }, 'Caucaia': { tam: 0.3 } } } } },
          'Norte Cearense': { tam: 0.8, microrregioes: { 'Sobral': { tam: 0.5, municipios: { 'Sobral': { tam: 0.35 } } } } },
          'Sul Cearense': { tam: 0.6, microrregioes: { 'Juazeiro do Norte': { tam: 0.4, municipios: { 'Juazeiro do Norte': { tam: 0.28 } } } } }
        }
      },
      'Maranhão': {
        tam: 3.2,
        mesorregioes: {
          'Norte Maranhense': { tam: 1.8, microrregioes: { 'São Luís': { tam: 1.4, municipios: { 'São Luís': { tam: 1.0 }, 'São José de Ribamar': { tam: 0.25 } } } } },
          'Sul Maranhense': { tam: 0.8, microrregioes: { 'Imperatriz': { tam: 0.5, municipios: { 'Imperatriz': { tam: 0.4 } } } } },
          'Centro Maranhense': { tam: 0.6, microrregioes: { 'Caxias': { tam: 0.35, municipios: { 'Caxias': { tam: 0.25 } } } } }
        }
      },
      'Paraíba': {
        tam: 1.8,
        mesorregioes: {
          'Mata Paraibana': { tam: 1.0, microrregioes: { 'João Pessoa': { tam: 0.8, municipios: { 'João Pessoa': { tam: 0.6 } } } } },
          'Agreste Paraibano': { tam: 0.5, microrregioes: { 'Campina Grande': { tam: 0.4, municipios: { 'Campina Grande': { tam: 0.3 } } } } },
          'Borborema': { tam: 0.3, microrregioes: { 'Guarabira': { tam: 0.2, municipios: { 'Guarabira': { tam: 0.12 } } } } }
        }
      },
      'Pernambuco': {
        tam: 4.5,
        mesorregioes: {
          'Metropolitana do Recife': { tam: 2.8, microrregioes: { 'Recife': { tam: 2.2, municipios: { 'Recife': { tam: 1.5 }, 'Jaboatão': { tam: 0.4 }, 'Olinda': { tam: 0.25 } } } } },
          'Agreste Pernambucano': { tam: 1.0, microrregioes: { 'Caruaru': { tam: 0.6, municipios: { 'Caruaru': { tam: 0.4 } } } } },
          'Sertão Pernambucano': { tam: 0.7, microrregioes: { 'Petrolina': { tam: 0.45, municipios: { 'Petrolina': { tam: 0.35 } } } } }
        }
      },
      'Piauí': {
        tam: 1.5,
        mesorregioes: {
          'Centro-Norte Piauiense': { tam: 0.9, microrregioes: { 'Teresina': { tam: 0.7, municipios: { 'Teresina': { tam: 0.6 } } } } },
          'Sudoeste Piauiense': { tam: 0.6, microrregioes: { 'Picos': { tam: 0.35, municipios: { 'Picos': { tam: 0.25 } } } } }
        }
      },
      'Rio Grande do Norte': {
        tam: 1.6,
        mesorregioes: {
          'Leste Potiguar': { tam: 1.0, microrregioes: { 'Natal': { tam: 0.8, municipios: { 'Natal': { tam: 0.6 }, 'Parnamirim': { tam: 0.15 } } } } },
          'Central Potiguar': { tam: 0.4, microrregioes: { 'Mossoró': { tam: 0.3, municipios: { 'Mossoró': { tam: 0.25 } } } } },
          'Oeste Potiguar': { tam: 0.2, microrregioes: { 'Pau dos Ferros': { tam: 0.12, municipios: { 'Pau dos Ferros': { tam: 0.08 } } } } }
        }
      },
      'Sergipe': {
        tam: 1.0,
        mesorregioes: {
          'Leste Sergipano': { tam: 0.7, microrregioes: { 'Aracaju': { tam: 0.6, municipios: { 'Aracaju': { tam: 0.5 } } } } },
          'Agreste Sergipano': { tam: 0.3, microrregioes: { 'Itabaiana': { tam: 0.2, municipios: { 'Itabaiana': { tam: 0.15 } } } } }
        }
      }
    }
  },
  'Centro-Oeste': {
    tam: TOTAL_BUDGET * DISTRIBUICAO_REGIONAL['Centro-Oeste'],
    estados: {
      'Distrito Federal': {
        tam: 2.2,
        mesorregioes: {
          'Distrito Federal': { tam: 2.2, microrregioes: { 'Brasília': { tam: 2.2, municipios: { 'Brasília': { tam: 2.0 } } } } }
        }
      },
      'Goiás': {
        tam: 3.0,
        mesorregioes: {
          'Centro Goiano': { tam: 1.8, microrregioes: { 'Goiânia': { tam: 1.4, municipios: { 'Goiânia': { tam: 1.0 }, 'Aparecida de Goiânia': { tam: 0.3 } } } } },
          'Sul Goiano': { tam: 0.7, microrregioes: { 'Catalão': { tam: 0.4, municipios: { 'Catalão': { tam: 0.25 } } } } },
          'Norte Goiano': { tam: 0.5, microrregioes: { 'Porangatu': { tam: 0.3, municipios: { 'Porangatu': { tam: 0.18 } } } } }
        }
      },
      'Mato Grosso': {
        tam: 1.5,
        mesorregioes: {
          'Centro-Sul Mato-Grossense': { tam: 0.8, microrregioes: { 'Cuiabá': { tam: 0.6, municipios: { 'Cuiabá': { tam: 0.45 }, 'Várzea Grande': { tam: 0.12 } } } } },
          'Norte Mato-Grossense': { tam: 0.7, microrregioes: { 'Sinop': { tam: 0.4, municipios: { 'Sinop': { tam: 0.25 } } } } }
        }
      },
      'Mato Grosso do Sul': {
        tam: 1.3,
        mesorregioes: {
          'Centro-Norte de MS': { tam: 0.8, microrregioes: { 'Campo Grande': { tam: 0.65, municipios: { 'Campo Grande': { tam: 0.55 } } } } },
          'Sudoeste de MS': { tam: 0.5, microrregioes: { 'Dourados': { tam: 0.35, municipios: { 'Dourados': { tam: 0.25 } } } } }
        }
      }
    }
  },
  Sudeste: {
    tam: TOTAL_BUDGET * DISTRIBUICAO_REGIONAL.Sudeste,
    estados: {
      'Espírito Santo': {
        tam: 1.8,
        mesorregioes: {
          'Central Espírito-Santense': { tam: 1.2, microrregioes: { 'Vitória': { tam: 1.0, municipios: { 'Vitória': { tam: 0.4 }, 'Vila Velha': { tam: 0.35 }, 'Serra': { tam: 0.2 } } } } },
          'Sul Espírito-Santense': { tam: 0.6, microrregioes: { 'Cachoeiro': { tam: 0.4, municipios: { 'Cachoeiro de Itapemirim': { tam: 0.28 } } } } }
        }
      },
      'Minas Gerais': {
        tam: 9.5,
        mesorregioes: {
          'Metropolitana de BH': { tam: 5.2, microrregioes: { 'Belo Horizonte': { tam: 4.0, municipios: { 'Belo Horizonte': { tam: 2.5 }, 'Contagem': { tam: 0.6 }, 'Betim': { tam: 0.4 } } } } },
          'Zona da Mata': { tam: 1.8, microrregioes: { 'Juiz de Fora': { tam: 1.2, municipios: { 'Juiz de Fora': { tam: 0.8 } } } } },
          'Sul de Minas': { tam: 1.5, microrregioes: { 'Poços de Caldas': { tam: 0.8, municipios: { 'Poços de Caldas': { tam: 0.5 } } } } },
          'Triângulo Mineiro': { tam: 1.0, microrregioes: { 'Uberlândia': { tam: 0.7, municipios: { 'Uberlândia': { tam: 0.5 } } } } }
        }
      },
      'Rio de Janeiro': {
        tam: 8.2,
        mesorregioes: {
          'Metropolitana do Rio': { tam: 6.5, microrregioes: { 'Rio de Janeiro': { tam: 5.5, municipios: { 'Rio de Janeiro': { tam: 4.0 }, 'Niterói': { tam: 0.5 }, 'São Gonçalo': { tam: 0.6 } } } } },
          'Norte Fluminense': { tam: 1.0, microrregioes: { 'Campos dos Goytacazes': { tam: 0.7, municipios: { 'Campos': { tam: 0.5 } } } } },
          'Sul Fluminense': { tam: 0.7, microrregioes: { 'Volta Redonda': { tam: 0.5, municipios: { 'Volta Redonda': { tam: 0.35 } } } } }
        }
      },
      'São Paulo': {
        tam: 22.5,
        mesorregioes: {
          'Metropolitana de SP': { tam: 16.0, microrregioes: { 'São Paulo': { tam: 14.0, municipios: { 'São Paulo': { tam: 8.5 }, 'Guarulhos': { tam: 1.2 }, 'Campinas': { tam: 1.0 }, 'São Bernardo': { tam: 0.8 } } } } },
          'Vale do Paraíba': { tam: 2.5, microrregioes: { 'São José dos Campos': { tam: 1.8, municipios: { 'São José dos Campos': { tam: 1.2 } } } } },
          'Ribeirão Preto': { tam: 2.0, microrregioes: { 'Ribeirão Preto': { tam: 1.5, municipios: { 'Ribeirão Preto': { tam: 1.0 } } } } },
          'Campinas': { tam: 2.0, microrregioes: { 'Campinas': { tam: 1.5, municipios: { 'Campinas': { tam: 1.0 } } } } }
        }
      }
    }
  },
  Sul: {
    tam: TOTAL_BUDGET * DISTRIBUICAO_REGIONAL.Sul,
    estados: {
      'Paraná': {
        tam: 5.2,
        mesorregioes: {
          'Metropolitana de Curitiba': { tam: 3.2, microrregioes: { 'Curitiba': { tam: 2.8, municipios: { 'Curitiba': { tam: 1.8 }, 'São José dos Pinhais': { tam: 0.35 }, 'Colombo': { tam: 0.25 } } } } },
          'Norte Central Paranaense': { tam: 1.2, microrregioes: { 'Londrina': { tam: 0.8, municipios: { 'Londrina': { tam: 0.55 }, 'Maringá': { tam: 0.4 } } } } },
          'Oeste Paranaense': { tam: 0.8, microrregioes: { 'Cascavel': { tam: 0.5, municipios: { 'Cascavel': { tam: 0.35 } } } } }
        }
      },
      'Rio Grande do Sul': {
        tam: 5.5,
        mesorregioes: {
          'Metropolitana de Porto Alegre': { tam: 3.5, microrregioes: { 'Porto Alegre': { tam: 3.0, municipios: { 'Porto Alegre': { tam: 1.8 }, 'Canoas': { tam: 0.4 }, 'Novo Hamburgo': { tam: 0.3 } } } } },
          'Noroeste RS': { tam: 1.2, microrregioes: { 'Passo Fundo': { tam: 0.7, municipios: { 'Passo Fundo': { tam: 0.45 } } } } },
          'Sudeste RS': { tam: 0.8, microrregioes: { 'Pelotas': { tam: 0.5, municipios: { 'Pelotas': { tam: 0.35 } } } } }
        }
      },
      'Santa Catarina': {
        tam: 3.3,
        mesorregioes: {
          'Grande Florianópolis': { tam: 1.5, microrregioes: { 'Florianópolis': { tam: 1.3, municipios: { 'Florianópolis': { tam: 0.8 }, 'São José': { tam: 0.3 } } } } },
          'Vale do Itajaí': { tam: 1.0, microrregioes: { 'Blumenau': { tam: 0.7, municipios: { 'Blumenau': { tam: 0.45 }, 'Itajaí': { tam: 0.2 } } } } },
          'Norte Catarinense': { tam: 0.8, microrregioes: { 'Joinville': { tam: 0.6, municipios: { 'Joinville': { tam: 0.5 } } } } }
        }
      }
    }
  }
};

// Função para gerar dados mockados de contratos Cogna (penetração entre 1% e 3%)
function gerarContratosCogna(tam) {
  const penetracao = 1 + Math.random() * 2; // Entre 1% e 3%
  return {
    contratos: Number((tam * (penetracao / 100)).toFixed(3)),
    penetracao: Number(penetracao.toFixed(2))
  };
}

// Gerar listas para dropdowns
export const REGIOES = Object.keys(DADOS_HIERARQUICOS);

export const ESTADOS = {};
export const MESORREGIOES = {};
export const MICRORREGIOES = {};
export const MUNICIPIOS = {};

REGIOES.forEach(regiao => {
  ESTADOS[regiao] = Object.keys(DADOS_HIERARQUICOS[regiao].estados);
  MESORREGIOES[regiao] = [];
  MICRORREGIOES[regiao] = [];
  MUNICIPIOS[regiao] = [];

  Object.values(DADOS_HIERARQUICOS[regiao].estados).forEach(estado => {
    const mesorregioes = Object.keys(estado.mesorregioes);
    MESORREGIOES[regiao].push(...mesorregioes);

    Object.values(estado.mesorregioes).forEach(mesorregiao => {
      const microrregioes = Object.keys(mesorregiao.microrregioes);
      MICRORREGIOES[regiao].push(...microrregioes);

      Object.values(mesorregiao.microrregioes).forEach(microrregiao => {
        const municipios = Object.keys(microrregiao.municipios);
        MUNICIPIOS[regiao].push(...municipios);
      });
    });
  });
});

export const ANOS = ['2025', '2024', '2023', '2022', '2021'];

// Funções para obter opções em cascata
export function obterMesorregioes(regiao, estado) {
  if (!regiao || !estado) return [];
  const dadosEstado = DADOS_HIERARQUICOS[regiao]?.estados?.[estado];
  return dadosEstado ? Object.keys(dadosEstado.mesorregioes) : [];
}

export function obterMicrorregioes(regiao, estado, mesorregiao) {
  if (!regiao || !estado || !mesorregiao) return [];
  const dadosMeso = DADOS_HIERARQUICOS[regiao]?.estados?.[estado]?.mesorregioes?.[mesorregiao];
  return dadosMeso ? Object.keys(dadosMeso.microrregioes) : [];
}

export function obterMunicipios(regiao, estado, mesorregiao, microrregiao) {
  if (!regiao || !estado) return [];

  // Se tiver microrregião, retornar apenas os municípios dela
  if (mesorregiao && microrregiao) {
    const dadosMicro = DADOS_HIERARQUICOS[regiao]?.estados?.[estado]?.mesorregioes?.[mesorregiao]?.microrregioes?.[microrregiao];
    return dadosMicro ? Object.keys(dadosMicro.municipios) : [];
  }

  // Se tiver apenas mesorregião, retornar todos os municípios de todas as microrregiões
  if (mesorregiao) {
    const dadosMeso = DADOS_HIERARQUICOS[regiao]?.estados?.[estado]?.mesorregioes?.[mesorregiao];
    if (!dadosMeso) return [];

    const municipios = [];
    Object.values(dadosMeso.microrregioes || {}).forEach(micro => {
      municipios.push(...Object.keys(micro.municipios || {}));
    });
    return municipios;
  }

  // Se tiver apenas estado, retornar todos os municípios do estado
  const dadosEstado = DADOS_HIERARQUICOS[regiao]?.estados?.[estado];
  if (!dadosEstado) return [];

  const municipios = [];
  Object.values(dadosEstado.mesorregioes || {}).forEach(meso => {
    Object.values(meso.microrregioes || {}).forEach(micro => {
      municipios.push(...Object.keys(micro.municipios || {}));
    });
  });

  return municipios;
}

// Função para obter dados filtrados
export function obterDadosFiltrados(filtros) {
  const { regiao, estado, mesorregiao, microrregiao, municipio } = filtros;

  let dados = [];

  if (municipio && estado && regiao) {
    // Nível município - buscar o município independente da hierarquia completa
    let tamMunicipio = 0;
    let encontrado = false;

    // Buscar o município em todas as mesorregiões e microrregiões
    const dadosEstado = DADOS_HIERARQUICOS[regiao].estados[estado];
    Object.values(dadosEstado.mesorregioes).forEach(meso => {
      Object.values(meso.microrregioes).forEach(micro => {
        if (micro.municipios[municipio]) {
          tamMunicipio = micro.municipios[municipio].tam;
          encontrado = true;
        }
      });
    });

    if (encontrado) {
      const { contratos, penetracao } = gerarContratosCogna(tamMunicipio);
      dados = [{ nome: municipio, tipo: 'Município', tam: tamMunicipio, contratos, penetracao }];
    }
  } else if (microrregiao && mesorregiao && estado && regiao) {
    // Nível microrregião
    const dadosMicro = DADOS_HIERARQUICOS[regiao].estados[estado].mesorregioes[mesorregiao].microrregioes[microrregiao];
    Object.entries(dadosMicro.municipios).forEach(([nomeMunicipio, dadosMunicipio]) => {
      const { contratos, penetracao } = gerarContratosCogna(dadosMunicipio.tam);
      dados.push({ nome: nomeMunicipio, tipo: 'Município', tam: dadosMunicipio.tam, contratos, penetracao });
    });
  } else if (mesorregiao && estado && regiao) {
    // Nível mesorregião
    const dadosMeso = DADOS_HIERARQUICOS[regiao].estados[estado].mesorregioes[mesorregiao];
    Object.entries(dadosMeso.microrregioes).forEach(([nomeMicro, dadosMicro]) => {
      const tamTotal = Object.values(dadosMicro.municipios).reduce((sum, m) => sum + m.tam, 0);
      const { contratos, penetracao } = gerarContratosCogna(tamTotal);
      dados.push({ nome: nomeMicro, tipo: 'Microrregião', tam: tamTotal, contratos, penetracao });
    });
  } else if (estado && regiao) {
    // Nível estado
    const dadosEstado = DADOS_HIERARQUICOS[regiao].estados[estado];
    Object.entries(dadosEstado.mesorregioes).forEach(([nomeMeso, dadosMeso]) => {
      let tamTotal = 0;
      Object.values(dadosMeso.microrregioes).forEach(micro => {
        tamTotal += Object.values(micro.municipios).reduce((sum, m) => sum + m.tam, 0);
      });
      const { contratos, penetracao } = gerarContratosCogna(tamTotal);
      dados.push({ nome: nomeMeso, tipo: 'Mesorregião', tam: tamTotal, contratos, penetracao });
    });
  } else if (regiao) {
    // Nível região - mostrar estados
    Object.entries(DADOS_HIERARQUICOS[regiao].estados).forEach(([nomeEstado, dadosEst]) => {
      const { contratos, penetracao } = gerarContratosCogna(dadosEst.tam);
      dados.push({ nome: nomeEstado, tipo: 'Estado', tam: dadosEst.tam, contratos, penetracao });
    });
  } else {
    // Nível nacional - mostrar regiões
    REGIOES.forEach(reg => {
      const tamRegiao = DADOS_HIERARQUICOS[reg].tam;
      const { contratos, penetracao } = gerarContratosCogna(tamRegiao);
      dados.push({ nome: reg, tipo: 'Região', tam: tamRegiao, contratos, penetracao });
    });
  }

  return dados;
}
