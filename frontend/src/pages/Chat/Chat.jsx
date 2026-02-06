import { useState } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'system',
      text: 'Olá! Sou o assistente virtual da GameOnTech. Como posso ajudar você hoje?',
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');

  const quickReplies = [
    'Quais são os benefícios?',
    'Como funciona o home office?',
    'Onde fica o escritório?',
    'Qual o horário de trabalho?'
  ];

  const getResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('beneficio') || msg.includes('benefício')) {
      return 'Oferecemos: Vale Refeição (R$ 30/dia), Plano de Saúde, Gympass, Day Off no aniversário, e Home Office 2x/semana. 😊';
    }
    
    if (msg.includes('home office') || msg.includes('remoto')) {
      return 'Você pode trabalhar remotamente 2 dias por semana. Basta combinar com seu gestor os dias mais adequados!';
    }
    
    if (msg.includes('escritório') || msg.includes('escritorio') || msg.includes('endereço') || msg.includes('endereco')) {
      return 'Nosso escritório fica no Itaim Bibi, São Paulo. A recepção está aberta de segunda a sexta, das 09h às 18h.';
    }
    
    if (msg.includes('horário') || msg.includes('horario') || msg.includes('trabalho')) {
      return 'O expediente é de segunda a sexta, das 09h às 18h, com 1 hora de almoço flexível. Além disso, temos coffee break às 15h!';
    }
    
    if (msg.includes('férias') || msg.includes('ferias')) {
      return 'Após 12 meses de trabalho, você tem direito a 30 dias de férias. Pode dividir em até 3 períodos se preferir.';
    }
    
    if (msg.includes('onboarding') || msg.includes('integração') || msg.includes('integracao')) {
      return 'O processo de onboarding dura cerca de 2 semanas. Você terá treinamentos, reuniões com a equipe e acesso a todos os recursos.';
    }
    
    if (msg.includes('obrigado') || msg.includes('obrigada') || msg.includes('valeu')) {
      return 'Por nada! Estou sempre por aqui se precisar de ajuda. 😊';
    }
    
    return 'Desculpe, não entendi sua pergunta. Tente perguntar sobre: benefícios, home office, horários, ou escritório.';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'system',
        text: getResponse(input),
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Chat Virtual</h1>
        <p>Tire suas dúvidas com nosso assistente virtual</p>
      </header>

      <main className="chat-content">
        <div className="chat-container">
          {/* Mensagens */}
          <div className="messages-area">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-bubble">
                  <p>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Respostas Rápidas */}
          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="quick-reply-btn"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-btn" onClick={handleSend}>
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chat;
