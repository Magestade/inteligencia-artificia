const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que o mundo precisa de heroi?",
        alternativas: [
            {
                texto: "Não pode existir herois, porque se existir herois vai existir viloẽs!",
                afirmacao: "quem sabe o que se passa na mente de um heroi"
            },
            {
                texto: "Sera muitos mais seguro no mundo enteiro",
                afirmacao: "o mundo precisa de uma heroi "
            }
        ]
    },
    {
        enunciado: "Os videogame podem ajudar ou prejudicar?",
        alternativas: [
            {
                texto: "Os viodegame são prejudicar as pessoas fora prejudicar a visão e perder muito tempo da sua vida",
                afirmacao: "muitos pessoas falaram que jogos fluencia aviolencia "
            },
            {
                texto: "Os viodegame ajudar as pessos a relachar, focar e trabalho em grupo fora ajudar a se concentra",
                afirmacao: "viodegame ajudar muitas a sair de momentos de muitos extrece"
            }
        ]
    },
    {
        enunciado: "Qual é o melhor personagem Deadpool ou Arlequina.?",
        alternativas: [
            {
                texto: "Arlequina porque ela é muito poucas ideias ela é muito incrivel",
                afirmacao: "Um personagem que não nescesita de super poderes ."
            },
            {
                texto: "Deadpool porque ele é muita loucura, ele faz besteiras e quebra a 4 e ele é muito brincalhão ",
                afirmacao: "mesmo ele sendo louco ele tem um senço de justiça"
            }
        ]
    },
    {
        enunciado: "Você gostaria de ser um presonagem de transformers ?",
        alternativas: [
            {
                texto: "Quaro porque eu seria um Autobot",
                afirmacao: "salvarei centenas dos meus companheiros de e destruirei os nossos inimigos "
            },
            {
                texto: "Não porque se eu aparecer em uma parte morro ou sou desvalorivados na segunda parte",
                afirmacao: "as pessoas não valorisa os presonagem de transformer ou elas são super esquecidos, desvalorisados ou morre  "
            }
        ]
    },
    {
        enunciado: "Você prefere serie ou filme ",
        alternativas: [
            {
                texto: "Filme são muito melhor",
                afirmacao: "filme é coisa que tem ele mostra as melhores atuação"
            },
            {
                texto: "Serie sempre insentiva agente assestir mais episodio ",
                afirmacao: "Serie mostra muito mais opição para vocễ"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
