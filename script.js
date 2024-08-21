document.addEventListener('DOMContentLoaded', () => {
    const words = [
        // Arabic
        'سلام', 'مرحبا', 'حب', 'أمل', 'صداقة', 'سعادة', 'حزن', 'قوة', 'سلام', 
        'ثقة', 'حرية', 'إبداع', 'تعاون', 'نجاح', 'تفاؤل', 'طموح', 'حياة', 'أمل', 'تحدي', 
        'صبر', 'فرح', 'جمال', 'حلم', 'كرم', 'صحة', 'شجاعة', 'كرامة', 'حرية', 'سلام', 
        'تقدير', 'فرصة', 'صدق', 'إيمان', 'رحمة', 'حب', 'عطاء', 'تجربة', 'سفر', 'عائلة',
    
        // Spanish
        'Hola', 'Gracias', 'Amor', 'Esperanza', 'Felicidad', 'Amistad', 'Fuerza', 'Paz', 'Confianza', 
        'Libertad', 'Creatividad', 'Colaboración', 'Éxito', 'Optimismo', 'Ambición', 'Vida', 'Desafío', 
        'Paciencia', 'Alegría', 'Belleza', 'Sueño', 'Generosidad', 'Salud', 'Valor', 'Dignidad', 
        'Apreciación', 'Oportunidad', 'Sinceridad', 'Fe', 'Compasión', 'Donar', 'Experiencia', 
        'Viajar', 'Familia', 'Saber', 'Respeto', 'Gratitud',
    
        // German
        'Hallo', 'Danke', 'Liebe', 'Hoffnung', 'Freude', 'Freundschaft', 'Kraft', 'Frieden', 
        'Vertrauen', 'Freiheit', 'Kreativität', 'Erfolg', 'Optimismus', 
        'Ambition', 'Leben', 'Geduld', 'Glück', 'Schönheit', 'Traum', 
        'Großzügigkeit', 'Gesundheit', 'Mut', 'Würde', 'Wertschätzung', 'Chance', 'Ehrlichkeit', 
        'Glaube', 'Mitgefühl', 'Schenken', 'Erfahrung', 'Reisen', 'Familie', 'Wissen', 
        'Respekt', 'Dankbarkeit',
    
      //Turkish

        'Selam', 'Merhaba', 'Aşk', 'Umut', 'Dostluk', 'Mutluluk', 'Hüzün', 'Güç', 'Barış',
        'Güven', 'Özgürlük', 'İşbirliği', 'Başarı', 'İyimserlik', 'Hırs', 'Hayat', 'Umut', 'Meydan okuma',
        'Sabır', 'Sevinç', 'Güzellik', 'Rüya', 'Cömertlik', 'Sağlık', 'Cesaret', 'Onur', 'Özgürlük', 'Barış',
        'Takdir', 'Fırsat', 'Dürüstlük', 'İnanç', 'Merhamet', 'Aşk', 'Verme', 'Deneyim', 'Seyahat', 'Aile',

        //Swedish
        'Hej', 'Kärlek', 'Hopp', 'Vänskap', 'Lycka', 'Sorg', 'Styrka', 'Fred',
        'Förtroende', 'Frihet', 'Kreativitet', 'Samarbete', 'Framgång', 'Optimism', 'Ambition', 'Liv', 'Hopp', 'Utmaning',
        'Tålamod', 'Glädje', 'Skönhet', 'Dröm', 'Generositet', 'Hälsa', 'Mod', 'Ära', 'Frihet', 'Fred',
        'Möjlighet', 'Ärlighet', 'Tro', 'Kärlek', 'Att ge', 'Erfarenhet', 'Resa', 'Familj',

        //French 
        'Salut', 'Bonjour', 'Amour', 'Espoir', 'Amitié', 'Bonheur', 'Tristesse', 'Force', 'Paix',
        'Confiance', 'Liberté', 'Créativité', 'Succès', 'Optimisme', 'Ambition', 'Vie', 'Espoir', 'Défi',
        'Patience', 'Joie', 'Beauté', 'Rêve', 'Générosité', 'Santé', 'Courage', 'Honneur', 'Liberté', 'Paix',
        'Opportunité', 'Honnêteté', 'Foi', 'Miséricorde', 'Amour', 'Donner', 'Expérience', 'Voyage', 'Famille'

    ];
    

    const container = document.getElementById('bubbles-container');
    const bubbles = []; // Array to store bubble elements

    function createBubble(word) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = `<span>${word}</span>`;
        
        let left, bottom;
        const bubbleWidth = 100; // width of the bubble
        const bubbleHeight = 50; // height of the bubble

        // Ensure bubbles do not overlap
        const attempts = 10; // Number of attempts to find a non-overlapping position
        let placed = false;

        for (let i = 0; i < attempts; i++) {
            left = Math.random() * (window.innerWidth - bubbleWidth);
            bottom = -bubbleHeight; // Start just below the viewable area

            // Check for overlap with existing bubbles
            let overlap = false;
            for (const existingBubble of bubbles) {
                const existingRect = existingBubble.getBoundingClientRect();
                const newRect = {
                    left: left,
                    bottom: window.innerHeight - bottom,
                    right: left + bubbleWidth,
                    top: window.innerHeight - bottom - bubbleHeight
                };

                if (
                    newRect.left < existingRect.right &&
                    newRect.right > existingRect.left &&
                    newRect.top < existingRect.bottom &&
                    newRect.bottom > existingRect.top
                ) {
                    overlap = true;
                    break;
                }
            }

            if (!overlap) {
                bubble.style.left = `${left}px`;
                bubble.style.bottom = `${bottom}px`;
                bubble.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
                placed = true;
                break;
            }
        }

        if (placed) {
            container.appendChild(bubble);
            bubbles.push(bubble);

            // Remove bubble when animation is done
            setTimeout(() => {
                bubbles.splice(bubbles.indexOf(bubble), 1); // Remove from the array
                bubble.remove();
            }, 20000); // Remove bubble after 20 seconds
        }
    }

    setInterval(() => {
        createBubble(words[Math.floor(Math.random() * words.length)]);
    }, 1200); // Create a new bubble every 0.5 seconds
});
document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.flag');
    const startButton = document.querySelector('.start-button');
    let selectedLanguage = null;

    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            // Remove selected class from all flags
            flags.forEach(f => f.classList.remove('selected'));
            
            // Add selected class to clicked flag
            flag.classList.add('selected');
            selectedLanguage = flag.getAttribute('data-language');
        });
    });

    startButton.addEventListener('click', () => {
        if (selectedLanguage) {
            localStorage.setItem('selectedLanguage', selectedLanguage);
            window.location.href = 'idiom.html'; // Redirect to the idiom template page
        } else {
            alert('Please select a language first.');
        }
    });
});