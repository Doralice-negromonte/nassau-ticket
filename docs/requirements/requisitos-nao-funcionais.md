2\. Requisitos Não Funcionais

| CÓDIGO | DESCRIÇÃO | PRIORIDADE |
| :---- | :---- | :---- |
| RNF01  | O sistema deve proteger o acesso às funcionalidades restritas aos atendentes e gestores. | alta |
| RNF02 | As senhas dos usuário devem ser armazenadas utilizando mecanismo de hash adequado | alta |
| RNF03 | O sistema deve diferenciar as permissões através do controle de acesso | alta |
| RNF04  | As operações relevantes devem poder ser rastreadas, para identificar: quem realizou a ação; qual senha estava envolvida; qual guichê; quando aconteceu.  | alta |
| RNF05  | O sistema deve responder adequadamente às operações de:emissão de senha; chamada; início de atendimento; finalização; consulta do painel.  | alta |
| RNF06  | O sistema deve impedir que dois atendentes recebam a mesma próxima senha quando solicitarem praticamente ao mesmo tempo.  | alta |
| RNF07  | Ao final do expediente, que ocorre das ocorrer das 7h às 17h, senhas que permanecerem na fila deverão ser descartadas  | media |
| RNF08  | O sistema deve utilizar react para o front e [Node.js](http://Node.js) com express para o back, além do banco de dados MySQL | alta |

