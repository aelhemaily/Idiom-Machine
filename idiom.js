document.addEventListener('DOMContentLoaded', () => {
    const idioms = {
        arabic: [
            {
                idiom: "عصفور في اليد خير من عشرة على الشجرة",
                literalTranslation: "A bird in the hand is better than ten on the tree",
                meaning: "It is better to have a small but certain advantage than the possibility of a greater one that may come to nothing.",
                backgroundPath: "images/ar/birds.png"
            },

            {
                idiom: "باب النجار مخلع",
                literalTranslation: "The carpenter's door is loose/unhooked.",
                meaning: "Even being an expert at helping others does not necessarily mean someone can help himself.",
                backgroundPath: "images/ar/carpenter.png"
            },
            {
                idiom: "الاسكافي حافي",
                literalTranslation: "The cobbler is barefoot.",
                meaning: "Even being an expert at helping others does not necessarily mean someone can help himself.",
                backgroundPath: "images/ar/cobbler.png"
            },
            {
                idiom: "خلي عينك في نص راسك",
                literalTranslation: "Keep your eye in the middle of your head.",
                meaning: "Be cautious and stay alert to avoid trouble.",
                backgroundPath: "images/ar/cyclops.png"
            },
            {
                idiom: "ديل الكلب عمره ما يتعدل",
                literalTranslation: "A dog's tail will never straighten itself.",
                meaning: "Some people cannot change and will always relapse into bad habits.",
                backgroundPath: "images/ar/tail.png"
            },
            {
                idiom: "يموت الزمار وصباعه بيلعب",
                literalTranslation: "The flute player dies with his fingers still playing.",
                meaning: "Old habits die hard; people continue doing what they are accustomed to until the very end.",
                backgroundPath: "images/ar/flute.png"
            },
            {
                idiom: "عينيه مدورة",
                literalTranslation: "His eyes are round.",
                meaning: "He is an envious person.",
                backgroundPath: "images/ar/roundeyes.png"
            },

            {
                idiom: "داري على شمعتك تقيد",
                literalTranslation: "hide/protect your candle to keep it burning.",
                meaning: "Do not brag about what you have to protect it from others and their envy.",
                backgroundPath: "images/ar/candle.png"
            },
            {
                idiom: "إيد لوحدها ما تسقفش",
                literalTranslation: "One hand cannot clap on its own.",
                meaning: "Cooperation is necessary; one person alone cannot accomplish everything.",
                backgroundPath: "images/ar/onehand.png"
            },
            {
                idiom: "اتلم المتعوس على خايب الرجا",
                literalTranslation: "The unlucky person gathers with the one who has lost hope.",
                meaning: "An idiom said when two miserable people unite or are found together.",
                backgroundPath: "images/ar/homeless.png"
            },
            {
                idiom: "اعمل خير و ارميه البحر",
                literalTranslation: "Do good and throw it into the sea.",
                meaning: "Do good deeds selflessly, without expecting any recognition or reward.",
                backgroundPath: "images/ar/charity.png"
            },
            {
                idiom: "نقول طور يقولوا احلبوه",
                literalTranslation: "We say 'bull,' and they say 'milk it.'",
                meaning: "This is said of people who attempt impossible tasks.",
                backgroundPath: "images/ar/ox.png"
            },
            {
                idiom: "أكل العيش مر",
                literalTranslation: "Eating bread is bitter.",
                meaning: "The struggle to earn a living is often hard and unpleasant.",
                backgroundPath: "images/ar/eatbread.png"
            },
            {
                idiom: "العين ما تعلاش ع الحاجب",
                literalTranslation: "The eye cannot rise above the eyebrow.",
                meaning: "One should not overstep their limits or try to exceed their position; it's important to stay within one's bounds.",
                backgroundPath: "images/ar/eyebrow.png"
            },
            {
                idiom: "القرد ف عين امه غزال",
                literalTranslation: "A monkey is a gazelle in its mother's eyes.",
                meaning: "People often see their loved ones as better or more beautiful than reality.",
                backgroundPath: "images/ar/monkey.png"
            },
            {
                idiom: "القفة أم ودنين يشيلوها اتنين",
                literalTranslation: "A pot with two handles is carried by two people.",
                meaning: "Tasks or burdens that are difficult or heavy are best handled with the help of others.",
                backgroundPath: "images/ar/pot.png"
            },
            {
                idiom: "الحداية ما بترميش كتاكيت",
                literalTranslation: "The kite (bird of prey) does not throw chicks.",
                meaning: "Be suspicious towards a person seemingly acting against their own nature or interests; those with bad intentions will not do good deeds.",
                backgroundPath: "images/ar/chicks.png"
            },

            {
                idiom: "الفاضى يعمل قاضى",
                literalTranslation: "The idle person acts as a judge.",
                meaning: "People who have nothing to do often involve themselves in judging or criticizing others.",
                backgroundPath: "images/ar/judge.png"
            },

            {
                idiom: "اللى ايده ف المايه مش زى اللى ايده ف النار",
                literalTranslation: "The one whose hand is in the water is not like the one whose hand is in the fire.",
                meaning: "It's easy to judge a situation as easy when you are not the one in it.",
                backgroundPath: "images/ar/handfire.png"
            },

            {
                idiom: "اللى حضر العفريت يصرفه",
                literalTranslation: "He who summoned the ghost must exorcize it.",
                meaning: "The person who created a problem should be responsible for resolving it.",
                backgroundPath: "images/ar/ghost.png"
            },

            {
                idiom: "اللى يتلسع م الشوربة ينفخ ف الزبادي",
                literalTranslation: "He who gets burned by soup will blow on yogurt.",
                meaning: "Someone who has had a bad experience will be cautious or overly careful about similar or other situations in the future.",
                backgroundPath: "images/ar/yogurt.png"
            },

            {
                idiom: "امشي ف جنازة و لا تمشى ف جوازة",
                literalTranslation: "Walk in a funeral rather than in a wedding.",
                meaning: "It's best to stay away from married people's affairs or matchmaking; it will cause you trouble.",
                backgroundPath: "images/ar/marriage.png"
            },
            {
                idiom: "إن كانلك عند الكلب حاجة قول له يا سيدي",
                literalTranslation: "If you need something from a dog, call him 'master'",
                meaning: "Show respect or humility to someone who holds power or influence over you, even if they are not deserving of it.",
                backgroundPath: "images/ar/dogsuit.png"
            },

            {
                idiom: "بيدس السم ف العسل",
                literalTranslation: "He injects poison into the honey.",
                meaning: "This is said of someone who is being passive aggressive or seems nice but is not.",
                backgroundPath: "images/ar/honey.png"
            },

            {
                idiom: "تبات نار تصبح رماد",
                literalTranslation: "it spends the night as fire and wakes up as ashes.",
                meaning: "It means this intense situation will soon cool off/bad things will pass.",
                backgroundPath: "images/ar/fire.png"
            },
            {
                idiom: "حط ف بطنك بطيخة صيفى",
                literalTranslation: "Put a summer watermelon in your belly.",
                meaning: "Do not worry at all/be completely relaxed.",
                backgroundPath: "images/ar/watermelon.png"
            },
            
            {
                idiom: "خربها و قعد على تلها",
                literalTranslation: "He ruined it and sat on top of its hill/debris.",
                meaning: "Said of someone who causes trouble or damage and then sits back and enjoys the result or remains indifferent to the consequences.",
                backgroundPath: "images/ar/hill.png"
            },

            {
                idiom: "سبع ولّا ضبع",
                literalTranslation: "A lion or a hyena?",
                meaning: "A question asking someone if they were victorious like a lion, or lost like a hyena would.",
                backgroundPath: "images/ar/lionhyena.png"
            },

            {
                idiom: "سكتناله دخل بحماره",
                literalTranslation: "When we were silent, he entered with his donkey.",
                meaning: "When you remain passive, others may take advantage (give him an inch and he'll take a mile).",
                backgroundPath: "images/ar/donkey.png"
            },

            {
                idiom: "ضربتين ف الراس توجع",
                literalTranslation: "Two blows to the head hurt.",
                meaning: "Problems or bad things come in pairs/said when two bad things happen in succession.",
                backgroundPath: "images/ar/hit.png"
            },

            {
                idiom: "على قد لحافك مد رجليك",
                literalTranslation: "Stretch your legs according to your blanket's length.",
                meaning: "Live within your means or adjust your actions according to your resources.",
                backgroundPath: "images/ar/blanket.png"
            },

            {
                idiom: "دبور وزن على خراب عشه",
                literalTranslation: "A wasp buzzed causing the ruin of its nest.",
                meaning: "Spoken of someone who bites more than they can chew/causes their own downfall.",
                backgroundPath: "images/ar/wasp.png"
            },

            {
                idiom: "في المشمش",
                literalTranslation: "In the apricot.",
                meaning: "When pigs fly",
                backgroundPath: "images/ar/apricots.png"
            },

            {
                idiom: "قليل البخت يلاقي عضم ف الكرشة",
                literalTranslation: "The unlucky one finds bones in the tripe (boneless food).",
                meaning: "Said of someone extremely unlucky who encounters misfortune even in the simplest situations.",
                backgroundPath: "images/ar/bone.png"
            },

            {
                idiom: "كل فولة و ليها كيال",
                literalTranslation: "Every bean will find someone who weighs it.",
                meaning: "Everyone will find a match OR one man's trash is another man's treasure.",
                backgroundPath: "images/ar/bean.png"
            },

            {
                idiom: "امشي جنب الحيط",
                literalTranslation: "Walk next to the wall.",
                meaning: "Stay out of trouble or avoid attracting attention by being cautious and discreet.",
                backgroundPath: "images/ar/walkwall.png"
            },

            {
                idiom: "يا مأمنه للرجال يا مأمنة للمايه ف الغربال",
                literalTranslation: "Trusting men is like trusting water in a sieve.",
                meaning: "Do not trust a man/spoken of disloyal men.",
                backgroundPath: "images/ar/sieve.png"
            },

            {
                idiom: "يبيع ابوه عشان الفلوس",
                literalTranslation: "He would sell his father for money.",
                meaning: "Someone who is so greedy or obsessed with money that they would give up anything for it.",
                backgroundPath: "images/ar/forsale.png"
            },
            {
                idiom: "الزفة مطرقعة والعروسة ضفدعة",
                literalTranslation: "The wedding ceremony is insane when the bride is a frog.",
                meaning: "Said when someone exaggerates the impact of a situation or when someone is being a drama queen.",
                backgroundPath: "images/ar/frog.png"
            },

            {
                idiom: "الباب إللي يجيلك منه الريح سده واستريح",
                literalTranslation: "If a door brings you wind, close it and relax.",
                meaning: "Avoid or remove sources of trouble or discomfort to find peace. Be decisive in that.",
                backgroundPath: "images/ar/door.png"
            },

            {
                idiom: "الحيطان ليها ودان",
                literalTranslation: "The walls have ears.",
                meaning: "Be careful what you say because you never know who might be listening.",
                backgroundPath: "images/ar/ears.png"
            },

            {
                idiom: "اللى على رأسه بطحة يحسس عليها",
                literalTranslation: "He who has a bump on his head will keep touching it.",
                meaning: "A guilty person often thinks others are accusing him even if they are not.",
                backgroundPath: "images/ar/bruise.png"
            },

            {
                idiom: "إللى معاه قرش محيره، يجيب حمام ويطيره",
                literalTranslation: "He who has money that is making them restless, buys doves/pigeons and sets them free.",
                meaning: "Said of someone who spends their money on something frivolous or unnecessary.",
                backgroundPath: "images/ar/doves.png"
            },

            {
                idiom: "ادي العيش لخبازه ولو ياكل تلات اربع",
                literalTranslation: "Give the bread to the baker, even if he eats three-quarters of it.",
                meaning: "Let those who are experts handle tasks, even if they cost a lot.",
                backgroundPath: "images/ar/breadbaker.png"
            },

            {
                idiom: "جبت في سيرة القط جه ينط",
                literalTranslation: "When you mentioned the cat, it came jumping.",
                meaning: "Same as 'speaking of the devil' said when you mention someone and they show up.",
                backgroundPath: "images/ar/catjump.png"
            },

            {
                idiom: "خرج من المولد بلا حُمّص",
                literalTranslation: "He left the carnival with no chickpeas.",
                meaning: "He came out of a situation full of opportunities with empty hands or nothing won.",
                backgroundPath: "images/ar/chickpeas.png"
            },

            {
                idiom: "صباح الخير يا جاري . انت في حالك وانا في حالي",
                literalTranslation: "Good morning, neighbor. You mind your business and I mind mine.",
                meaning: "Said when you don't want someone meddling in your affairs or you don't want to deal with someone.",
                backgroundPath: "images/ar/neighbor.png"
            },

            {
                idiom: "على راسه ريشة",
                literalTranslation: "He has a feather on his head.",
                meaning: "He is a special snowflake/thinks he deserves special treatment.",
                backgroundPath: "images/ar/feather.png"
            },

            {
                idiom: "نام على الجنب اللي يريحك",
                literalTranslation: "Sleep on the side that comforts you.",
                meaning: "Do whatever suits you best or makes you most comfortable.",
                backgroundPath: "images/ar/sleepside.png"
            },
            {
                idiom: "الفار بدأ يلعب في عبي",
                literalTranslation: "The mouse started playing in my chest.",
                meaning: "I am starting to get suspicious / something is not quite right about this.",
                backgroundPath: "images/ar/mousechest.png"
            }
            
     


            // Add more Arabic idioms here
        ],
        spanish: [

            {
                idiom: "Meterse en la boca del lobo",
                literalTranslation: "To put yourself in the mouth of the wolf.",
                meaning: "Said when one puts himself in a dangerous or risky situation.",
                backgroundPath: "images/es/wolf.png"
            },

            {
                idiom: "Buscar el príncipe azul",
                literalTranslation: "To search for the blue prince.",
                meaning: "To look for a perfect partner or one's prince charming.",
                backgroundPath: "images/es/blueprince.png"
            },

            {
                idiom: "Encontrar tu media naranja",
                literalTranslation: "To find your half orange.",
                meaning: "To find your soulmate or perfect match; your other half.",
                backgroundPath: "images/es/oranges.png"
            },

            {
                idiom: "Ser un gallina",
                literalTranslation: "To be a chicken.",
                meaning: "To be cowardly or afraid.",
                backgroundPath: "images/es/chickenfear.png"
            },

            {
                idiom: "Ser pan comido",
                literalTranslation: "To be eaten bread.",
                meaning: "To be very easy or simple; a piece of cake.",
                backgroundPath: "images/es/bread.png"
            },

            {
                idiom: "Ser un melón",
                literalTranslation: "To be a melon.",
                meaning: "To be a fool or to be clueless; often used to describe someone who is not very bright.",
                backgroundPath: "images/es/melon.png"
            },

            {
                idiom: "Estar hasta en la sopa",
                literalTranslation: "To be even in the soup.",
                meaning: "To be everywhere or to be found in all situations; to be very pervasive or omnipresent.",
                backgroundPath: "images/es/soup.png"
            },

            {
                idiom: "Andar con pies de plomo",
                literalTranslation: "To walk with feet made of lead.",
                meaning: "To proceed with great caution/ to walk on eggshells.",
                backgroundPath: "images/es/lead.png"
            },

            {
                idiom: "Tener mala leche",
                literalTranslation: "To have bad milk.",
                meaning: "To be in a bad mood or to have a bad temper.",
                backgroundPath: "images/es/milk.png"
            },

            {
                idiom: "Dar calabazas a alguien",
                literalTranslation: "To give someone pumpkins.",
                meaning: "To reject or turn someone down, especially in a romantic context.",
                backgroundPath: "images/es/pumpkins.png"
            },

            {
                idiom: "Ser un bombón",
                literalTranslation: "To be a bonbon candy.",
                meaning: "To be very attractive or charming; to be eyecandy.",
                backgroundPath: "images/es/candy.png"
            },

            {
                idiom: "Tener sangre azul",
                literalTranslation: "To have blue blood.",
                meaning: "To be of noble or aristocratic descent; to come from a privileged or high-status family.",
                backgroundPath: "images/es/blueblood.png"
            },

            {
                idiom: "Tomar el pelo a alguien",
                literalTranslation: "To take someone's hair.",
                meaning: "To tease or joke with someone; to pull someone's leg.",
                backgroundPath: "images/es/takehair.png"
            },

            {
                idiom: "Estar como una cabra",
                literalTranslation: "To be like a goat.",
                meaning: "To be crazy or eccentric; to behave in an irrational or wild manner.",
                backgroundPath: "images/es/goat.png"
            },

            {
                idiom: "Tirar la casa por la ventana",
                literalTranslation: "To throw the house out the window.",
                meaning: "To go all out or spend a lot of money on something, often extravagantly or without restraint.",
                backgroundPath: "images/es/house.png"
            },

            {
                idiom: "Quedarse de piedra",
                literalTranslation: "To remain like a stone.",
                meaning: "To be stunned or shocked; to be left speechless due to surprise or amazement.",
                backgroundPath: "images/es/stone.png"
            },

            {
                idiom: "Empezar la casa por el tejado",
                literalTranslation: "To start the house by the roof.",
                meaning: "To approach a task in the wrong order/ to put the cart before the horse.",
                backgroundPath: "images/es/upside.png"
            },

            {
                idiom: "Estar más sano que una pera",
                literalTranslation: "To be healthier than a pear.",
                meaning: "To be in very good health; to be fit and well.",
                backgroundPath: "images/es/pear.png"
            },

            {
                idiom: "Tener más lana que un borrego",
                literalTranslation: "To have more wool than a sheep.",
                meaning: "To be very rich or wealthy; to have a lot of money.",
                backgroundPath: "images/es/sheep.png"
            },

            {
                idiom: "Echar agua al mar",
                literalTranslation: "To throw water into the sea.",
                meaning: "To do something pointless or redundant.",
                backgroundPath: "images/es/sea.png"
            },

            {
                idiom: "Darle la vuelta a la tortilla",
                literalTranslation: "To flip the tortilla around.",
                meaning: "To turn a situation around or make a comeback.",
                backgroundPath: "images/es/tortilla.png"
            },

            {
                idiom: "Acostarse con las gallinas",
                literalTranslation: "To go to bed with the hens.",
                meaning: "To go to bed very early; to go to sleep at an unusually early hour.",
                backgroundPath: "images/es/sleephen.png"
            },

            {
                idiom: "Un clavo saca a otro clavo",
                literalTranslation: "One nail drives out another nail.",
                meaning: "To get over an ex by finding someone new/a new relationship can make you forget an old one.",
                backgroundPath: "images/es/nail.png"
            },

            {
                idiom: "Ahogarse en un vaso de agua",
                literalTranslation: "To drown in a glass of water.",
                meaning: "To make a big deal out of a small problem or to be overwhelmed by something trivial.",
                backgroundPath: "images/es/glass.png"
            },

            {
                idiom: "En casa de herrero, cuchillo de palo",
                literalTranslation: "In the blacksmith's house, a wooden knife.",
                meaning: "Even being an expert at helping others does not necessarily mean someone can help himself.",
                backgroundPath: "images/es/blacksmithknife.png"
            },

            {
                idiom: "Consultar con la almohada",
                literalTranslation: "To consult with the pillow.",
                meaning: "To sleep on it/think of something overnight.",
                backgroundPath: "images/es/pillow.png"
            },

            {
                idiom: "Estar entre la espada y la pared",
                literalTranslation: "To be between the sword and the wall.",
                meaning: "To be stuck between two bad options/ stuck between a rock and a hard place.",
                backgroundPath: "images/es/sword.png"
            },

            {
                idiom: "Echarle leña al fuego",
                literalTranslation: "To throw wood on the fire.",
                meaning: "To make a situation worse or escalate a conflict/to fan the flames.",
                backgroundPath: "images/es/woodfire.png"
            },

            {
                idiom: "Ponerle mucha crema a sus tacos",
                literalTranslation: "To put a lot of cream on one's tacos.",
                meaning: "To exaggerate or embellish a story; to add extra details to make something seem more impressive or important.",
                backgroundPath: "images/es/taco.png"
            },

            {
                idiom: "Hablar del rey de Roma",
                literalTranslation: "To talk about the king of Rome.",
                meaning: "Speak of the devil; said when someone shows up after mentioning them.",
                backgroundPath: "images/es/king.png"
            },

            {
                idiom: "Dar el avión",
                literalTranslation: "To give someone the airplane.",
                meaning: "To not listen to what someone is saying/or not pay attention to them.",
                backgroundPath: "images/es/plane.png"
            },

            {
                idiom: "Echar un ojo",
                literalTranslation: "To throw an eye.",
                meaning: "To take a quick look or glance at something.",
                backgroundPath: "images/es/eye.png"
            },

            {
                idiom: "Ser un pez gordo",
                literalTranslation: "To be a fat fish.",
                meaning: "To be an important or influential person/ a hotshot.",
                backgroundPath: "images/es/fish.png"
            },

            {
                idiom: "Andarse por las ramas",
                literalTranslation: "To walk through the branches.",
                meaning: "To beat around the bush.",
                backgroundPath: "images/es/branches.png"
            },

            {
                idiom: "Estar en la luna",
                literalTranslation: "To be on the moon.",
                meaning: "To be daydreaming or distracted; to be out of touch with reality.",
                backgroundPath: "images/es/moon.png"
            },

            {
                idiom: "Pedir peras al olmo",
                literalTranslation: "To ask an elm tree for pears.",
                meaning: "To ask for something impossible or unrealistic; to expect the impossible.",
                backgroundPath: "images/es/elmtree.png"
            },

            {
                idiom: "Estar en la cuerda floja",
                literalTranslation: "To be on the tightrope.",
                meaning: "To be in a risky or precarious situation; to be on the edge of failure or trouble.",
                backgroundPath: "images/es/rope.png"
            },

            {
                idiom: "Tener pájaros en la cabeza",
                literalTranslation: "To have birds in/on one's head.",
                meaning: "To be unrealistic or have crazy ideas; to be absent-minded or mentally distracted.",
                backgroundPath: "images/es/birds.png"
            },

            {
                idiom: "A otro perro con ese hueso",
                literalTranslation: "To another dog with that bone.",
                meaning: "Said when you don't believe someone's story or excuse, as in 'someone else might believe this, but not me.'",
                backgroundPath: "images/es/bone.png"
            },

            {
                idiom: "No ser santo de mi devoción",
                literalTranslation: "Not to be a saint of my devotion.",
                meaning: "Not to be someone's cup of tea; not to be someone/something I am particularly fond of.",
                backgroundPath: "images/es/saint.png"
            },

            {
                idiom: "Hacer leña del árbol caído",
                literalTranslation: "To make firewood from the fallen tree.",
                meaning: "To take advantage of someone else's misfortune or to beat someone who is already down.",
                backgroundPath: "images/es/chop.png"
            },

            {
                idiom: "Hacer algo con la mano izquierda",
                literalTranslation: "To do something with the left hand.",
                meaning: "To do something poorly or clumsily; to do something in a way that is not skillful or professional.",
                backgroundPath: "images/es/lefthand.png"
            },

            {
                idiom: "Cargar con el muerto",
                literalTranslation: "To carry the dead.",
                meaning: "To bear the burden of a problem or responsibility, often something that is not one's fault or is unfair.",
                backgroundPath: "images/es/skeleton.png"
            },

            {
                idiom: "Ser un cuento chino",
                literalTranslation: "To be a Chinese tale.",
                meaning: "To be a story or excuse that is hard to believe.",
                backgroundPath: "images/es/china.png"
            },

            {
                idiom: "Ponerle el cascabel al gato",
                literalTranslation: "To put the bell on the cat.",
                meaning: "To take on a difficult or risky task; to tackle a problem that others have avoided.",
                backgroundPath: "images/es/bell.png"
            },

            {
                idiom: "Hacer un pino",
                literalTranslation: "To do a handstand.",
                meaning: "To do something impressive or difficult, often requiring skill or agility.",
                backgroundPath: "images/es/headstand.png"
            },

            {
                idiom: "Estar como una rosa",
                literalTranslation: "To be like a rose.",
                meaning: "To be in excellent health or condition; to look very well or be very attractive.",
                backgroundPath: "images/es/rose.png"
            },

            {
                idiom: "Hacerse el sueco",
                literalTranslation: "To act like a Swede.",
                meaning: "To pretend not to understand something intentionally; to feign ignorance.",
                backgroundPath: "images/es/sweden.png"
            },

            {
                idiom: "Tener la mosca detrás de la oreja",
                literalTranslation: "To have the fly behind the ear.",
                meaning: "To be suspicious or have doubts about something; to be on guard or wary.",
                backgroundPath: "images/es/fly.png"
            },

            {
                idiom: "Tener mucho morro",
                literalTranslation: "To have a lot of snout.",
                meaning: "To be very cheeky or shameless; to be audacious or bold in a way that is considered rude.",
                backgroundPath: "images/es/snout.png"
            }

            
            // Add more Spanish idioms here
        ],

        french: [
            {
                idiom: "Passer une nuit blanche",
                literalTranslation: "To spend a white night",
                meaning: "To stay awake all night, often intentionally.",
                backgroundPath: "images/fr/whitenight.png"
            },

            {
                idiom: "Dormir à la belle étoile",
                literalTranslation: "To sleep at the beautiful star",
                meaning: "To sleep outdoors.",
                backgroundPath: "images/fr/star.png"
            },

            {
                idiom: "Être blanc comme neige",
                literalTranslation: "To be white as snow",
                meaning: "To be completely pure or innocent",
                backgroundPath: "images/fr/whitesnow.png"
            },

            {
                idiom: "Faire boule de neige",
                literalTranslation: "To make a snowball",
                meaning: "To grow rapidly/ spread like wildfire",
                backgroundPath: "images/fr/snowball.png"
            },

            {
                idiom: "Ne pas être dans son assiette",
                literalTranslation: "To not be in one's plate",
                meaning: "To not be feeling well or to be out of sorts",
                backgroundPath: "images/fr/plate.png"
            },

            {
                idiom: "Traîner quelqu'un dans la boue",
                literalTranslation: "To drag someone in the mud",
                meaning: "To ruin someone’s reputation.",
                backgroundPath: "images/fr/mud.png"
            },

            {
                idiom: "Quand on parle du loup, on en voit la queue",
                literalTranslation: "When we talk about the wolf, we see its tail",
                meaning: "Speak of the devil, and he shall appear",
                backgroundPath: "images/fr/wolftail.png"
            },

            {
                idiom: "Être comme un éléphant dans un magasin de porcelaine",
                literalTranslation: "To be like an elephant in a china shop",
                meaning: "To be clumsy or awkward, especially in a delicate situation",
                backgroundPath: "images/fr/elephant.png"
            },

            {
                idiom: "C’est le serpent qui se mord la queue",
                literalTranslation: "It's the snake that bites its own tail",
                meaning: "It’s a vicious cycle ; a series of problems that causes its own continuation",
                backgroundPath: "images/fr/snaketail.png"
            },

            {
                idiom: "Quelle mouche t’a piqué?",
                literalTranslation: "Which fly stung you?",
                meaning: "What’s gotten into you? What’s wrong with you?.",
                backgroundPath: "images/fr/fly.png"
            },

            {
                idiom: "Appeler un chat un chat",
                literalTranslation: "To call a cat a cat",
                meaning: "To call a spade a spade/ say exactly what one means.",
                backgroundPath: "images/fr/callcat.png"
            },

            {
                idiom: "Avoir un chat dans la gorge",
                literalTranslation: "To have a cat in one's throat",
                meaning: "To have a frog in your throat;  to have throat congestion or cough.",
                backgroundPath: "images/fr/catthroat.png"
            },

            {
                idiom: "Donner sa langue au chat",
                literalTranslation: "To give one's tongue to the cat",
                meaning: "To give up trying to find an answer or solution / stop guessing when you have no ideas left.",
                backgroundPath: "images/fr/cattongue.png"
            },

            {
                idiom: "Il pleut des cordes",
                literalTranslation: "It's raining ropes",
                meaning: "It's raining heavily.",
                backgroundPath: "images/fr/ropes.png"
            },

            {
                idiom: "Lancer une bouteille à la mer",
                literalTranslation: "To throw a bottle into the sea",
                meaning: "To call for help.",
                backgroundPath: "images/fr/bottle.png"
            },

            {
                idiom: "Ce n’est pas la mer à boire",
                literalTranslation: "It's not the sea to drink",
                meaning: "It's not a big deal or not as difficult as it seems.",
                backgroundPath: "images/fr/drinksea.png"
            },

            {
                idiom: "Se faire des cheveux blancs pour…",
                literalTranslation: "To make your hair white for…",
                meaning: "To worry excessively about something or someone.",
                backgroundPath: "images/fr/whitehair.png"
            },

            {
                idiom: "Avoir un poil dans la main",
                literalTranslation: "To have a hair in one's hand",
                meaning: "To be lazy or idle.",
                backgroundPath: "images/fr/palmhair.png"
            },

            {
                idiom: "Perdre la boule",
                literalTranslation: "To lose the ball",
                meaning: "To go crazy or lose one's mind.",
                backgroundPath: "images/fr/ball.png"
            },

            {
                idiom: "Bonnet blanc et blanc bonnet",
                literalTranslation: "A White cap and a cap that is white",
                meaning: "Two things or options that are essentially the same or lead to the same thing.",
                backgroundPath: "images/fr/hat.png"
            },

            {
                idiom: "Avoir la pêche",
                literalTranslation: "To have the peach",
                meaning: "To feel great or be in high spirits.",
                backgroundPath: "images/fr/peach.png"
            },

            {
                idiom: "Être haut comme trois pommes",
                literalTranslation: "To be as tall as three apples",
                meaning: "To be very short.",
                backgroundPath: "images/fr/apples.png"
            },

            {
                idiom: "S’occuper de ses oignons",
                literalTranslation: "To worry about/take care of your own onions",
                meaning: "To mind your own business.",
                backgroundPath: "images/fr/onions.png"
            },

            {
                idiom: "Avoir du pain sur la planche",
                literalTranslation: "To have bread on the board/plank",
                meaning: "To have a lot of work or tasks to do.",
                backgroundPath: "images/fr/plank.png"
            },

            {
                idiom: "Couper la poire en deux",
                literalTranslation: "To cut the pear in two",
                meaning: "To reach a compromise or meet someone half-way.",
                backgroundPath: "images/fr/cutpear.png"
            },

            {
                idiom: "Tomber dans les pommes",
                literalTranslation: "To fall in the apples",
                meaning: "To faint or pass out.",
                backgroundPath: "images/fr/fallapples.png"
            },

            {
                idiom: "Avoir la banane",
                literalTranslation: "To have the banana",
                meaning: "To be very happy or to have a big smile.",
                backgroundPath: "images/fr/banana.png"
            },

            {
                idiom: "Être bonne poire",
                literalTranslation: "To be a good pear",
                meaning: "To be an easy target or to be gullible.",
                backgroundPath: "images/fr/goodpear.png"
            },

            {
                idiom: "Mettre du beurre dans les épinards",
                literalTranslation: "To put butter in the spinach",
                meaning: "to earn a little extra money on the side to improve one’s financial situation.",
                backgroundPath: "images/fr/spinach.png"
            },

            {
                idiom: "C’est du pain bénit",
                literalTranslation: "It's some blessed bread",
                meaning: "It's a godsend.",
                backgroundPath: "images/fr/blessedbread.png"
            },

            {
                idiom: "Avoir la moutarde qui monte au nez",
                literalTranslation: "To have the mustard that rises to one's nose",
                meaning: "To become very angry or irritated.",
                backgroundPath: "images/fr/mustard.png"
            },

            {
                idiom: "Les carottes sont cuites",
                literalTranslation: "The carrots are cooked",
                meaning: "It is over / there’s nothing more you can do about it.",
                backgroundPath: "images/fr/carrots.png"
            },

            {
                idiom: "Poser un lapin à quelqu'un",
                literalTranslation: "To put down a rabbit for someone",
                meaning: "To stand someone up or not show up for a date or an appointment.",
                backgroundPath: "images/fr/rabbit.png"
            },

            {
                idiom: "Avoir des oursins dans les poches",
                literalTranslation: "To have sea urchins in one's pockets",
                meaning: "To be stingy or tight with money.",
                backgroundPath: "images/fr/urchins.png"
            },

            {
                idiom: "Se serrer la ceinture",
                literalTranslation: "To tighten one's belt",
                meaning: "To reduce spending or live more frugally.",
                backgroundPath: "images/fr/belt.png"
            },

            {
                idiom: "Avoir le cafard",
                literalTranslation: "To have the cockroach",
                meaning: "To feel down or depressed.",
                backgroundPath: "images/fr/cockroach.png"
            },

            {
                idiom: "Raconter des salades",
                literalTranslation: "To tell salads",
                meaning: "To tell far-fetched or untrue stories.",
                backgroundPath: "images/fr/salads.png"
            },

            {
                idiom: "Les doigts dans le nez",
                literalTranslation: "With fingers in the nose",
                meaning: "To do something very easily.",
                backgroundPath: "images/fr/fingernose.png"
            },

            {
                idiom: "Se faire rouler dans la farine",
                literalTranslation: "To get rolled in the flour",
                meaning: "To be deceived or scammed.",
                backgroundPath: "images/fr/flour.png"
            },

            {
                idiom: "Devoir une fière chandelle à quelqu'un",
                literalTranslation: "To owe someone a proud candle",
                meaning: "To owe someone big time or be deeply grateful.",
                backgroundPath: "images/fr/proudcandle.png"
            },

            {
                idiom: "Casser les pieds à quelqu’un",
                literalTranslation: "To break someone’s feet",
                meaning: "To annoy or bother someone.",
                backgroundPath: "images/fr/cast.png"
            },

            {
                idiom: "Avoir la gueule de bois",
                literalTranslation: "To have a wooden mouth",
                meaning: "To have a hangover.",
                backgroundPath: "images/fr/woodenmouth.png"
            },

            {
                idiom: "Un coup de foudre",
                literalTranslation: "A lightning strike",
                meaning: "Love at first sight.",
                backgroundPath: "images/fr/lightning.png"
            },

            {
                idiom: "Aller se faire cuire un œuf",
                literalTranslation: "Go cook yourself an egg",
                meaning: "Go away / get lost.",
                backgroundPath: "images/fr/cookegg.png"
            },

            {
                idiom: "Avoir d’autres chats à fouetter",
                literalTranslation: "To have other cats to whip",
                meaning: "To have other things to worry about / bigger fish to fry.",
                backgroundPath: "images/fr/catwhip.png"
            },

            {
                idiom: "Donner de la confiture aux cochons",
                literalTranslation: "To give jam to pigs",
                meaning: "To waste something valuable on those who cannot appreciate it.",
                backgroundPath: "images/fr/jam.png"
            },

            {
                idiom: "Se noyer dans un verre d’eau",
                literalTranslation: "To drown in a glass of water",
                meaning: "To be overwhelmed by trivial problems or difficulties.",
                backgroundPath: "images/fr/glass.png"
            },

            {
                idiom: "Avoir un cœur d’artichaut",
                literalTranslation: "To have an artichoke heart",
                meaning: "To fall in love easily and often.",
                backgroundPath: "images/fr/artichoke.png"
            },

            {
                idiom: "Revenir à ses moutons",
                literalTranslation: "To return to one's sheep",
                meaning: "To return to the main topic of discussion.",
                backgroundPath: "images/fr/sheep.png"
            },

            {
                idiom: "Être dans la lune",
                literalTranslation: "To be in the moon",
                meaning: "To be daydreaming or not paying any attention.",
                backgroundPath: "images/fr/moon.png"
            }
            
        ],

        german: [
          
            {
                idiom: "Ich verstehe nur Bahnhof",
                literalTranslation: "I only understand train station.",
                meaning: "I don't understand anything; it's all gibberish to me.",
                backgroundPath: "images/de/trainstation.png"
            },

            {
                idiom: "Geh doch dahin wo der Pfeffer wächst",
                literalTranslation: "Go over there to the place where pepper grows.",
                meaning: "Go away/get lost.",
                backgroundPath: "images/de/pepper.png"
            },

            {
                idiom: "Um den heißen Brei herumreden",
                literalTranslation: "To talk around the hot porridge.",
                meaning: "To beat around the bush.",
                backgroundPath: "images/de/porridge.png"
            },

            {
                idiom: "Da kannst du Gift drauf nehmen",
                literalTranslation: "You can take poison on it.",
                meaning: "You can be absolutely sure of something; you can bet your life on it.",
                backgroundPath: "images/de/poison.png"
            },

            {
                idiom: "Eine Extrawurst verlangen",
                literalTranslation: "To ask for an extra sausage.",
                meaning: "To demand special treatment or an exception from rules.",
                backgroundPath: "images/de/demandsausage.png"
            },

            {
                idiom: "Tomaten auf den Augen haben",
                literalTranslation: "To have tomatoes on your eyes.",
                meaning: "To be oblivious or unaware of something that is obvious to others.",
                backgroundPath: "images/de/tomato.png"
            },

            {
                idiom: "Deinen Senf dazugeben",
                literalTranslation: "To add your mustard to it.",
                meaning: "To give your opinion or comment on something, often unnecessarily.",
                backgroundPath: "images/de/mustard.png"
            },

            {
                idiom: "Schwein haben",
                literalTranslation: "To have a pig.",
                meaning: "To be very lucky.",
                backgroundPath: "images/de/havepig.png"
            },

            {
                idiom: "Da haben wir den Salat",
                literalTranslation: "There we have the salad.",
                meaning: "Now we are in trouble/a sticky situation.",
                backgroundPath: "images/de/havesalad.png"
            },

            {
                idiom: "Eine Leiche im Keller haben",
                literalTranslation: "To have a corpse in the cellar.",
                meaning: "To have skeletons in the closet.",
                backgroundPath: "images/de/cellar.png"
            },

            {
                idiom: "Die beleidigte Leberwurst spielen",
                literalTranslation: "To play the role of the offended liver sausage.",
                meaning: "To overly act offended or upset, often over something minor or trivial.",
                backgroundPath: "images/de/angrysausage.png"
            },
            {
                idiom: "Einen Kater haben",
                literalTranslation: "To have a cat.",
                meaning: "To have a hangover.",
                backgroundPath: "images/de/havecat.png"
            },

            {
                idiom: "Ein Affentheater aufführen",
                literalTranslation: "To perform a monkey theater show.",
                meaning: "To create a fuss or make a scene about a situation.",
                backgroundPath: "images/de/monkeytheater.png"
            },
            {
                idiom: "Das Haar in der Suppe finden",
                literalTranslation: "To find the hair in the soup.",
                meaning: "To find fault or look for a problem where there might not be one.",
                backgroundPath: "images/de/souphair.png"
            },

            {
                idiom: "Da fresse ich glatt einen Besen!",
                literalTranslation: "I'll smoothly eat a broom.",
                meaning: "'I'll eat my own hat if that happens.'",
                backgroundPath: "images/de/broom.png"
            },

            {
                idiom: "Wir sitzen schön in der Tinte!",
                literalTranslation: "We are sitting beautifully in the ink!",
                meaning: "We are in big trouble or a difficult situation.",
                backgroundPath: "images/de/ink.png"
            },

            {
                idiom: "Nach jemandes Pfeife tanzen",
                literalTranslation: "To dance to someone's flute.",
                meaning: "To do whatever someone wants or to be controlled by someone else.",
                backgroundPath: "images/de/flutedance.png"
            },

            {
                idiom: "Jacke wie Hose",
                literalTranslation: "Jacket like pants.",
                meaning: "It doesn't make a difference; it's all the same.",
                backgroundPath: "images/de/jacketpants.png"
            },

            {
                idiom: "Seine Felle davonschwimmen sehen",
                literalTranslation: "To see one's hides/fur float away.",
                meaning: "To watch one's prospects or opportunities slip away, often used to describe losing something valuable.",
                backgroundPath: "images/de/fur.png"
            },

            {
                idiom: "Eine Schwalbe macht noch keinen Sommer",
                literalTranslation: "One swallow does not yet make a summer.",
                meaning: "One positive sign or event does not mean the situation isresolved or 'we are still a long ways away'.",
                backgroundPath: "images/de/swallow.png"
            },

            {
                idiom: "Auf Wolke Sieben schweben",
                literalTranslation: "To float on cloud 7.",
                meaning: "To be very happy/on cloud 9; apparently it's cloud 7 in Germany.",
                backgroundPath: "images/de/cloud.png"
            },

            {
                idiom: "Einen Eiertanz aufführen",
                literalTranslation: "To perform an egg dance.",
                meaning: "To handle a situation very carefully/to walk on eggshells.",
                backgroundPath: "images/de/eggshells.png"
            },

            {
                idiom: "In Teufels Küche kommen",
                literalTranslation: "To come into the devil's kitchen.",
                meaning: "To get into serious trouble or a dangerous situation.",
                backgroundPath: "images/de/devil.png"
            },

            {
                idiom: "Jemanden an der Nase herumführen",
                literalTranslation: "To lead someone around by the nose.",
                meaning: "To deceive or manipulate someone, making them do what you want.",
                backgroundPath: "images/de/nose.png"
            },

            {
                idiom: "Mit den Wölfen heulen",
                literalTranslation: "To howl with the wolves.",
                meaning: "When in Rome, do as the Romans do.",
                backgroundPath: "images/de/howl.png"
            },

            {
                idiom: "Das Gelbe vom Ei sein",
                literalTranslation: "To be the yellow of the egg.",
                meaning: "To be the best or most ideal; to be the bees knees.",
                backgroundPath: "images/de/yolk.png"
            },

            {
                idiom: "Auf der Leitung stehen",
                literalTranslation: "To stand on the line.",
                meaning: "To be slow on the uptake or not understand; to be confused or out of the loop.",
                backgroundPath: "images/de/cord.png"
            },

            {
                idiom: "Du gehst mir auf den Keks",
                literalTranslation: "You're going on my cookie.",
                meaning: "You're getting on my nerves.",
                backgroundPath: "images/de/cookies.png"
            },

            {
                idiom: "Klappe zu, Affe tot",
                literalTranslation: "Lid/shutter closed, monkey dead.",
                meaning: "The matter is settled; it's over and done with/ end of discussion.",
                backgroundPath: "images/de/grave.png"
            },

            {
                idiom: "Ein Kabelsalat sein",
                literalTranslation: "To be a cable salad.",
                meaning: "To be a tangled mess, often used to describe a disorganized or chaotic situation.",
                backgroundPath: "images/de/cablesalad.png"
            },

            {
                idiom: "Alles in Butter",
                literalTranslation: "Everything in butter.",
                meaning: "Everything is okay or under control; nothing is wrong.",
                backgroundPath: "images/de/butter.png"
            },

            {
                idiom: "Blau sein",
                literalTranslation: "To be blue.",
                meaning: "Being blue in Germany is being drunk and has nothing to do with being sad.",
                backgroundPath: "images/de/blue.png"
            },

            {
                idiom: "Nicht mehr alle Tassen im Schrank haben",
                literalTranslation: "Not to have all the cups in the cupboard anymore.",
                meaning: "To be crazy or not fully mentally sound; to have lost one's marbles.",
                backgroundPath: "images/de/cups.png"
            },

            {
                idiom: "Das ist mir Wurst",
                literalTranslation: "That is sausage to me.",
                meaning: "I don't care or it doesn't matter to me; it's all the same.",
                backgroundPath: "images/de/sausagecare.png"
            },

            {
                idiom: "Ich glaub mein Schwein pfeift!",
                literalTranslation: "I think my pig is whistling!",
                meaning: "I can't believe it or I'm astonished; something seems unbelievable or surprising.",
                backgroundPath: "images/de/pigwhistle.png"
            },

            {
                idiom: "Bock haben",
                literalTranslation: "To have a ram.",
                meaning: "To be in the mood for something or to feel like doing something.",
                backgroundPath: "images/de/goat.png"
            },

            {
                idiom: "Die Nase voll haben",
                literalTranslation: "To have a full nose.",
                meaning: "To be fed up or tired of something; to have had enough.",
                backgroundPath: "images/de/nosefull.png"
            },

            {
                idiom: "Das ist ein Katzensprung",
                literalTranslation: "It's a cat's jump.",
                meaning: "It's a short distance; very close or nearby.",
                backgroundPath: "images/de/catjump.png"
            },

            {
                idiom: "Alles hat ein Ende, nur die Wurst hat zwei",
                literalTranslation: "Everything has an end, only a sausage has two.",
                meaning: "Everything eventually comes to an end.",
                backgroundPath: "images/de/sausageend.png"
            },

            {
                idiom: "Jemandem ein Ohr abkauen",
                literalTranslation: "To chew someone's ear off.",
                meaning: "To talk to someone excessively/To talk someone's ear off.",
                backgroundPath: "images/de/chew.png"
            },

            {
                idiom: "Jetzt geht's um die Wurst",
                literalTranslation: "Now it's about the sausage.",
                meaning: "Now it's serious; the crucial moment or the main point of the situation has arrived.",
                backgroundPath: "images/de/sausageclock.png"
            },

            {
                idiom: "Aus der Reihe tanzen",
                literalTranslation: "To dance out of the line.",
                meaning: "To deviate from the norm; to break ranks/step out of line.",
                backgroundPath: "images/de/dance.png"
            },

            {
                idiom: "Da liegt der Hase im Pfeffer",
                literalTranslation: "There lies the rabbit in the pepper.",
                meaning: "That's where the problem or the difficulty is; that's the crux of the matter.",
                backgroundPath: "images/de/rabbit.png"
            },

            {
                idiom: "Das fünfte Rad am Wagen sein",
                literalTranslation: "To be the fifth wheel on the wagon.",
                meaning: "To be a third wheel.",
                backgroundPath: "images/de/wagon.png"
            },

            {
                idiom: "Ein Lichtkleid tragen",
                literalTranslation: "To wear a dress made of light.",
                meaning: "To be naked/be in your birthday suit.",
                backgroundPath: "images/de/lightdress.png"
            },

            {
                idiom: "Jemandem Honig um den Mund schmieren",
                literalTranslation: "To smear honey around someone's mouth.",
                meaning: "To flatter or sweet-talk someone to gain their favor.",
                backgroundPath: "images/de/honeysmear.png"
            },

            {
                idiom: "In den sauren Apfel beißen",
                literalTranslation: "To bite into the sour apple.",
                meaning: "To do something unpleasant or endure a difficult situation that must be faced.",
                backgroundPath: "images/de/apple.png"
            },

            {
                idiom: "Wie die Kuh vom Eis kommen.",
                literalTranslation: "To come off the ice like a cow does.",
                meaning: "To miraculously come out of a tricky situation unscathed.",
                backgroundPath: "images/de/cow.png"
            },

            {
                idiom: "Wer weiß, warum die Gänse barfuß gehen",
                literalTranslation: "Who knows why the geese go barefoot.",
                meaning: "Who knows why things are like this ; It is what it is.",
                backgroundPath: "images/de/geese.png"
            },

            {
                idiom: "Er hat das Pulver nicht gerade erfunden",
                literalTranslation: "He did not just invent the (gun)powder.",
                meaning: "He didn't do anything meaningful or special.",
                backgroundPath: "images/de/powder.png"
            },

            {
                idiom: "Da liegt der Hund begraben",
                literalTranslation: "There lies the dog buried.",
                meaning: "That's where the problem or the crux of the issue is; that's the core of the matter.",
                backgroundPath: "images/de/doggrave.png"
            }
    
            
            
            // Add more German idioms here
        ],


        swedish:[

            {
                idiom: "Du har satt din sista potatis",
                literalTranslation: "You have planted your last potato",
                meaning: "You've reached the end of your line or made your last mistake/ I am fed up with you.",
                backgroundPath: "images/se/potato.png"
            },

            {
                idiom: "Att inte ha alla hästar hemma",
                literalTranslation: "To not have all the horses at home",
                meaning: "To not be very smart.",
                backgroundPath: "images/se/horses.png"
            },

            {
                idiom: "Att ana ugglor i mossen",
                literalTranslation: "To suspect owls in the swamp/bog",
                meaning: "To sense that something is wrong or that there is trouble ahead.",
                backgroundPath: "images/se/owls.png"
            },

            {
                idiom: "Tala om trollen",
                literalTranslation: "Speak of the trolls",
                meaning: "Speak of the devil; when someone you were talking about appears unexpectedly.",
                backgroundPath: "images/se/troll.png"
            },

            {
                idiom: "Att kasta pärlor åt svin",
                literalTranslation: "To throw pearls to pigs",
                meaning: "To offer something valuable to someone who doesn't appreciate it.",
                backgroundPath: "images/se/pearls.png"
            },

            {
                idiom: "Även små grytor har öron",
                literalTranslation: "Even small pots have ears",
                meaning: "Be careful talking in front of children, they could understand more than you think.",
                backgroundPath: "images/se/pots.png"
            },

            {
                idiom: "Lägg ägg!",
                literalTranslation: "Lay eggs!",
                meaning: "'No way!' / I can’t believe it.",
                backgroundPath: "images/se/layeggs.png"
            },

            {
                idiom: "Att trilla av pinnen",
                literalTranslation: "To fall off the stick",
                meaning: "To kick the bucket / pass away.",
                backgroundPath: "images/se/stick.png"
            },

            {
                idiom: "Att måla fan på väggen",
                literalTranslation: "To paint the devil on the wall",
                meaning: "To imagine the worst-case scenario or to exaggerate a problem.",
                backgroundPath: "images/se/paintdevil.png"
            },

            {
                idiom: "Att se genom fingrarna",
                literalTranslation: "To see through one's fingers",
                meaning: "To overlook or ignore a fault or mistake / turn a blind eye.",
                backgroundPath: "images/se/lookfingers.png"
            },

            {
                idiom: "När Katten är Borta Dansar Råttorna på Bordet",
                literalTranslation: "When the cat is away, the mice dance on the table",
                meaning: "When the authority figure is absent, people may misbehave or act more freely.",
                backgroundPath: "images/se/ratdance.png"
            },

            {
                idiom: "Ingen ko på isen",
                literalTranslation: "No cow on the ice",
                meaning: "There is no immediate danger or problem.",
                backgroundPath: "images/se/cow.png"
            },

            {
                idiom: "Att ha en räv bakom örat",
                literalTranslation: "To have a fox behind the ear",
                meaning: "To be cunning or clever, often implying a sense of deceitfulness.",
                backgroundPath: "images/se/fox.png"
            },

            {
                idiom: "Att lägga en pizza",
                literalTranslation: "To lay down a pizza",
                meaning: "To vomit.",
                backgroundPath: "images/se/pizza.png"
            },

            {
                idiom: "Att sitta med skägget i brevlådan",
                literalTranslation: "To sit/be left with one's beard in the mailbox",
                meaning: "To be caught red-handedd.",
                backgroundPath: "images/se/mailbox.png"
            },

            {
                idiom: "Det ligger en hund begraven",
                literalTranslation: "There is a buried dog",
                meaning: "There is something suspicious or hidden that needs to be investigated / I smell a rat.",
                backgroundPath: "images/se/doggrave.png"
            },

            {
                idiom: "Köp inte grisen i säcken",
                literalTranslation: "Don't buy the pig in the sack",
                meaning: "Don't buy something without inspecting/trying it first.",
                backgroundPath: "images/se/pigbag.png"
            },

            {
                idiom: "Dra inte alla över en kam",
                literalTranslation: "Don't pull everyone over the same comb",
                meaning: "Don't generalize or judge everyone in the same way; recognize individual differences.",
                backgroundPath: "images/se/comb.png"
            },

            {
                idiom: "Att ha tomtar på loftet",
                literalTranslation: "To have gnomes in the attic",
                meaning: "To not be too clever.",
                backgroundPath: "images/se/gnomes.png"
            },

            {
                idiom: "Att gå som katten kring het gröt",
                literalTranslation: "To walk like the cat around hot porridge",
                meaning: "To beat around the bush.",
                backgroundPath: "images/se/porridge.png"
            },

            {
                idiom: "Att ha millimetrarna på sin sida",
                literalTranslation: "To have the millimeters on your side",
                meaning: "To have luck on your side.",
                backgroundPath: "images/se/meters.png"
            },

            {
                idiom: "Mycket snack och lite verkstad",
                literalTranslation: "Much talk and little workshop",
                meaning: "A lot of talk with little action or results.",
                backgroundPath: "images/se/workshop.png"
            },

            {
                idiom: "Att skriva som en kråka",
                literalTranslation: "To write like a crow",
                meaning: "To have poor handwriting.",
                backgroundPath: "images/se/crow.png"
            },

            {
                idiom: "Att ta sig vatten över huvudet",
                literalTranslation: "To take water over your head",
                meaning: "To take on more than you can handle/ bite off more than you can chew.",
                backgroundPath: "images/se/waterhead.png"
            },

            {
                idiom: "Att vara ute och cykla",
                literalTranslation: "To be out and cycling",
                meaning: "To be off track or not on the right path; to be mistaken or confused.",
                backgroundPath: "images/se/cycling.png"
            },

            {
                idiom: "Nära skjuter ingen hare",
                literalTranslation: "Close doesn’t shoot any hare",
                meaning: "Close but no cigar / nice try, but better luck next time.",
                backgroundPath: "images/se/hunter.png"
            },

            {
                idiom: "Att glida in på en räkmacka",
                literalTranslation: "To slide in on a shrimp sandwich",
                meaning: "To have an easy time of something / get lucky.",
                backgroundPath: "images/se/shrimps.png"
            },

            {
                idiom: "Att ha is i magen",
                literalTranslation: "To have ice in one's stomach",
                meaning: "To remain calm and composed under pressure or in stressful situations.",
                backgroundPath: "images/se/icestomach.png"
            },

            {
                idiom: "Att bära hundhuvudet",
                literalTranslation: "To carry the dog's head",
                meaning: "To take the blame for something.",
                backgroundPath: "images/se/doghead.png"
            },

            {
                idiom: "Att vara uppe med tuppen",
                literalTranslation: "To be up with the rooster",
                meaning: "To get up very early in the morning.",
                backgroundPath: "images/se/rooster.png"
            },

            {
                idiom: "Att lägga lök på laxen",
                literalTranslation: "To put onion on the salmon",
                meaning: "To make a bad situation worse.",
                backgroundPath: "images/se/salmon.png"
            },

            {
                idiom: "Sätta myror i huvudet på någon",
                literalTranslation: "To put ants in someone's head",
                meaning: "To confuse or puzzle someone.",
                backgroundPath: "images/se/ants.png"
            },

            {
                idiom: "Att ha rent mjöl i påsen",
                literalTranslation: "To have clean flour in the bag",
                meaning: "To be honest / to have nothing to hide.",
                backgroundPath: "images/se/flour.png"
            },

            {
                idiom: "Dra dit pepparn växer",
                literalTranslation: "Go where the pepper grows",
                meaning: "Go away, usually used to tell someone to leave or to get lost.",
                backgroundPath: "images/se/pepper.png"
            },

            {
                idiom: "Att kasta yxan i sjön",
                literalTranslation: "To throw the axe into the lake",
                meaning: "To give up / throw in the towel.",
                backgroundPath: "images/se/axe.png"
            },

            {
                idiom: "Att sätta bocken till trädgårdsmästare",
                literalTranslation: "To make the goat a gardener",
                meaning: "To assign someone to a job for which they are ill-suited or where they can do harm.",
                backgroundPath: "images/se/goat.png"
            },

            {
                idiom: "Att få sina fiskar varma",
                literalTranslation: "To get your fish warmed",
                meaning: "To get a scolding / to get reprimanded.",
                backgroundPath: "images/se/fish.png"
            },

            {
                idiom: "Att ha vassa armbågar",
                literalTranslation: "To have sharp elbows",
                meaning: "To be aggressive, ruthless and competitive in order to advance or succeed.",
                backgroundPath: "images/se/elbow.png"
            },

            {
                idiom: "Att göra någon en björntjänst",
                literalTranslation: "To do someone a bear's service/favor",
                meaning: "To do someone a favor that ends up being more harmful than helpful.",
                backgroundPath: "images/se/bearfavor.png"
            },

            {
                idiom: "Att sitta som på nålar",
                literalTranslation: "To sit as if on needles",
                meaning: "To be very anxious or nervous.",
                backgroundPath: "images/se/needles.png"
            },

            {
                idiom: "Att komma på grön kvist",
                literalTranslation: "To come onto a green branch",
                meaning: "To achieve financial success or stability.",
                backgroundPath: "images/se/greenbranch.png"
            },

            {
                idiom: "Att ta bladet från munnen",
                literalTranslation: "To take the leaf from one's mouth",
                meaning: "To speak frankly or openly about something.",
                backgroundPath: "images/se/leaf.png"
            },

            {
                idiom: "Att ha ett finger med i spelet",
                literalTranslation: "To have a finger in the game",
                meaning: "To be involved in something / to have a hand in something.",
                backgroundPath: "images/se/finger.png"
            },

            {
                idiom: "Att gå över lik",
                literalTranslation: "To walk over corpses",
                meaning: "To go to any lengths or overcome any obstacles to achieve one's goals.",
                backgroundPath: "images/se/skeletons.png"
            },

            {
                idiom: "Att bita i gräset",
                literalTranslation: "To bite the grass",
                meaning: "To bite the dust / pass away.",
                backgroundPath: "images/se/grass.png"
            },

            {
                idiom: "Att ha ögonen i nacken",
                literalTranslation: "To have eyes in one's neck",
                meaning: "To be very aware of what is happening around you; to have eyes in the back of your head.",
                backgroundPath: "images/se/eyesneck.png"
            },

            {
                idiom: "Att hålla grytan kokande",
                literalTranslation: "To keep the pot boiling",
                meaning: "To keep things moving or maintain the momentum in a situation.",
                backgroundPath: "images/se/water.png"
            },

            {
                idiom: "Att ha många järn i elden",
                literalTranslation: "To have many irons in the fire",
                meaning: "To be involved in many activities or projects at the same time.",
                backgroundPath: "images/se/irons.png"
            },

            {
                idiom: "Att gå på pumpen",
                literalTranslation: "To go/walk on the pump",
                meaning: "To get cheated or to fail.",
                backgroundPath: "images/se/pump.png"
            },

            {
                idiom: "Att sitta still i båten",
                literalTranslation: "To sit still in the boat",
                meaning: "To stay calm, especially in a difficult situation.",
                backgroundPath: "images/se/boat.png"
            }
            
             
        ],

        turkish: [
            {
                idiom: "Ne ayaksın?",
                literalTranslation: "What foot are you?",
                meaning: "To ask someone what their intentions or 'who the hell are you?'",
                backgroundPath: "images/tr/foot.png"
            },

            {
                idiom: "Pabucu Dama Atılmak",
                literalTranslation: "To have one's shoe thrown onto the roof.",
                meaning: "To fall out of favor/be replaced.",
                backgroundPath: "images/tr/shoes.png"
            },

            {
                idiom: "Burnundan Kıl Aldırmamak",
                literalTranslation: "To pluck a hair out of one’s nose.",
                meaning: "To be very arrogant or prideful; to refuse criticism.",
                backgroundPath: "images/tr/pluck.png"
            },

            {
                idiom: "Fıstık Gibi",
                literalTranslation: "Like a pistachio.",
                meaning: "To look very attractive or appealing.",
                backgroundPath: "images/tr/pistachio.png"
            },

            {
                idiom: "Ağzıyla Kuş Tutmak",
                literalTranslation: "To catch a bird with one's mouth.",
                meaning: "To try to accomplish the impossible to get validation.",
                backgroundPath: "images/tr/bird.png"
            },
            
            {
                idiom: "Bedava Sirke Baldan Tatlıdır",
                literalTranslation: "Free vinegar is sweeter than honey.",
                meaning: "The best things in life are free.",
                backgroundPath: "images/tr/vinegar.png"
            },

            {
                idiom: "Sakla Samanı Gelir Zamanı",
                literalTranslation: "Keep the hay, it’s time will come.",
                meaning: "If you keep something, you’ll eventually find a use for it.",
                backgroundPath: "images/tr/hay.png"
            },

            {
                idiom: "Keçileri Kaçırmak",
                literalTranslation: "To lose the goats.",
                meaning: "To go crazy or lose one's mind.",
                backgroundPath: "images/tr/goats.png"
            },

            {
                idiom: "Maydanoz Olmak",
                literalTranslation: "To be a parsley.",
                meaning: "To be meddlesome/involve yourself in others people’s business.",
                backgroundPath: "images/tr/parsley.png"
            },

            {
                idiom: "Kabak Tadı Vermek",
                literalTranslation: "To give off the taste of zucchini.",
                meaning: "To become boring.",
                backgroundPath: "images/tr/zucchini.png"
            },

            {
                idiom: "Havadan Sudan Konuşmak",
                literalTranslation: "To talk about the weather and the water.",
                meaning: "To make small talk/To speak about unimportant topics.",
                backgroundPath: "images/tr/smalltalk.png"
            },

            {
                idiom: "Komşunun Tavuğu Komşuya Kaz Görünür",
                literalTranslation: "A neighbor’s chicken looks like a goose to his neighbor.",
                meaning: "People often think that what others have is better than their own; the grass is greener on the other side.",
                backgroundPath: "images/tr/goose.png"
            },

            {
                idiom: "Alın Yazısı",
                literalTranslation: "What is written on your forehead.",
                meaning: "Fate or destiny; the events that are considered to be predetermined and beyond one's control.",
                backgroundPath: "images/tr/fate.png"
            },

            {
                idiom: "Avucunu Yalamak",
                literalTranslation: "To lick one's palm.",
                meaning: "To be in a situation where you don't get what you expected/wanted.",
                backgroundPath: "images/tr/lickpalm.png"
            },

            {
                idiom: "Tuzu Kuru",
                literalTranslation: "His salt is dry.",
                meaning: "To be well-off or comfortable, often used to describe someone who is financially secure or living comfortably.",
                backgroundPath: "images/tr/salt.png"
            },

            {
                idiom: "Eşek hoşaftan ne anlar?",
                literalTranslation: "What does a donkey know about compote?",
                meaning: "Said of someone who does not know or understand the true value of something.",
                backgroundPath: "images/tr/donkey.png"
            },

            {
                idiom: "Şeytanın bacağını kırmak",
                literalTranslation: "To break the devil's leg.",
                meaning: "To end a long-term bad trend or misfortune, to stop a series of failures, or to change a persistently negative situation.",
                backgroundPath: "images/tr/devil.png"
            },

            {
                idiom: "Tereyağından kıl çeker gibi",
                literalTranslation: "Like pulling a hair from butter.",
                meaning: "It’s so easy/ like a walk in the park.",
                backgroundPath: "images/tr/butter.png"
            },

            {
                idiom: "El elin eşeğini türkü çığırarak ararmış",
                literalTranslation: "One searches for the donkey of others while singing.",
                meaning: "A stranger won’t put in actual effort to solve your problems like you would.",
                backgroundPath: "images/tr/sing.png"
            },

            {
                idiom: "Her koyun kendi bacağından asılır.",
                literalTranslation: "Every sheep hangs from its own leg.",
                meaning: "Everyone is responsible for their own problems or situation; people must deal with their own issues.",
                backgroundPath: "images/tr/sheep.png"
            },

            {
                idiom: "Köpeğin duası kabul olsa idi, gökden kemik yağardı.",
                literalTranslation: "If a dog’s prayers were answered, bones would rain from the sky.",
                meaning: "If a vile person had his way, the world would be filled with things that would only benefit him and annoy others.",
                backgroundPath: "images/tr/bones.png"
            },

            {
                idiom: "Gözden düşmek",
                literalTranslation: "To fall from the eye.",
                meaning: "To lose favor or respect; to be looked upon less favorably by others.",
                backgroundPath: "images/tr/falleye.png"
            },

            {
                idiom: "Hapı yutmak",
                literalTranslation: "To swallow the pill.",
                meaning: "To be in serious trouble or face a difficult situation.",
                backgroundPath: "images/tr/pill.png"
            },

            {
                idiom: "Başının etini yemek",
                literalTranslation: "To eat the flesh of someone's head.",
                meaning: "To nag or pester someone persistently, often to the point of annoyance.",
                backgroundPath: "images/tr/eathead.png"
            },

            {
                idiom: "Bekarlık sultanlıktır.",
                literalTranslation: "A bachelor feels like a Sultan.",
                meaning: "Being single is a position of freedom and power; being unmarried has its advantages.",
                backgroundPath: "images/tr/sultan.png"
            },

            {
                idiom: "Yaş tahtaya basmak",
                literalTranslation: "To step on wet wood.",
                meaning: "To be cheated/fall into a trap.",
                backgroundPath: "images/tr/wetwood.png"
            },

            {
                idiom: "Karadeniz’de gemilerin mi battı?",
                literalTranslation: "Did your ships sink in the Black Sea?",
                meaning: "Why are you so upset or down? Used to ask someone why they look so sad or troubled.",
                backgroundPath: "images/tr/sink.png"
            },

            {
                idiom: "Bakarak öğrenilseydi, kediler kasap olurdu.",
                literalTranslation: "If learning by watching were possible, cats would be butchers.",
                meaning: "Watching alone is not enough to learn a skill; practice and effort are needed.",
                backgroundPath: "images/tr/butcher.png"
            },

            {
                idiom: "Şeytan tüyü",
                literalTranslation: "Devil's feather.",
                meaning: "Used to describe someone who has a mysterious, devilish charm.",
                backgroundPath: "images/tr/devilfeather.png"
            },

            {
                idiom: "Balık etli",
                literalTranslation: "Fishy skin.",
                meaning: "Having a fuller body shape; often used to describe someone who is plump or curvy in a positive way.",
                backgroundPath: "images/tr/fishskin.png"
            },


            {
                idiom: "Cami yıkılmış ama mihrab yerinde",
                literalTranslation: "The mosque is a ruin but the mihrab (altar) is standing.",
                meaning: "An idiom that describes an older woman who still retains her charms.",
                backgroundPath: "images/tr/altar.png"
            },

            {
                idiom: "Kafayı üşüttü",
                literalTranslation: "To catch a cold/virus in the head.",
                meaning: "To have become crazy or mentally unstable; to act irrationally.",
                backgroundPath: "images/tr/coldhead.png"
            },

            {
                idiom: "Sütten ağzı yanan yoğurdu üfleyerek yer.",
                literalTranslation: "The one whose mouth has been burnt because of milk, eats yoghurt by blowing on it.",
                meaning: "Someone who has had a bad experience will be cautious or overly careful about similar or other situations in the future.",
                backgroundPath: "images/tr/yogurt.png"
            },

            {
                idiom: "Cep de akrep var",
                literalTranslation: "There is a scorpion in his pocket.",
                meaning: "To be very stingy or miserly; someone who is very tight with money.",
                backgroundPath: "images/tr/scorpion.png"
            },

            {
                idiom: "Dam üstünde saksağan, vur beline kazmayı",
                literalTranslation: "There is a magpie on the roof. Hit its waist with the pickaxe.",
                meaning: "Said when someone makes a meaningless argument or action. Like: 'What does it have to do with anything?'",
                backgroundPath: "images/tr/magpie.png"
            },

            {
                idiom: "Kafa Ütülemek",
                literalTranslation: "To iron someone's head.",
                meaning: "Said when someone has talked too much/talked your ear off.",
                backgroundPath: "images/tr/ironhead.png"
            },

            {
                idiom: "Ayağını yorganına göre uzat",
                literalTranslation: "Stretch your foot according to your blanket.",
                meaning: "Live within your means or adjust your actions according to your resources.",
                backgroundPath: "images/tr/blanket.png"
            },

            {
                idiom: "Fransız kalmak",
                literalTranslation: "To be left French (to something).",
                meaning: "To not understand something (like: It’s all Greek to me).",
                backgroundPath: "images/tr/french.png"
            },

            {
                idiom: "Gemileri yakmak",
                literalTranslation: "To burn the ships.",
                meaning: "To take a decisive action with no possibility of retreat; to commit to a course of action with no turning back.",
                backgroundPath: "images/tr/burnships.png"
            },

            {
                idiom: "Başına çorap örmek",
                literalTranslation: "To knit a sock for one's head.",
                meaning: "To create problems for oneself; to cause trouble or difficulties for oneself.",
                backgroundPath: "images/tr/sock.png"
            },

            {
                idiom: "Parayı veren düdüğü çalar.",
                literalTranslation: "The one who gives the money blows the whistle.",
                meaning: "The person who provides the money should call the shots when it comes to this situation.",
                backgroundPath: "images/tr/whistle.png"
            },

            {
                idiom: "Ekmek aslanın ağzında.",
                literalTranslation: "The bread is in the lion's mouth.",
                meaning: "The means of making a living is difficult to obtain or money does not grow on trees.",
                backgroundPath: "images/tr/lion.png"
            },

            {
                idiom: "Cahille söz anlatmak, deveye hendek atlatmaktan güçtür.",
                literalTranslation: "It is more difficult to speak to an ignorant person than to get a camel over a ditch.",
                meaning: "Trying to explain something to someone who is ignorant or unlearned is incredibly difficult.",
                backgroundPath: "images/tr/camel.png"
            },

            {
                idiom: "Lafla peynir gemisi yürümez.",
                literalTranslation: "The cheese ship doesn’t move with words.",
                meaning: "Just talking or making promises is not enough; actions speak louder than words..",
                backgroundPath: "images/tr/cheeseboat.png"
            },

            {
                idiom: "Ağzından bal damlıyor",
                literalTranslation: "Honey is dripping from his/her mouth.",
                meaning: "Used to express that a person's words are extremely sweet, convincing or pleasant.",
                backgroundPath: "images/tr/honeymouth.png"
            },

            {
                idiom: "Dağ fare doğurdu",
                literalTranslation: "The mountain gave birth to a mouse.",
                meaning: "A situation that promised something significant ended up being disappointing or anticlimactic.",
                backgroundPath: "images/tr/mouse.png"
            },

            {
                idiom: "Zemheri zürafası gibi…",
                literalTranslation: "Like a giraffe in winter...",
                meaning: "Said of people who wear thin or light clothes in the thick of winter.",
                backgroundPath: "images/tr/giraffe.png"
            },

            {
                idiom: "Balık kavağa çıkınca",
                literalTranslation: "When the fish climbs the tree.",
                meaning: "When pigs fly.",
                backgroundPath: "images/tr/fishclimb.png"
            },

            {
                idiom: "Saman altından su yürütmek",
                literalTranslation: "To run water under the haystack.",
                meaning: "To do something secretly.",
                backgroundPath: "images/tr/hose.png"
            },

            {
                idiom: "Ayıyı dayı diye sev, köprüyü geçene kadar.",
                literalTranslation: "Say 'uncle' to a bear until you cross the bridge.",
                meaning: "Do whatever is necessary to achieve a goal, even if it means flattering a dangerous or unpleasant person..",
                backgroundPath: "images/tr/uncle.png"
            }

        ]
    };
    let shuffledIdioms = [];
    let currentIndex = 0;
    const language = localStorage.getItem('selectedLanguage');
    const idiomTitle = document.getElementById('idiom-title');
    const literalTranslation = document.getElementById('literal-translation');
    const meaning = document.getElementById('meaning');
    const nextButton = document.querySelector('.next-button');
    const backgroundBox = document.querySelector('.background-box');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function initializeIdioms() {
        shuffledIdioms = [...idioms[language]];
        shuffleArray(shuffledIdioms);
        currentIndex = 0;
    }

    function loadIdiom(index) {
        const idiom = shuffledIdioms[index];
        idiomTitle.textContent = idiom.idiom;
        literalTranslation.textContent = idiom.literalTranslation;
        meaning.textContent = idiom.meaning;
        backgroundBox.style.backgroundImage = `url(${idiom.backgroundPath})`;
    }

    function getNextIndex() {
        return (currentIndex + 1) % shuffledIdioms.length;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = getNextIndex();
        if (currentIndex === 0) {
            // Reinitialize idioms if we've cycled through all of them
            initializeIdioms();
        }
        loadIdiom(currentIndex);
    });

    // Initialize
    initializeIdioms();
    loadIdiom(currentIndex);
});