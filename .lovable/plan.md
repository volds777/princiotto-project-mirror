# Expansão orgânica SEO/AEO

## Objetivo
Adicionar ao site aprovado uma rede de páginas orgânicas exclusivas, preservando integralmente todas as páginas, URLs, identidade visual, navegação e integrações atuais.

## Escopo de implementação
1. **Auditoria e deduplicação**
   - Classificar cada intenção do briefing como existente, criar, consolidar ou proibida.
   - Preservar sem alterações as 12 páginas atuais, incluindo Osasco, Barueri, Alphaville, Santana de Parnaíba e São Paulo.
   - Excluir todas as localidades e pautas marcadas como “NÃO”.

2. **Cluster geográfico**
   - Criar primeiro as localidades prioritárias ainda ausentes: Vila Yara, Vila Campesina, Centro e Bela Vista de Osasco; Alto da Lapa, Alto de Pinheiros, Vila Leopoldina, Perdizes, Pompéia, Sumaré, Vila Madalena, Vila Romana, Vila São Francisco, Itaim Bibi, Vila Olímpia, Centro de Barueri, Tamboré, Centro de Santana de Parnaíba e Granja Viana.
   - Depois cadastrar as demais localidades autorizadas, incluindo as três cidades do interior.
   - Cada página terá contexto local próprio, desafios, abordagem, FAQ, CTA e relações geográficas coerentes — sem troca automática de nomes.

3. **Clusters de intenção**
   - Criar páginas de serviços/soluções, problemas, públicos, tipos de condomínio e guias AEO descritos no briefing.
   - Consolidar intenções equivalentes para evitar canibalização, como recuperação financeira, prestação de contas, modernização, transição de gestão e páginas para administradoras.
   - Tratar atividades integrantes da sindicatura como abordagem/etapa, não como produto avulso inventado.

4. **Conteúdo e confiança**
   - Usar exclusivamente fatos e cases autorizados.
   - Não atribuir experiência comprovada em condomínios mistos, horizontais ou de alto padrão.
   - Não criar promessas garantidas, números, depoimentos, endereços, unidades ou atuação jurídica inexistentes.
   - Aplicar respostas diretas, definições claras, listas e FAQs visíveis para SEO e mecanismos de resposta.

5. **Integração técnica**
   - Alimentar as coleções e o registro central existentes, reutilizando os arquétipos e o visual atual.
   - Gerar metadata exclusiva, canonical próprio, breadcrumbs, Open Graph, Twitter Card e JSON-LD adequado por página.
   - Conectar de 4 a 10 páginas relacionadas por contexto e manter todas as novas URLs no sitemap e no prerender estático.

6. **Validação**
   - Confirmar ausência de colisões, páginas proibidas, textos clonados, rotas órfãs e canonical incorreto.
   - Validar páginas novas e atuais em desktop/mobile, metadados, schemas, links, sitemap e HTML estático final.
   - Entregar um resumo de URLs existentes, criadas, consolidadas e deliberadamente não criadas.

## Detalhes técnicos
- A implementação permanecerá React + Vite/TanStack Start, com navegação SPA e saída pública pré-renderizada em `dist/client`.
- As páginas novas serão servidas pelo registro de dados e pela rota dinâmica existente; as rotas atuais continuarão usando seus arquivos e páginas originais.
- O registro continuará sendo a fonte única para SEO, sitemap, prerender, breadcrumbs e relações internas.
