# Barbearia Premium - Landing Page

Landing page responsiva para barbearia premium desenvolvida com React, TypeScript, Vite e Tailwind CSS.

## Visão geral

Este projeto entrega uma página estática moderna com:

- Header fixo e responsivo com menu mobile
- Seção hero com chamada para ação
- Cards de serviços com preços
- Seção de contato com informações e botão de WhatsApp
- Footer com links externos para Instagram, WhatsApp e localização
- Estilo escuro com detalhes em dourado

## Stack

- React 19
- TypeScript 6
- Vite
- Tailwind CSS 4
- `@tailwindcss/vite`
- `lucide-react` para ícones

## Scripts principais

- `npm install` – instala dependências
- `npm run dev` – inicia o servidor de desenvolvimento
- `npm run build` – gera a versão de produção
- `npm run lint` – executa o ESLint no projeto
- `npm run preview` – pré-visualiza o build

## Estrutura do projeto

- `index.html` – entrada HTML padrão do Vite
- `src/main.tsx` – bootstrap da aplicação React
- `src/App.tsx` – composição das seções principais
- `src/styles/globals.css` – import Tailwind e definição de tema
- `src/components/` – componentes de UI da landing page
  - `Header.tsx` – navegação fixa e responsiva
  - `Hero.tsx` – seção de destaque com CTA
  - `Services.tsx` – grade de serviços
  - `ServiceCard.tsx` – cartão individual de serviço
  - `Contact.tsx` – informações e botão de contato
  - `share/` – componentes reutilizáveis
    - `Button.tsx` – botão estilizado
    - `Footer.tsx` – rodapé com links sociais

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal para ver a aplicação.

## Como construir para produção

```bash
npm run build
```

Após o build, a pasta `dist/` conterá os arquivos prontos para deploy.

## Detalhes importantes

- O projeto usa `@tailwindcss/vite` para processar Tailwind no Vite.
- O CSS global importa Tailwind diretamente e adiciona a variável `--color-yellow-primary`.
- O Header possui comportamento responsivo com menu mobile e `backdrop-blur`.
- O botão principal reutiliza o componente `Button` com variantes de estilo.

## Customização

Você pode personalizar facilmente:

- `src/assets/logo-barbearia.jpg` e `src/assets/hero-barbershop.jpg` para imagens próprias
- textos das seções `Hero`, `Services` e `Contact`
- URLs do WhatsApp e redes sociais no `Footer`

## Notas

- A navegação interna usa ancora por ID, facilitando seções únicas na mesma página.
- O layout já está preparado para desktop e mobile, com grade adaptativa em `Services`.

---

Desenvolvido como landing page de barbearia premium usando boas práticas de UI e responsividade.
