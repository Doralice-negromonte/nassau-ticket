## DER
```mermaid
erDiagram
    PERFIS ||--|{ USUARIOS : possui
    TIPOS_SENHA ||--|{ SENHAS : possui
    SENHAS ||--|{ ATENDIMENTOS : possui
    USUARIOS ||--|{ ATENDIMENTOS : realiza
    GUICHES ||--|{ ATENDIMENTOS : atende
    USUARIOS ||--|{ AUDITORIAS : gera
    GUICHES ||--|{ AUDITORIAS : registra
    SENHAS ||--|{ AUDITORIAS : vincula
```