import {
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  GitBranch,
  LockKeyhole,
  Monitor,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
  Zap,
} from 'lucide-react'

// URLs diretas de alta velocidade via GitHub Media CDN (sem limitação de tamanho de 100MB da Vercel/Netlify)
const WIN_DOWNLOAD_URL = 'https://media.githubusercontent.com/media/phelipedel/telinhaaovivosite/main/public/instalador/TelinhaAoVivo.exe'
const APK_DOWNLOAD_URL = 'https://media.githubusercontent.com/media/phelipedel/telinhaaovivosite/main/public/instalador/TelinhaAoVivo.apk'

const features = [
  {
    icon: Monitor,
    title: 'Conexão em tempo real',
    description: 'Crie uma sala, compartilhe o código e comece a transmitir em poucos segundos.',
    accent: 'cyan',
  },
  {
    icon: Zap,
    title: 'Latência baixíssima',
    description: 'A tecnologia WebRTC envia a tela diretamente entre os dispositivos, sem intermediários.',
    accent: 'green',
  },
  {
    icon: Smartphone,
    title: 'PC & Mobile',
    description: 'Disponível tanto para computador Windows quanto para smartphones e tablets Android.',
    accent: 'violet',
  },
  {
    icon: Wifi,
    title: 'Chat em tempo real',
    description: 'Converse com todos na sala usando canais Realtime WebSockets do Supabase, com mensagens instantâneas e sincronizadas.',
    accent: 'blue',
  },
]

const steps = [
  ['01', 'Baixe o app', 'Instale o TelinhaAoVivo no seu computador Windows ou baixe o APK no Android.'],
  ['02', 'Crie uma sala', 'O anfitrião gera um código exclusivo para a transmissão.'],
  ['03', 'Compartilhe a tela', 'Envie o código para quem deve assistir e conecte-se na hora.'],
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="site-shell">
        <header className="nav-wrap">
          <nav className="nav container" aria-label="Navegação principal">
            <a href="#inicio" className="brand" aria-label="TelinhaAoVivo início">
              <span className="brand-mark">
                <img src="/icon.png" alt="TelinhaAoVivo" className="brand-logo-img" />
              </span>
              <span>Telinha<span>AoVivo</span></span>
            </a>
            <div className="nav-links">
              <a href="#recursos">Recursos</a>
              <a href="#seguranca">Segurança</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#chat">Chat</a>
            </div>
            <div className="nav-cta-group">
              <a className="nav-cta" href={WIN_DOWNLOAD_URL} download="TelinhaAoVivo-Setup-0.0.5.exe" title="Baixar para PC (Windows)">
                <Monitor size={14} /> PC
              </a>
              <a className="nav-cta nav-cta-apk" href={APK_DOWNLOAD_URL} download="TelinhaAoVivo.apk" title="Baixar APK para Android">
                <Smartphone size={14} /> APK Android
              </a>
            </div>
          </nav>
        </header>

        <section id="inicio" className="hero container">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="live-dot" /> Compartilhamento simples. Conexão direta.</div>
            <h1>Sua tela.<br /><span>Ao vivo.</span> Sem complicação.</h1>
            <p className="hero-text">O TelinhaAoVivo conecta pessoas através da tela, com velocidade, privacidade e uma experiência que simplesmente funciona no seu computador e celular.</p>
            <div className="hero-actions">
              <a className="button-primary" href={WIN_DOWNLOAD_URL} download="TelinhaAoVivo-Setup-0.0.5.exe">
                <Download size={18} /> Baixar para Windows <Monitor size={17} />
              </a>
              <a className="button-secondary" href={APK_DOWNLOAD_URL} download="TelinhaAoVivo.apk">
                <Download size={18} /> Baixar APK Android <Smartphone size={17} />
              </a>
              <a className="button-ghost" href="#como-funciona">Conheça o app <ChevronRight size={17} /></a>
            </div>
            <div className="compatibility"><Check size={15} /> Gratuito para começar <span /> <Check size={15} /> Leve e rápido <span /> <Check size={15} /> P2P criptografado <span /> <Check size={15} /> Windows & Android</div>
          </div>

          <div className="hero-visual reveal-float" aria-label="Prévia de uma sala conectada">
            <div className="visual-glow" />
            <div className="app-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>TelinhaAoVivo</span><span className="window-status"><span className="status-dot" /> conectado</span></div>
              <div className="window-body">
                <div className="screen-preview"><div className="screen-grid" /><div className="screen-label"><span className="pulse-ring" /> Tela do anfitrião</div><div className="screen-center"><Monitor size={36} /><span>transmitindo agora</span></div></div>
                <div className="room-panel"><div className="panel-label">SALA CONECTADA <span className="green-pill">AO VIVO</span></div><div className="room-code">TLA-<strong>7K4P</strong></div><div className="room-divider" /><div className="viewer"><span className="avatar">V</span><div><strong>Você está assistindo</strong><small>Conexão P2P estabelecida</small></div><Wifi size={16} className="wifi-icon" /></div></div>
              </div>
              <div className="window-footer"><span><LockKeyhole size={13} /> conexão protegida</span><span>WebRTC <b>●</b></span></div>
            </div>
            <div className="float-tag tag-top"><Sparkles size={14} /> Sem servidor no caminho</div>
            <div className="float-tag tag-bottom"><span className="status-dot" /> transmissão estável</div>
          </div>
        </section>

        <section id="recursos" className="features-section container">
          <div className="section-heading"><div><span className="section-kicker">POR QUE TELINHAAOVIVO</span><h2>Feito para você<br /><em>compartilhar.</em></h2></div><p>Do primeiro clique à tela compartilhada, tudo foi pensado para ser direto, seguro e agradável de usar.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, description, accent }) => <article className={`feature-card ${accent}`} key={title}><div className="feature-icon"><Icon size={21} /></div><h3>{title}</h3><p>{description}</p><a href="#como-funciona">Saiba mais <ArrowRight size={14} /></a></article>)}</div>
        </section>

        <section id="como-funciona" className="steps-section container"><div className="section-heading centered"><span className="section-kicker">TÃO SIMPLES QUANTO PARECE</span><h2>Comece em <em>três passos.</em></h2></div><div className="steps-grid">{steps.map(([number, title, description]) => <div className="step" key={number}><div className="step-number">{number}</div><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></section>

        <section id="chat" className="chat-section container"><div className="chat-card"><div className="chat-copy"><span className="section-kicker">CONVERSA SINCRONIZADA</span><h2>O chat acompanha<br /><em>a transmissão.</em></h2><p>Enquanto o vídeo segue por WebRTC P2P, o chat usa os canais Realtime WebSockets do Supabase para entregar cada mensagem instantaneamente a quem está na sala.</p><div className="chat-list"><span><Wifi size={17} /> Túnel exclusivo por código da sala</span><span><Zap size={17} /> Broadcast em tempo real</span><span><Check size={17} /> Status de aprovação e conexão</span><span><LockKeyhole size={17} /> Até 1.000 caracteres por mensagem</span></div></div><div className="chat-preview" aria-label="Prévia do chat em tempo real"><div className="chat-preview-header"><span><span className="status-dot" /> Conectado</span><small>room-chat-ABC12</small></div><div className="messages"><div className="message other">Tudo pronto para assistir?<small>agora</small></div><div className="message own">Sim, pode começar.<small>agora</small></div><div className="message other">Perfeito. Boa sessão!</div></div><div className="chat-input">Digite uma mensagem... <span>Enter</span></div></div></div></section>

        <section id="seguranca" className="security-section container"><div className="security-card"><div className="security-copy"><span className="section-kicker">PRIVACIDADE POR PADRÃO</span><h2>A sua tela é <em>só sua.</em></h2><p>O vídeo vai diretamente de uma ponta à outra. O TelinhaAoVivo usa a força do WebRTC para manter sua transmissão rápida e protegida.</p><div className="security-list"><span><ShieldCheck size={17} /> Criptografia DTLS e SRTP</span><span><LockKeyhole size={17} /> Salas protegidas por código</span><span><Check size={17} /> Isolamento seguro P2P</span></div></div><div className="security-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="shield"><ShieldCheck size={44} /></div><span className="orbit-label label-one">P2P</span><span className="orbit-label label-two">SRTP</span></div></div></section>

        <section className="download-section container">
          <div className="download-card">
            <div>
              <span className="section-kicker">PRONTO PARA COMEÇAR?</span>
              <h2>Coloque sua tela<br /><em>ao vivo.</em></h2>
              <p>Baixe o TelinhaAoVivo para o seu computador ou celular e conecte-se em poucos cliques.</p>
            </div>
            <div className="download-actions-grid">
              <a className="button-primary large" href={WIN_DOWNLOAD_URL} download="TelinhaAoVivo-Setup-0.0.5.exe">
                <Download size={19} /> Baixar para Windows <small>(PC .exe v0.0.5)</small>
              </a>
              <a className="button-secondary large" href={APK_DOWNLOAD_URL} download="TelinhaAoVivo.apk">
                <Download size={19} /> Baixar APK Android <small>(.apk)</small>
              </a>
            </div>
          </div>
        </section>

        <section className="creator-section container"><div className="creator-card"><div className="creator-mark"><Sparkles size={22} /></div><div><span className="section-kicker">DESENVOLVIDO COM PROPÓSITO</span><h2>Por <em>Phelipe Del.</em></h2><p>Compartilhe seus filmes, trabalhos e gameplays com total segurança. Este é um projeto nascido da missão de conectar pessoas de forma direta, transformando a tecnologia em uma experiência simples e prática para todos.</p></div></div></section>

        <footer className="footer container">
          <a href="#inicio" className="brand">
            <span className="brand-mark">
              <img src="/icon.png" alt="TelinhaAoVivo" className="brand-logo-img" />
            </span>
            <span>Telinha<span>AoVivo</span></span>
          </a>
          <span>Compartilhe o que importa.</span>
          <div className="footer-right">
            <span>© 2026 TelinhaAoVivo</span>
            <a href="https://github.com/phelipedel/telinhaaovivosite" aria-label="GitHub"><GitBranch size={17} /></a>
          </div>
        </footer>
      </div>
    </main>
  )
}
