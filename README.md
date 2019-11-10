### Avocato - projeto de plugin para validação de provas digitais. 
--- 
###### Instruções: 
 * Copie ou clone o repositório
 * Acesse o endereço chrome://extensions/ em seu navegador Chrome 
 * Habilite o modo desenvolvedor 
 * Clique na opção carregar sem compactação e selecione a pasta Avocato
 * * o plugin funcionará automaticamente em toda url relativa ao facebook 
 *  * Quando clicado o botão da extensão ( localizado no canto superior esquerdo de seu navegado) , será gerada uma caixa de popup com as seguintes informações :
 *    *  >>> * id de usuário fornecido pelo Facebook 
 *    *  >>> * tempo da requisião em formato de milissegundos
 *    * >>> * todas as url de imagens
 *    * >>> * todo o texto que estiver selecionado
 ---
features implementadas e ainda futuras: 
 [X] Comunicação com background do navegador
[X] Captura de texto selecionado 
[x] Captura de imagens 
[ ] aplicação de hash sobre todo o mateiral coletado
[ ] comunicação com banco de dados 
[ ] captura de toda a pagina, empacotamento e download local 
---
>>> ainda há dificuldades nessa questão porque a politica de segurança do facebook impede a inserção se código js na Dom da página, essa mesma dificuldade será visível na comunicação com o banco de dados 
----
###### ps : Uma possível linha de estudo para solucionar as dificuldades quando à política de privacidade talvez seja o uso de websockets para a comunicação com um servidor externo, a computação das hashs poderia ser feita nesse servidor bem como o envio de emails para os ousuários. Há testes dessa aplicação com o Firebase, mas a insersão do modulo no plugin ainda não foi possível. 
