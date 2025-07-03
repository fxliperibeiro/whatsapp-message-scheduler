<div align="center">
  <a href="README.md">🇺🇸 English</a> | <strong>🇧🇷 Português (Brasil)</strong>
</div>
<br>

# Agendador de Mensagens para WhatsApp ✨

Um bot flexível e fácil de configurar para agendar e automatizar o envio de mensagens no WhatsApp, feito com Node.js. Construído com Baileys e `node-schedule`, e com tipagem verificada via JSDoc para maior confiabilidade.

---

### 🚀 Características

- **Agendamento via Cron**: Agende mensagens com todo o poder das expressões cron.
- **Configuração Fácil**: Gerencie todos os seus agendamentos em um único arquivo `schedules.json`.
- **Ativar e Desativar Tarefas**: Habilite ou desabilite tarefas agendadas facilmente, sem precisar deletá-las.
- **Conexão Confiável**: Utiliza o `baileys` para uma conexão estável com o WhatsApp Web.
- **JS com Tipagem**: Código JavaScript moderno com anotações JSDoc para melhor qualidade de código e autocompletar.

---

### 🔧 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [baileys](https://github.com/WhiskeySockets/Baileys)
- [node-schedule](https://github.com/node-schedule/node-schedule)
- [chalk](https://github.com/chalk/chalk) (para logs coloridos)

---

### ⚙️ Instalação e Configuração

Siga estes passos para deixar sua instância do bot pronta para rodar.

**1. Pré-requisitos**
- Tenha o [Node.js](https://nodejs.org/en/download/) (v16 ou superior) instalado.

**2. Clone o Repositório**
```bash
git clone [https://github.com/fxliperibeiro/whatsapp-message-scheduler.git](https://github.com/fxliperibeiro/whatsapp-message-scheduler.git)
cd whatsapp-message-scheduler
````

**3. Instale as Dependências**

```bash
npm install
```

**4. Configure seus Agendamentos**
Crie um arquivo `schedules.json` na raiz do projeto e adicione suas tarefas.

**Exemplo de `schedules.json`:**

```json
[
  {
    "id": "bom-dia-equipe",
    "recipientJid": "120363043992591965@g.us",
    "message": "Bom dia, equipe! Tenham um ótimo dia! ☀️",
    "cronTime": "0 9 * * 1-5",
    "enabled": true
  },
  {
    "id": "lembrete-pessoal",
    "recipientJid": "5511999999999@s.whatsapp.net",
    "message": "⚠️ Não se esqueça de checar os e-mails!",
    "cronTime": "0 14 * * *",
    "enabled": true
  }
]
```

**Explicação dos Campos:**

  - `id`: Um nome único para sua tarefa.
  - `recipientJid`: O ID do destinatário.
      - Para contatos pessoais: `CODIGO_PAIS` + `NUMERO_TELEFONE` + `@s.whatsapp.net` (ex: `5511999999999@s.whatsapp.net`)
      - Para grupos: O ID do grupo, que você pode obter logando um evento de mensagem de grupo. Termina com `@g.us`.
  - `message`: A mensagem de texto a ser enviada.
  - `cronTime`: O agendamento no formato cron (`minuto hora dia-do-mês mês dia-da-semana`).
  - `enabled`: Defina como `true` para ativar a tarefa ou `false` para desativá-la.

-----

### ▶️ Executando o Bot

**Para desenvolvimento (com reinício automático ao salvar arquivos):**

```bash
npm run dev
```

**Para produção:**

```bash
npm start
```

**Primeira Execução: Escanear o QR Code**
Na primeira vez que você rodar o bot, um QR Code aparecerá no seu terminal. Escaneie-o com o aplicativo do WhatsApp no seu celular (em `Aparelhos Conectados`) para conectar sua conta. Um arquivo de sessão será criado na pasta `auth/`, então você não precisará escanear novamente, a menos que se desconecte.

-----

### 📜 Licença

Distribuído sob a licença MIT.
