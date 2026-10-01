3\. REGRAS DE NEGÓCIO

| Código | Descrição |
| ----- | :---- |
| **RN01** | O sistema deve trabalhar com três tipos de senha: SP (Senha Prioritária), SE (Senha para retirada de Exames) e SG (Senha Geral). |
| **RN02** | A SP possui a maior prioridade de atendimento. |
| **RN03** | A SG possui a menor prioridade de atendimento. |
| **RN04** | A SE deve ser chamada após uma SP, quando houver uma SP disponível. |
| **RN05** | A sequência de atendimento deve seguir o modelo: SP → SE/SG → SP → SE/SG. |
| **RN06** | Qualquer guichê pode atender qualquer tipo de senha. |
| **RN07** | Caso uma fila esteja vazia, o próximo atendimento deve ser definido respeitando as regras de prioridade disponíveis. |
| **RN08** | Após duas chamadas sem o comparecimento do cliente, a senha deve ser considerada como não comparecida/abandonada. |
| **RN09** | O expediente de atendimento ocorre das 07h às 17h. |
| **RN10** | Os atendimentos iniciados antes do encerramento do expediente devem ser finalizados pelo atendente. |
| **RN11** | As senhas que permanecerem na fila ao final do expediente devem ser descartadas. |
| **RN12** | A numeração da senha deve seguir o formato YYMMDD-PPSQ. |
| **RN13** | A sequência numérica da senha deve possuir três dígitos e reiniciar diariamente. |
| **RN14** | O painel deve apresentar somente as cinco últimas senhas chamadas. |
| **RN15** | A próxima senha não deve ser apresentada no painel antes de sua chamada. |
| **RN16** | Uma senha deve seguir os estados definidos: EMITIDA, AGUARDANDO, CHAMADA, CHAMADA\_NOVAMENTE, EM\_ATENDIMENTO e ATENDIDA. |
| **RN17** | Uma senha pode assumir o estado NÃO\_COMPARECEU quando o cliente não comparecer após as chamadas previstas. |
| **RN18** | O cliente deve poder emitir senha sem realizar login. |
| **RN19** | O acesso às funcionalidades do atendente deve exigir autenticação. |

