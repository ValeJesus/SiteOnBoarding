import './Politicas.css';

function Politicas() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Políticas da Empresa</h1>
        <p>Diretrizes, normas e benefícios da GameOnTech</p>
      </header>

      <main className="politicas-content">
        {/* Diversidade e Inclusão */}
        <section className="politica-section">
          <h3>🌈 Diversidade e Inclusão</h3>
          <ul>
            <li><strong>Respeito Total:</strong> Não toleramos discriminação de qualquer tipo (raça, gênero, orientação sexual, religião, idade).</li>
            <li><strong>Ambiente Acolhedor:</strong> Todos são bem-vindos e valorizados.</li>
            <li><strong>Igualdade de Oportunidades:</strong> Processos seletivos e promoções são baseados em mérito.</li>
            <li><strong>Denúncias:</strong> Canal confidencial para relatar comportamentos inadequados.</li>
          </ul>
        </section>

        {/* Código de Conduta */}
        <section className="politica-section">
          <h3>📜 Código de Conduta</h3>
          <ul>
            <li><strong>Pontualidade:</strong> Respeite os horários de trabalho e reuniões.</li>
            <li><strong>Comunicação:</strong> Seja claro, respeitoso e profissional.</li>
            <li><strong>Colaboração:</strong> Trabalhe em equipe e ajude os colegas.</li>
            <li><strong>Feedback:</strong> Dê e receba feedback de forma construtiva.</li>
            <li><strong>Confidencialidade:</strong> Proteja informações sensíveis da empresa e clientes.</li>
          </ul>
        </section>

        {/* Benefícios */}
        <section className="politica-section">
          <h3>🎁 Benefícios</h3>
          <ul>
            <li><strong>Vale Refeição:</strong> R$ 30,00 por dia útil.</li>
            <li><strong>Vale Transporte:</strong> Custeado pela empresa.</li>
            <li><strong>Plano de Saúde:</strong> Cobertura nacional para você e dependentes.</li>
            <li><strong>Plano Odontológico:</strong> Opcional, com desconto em folha.</li>
            <li><strong>Gympass:</strong> Acesso a academias e estúdios de fitness.</li>
            <li><strong>Day Off:</strong> 1 dia de folga no mês do seu aniversário.</li>
            <li><strong>Home Office:</strong> 2 dias por semana (flexível).</li>
          </ul>
        </section>

        {/* Segurança da Informação */}
        <section className="politica-section">
          <h3>🔒 Segurança da Informação</h3>
          <ul>
            <li><strong>Senhas Fortes:</strong> Use senhas complexas e troque regularmente.</li>
            <li><strong>Autenticação 2FA:</strong> Obrigatória para sistemas críticos.</li>
            <li><strong>Dados Sensíveis:</strong> Nunca compartilhe por e-mail ou mensagens não criptografadas.</li>
            <li><strong>Dispositivos:</strong> Utilize apenas equipamentos autorizados pela empresa.</li>
            <li><strong>Backup:</strong> Salve seu trabalho regularmente no servidor corporativo.</li>
          </ul>
        </section>

        {/* Saúde e Bem-estar */}
        <section className="politica-section">
          <h3>💚 Saúde e Bem-estar</h3>
          <ul>
            <li><strong>Pausas Ativas:</strong> Faça intervalos a cada 2 horas.</li>
            <li><strong>Ergonomia:</strong> Ajuste sua estação de trabalho adequadamente.</li>
            <li><strong>Suporte Psicológico:</strong> Terapia online gratuita com 4 sessões/mês.</li>
            <li><strong>Licença Médica:</strong> Comunique a empresa e apresente atestado.</li>
            <li><strong>Equilíbrio Vida-Trabalho:</strong> Não respondemos mensagens fora do horário comercial.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Politicas;
