# Site institucional — Espaço Terapêutico AMAR

Prévia local do site institucional da Clínica AMAR.

## Estado

- **Prévia local pronta para aprovação visual.**
- Nenhum conteúdo foi publicado, nenhum DNS foi alterado e nenhuma infraestrutura foi provisionada.
- O arquivo usa somente a marca oficial já utilizada pelo CRM AMAR.
- Não contém dados de pacientes, telefones, endereço, especialidades, profissionais ou promessas clínicas não aprovadas.

## Abrir a prévia

```bash
cd /root/work/clinica-amar-site
python3 -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## Conteúdo que a Clínica precisa validar antes da publicação

1. Nome institucional exato e razão social, se aparecer no rodapé.
2. Especialidades e descrição de cada atendimento.
3. Profissionais, registros e fotos autorizadas.
4. WhatsApp, telefone, e-mail, endereço, mapa, horários e área atendida.
5. Texto de privacidade/LGPD e responsável pelo recebimento de contatos.
6. Domínio e ambiente de hospedagem.

## Próxima fase após aprovação visual

Converter a prévia em site administrável (WordPress em staging privado ou outro CMS aprovado), com formulário que salva leads com segurança, páginas de serviços, equipe, contato, política de privacidade, backup e validação mobile/desktop.
