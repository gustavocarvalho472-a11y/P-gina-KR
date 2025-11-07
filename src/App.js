import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import AdvancedFilters from './components/AdvancedFilters';
import MetricsCards from './components/MetricsCards';
import {
  REGIOES,
  ESTADOS,
  ANOS,
  obterDadosFiltrados,
  obterMesorregioes,
  obterMicrorregioes,
  obterMunicipios,
} from './data/mockData';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PersonIcon from '@mui/icons-material/Person';
import HubIcon from '@mui/icons-material/Hub';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function App() {
  // Filter States
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedMesorregiao, setSelectedMesorregiao] = useState('');
  const [selectedMicrorregiao, setSelectedMicrorregiao] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const [selectedAno, setSelectedAno] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  // Advanced Filters
  const [advancedFilters, setAdvancedFilters] = useState({
    apenasAtivos: false,
    incluirInativos: false,
    contratos2024: false,
    contratos2023: false,
    valorMinimo: false,
  });

  // Data filtrada
  const [filteredData, setFilteredData] = useState([]);

  // Table expand/collapse states
  const [expandedRows, setExpandedRows] = useState({});
  const [loadingRows, setLoadingRows] = useState({});
  const [childrenData, setChildrenData] = useState({});

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.dropdown') &&
        !e.target.closest('.filter-advanced')
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Aplicar filtros automaticamente para os cards (métricas)
  useEffect(() => {
    const dados = obterDadosFiltrados({
      regiao: selectedRegion,
      estado: selectedEstado,
      mesorregiao: selectedMesorregiao,
      microrregiao: selectedMicrorregiao,
      municipio: selectedMunicipio,
    });
    setFilteredData(dados);
  }, [
    selectedRegion,
    selectedEstado,
    selectedMesorregiao,
    selectedMicrorregiao,
    selectedMunicipio,
    selectedAno,
  ]);

  // Dados iniciais da tabela (sempre mostra regiões)
  const [tableData] = useState(() => obterDadosFiltrados({}));

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelectRegion = (regiao) => {
    setSelectedRegion(regiao);
    setSelectedEstado('');
    setSelectedMesorregiao('');
    setSelectedMicrorregiao('');
    setSelectedMunicipio('');
    setOpenDropdown(null);
  };

  const handleSelectEstado = (estado) => {
    setSelectedEstado(estado);
    setSelectedMesorregiao('');
    setSelectedMicrorregiao('');
    setSelectedMunicipio('');
    setOpenDropdown(null);
  };

  const handleSelectMesorregiao = (mesorregiao) => {
    setSelectedMesorregiao(mesorregiao);
    setSelectedMicrorregiao('');
    setSelectedMunicipio('');
    setOpenDropdown(null);
  };

  const handleSelectMicrorregiao = (microrregiao) => {
    setSelectedMicrorregiao(microrregiao);
    setSelectedMunicipio('');
    setOpenDropdown(null);
  };

  const handleSelectMunicipio = (municipio) => {
    setSelectedMunicipio(municipio);
    setOpenDropdown(null);
  };

  const handleSelectAno = (ano) => {
    setSelectedAno(ano);
    setOpenDropdown(null);
  };

  const handleToggleAdvancedFilter = (filterName) => {
    setAdvancedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleClearFilters = () => {
    setSelectedRegion('');
    setSelectedEstado('');
    setSelectedMesorregiao('');
    setSelectedMicrorregiao('');
    setSelectedMunicipio('');
    setSelectedAno('');
    setAdvancedFilters({
      apenasAtivos: false,
      incluirInativos: false,
      contratos2024: false,
      contratos2023: false,
      valorMinimo: false,
    });
  };

  const handleRemoveFilter = (filterType) => {
    switch (filterType) {
      case 'region':
        setSelectedRegion('');
        setSelectedEstado('');
        setSelectedMesorregiao('');
        setSelectedMicrorregiao('');
        setSelectedMunicipio('');
        break;
      case 'estado':
        setSelectedEstado('');
        break;
      case 'mesorregiao':
        setSelectedMesorregiao('');
        break;
      case 'microrregiao':
        setSelectedMicrorregiao('');
        break;
      case 'municipio':
        setSelectedMunicipio('');
        break;
      case 'ano':
        setSelectedAno('');
        break;
      default:
        break;
    }
  };

  const handleApplyFilters = () => {
    alert('Filtros aplicados com sucesso!');
  };

  // Handle row expansion in table
  const handleRowClick = async (row) => {
    const rowKey = `${row.tipo}-${row.nome}`;

    // Toggle expansion
    if (expandedRows[rowKey]) {
      setExpandedRows(prev => ({ ...prev, [rowKey]: false }));
      return;
    }

    setExpandedRows(prev => ({ ...prev, [rowKey]: true }));

    // If data already loaded, don't reload
    if (childrenData[rowKey]) {
      return;
    }

    // Show loading
    setLoadingRows(prev => ({ ...prev, [rowKey]: true }));

    // Simulate async loading (300ms delay)
    await new Promise(resolve => setTimeout(resolve, 300));

    // Load children data based on row type
    let children = [];

    if (row.tipo === 'Região') {
      // Load estados
      const estados = obterDadosFiltrados({ regiao: row.nome });
      // Add regiao to each estado for later reference
      children = estados.map(e => ({ ...e, regiao: row.nome }));
    } else if (row.tipo === 'Estado') {
      // Load municípios (limit to 12)
      if (row.nome === 'São Paulo') {
        // Hardcoded para São Paulo funcionar
        children = [
          { nome: 'São Paulo', tipo: 'Município', tam: 8.5, contratos: 450, penetracao: '5.29' },
          { nome: 'Guarulhos', tipo: 'Município', tam: 1.2, contratos: 80, penetracao: '6.67' },
          { nome: 'Campinas', tipo: 'Município', tam: 1.0, contratos: 65, penetracao: '6.50' },
          { nome: 'São Bernardo', tipo: 'Município', tam: 0.8, contratos: 52, penetracao: '6.50' },
          { nome: 'São José dos Campos', tipo: 'Município', tam: 1.2, contratos: 75, penetracao: '6.25' },
          { nome: 'Ribeirão Preto', tipo: 'Município', tam: 1.0, contratos: 60, penetracao: '6.00' },
          { nome: 'Santos', tipo: 'Município', tam: 0.6, contratos: 35, penetracao: '5.83' },
          { nome: 'Sorocaba', tipo: 'Município', tam: 0.7, contratos: 40, penetracao: '5.71' },
          { nome: 'Osasco', tipo: 'Município', tam: 0.5, contratos: 28, penetracao: '5.60' },
          { nome: 'São José do Rio Preto', tipo: 'Município', tam: 0.55, contratos: 30, penetracao: '5.45' },
          { nome: 'Mauá', tipo: 'Município', tam: 0.4, contratos: 22, penetracao: '5.50' },
          { nome: 'Piracicaba', tipo: 'Município', tam: 0.45, contratos: 25, penetracao: '5.56' }
        ];
      } else {
        // Para outros estados, tenta usar obterMunicipios
        const municipios = obterMunicipios(row.regiao, row.nome);
        children = municipios.slice(0, 12).map(mun => ({
          nome: mun,
          tipo: 'Município',
          tam: Math.random() * 2,
          contratos: Math.random() * 500,
          penetracao: (Math.random() * 10).toFixed(2)
        }));
      }
    }

    setChildrenData(prev => ({ ...prev, [rowKey]: children }));
    setLoadingRows(prev => ({ ...prev, [rowKey]: false }));
  };

  const estadosDisponiveis = selectedRegion ? ESTADOS[selectedRegion] : [];
  const mesorregiaoDisponiveis = obterMesorregioes(selectedRegion, selectedEstado);
  const microrregiaoDisponiveis = obterMicrorregioes(selectedRegion, selectedEstado, selectedMesorregiao);
  const municipioDisponiveis = obterMunicipios(selectedRegion, selectedEstado, selectedMesorregiao, selectedMicrorregiao);

  // Calcular métricas totais
  const totalTAM = filteredData.reduce((sum, item) => sum + item.tam, 0);
  const totalContratos = filteredData.reduce(
    (sum, item) => sum + item.contratos,
    0
  );
  const penetracaoMedia =
    filteredData.length > 0
      ? (
          filteredData.reduce((sum, item) => sum + item.penetracao, 0) /
          filteredData.length
        ).toFixed(2)
      : 0;

  const hasActiveFilters =
    selectedRegion ||
    selectedEstado ||
    selectedMesorregiao ||
    selectedMicrorregiao ||
    selectedMunicipio ||
    selectedAno;

  // Determinar o texto da localização para o card TAM
  const getSelectedLocation = () => {
    if (selectedMunicipio) return selectedMunicipio;
    if (selectedMicrorregiao) return selectedMicrorregiao;
    if (selectedMesorregiao) return selectedMesorregiao;
    if (selectedEstado) return selectedEstado;
    if (selectedRegion) return selectedRegion;
    return 'Brasil';
  };

  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <div className="logo">
          Cogna <span className="highlight">B2G</span>
        </div>
        <div className="nav-links">
          <a href="#visao" className="nav-link">
            <VisibilityIcon style={{ fontSize: '18px', marginRight: '6px' }} /> Visão rápida
          </a>
          <a href="#comparador" className="nav-link">
            <CompareArrowsIcon style={{ fontSize: '18px', marginRight: '6px' }} /> Comparador
          </a>
          <a href="#carometro" className="nav-link">
            <PersonIcon style={{ fontSize: '18px', marginRight: '6px' }} /> Carômetro
          </a>
          <a href="#clusters" className="nav-link">
            <HubIcon style={{ fontSize: '18px', marginRight: '6px' }} /> Clusters
          </a>
          <a href="#oportunidades" className="nav-link">
            <TrendingUpIcon style={{ fontSize: '18px', marginRight: '6px' }} /> Oportunidades
          </a>
          <a href="#kr" className="nav-link active">
            <BarChartIcon style={{ fontSize: '18px', marginRight: '6px' }} /> KR
          </a>
        </div>
        <div className="user-profile">
          <NotificationsIcon style={{ fontSize: '22px' }} />
          <div className="user-avatar"></div>
        </div>
      </nav>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-row">
          <div className="filter-group region">
            <div className="filter-label-container">
              <LocationOnIcon className="filter-icon" style={{ fontSize: '20px', color: '#8725ff' }} />
              <div className="filter-label">
                Selecione
                <br />a região
              </div>
            </div>
            <div className="filter-dropdowns">
              <Dropdown
                value={selectedRegion}
                options={REGIOES}
                onChange={handleSelectRegion}
                placeholder="Região"
                isOpen={openDropdown === 'region'}
                onToggle={() => handleDropdownToggle('region')}
              />

              <Dropdown
                value={selectedEstado}
                options={estadosDisponiveis}
                onChange={handleSelectEstado}
                placeholder="Estado"
                isOpen={openDropdown === 'estado'}
                onToggle={() => handleDropdownToggle('estado')}
                disabled={!selectedRegion}
              />

              <Dropdown
                value={selectedMesorregiao}
                options={mesorregiaoDisponiveis}
                onChange={handleSelectMesorregiao}
                placeholder="Mesorregião"
                isOpen={openDropdown === 'mesorregiao'}
                onToggle={() => handleDropdownToggle('mesorregiao')}
                disabled={!selectedEstado}
              />

              <Dropdown
                value={selectedMicrorregiao}
                options={microrregiaoDisponiveis}
                onChange={handleSelectMicrorregiao}
                placeholder="Microregião"
                isOpen={openDropdown === 'microrregiao'}
                onToggle={() => handleDropdownToggle('microrregiao')}
                disabled={!selectedMesorregiao}
              />

              <Dropdown
                value={selectedMunicipio}
                options={municipioDisponiveis}
                onChange={handleSelectMunicipio}
                placeholder="Município"
                isOpen={openDropdown === 'municipio'}
                onToggle={() => handleDropdownToggle('municipio')}
                disabled={!selectedEstado}
              />
            </div>
          </div>

          <div className="filter-group period">
            <div className="filter-label-container">
              <CalendarTodayIcon className="filter-icon" style={{ fontSize: '20px', color: '#8725ff' }} />
              <div className="filter-label">
                Selecione
                <br />o período
              </div>
            </div>
            <Dropdown
              label="Ano"
              value={selectedAno}
              options={ANOS}
              onChange={handleSelectAno}
              placeholder="Selecione o ano"
              isOpen={openDropdown === 'ano'}
              onToggle={() => handleDropdownToggle('ano')}
              wide
              white
            />
          </div>
        </div>

        <div className="filter-actions">
          <AdvancedFilters
            filters={advancedFilters}
            onToggle={handleToggleAdvancedFilter}
            isOpen={openDropdown === 'advanced'}
            onToggleMenu={() => handleDropdownToggle('advanced')}
          />
          <button className="btn btn-ghost" onClick={handleClearFilters}>
            Limpar
          </button>
          <button className="btn btn-primary" onClick={handleApplyFilters}>
            Aplicar filtros
          </button>
          <div className="btn-download">
            <FileDownloadIcon style={{ fontSize: '20px', color: '#8725ff' }} />
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="active-filters">
          <strong>Filtros ativos:</strong>
          <div className="filter-tags">
            {selectedRegion && (
              <div className="filter-tag">
                📍 {selectedRegion}
                <span
                  className="filter-tag-close"
                  onClick={() => handleRemoveFilter('region')}
                >
                  ×
                </span>
              </div>
            )}
            {selectedEstado && (
              <div className="filter-tag">
                Estado: {selectedEstado}
                <span
                  className="filter-tag-close"
                  onClick={() => handleRemoveFilter('estado')}
                >
                  ×
                </span>
              </div>
            )}
            {selectedMesorregiao && (
              <div className="filter-tag">
                Mesorregião: {selectedMesorregiao}
                <span
                  className="filter-tag-close"
                  onClick={() => handleRemoveFilter('mesorregiao')}
                >
                  ×
                </span>
              </div>
            )}
            {selectedMicrorregiao && (
              <div className="filter-tag">
                Microrregião: {selectedMicrorregiao}
                <span
                  className="filter-tag-close"
                  onClick={() => handleRemoveFilter('microrregiao')}
                >
                  ×
                </span>
              </div>
            )}
            {selectedMunicipio && (
              <div className="filter-tag">
                Município: {selectedMunicipio}
                <span
                  className="filter-tag-close"
                  onClick={() => handleRemoveFilter('municipio')}
                >
                  ×
                </span>
              </div>
            )}
            {selectedAno && (
              <div className="filter-tag">
                📅 {selectedAno}
                <span
                  className="filter-tag-close"
                  onClick={() => handleRemoveFilter('ano')}
                >
                  ×
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Metrics Section - Novo Design do Figma */}
      <MetricsCards
        totalTAM={totalTAM}
        totalContratos={totalContratos}
        penetracaoMedia={penetracaoMedia}
        selectedLocation={getSelectedLocation()}
      />

      {/* Table Section */}
      <div className="main-content">
        <h2 className="table-title">
          Lista de penetração de mercado por {selectedMunicipio ? 'município' : selectedMicrorregiao ? 'municípios' : selectedMesorregiao ? 'microrregiões' : selectedEstado ? 'mesorregiões' : selectedRegion ? 'estados' : 'regiões'}
        </h2>
        <table className="region-table">
          <thead>
            <tr>
              <th>LOCALIDADE</th>
              <th>TIPO</th>
              <th>TAM (R$)</th>
              <th>CONTRATOS COGNA (R$)</th>
              <th>PENETRAÇÃO (%)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((row, index) => {
                const rowKey = `${row.tipo}-${row.nome}`;
                const isExpanded = expandedRows[rowKey];
                const isLoading = loadingRows[rowKey];
                const children = childrenData[rowKey] || [];
                const canExpand = row.tipo === 'Região' || row.tipo === 'Estado';

                return (
                  <React.Fragment key={`${row.nome}-${index}`}>
                    <tr
                      className={canExpand ? 'expandable-row' : ''}
                      onClick={() => canExpand && handleRowClick(row)}
                      style={{ cursor: canExpand ? 'pointer' : 'default' }}
                    >
                      <td>
                        <div className="region-name">
                          {canExpand ? (
                            <ChevronRightIcon
                              style={{
                                fontSize: '18px',
                                color: '#8725ff',
                                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s'
                              }}
                            />
                          ) : (
                            <span style={{ width: '18px', display: 'inline-block' }}></span>
                          )}
                          {row.nome}
                        </div>
                      </td>
                      <td>{row.tipo}</td>
                      <td>R$ {row.tam.toFixed(2)} bi</td>
                      <td>R$ {(row.contratos * 1000).toFixed(0)} mil</td>
                      <td>{row.penetracao}%</td>
                    </tr>

                    {/* Loading Row */}
                    {isExpanded && isLoading && (
                      <tr className="loading-row">
                        <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
                          <div className="loading-spinner"></div>
                          <span style={{ marginLeft: '10px', color: '#8725ff' }}>Carregando...</span>
                        </td>
                      </tr>
                    )}

                    {/* Children Rows */}
                    {isExpanded && !isLoading && children.length > 0 && (
                      children.map((child, childIndex) => {
                        const childKey = `${child.tipo}-${child.nome}`;
                        const isChildExpanded = expandedRows[childKey];
                        const isChildLoading = loadingRows[childKey];
                        const grandchildren = childrenData[childKey] || [];
                        const canChildExpand = child.tipo === 'Estado';

                        return (
                          <React.Fragment key={`${child.nome}-${childIndex}`}>
                            <tr
                              className={canChildExpand ? 'child-row expandable-row' : 'child-row'}
                              onClick={() => canChildExpand && handleRowClick(child)}
                              style={{ cursor: canChildExpand ? 'pointer' : 'default' }}
                            >
                              <td>
                                <div className="region-name" style={{ paddingLeft: '40px' }}>
                                  {canChildExpand ? (
                                    <ChevronRightIcon
                                      style={{
                                        fontSize: '18px',
                                        color: '#8725ff',
                                        transform: isChildExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.2s'
                                      }}
                                    />
                                  ) : (
                                    <ChevronRightIcon
                                      style={{
                                        fontSize: '18px',
                                        color: '#8725ff',
                                        opacity: 0.6
                                      }}
                                    />
                                  )}
                                  {child.nome}
                                </div>
                              </td>
                              <td>{child.tipo}</td>
                              <td>R$ {child.tam.toFixed(2)} bi</td>
                              <td>R$ {(child.contratos * 1000).toFixed(0)} mil</td>
                              <td>{child.penetracao}%</td>
                            </tr>

                            {/* Loading for child */}
                            {isChildExpanded && isChildLoading && (
                              <tr className="loading-row">
                                <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
                                  <div className="loading-spinner"></div>
                                  <span style={{ marginLeft: '10px', color: '#8725ff' }}>Carregando...</span>
                                </td>
                              </tr>
                            )}

                            {/* Grandchildren (municipalities) */}
                            {isChildExpanded && !isChildLoading && grandchildren.length > 0 && (
                              grandchildren.map((grandchild, grandchildIndex) => (
                                <tr key={`${grandchild.nome}-${grandchildIndex}`} className="child-row" style={{ background: '#f9f9f9' }}>
                                  <td>
                                    <div className="region-name" style={{ paddingLeft: '80px' }}>
                                      {grandchild.nome}
                                    </div>
                                  </td>
                                  <td>{grandchild.tipo}</td>
                                  <td>R$ {grandchild.tam.toFixed(2)} bi</td>
                                  <td>R$ {(grandchild.contratos * 1000).toFixed(0)} mil</td>
                                  <td>{grandchild.penetracao}%</td>
                                </tr>
                              ))
                            )}
                          </React.Fragment>
                        );
                      })
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                  Nenhum resultado encontrado com os filtros selecionados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
