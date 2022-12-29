<div id="test_section_html">
    <h1>Test d'affichange de mes battements de coeur</h1>
    
        <div id="sectionAchanger">
            <h2>Bonjour!</h2>
    
            <p class="couleurBattements">Voici mon coeur qui vous parle</p>
    
            <p>Mais premièrement il faut s'y connecter</p>
    
            <button class="connect-button" type="button">Connecter</button>
    
            <p>Il bat <span class="bpm">0</span> fois par minutes.</p>
        </div>
    
</div>
    
    
<<script>>
    // Ce script est à mettre dans un passage (au complet) et non dans la
    // section « Story Javascript ». 
    // Je ne suis pas encore arrivée à le faire fonctionner dans cette section, 
   $(document).on(':passageend', function (ev) {

    let BPM = ""
    const connectButton = document.querySelector('.connect-button')
    
    connectButton.addEventListener('click', function () {
        getReader();
        })


    function renderBPM() {
        const pulseColor = document.querySelector('.couleurBattements')
        const bpmPercent = document.querySelector('.bpm')
        bpmPercent.innerHTML = BPM
        window.requestAnimationFrame(renderBPM)
        pulseColor.style.backgroundColor = `rgb(0, ${BPM}, 0)`;

    }
    window.requestAnimationFrame(renderBPM)

    async function getReader() {
        console.log("function invoked")
        const port = await navigator.serial.requestPort({})
        await port.open({ baudRate: 115200 })
        // code for button here to write later

        const apprendStream = new WritableStream({
            write(chunk) {
                BPM = chunk
                console.log(chunk)
            }
        })
        port.readable.pipeThrough(new TextDecoderStream())
        .pipeTo(apprendStream)
    }

});
<</script>>