import React, { useState } from 'react';
import './MetricsCards.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PublicIcon from '@mui/icons-material/Public';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tooltip from './Tooltip';

function MetricsCards({
  totalTAM,
  totalContratos,
  penetracaoMedia,
  selectedLocation
}) {
  const [tamMode, setTamMode] = useState('total'); // total, variavel, fixo
  const [penetracaoMode, setPenetracaoMode] = useState('tam'); // tam, sam

  // Lógica de divisão TAM: 65% fixo, 35% variável
  const tamFixo = totalTAM * 0.65;
  const tamVariavel = totalTAM * 0.35;

  // Calcular o TAM baseado no modo selecionado
  const displayTAM = tamMode === 'total'
    ? totalTAM
    : tamMode === 'fixo'
      ? tamFixo
      : tamVariavel;

  // Cálculo do SAM (aproximadamente 9.5% do TAM para materiais didáticos)
  const sam = displayTAM * 0.095;

  // Penetração baseada no modo selecionado
  const penetracaoValue = penetracaoMode === 'tam'
    ? ((totalContratos / displayTAM) * 100).toFixed(2)
    : ((totalContratos / sam) * 100).toFixed(2);

  // Definir o texto da localização
  const locationText = selectedLocation || 'Brasil';

  // Conteúdos dos tooltips (UX Writing)
  const tooltipTAM = "Orçamento total de educação disponível na região. Alterne entre Total, Fixo (65%) e Variável (35%).";

  const tooltipSAM = "Mercado que a Cogna pode atender (9,5% do TAM): materiais didáticos e sistemas de ensino.";

  const tooltipPenetracao = "Participação da Cogna no mercado. Compare com TAM (total) ou SAM (endereçável).";

  const tooltipVendasCogna = "Valor total dos contratos ativos da Cogna na região selecionada.";

  return (
    <div className="metrics-cards-container">
      {/* Card TAM - Roxo com gradiente */}
      <div className="metric-card-tam">
        <div className="card-tam-header">
          <div className="card-tam-title-row">
            <div className="card-tam-icon-wrapper">
              <AccountBalanceWalletIcon className="card-tam-icon" />
            </div>
            <div className="card-tam-label">Tamanho de mercado (TAM)</div>
          </div>
          <Tooltip content={tooltipTAM} position="bottom">
            <button className="card-info-btn">
              <InfoOutlinedIcon style={{ fontSize: '12px' }} />
            </button>
          </Tooltip>
        </div>

        <div className="card-tam-toggle-section">
          <div className="toggle-label">ORÇAMENTO</div>
          <div className="toggle-buttons">
            <button
              className={`toggle-btn ${tamMode === 'total' ? 'active' : ''}`}
              onClick={() => setTamMode('total')}
            >
              Total
            </button>
            <button
              className={`toggle-btn ${tamMode === 'variavel' ? 'active' : ''}`}
              onClick={() => setTamMode('variavel')}
            >
              Variável
            </button>
            <button
              className={`toggle-btn ${tamMode === 'fixo' ? 'active' : ''}`}
              onClick={() => setTamMode('fixo')}
            >
              Fixo
            </button>
          </div>
        </div>

        <div className="card-tam-content">
          <div className="card-tam-content-header">
            <div className="card-tam-location">
              <PublicIcon className="location-icon" style={{ fontSize: '12px' }} />
              <span className="location-text">{locationText}</span>
            </div>
            <button className="card-expand-btn">
              <AddCircleOutlineIcon style={{ fontSize: '16px' }} />
            </button>
          </div>
          <div className="card-tam-value">R$ {displayTAM.toFixed(1)} bi</div>
          <div className="card-tam-description">
            Recursos {tamMode === 'fixo' ? 'fixos' : tamMode === 'variavel' ? 'variáveis' : 'totais'} disponíveis para o setor educacional
          </div>
        </div>
      </div>

      {/* Card SAM - Roxo claro */}
      <div className="metric-card-sam">
        <div className="card-sam-header">
          <div className="card-sam-icon-wrapper">
            <TrackChangesIcon className="card-sam-icon" style={{ fontSize: '16px' }} />
          </div>
          <Tooltip content={tooltipSAM} position="bottom">
            <button className="card-info-btn-sam">
              <InfoOutlinedIcon style={{ fontSize: '10px' }} />
            </button>
          </Tooltip>
        </div>
        <div className="card-sam-title">SAM</div>
        <div className="card-sam-value">R$ {sam.toFixed(1)}Bi</div>
        <div className="card-sam-description">
          Materiais didáticos & Sistema de ensino
        </div>
      </div>

      {/* Card KR - Container com 2 sub-cards */}
      <div className="metric-card-kr-container">
        <div className="card-kr-header">
          <div className="card-kr-icon-wrapper">
            <TrackChangesIcon className="card-kr-icon" style={{ fontSize: '18px' }} />
          </div>
          <div className="card-kr-title">
            <h3>KR - Penetração de mercado -</h3>
            <p>Métricas de mercado e performance comercial.</p>
          </div>
        </div>

        <div className="card-kr-content">
          {/* Sub-card: Penetração de mercado */}
          <div className="card-kr-subcard">
            <div>
              <div className="subcard-header">
                <div className="subcard-icon-wrapper">
                  <BarChartIcon className="subcard-icon" style={{ fontSize: '14px' }} />
                </div>
                <Tooltip content={tooltipPenetracao} position="bottom">
                  <button className="card-info-btn-small">
                    <InfoOutlinedIcon style={{ fontSize: '10px' }} />
                  </button>
                </Tooltip>
              </div>
              <div className="subcard-title-row">
                <div className="subcard-title">
                  PENETRAÇÃO<br/>DE MERCADO
                </div>
                <div className="subcard-toggle">
                  <button
                    className={`toggle-mini-btn ${penetracaoMode === 'tam' ? 'active' : ''}`}
                    onClick={() => setPenetracaoMode('tam')}
                  >
                    TAM
                  </button>
                  <button
                    className={`toggle-mini-btn ${penetracaoMode === 'sam' ? 'active' : ''}`}
                    onClick={() => setPenetracaoMode('sam')}
                  >
                    SAM
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="subcard-value blue">{penetracaoValue}%</div>
              <div className="subcard-description">
                Penetração Cogna pelo {penetracaoMode.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Sub-card: Vendas Cogna */}
          <div className="card-kr-subcard">
            <div>
              <div className="subcard-header">
                <div className="subcard-icon-wrapper">
                  <AttachMoneyIcon className="subcard-icon" style={{ fontSize: '14px' }} />
                </div>
                <Tooltip content={tooltipVendasCogna} position="bottom">
                  <button className="card-info-btn-small">
                    <InfoOutlinedIcon style={{ fontSize: '10px' }} />
                  </button>
                </Tooltip>
              </div>
              <div className="subcard-title-single">
                VENDAS COGNA
              </div>
            </div>
            <div>
              <div className="subcard-value purple">R$ {totalContratos.toFixed(0)}mi</div>
              <div className="subcard-description">
                Valor total considerando contas filtradas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricsCards;
