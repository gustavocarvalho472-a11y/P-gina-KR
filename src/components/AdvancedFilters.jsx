import React from 'react';
import './AdvancedFilters.css';
import SearchIcon from '@mui/icons-material/Search';

function AdvancedFilters({ filters, onToggle, isOpen, onToggleMenu }) {
  const handleOptionClick = (filterName) => {
    onToggle(filterName);
  };

  return (
    <div className="filter-advanced">
      <SearchIcon className="filter-advanced-icon" style={{ fontSize: '18px', color: '#8725ff' }} />
      <button
        className={`filter-advanced-dropdown ${isOpen ? 'open' : ''}`}
        onClick={onToggleMenu}
      >
        <span>Filtros avançados</span>
        <div className="dropdown-arrow"></div>
      </button>
      <div className={`filter-advanced-menu ${isOpen ? 'open' : ''}`}>
        <div
          className="filter-advanced-option"
          onClick={() => handleOptionClick('apenasAtivos')}
        >
          <input
            type="checkbox"
            checked={filters.apenasAtivos}
            onChange={() => {}}
          />
          <label>Apenas contratos ativos</label>
        </div>
        <div
          className="filter-advanced-option"
          onClick={() => handleOptionClick('incluirInativos')}
        >
          <input
            type="checkbox"
            checked={filters.incluirInativos}
            onChange={() => {}}
          />
          <label>Incluir inativos</label>
        </div>
        <div
          className="filter-advanced-option"
          onClick={() => handleOptionClick('contratos2024')}
        >
          <input
            type="checkbox"
            checked={filters.contratos2024}
            onChange={() => {}}
          />
          <label>Contratos 2024</label>
        </div>
        <div
          className="filter-advanced-option"
          onClick={() => handleOptionClick('contratos2023')}
        >
          <input
            type="checkbox"
            checked={filters.contratos2023}
            onChange={() => {}}
          />
          <label>Contratos 2023</label>
        </div>
        <div
          className="filter-advanced-option"
          onClick={() => handleOptionClick('valorMinimo')}
        >
          <input
            type="checkbox"
            checked={filters.valorMinimo}
            onChange={() => {}}
          />
          <label>Valor mínimo R$ 100k</label>
        </div>
      </div>
    </div>
  );
}

export default AdvancedFilters;
