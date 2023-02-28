function atualizarSelect() {
  let titulo = document.querySelector("#char-name")
  let character = document.querySelector("#charsList")
  let personagemSelecionado = character.options[character.selectedIndex]
  let img = document.querySelector("#charImage")
  let description = document.querySelector(".description")

  //alterando titulo superior de acordo com nome selecionado
  titulo.innerHTML = `${personagemSelecionado.text}`

  //mudando foto/descrição/lista de habilidades de acordo com personagem selecionado
  switch (personagemSelecionado.value) {
    case "Yuji-Itadori":
      img.src = "imagens/itadori.png"
      description.innerHTML = `Yuji é uma pessoa justa que realmente se preocupa não apenas com seus companheiros, mas com qualquer pessoa que ele veja que tenha vontade própria, apesar do quão profunda ou superficial é sua conexão com eles. Ele elogia muito 'o valor da vida' e, para esse fim, garantirá que outros recebam uma 'morte adequada'. Por causa disso, ele acredita que é moralmente antiético tirar outra vida humana e tenta evitar qualquer possibilidade de fazê-lo, a menos que seja o último recurso.`

      function addAbilitiesItadori() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newLi0.innerHTML = `Grande Energia Amaldiçoada`
        newLi1.innerHTML = `Punho Divergente (Keitei Ken) - Black Flash (Kokusen)`
        newLi2.innerHTML = `Votos Vinculativos - Yuji tem um voto de ligação sem nome com Sukuna Rei das Maldições.`

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `A cor do cabelo dele é natural.`
        newLi4.innerHTML = `Seu hobby é karaokê, assistir TV e imitações.`
        newLi5.innerHTML = `Causa do estresse: Assuntos científicos (ele falhou em ciências moleculares).`
      }
      onchange = addAbilitiesItadori()
      break

    case "Megumi-Fushiguro":
      img.src = "imagens/fushiguro.png"
      description.innerHTML =
        "Megumi é uma pessoa aparentemente estóica, distante e calculista. Ele geralmente tem uma expressão facial neutra que raramente muda e parece levar todas as situações a sério. Isso contrasta com as personalidades extrovertidas de Yuji, Nobara e Satoru, que muitas vezes irritam Megumi. Ele se irrita facilmente e Yuji notou que Megumi parece estar sempre um pouco zangado."
      function addAbilitiesFushiguro() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newLi0.innerHTML = `Manipulação de Energia Amaldiçoada`
        newLi1.innerHTML = `Invocação de Shikigamis: Cães Divinos / Nue / Grande Serpente / Sapo / Max Elefante / Fuga do Coelho / Espada de Oito Cabos `
        newLi2.innerHTML = `Expansão de domínio: Jardim das Sombras da Quimera - Um domínio que inunda a área com sombras fluidas que podem produzir rapidamente qualquer shikigami que Megumi deseje.`

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `Ele assiste ao noticiário e lê jornais, mas não acredita na metade deles.`
        newLi4.innerHTML = `Seu hobby é ler e ele gosta de não ficção.`
        newLi5.innerHTML = `Causa do estresse: Pessoas (quase todas). Quando seu shikigami é destruído, ele fica deprimido. Pessoas como Fushiguro ficam mais tristes com a morte de um animal do que pessoas que ele não conhece.`
      }
      onchange = addAbilitiesFushiguro()
      break

    case "Nobara-Kugisaki":
      img.src = "imagens/kugisaki.png"
      description.innerHTML =
        "Nobara é uma jovem confiante e impetuosa com um caráter inabalável. Mais do que tudo, Nobara está determinada a permanecer fiel a si mesma, aconteça o que acontecer. Ela tem muito orgulho de ser uma garota bonita e uma lutadora forte, recusando-se a deixar qualquer um influenciá-la."
      function addAbilitiesKugisaki() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newLi0.innerHTML = `Flash preto (Kokusen)`
        newLi1.innerHTML = `Técninca Inata: Técnica da Boneca de Palha / Ressonância / Gancho de cabelo.`
        newLi2.innerHTML = `Grande Energia Amaldiçoada : Nobara possui altas reservas de energia amaldiçoada e é especialista em manipulá-la. As unhas de Nobara estão constantemente imbuídas de sua energia amaldiçoada, permitindo que ela as levite para martelar facilmente`

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `Nobara tem pouco menos de 160 centímetros.`
        newLi4.innerHTML = `Nobara compra muita comida e experimenta muitas roupas, aproveitando a vida em Tóquio.`
        newLi5.innerHTML = `Causa do estresse: Desidratação`
      }
      onchange = addAbilitiesKugisaki()
      break

    case "Maki-Zen'in":
      img.src = "imagens/zenin.png"
      description.innerHTML =
        "Maki é uma pessoa muito obstinada, direta, capaz e motivada para escapar dos padrões que foram estabelecidos para ela por pessoas que deveriam ser sua família. Apesar de se sentir amaldiçoada por seu próprio sangue, Maki se motiva a se tornar uma feiticeira forte, independentemente do que sua família pensa. Ela quer quebrar o fundamento de seu modo de vida e rejeitá-lo completamente."
      function addAbilitiesZenin() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newLi0.innerHTML = `Nuvem brincalhona - É uma equipe de três seções que é descrita como poder puro, se parece com um nunchako de 3 partes, porém muito maior`
        newLi1.innerHTML = `Osso de Dragão - Ele pode acumular força e energia amaldiçoada, bem como ejetá-la na parte de trás da lâmina de acordo com a vontade do usuário.`
        newLi2.innerHTML = `Split Soul Katana`

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `Sua especialidade é esmagar latas vazias.`
        newLi4.innerHTML = `Maki guarda suas armas nas sombras de Fushiguro.`
        newLi5.innerHTML = `Maki originalmente possuía níveis muito baixos de energia amaldiçoada, ainda menos do que o não-feiticeiro médio. Ela não podia ver maldições sem óculos imbuídos de energia amaldiçoada, o requisito mais básico para ser considerado um feiticeiro. `
      }
      onchange = addAbilitiesZenin()
      break

    case "Toge-Inumaki":
      img.src = "imagens/inumaki.png"
      description.innerHTML =
        "A impressão inicial de Toge leva as pessoas a acreditarem que ele é uma pessoa quieta, indiferente e distante.No entanto, Toge é na verdade um indivíduo altamente perspicaz e atencioso. Ele é inteligente e entende os perigos de poderes esmagadores."
      function addAbilitiesInumaki() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        const newLi6 = document.createElement("li")
        const newLi7 = document.createElement("li")
        const newLi8 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newUl.appendChild(newLi6)
        newUl.appendChild(newLi7)
        newUl.appendChild(newLi8)
        newLi0.innerHTML = `Discurso Amaldiçoado (Jugon): Toge possui o selo "Snake & Fangs" do clã Inumaki em sua língua e em ambos os lados de sua boca.`
        newLi1.innerHTML = `" Explodir " faz com que o alvo de Toge exploda violentamente.`
        newLi2.innerHTML = `" Get Twisted " força um o alvo a se torcer a ponto de ficar completamente desfigurado.`
        newLi6.innerHTML = `" Get Crushed " faz com que o alvo imploda até que seja achatado.`
        newLi7.innerHTML = `" Desmoronar " cria um pequeno campo de gravidade intensamente pesada que esmaga o alvo até que ele seja violentamente enviado para o subsolo.`
        newLi8.innerHTML = `" Don't Move " ou " Stop " imobiliza completamente o alvo de Toge ou qualquer um de seus ataques.`

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `Toge carrega xarope para tosse para tratar sua garganta irritada sempre que está em batalha. `
        newLi4.innerHTML = `Leva meio ano para entender suas palavras inteiramente.`
        newLi5.innerHTML = `Ele é o melhor cozinheiro de todos os primeiros anos.`
      }
      onchange = addAbilitiesInumaki()
      break

    case "Panda":
      img.src = "imagens/panda.png"
      description.innerHTML =
        "Panda geralmente é um indivíduo muito otimista e calmo, com seu próprio senso de humor. Quando era mais jovem, ele falava de uma forma extremamente rebuscada, mais parecida com um computador, mas com o passar do tempo, Panda desenvolveu sua própria personalidade única. Panda vê os humanos como criaturas estranhas e não se esforça para ser como eles, embora os respeite como espécie."
      function addAbilitiesPanda() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newUl2 = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        const newLi3 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newUl2.appendChild(newLi3)
        newLi0.innerHTML = `Modo Panda`
        newLi1.innerHTML = `Modo Gorila`
        newLi2.innerHTML = `Modo Triceratops/Rinoceronte`
        newLi3.innerHTML = `Até hoje não sei o que é esse panda, uma marionete? um animal superdesenvolvido? um cara de fantasia? não sei de verdade`
      }
      onchange = addAbilitiesPanda()
      break

    case "Kokichi-Muta":
      img.src = "imagens/muta.png"
      description.innerHTML =
        "Kokichi era um indivíduo recluso e reservado que se ressentia de ter nascido sem um futuro fora do mundo do jujutsu. Ele orgulhosamente admitiu que devolveria cada grama de energia amaldiçoada para ganhar um corpo normal."
      function addAbilitiesMuta() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newLi0.innerHTML = `Restrição Celestial - Kokichi nasceu sem o braço direito e as duas pernas eram inúteis. Ele não sentia nada abaixo da cintura, sua pele era tão sensível que não podia ser tocada pela luz natural e os poros de seu corpo sempre pareciam estar sendo perfurados por agulhas. Em troca, ele recebeu quantidades ilimitadas de energia amaldiçoada que se espalha por uma vasta gama.`
        newLi1.innerHTML = `Manipulação de Marionetes (Kairai Sōjutsu) : A técnica de Kokichi permitiu que ele controlasse remotamente bonecos de cadáveres amaldiçoados em uma ampla gama.`
        newLi2.innerHTML = `Sōdo Opushon : Múltiplas lâminas se projetam do antebraço de Mechamaru, junto com suas unhas se estendendo. // `

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `Seu hobby é atuar em grupo`
        newLi4.innerHTML = `Kokichi nomeou seu mecha depois de um anime que ele gostou.`
        newLi5.innerHTML = `Seus pais acham que ele morreu muito antes de ser morto por Mahito , pois era o que Kokichi desejava.`
      }
      onchange = addAbilitiesMuta()
      break

    case "Aoi-Todo":
      img.src = "imagens/todo.png"
      description.innerHTML =
        "Aoi Todo é uma pessoa única com uma atitude extremamente excêntrica. Ele pode parecer nada mais do que um idiota enlouquecido por batalhas para todos os seus colegas, porque ele não apenas gosta de posar e exibir seus músculos, mas também se deleita com a emoção da batalha. Grande parte de sua personalidade também gira em torno de seu amor vocal por seu ídolo pop favorito, Takada-chan. Ele costuma trazê-la à conversa e se recusa a se atrasar para qualquer um de seus shows ou cumprimentá-la, não importa o que aconteça. Todo até visualiza falar com Takada às vezes quando ele tem um diálogo interno consigo mesmo."
      function addAbilitiesTodo() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newLi0.innerHTML = `Revelando a Mão (Jōhō no Kaiji) : Um voto de união comumente usado por muitos praticantes de Jujutsu. Ao divulgar como funciona sua técnica amaldiçoada, Aoi pode aumentar a eficácia de sua técnica, bem como enganar seus oponentes sobre como ela funciona.`
        newLi1.innerHTML = `Boogie Woogie (Bugi Ugi) : A técnica inata de Aoi permite que ele mude as posições de qualquer coisa com energia amaldiçoada dentro de seu alcance com um bater de palmas. Ele pode mudar a si mesmo com a localização de outra pessoa ou trocar duas partes diferentes além dele também.`
        newLi2.innerHTML = `Domínio Simples (Kan'i Ryōiki) : Um tipo de Técnica de Barreira que neutraliza ou neutraliza automaticamente todas as técnicas amaldiçoadas em uma área definida do espaço.`

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `Seu hobby é assistir Takada.`
        newLi4.innerHTML = `Aoi leva sua aparência muito a sério. Ele toma banho, passa desodorante e se arruma bem. Ele sempre cheira bem, o que enfurece as meninas da escola de Kyoto . `
        newLi5.innerHTML = `Ele quer se casar com Takada imediatamente, então ele não é fã da regra que proíbe os ídolos de namorar.`
      }
      onchange = addAbilitiesTodo()
      break

    case "Noritoshi-Kamo":
      img.src = "imagens/kamo.png"
      description.innerHTML =
        "Noritoshi normalmente é muito calmo e estóico na maioria das situações, seja na frente de seus aliados ou rivais. Excluindo Aoi, ele é um veterano e um líder para seus colegas na escola de Kyoto, exceto Aoi. Ele também sente uma afinidade com aqueles que vêm de famílias de feiticeiros como Megumi . Sua lealdade às famílias de feiticeiros distorceu seus sentimentos quando se trata dos outros."
      function addAbilitiesKamo() {
        // Criação de novos elementos de Ul e Li
        const newUl = document.createElement("ul")
        const newLi0 = document.createElement("li")
        const newLi1 = document.createElement("li")
        const newLi2 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl.innerHTML = `<br>Habilidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl.appendChild(newLi0)
        newUl.appendChild(newLi1)
        newUl.appendChild(newLi2)
        newLi0.innerHTML = `Alta Energia Amaldiçoada : Noritoshi provou estar pelo menos perto do poder de uma maldição de grau 1. Ele é capaz de desencadear várias técnicas de Manipulação de Sangue, uma após a outra, sem que elas percam a eficácia.`
        newLi1.innerHTML = `Flowing Red Scale (Sekirin Yakudō) : Aumenta a temperatura do corpo do usuário, a taxa de pulso e o número de glóbulos vermelhos para dar a si mesmos um grande aumento de energia e capacidades físicas.`
        newLi2.innerHTML = `Crimson Binding (Sekibaku) : Transforma o sangue em uma rede generalizada que prende firmemente o alvo.`

        // Criação de novos elementos de Ul e Li
        const newUl2 = document.createElement("ul")
        const newLi3 = document.createElement("li")
        const newLi4 = document.createElement("li")
        const newLi5 = document.createElement("li")
        // deve-se escolher o elemento onde ira anexar o novo filho
        description.appendChild(newUl2)
        //Alterando o conteúdo da nova elemento Ul criado
        newUl2.innerHTML = `<br>Curiosidades:`
        //para que funciona as Li's elas devem ser anexadas após o preenchimento do conteúdo da Ul
        newUl2.appendChild(newLi3)
        newUl2.appendChild(newLi4)
        newUl2.appendChild(newLi5)
        newLi3.innerHTML = `Seu hobby é estudar e tentar o TOEIC (900 pontos).`
        newLi4.innerHTML = `Noritoshi compartilha seu nome com outro membro da família Kamo, que estava vivo há mais de 150 anos e cujo corpo estava possuído pela entidade conhecida como Kenjaku.`
        newLi5.innerHTML = `Ele é um pouco mais alto que Megumi Fushiguro , que tem 175 cm.`
      }
      onchange = addAbilitiesKamo()
      break

    default:
      img.src = "imagens/Jujutsu-Kaisen.png"
      description.innerHTML =
        "Aqui você descobrirá a origem, habilidades, pontos fracos, gostos, crushs... tudo sobre seu personagem favorito."
      break
  }
}
