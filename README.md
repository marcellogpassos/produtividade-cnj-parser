# Produtividade CNJ Parser

Converta arquivos exportados do painel CNJ para JSON.

## Modo de usar

1. Acesse o Painel de [Produtividade Mensal do CNJ](https://paineis.cnj.jus.br/QvAJAXZfc/opendoc.htm?document=qvw_l%2FPainelCNJ.qvw&host=QVS%40neodimio03&anonymous=true&sheet=shPDPrincipal).
2. Clique na opção "Exportar para Excel".
3. Baixe o arquivo e abra-o com o Excel ou LibreOffice Calc.
4. Salve com o formato "`.csv`" utilizando como separador o caractere "`#`".
5. Copie o arquivo CSV gerado para o diretório "`/resources/input`"
6. No arquivo "`/src/file-reader.js`" altere o valor da variável `name` para o nome do arquivo CSV gerado.
7. Execute o script do arquivo "`/src/file-reader.js`".
8. O arquivo JSON de saída e um arquivo TXT contendo as linhas inválidas estarão localizados no diretório "`/resources/output`".
