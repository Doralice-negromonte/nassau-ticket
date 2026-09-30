## Relações

| Relação                     | Cardinalidade |
| --------------------------- | ------------- |
| `PERFIS` → `USUARIOS`       | 1:N       |
| `TIPOS_SENHA` → `SENHAS`    | 1:N      |
| `SENHAS` → `ATENDIMENTOS`   | 1:N      |
| `USUARIOS` → `ATENDIMENTOS` | 1:N      |
| `GUICHES` → `ATENDIMENTOS`  | 1:N      |
| `USUARIOS` → `AUDITORIAS`   | 1:N      |
| `GUICHES` → `AUDITORIAS`    | 1:N      |
| `SENHAS` → `AUDITORIAS`     | 1:N     |


## Chaves estrangeiras
- `Usuario`  → perfil_id
- `Senha`  → tipo_senha_id
- `Atendimento`  → senha_id, atendente_id, guiche_id
- `Auditoria`  → usuario_id, guiche_id, senha_id

## Perfil e Usuario
Perfil = Atendente ou gestor
Usuario = As pessoas que iram atender ou gerir (EX: Maria, José, etc)

## Senhas e varios atendimentos
É colocado dessa forma por questões de posibilidade de rechamada 