function mostrarDeclaracao() {
  const texto = `Meu amor... ❤️❤️  
Desde que você entrou na minha vida, tudo ficou mais bonito, mais leve, mais cheio de sentido... ❤️🌹  
Você é o meu pensamento constante, o meu sorriso bobo, a minha paz em dias turbulentos. ❤️💭  
Cada momento ao seu lado é um presente que eu agradeço todos os dias. 🎁❤️  
Eu te amo mais do que palavras conseguem dizer, mais do que os olhos podem ver, mais do que o coração pode suportar. ❤️🔥❤️  
Você é meu porto seguro, meu abraço favorito, meu sonho realizado. 💑❤️  
Prometo cuidar de você, te respeitar, te ouvir, te apoiar, te amar... sempre. ❤️🌟❤️  
Com você, aprendi o que é amor de verdade. ❤️💖  
E não importa o que aconteça, estarei sempre aqui, do seu lado, te amando com todas as forças do meu ser. ❤️💞❤️  
Você é tudo pra mim! ❤️❤️❤️  

E quando te olho nos olhos, vejo o meu futuro refletido neles... um futuro lindo, cheio de amor, risos, abraços e muitos momentos ao seu lado. 👀❤️💍  
Não quero apenas dias ao seu lado... quero uma vida inteira. 🌅❤️🕊️  
Você me completa de um jeito que nem eu sabia ser possível. 💓✨  
A cada bom dia, a cada boa noite, a cada mensagem sua... meu coração sorri. 📲💗💬  
Eu te escolho hoje, te escolho amanhã... e vou te escolher todos os dias da minha vida. ❤️🔒💫  
Te amar é o melhor sentimento que já experimentei, e eu nunca quero deixar de sentir isso. 🌈❤️🔥  
Você é meu lar. Meu destino. Meu eterno amor. 🏡❤️♾️  

Meu amooooorzinhoooo, senhorita OLIVANEEEE ❤️❤️❤️  
Sou eternamente grato por te ter em minha vidaaaaaaaaa ❤️💗💖  
Você literalmente mudou minha vida, coloriu minha vida que antes era totalmente cinza, sem motivos para aproveitar a vida... 🎨💞  
E hoje vejo que realmente encontrei o sentido da minha vida... ❤️  
O verdadeiro sentido da minha vida é, sem dúvidas, **AMAR VOCÊEEEEE** ❤️❤️❤️  
Muito obrigado por tudo que você faz por mim e por nós 🙏💕  
E saiba que seremos EU E VOCÊ PARA TOOOODO O SEMPREEEEEEE 💘  

Você é literalmente a NAMORADA MAIS PERFEITA DESSE MUNDOOOOO 💖👑  
Você é minha futura esposaaaaaaa 💍❤️  
Futura mãe dos meus filhos 👶👶👶  
Você é a RAZÃO DO MEU VIVERRRR ❤️❤️❤️  
E não se esqueça que looooogo looogo iremos casarrrr e viver juntinhos para SEMPREEEEEEEEE 🏠💑♾️  

E quando eu digo que te amo, não é força de expressão… é a verdade mais linda que já saiu da minha boca 💌❤️  
Mesmo que o mundo todo estivesse contra, mesmo que o tempo passasse voando… meu amor por você só aumentaria. ⏳❤️  
Você é meu presente, meu futuro, meu para sempre. 🌟❤️  
Você é o “eu te amo” mais verdadeiro que eu já senti. 💞💞  

Não há um só dia em que eu não agradeça por ter você na minha vida. 🙏💖  
Você é o abraço que me acolhe, o sorriso que me acalma, a voz que me tranquiliza, o toque que me aquece. 🤗❤️  
Você é meu universo inteiro, minha paz no caos, minha luz na escuridão. 🌌✨💓  
Te amar é a minha maior certeza, meu maior orgulho e minha maior felicidade. ❤️❤️❤️  

EU TE AMOOOOO INFINITAMENTEEEEEEEEEE MEU AMOOOOOOORRRRRR ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`;

  const mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = "";
  
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      mensagem.innerHTML += texto.charAt(i) === '\n' ? '<br>' : texto.charAt(i);
      i++;
      setTimeout(digitar, 10);
    }
  }

  digitar();
}
