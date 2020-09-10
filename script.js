// Cache the DOM
const catOneTitle_button = document.getElementById('cat-one-title');
const catTwoTitle_button = document.getElementById('cat-two-title');
const catThreeTitle_button = document.getElementById('cat-three-title');
const catFourTitle_button = document.getElementById('cat-four-title');
const catFiveTitle_button = document.getElementById('cat-five-title');
const catSixTitle_button = document.getElementById('cat-six-title');
const catOneOne_button = document.getElementById('cat-one-one');
const catOneTwo_button = document.getElementById('cat-one-two');
const catOneThree_button = document.getElementById('cat-one-three');
const catOneFour_button = document.getElementById('cat-one-four');
const catOneFive_button = document.getElementById('cat-one-five');
const catTwoOne_button = document.getElementById('cat-two-one');
const catTwoTwo_button = document.getElementById('cat-two-two');
const catTwoThree_button = document.getElementById('cat-two-three');
const catTwoFour_button = document.getElementById('cat-two-four');
const catTwoFive_button = document.getElementById('cat-two-five');
const catThreeOne_button = document.getElementById('cat-three-one');
const catThreeTwo_button = document.getElementById('cat-three-two');
const catThreeThree_button = document.getElementById('cat-three-three');
const catThreeFour_button = document.getElementById('cat-three-four');
const catThreeFive_button = document.getElementById('cat-three-five');
const catFourOne_button = document.getElementById('cat-four-one');
const catFourTwo_button = document.getElementById('cat-four-two');
const catFourThree_button = document.getElementById('cat-four-three');
const catFourFour_button = document.getElementById('cat-four-four');
const catFourFive_button = document.getElementById('cat-four-five');
const catFiveOne_button = document.getElementById('cat-five-one');
const catFiveTwo_button = document.getElementById('cat-five-two');
const catFiveThree_button = document.getElementById('cat-five-three');
const catFiveFour_button = document.getElementById('cat-five-four');
const catFiveFive_button = document.getElementById('cat-five-five');
const catSixOne_button = document.getElementById('cat-six-one');
const catSixTwo_button = document.getElementById('cat-six-two');
const catSixThree_button = document.getElementById('cat-six-three');
const catSixFour_button = document.getElementById('cat-six-four');
const catSixFive_button = document.getElementById('cat-six-five');
const container_div = document.getElementById('container');
const cluePopUp_div = document.getElementById('clue-popup');
const clue_label = document.getElementById('clue-label');
const answerFeedback_div = document.getElementById('answer-feedback');
const answerSubmit_form = document.getElementById('answer-form');
const playerOneScore_span = document.getElementById("player1-score");
const playerTwoScore_span = document.getElementById('player2-score')
const playerOne_div = document.getElementById('player-1');
const playerTwo_div = document.getElementById('player-2');
const start_button = document.getElementById('start-button');
const reset_button = document.getElementById('reset-button');
const wager_input = document.getElementById('wager');
const error_element = document.getElementById('error');
const dailyDouble_header = document.getElementById('daily-double');

// Set default scores
let playerOneScore = 0;
let playerTwoScore = 0;
let counter = 0;

// Clues Database
const clues = {
    'Planets': {
        $100: {
            'This desert world was home to both Luke and Anakin Skywalker.':
            /Tatooine\?|tatto+ine\?/i
        },
        $200: {
            "This overly urbanized world, also known as Imperial Center, served as the capital of the Galactic Republic and Galactic Empire.":
            /Coruscant\?|Corusant\?/i
        },
        $300: {
            "Following the Jedi purge and rise of the Galactic Empire, Yoda lived in exile on this swamp world.":
            /Dagobah\?/i
        },
        $400: {
            "This world, which was featured in both The Star Wars Holiday Special and Revenge of the Sith, is the home world of Chewbacca and the wookiees.":
            /Kashy+k\?/i
        },
        $500: {
            "Introduced in the novel The Courtship of Princess Leia, this world is home to a variety force-sensitive witches such as the Nightsisters.":
            /Dath[ao]mir\?|Dathmir\?/i
        }
    },
    'Authors': {
        $100: {
            "This Heir to the Empire author created such characters as Grand Admiral Thrawn, Mara Jade, and Talon Karrde.":
            /Timothy Zahn\?|Zahn\?|Tim Zahn\?/i
        },
        $200: {
            "This author kicked off the X-Wing book series and featured Rogue Squadron pilot and Jedi Knight Corran Horn in several of his books.":
            /Michael Stackpole\?|Stackpole\?/i
        },
        $300: {
            "This author of the Republic Commando novel series, wrote multiple novels that featured Mandalorian characters.":
            /Karen Travis+\?|Travis+/i
        },
        $400: {
            "This Vector Prime author suffered quite a bit of fan backlash over the death of Chewbacca.":
            /Salvatore\?|Salvator\?/i
        },
        $500: {
            "He featured the droid I5 as a recurring supporting character in Darth Maul: Shadow Hunter and several other Star Wars novels.":
            /Michael Reaves\?|Reaves\?|Michael Reeves\?|Reeves\?/i
        }
    },
    'Bounty Hunters': {
        $100: {
            "This helmeted bounty hunter collected the bounty Jabba the Hutt placed on Han Solo.":
            /Boba Fett\?|Boba\?/i
        },
        $200: {
            "He served as the genetic template for the Republic’s clone army during the Clone Wars.":
            /Jango Fett\?|Jango\?/i
        },
        $300: {
            "This lead character impersonates the Ubese bounty hunter Boushh in Return of the Jedi.":
            /Leia\?/i
        },
        $400: {
            "This Trandoshan bounty hunter, often at odds with Boba Fett, overhears Admiral Piett’s unflattering remarks about bounty hunters in The Empire Strikes Back.":
            /Bos+k\?/i
        },
        $500: {
            "Boba Fett used this ship in The Empire Strikes Back.":
            /slave i\?|slave 1\?/i
        }
    },
    'Video Games': {
        $100: {
            "Considered one of the best Star Wars games, this RPG features a shocking twist that your character is Darth Revan.":
            /knights of the old republic\?|kotor\?/i
        },
        $200: {
            "Part of a 1996 Star Wars multimedia event, this game's first level put you in a snow speeder alongside Rogue Squadron during the Battle of Hoth.":
            /shadows of the empire\?/i
        },
        $300: {
            "This game introduced the mercenary main character Kyle Katarn, an ex-stormtrooper that stole the plans to the Death Star.":
            /dark forces\?/i
        },
        $400: {
            "This cantankerous droid appears in both Knights of the Old Republic RPGs was well two different Star Wars MMORPGs.":
            /hk47\?|hk-47\?/i
        },
        $500: {
            "This Massivley Multiplayer Online game launched a New Game Experience (NGE) update, which led to an exodus of subscribed players.":
            /Galaxies\?/i
        }
    },
    'Famous Jedi': {
        $100: {
            "This Jedi Knight trained both Anakin and Luke Skywalker and served as a general during the Clone Wars.":
            /Obi-Wan Kenobi\?|Kenobi\?|Obi Wan Kenobi\?|Obi-Wan\?|Obi Wan\?|Obiwan\?/i
        },
        $200: {
            "This senior member of the Jedi Council used a lightsaber with an amethyst-colored blade and invented the Vaapad lightsaber fighting technique.":
            /Mace Windu\?|Windu\?|Mace\?/i
        },
        $300: {
            "This mentor to Obi Wan Kenobi often butted heads with the Jedi Council and emphasized the importance of 'The Living Force'.":
            /Qui-Gon\?|Qui Gon\?|Jin+\?|Qui-Gon Jin+\?|Qui Gon Jin+\?/i
        },
        $400: {
            "Known as “The Prodigal Knight”, he led the Old Republic to victory in the Mandalorian Wars before falling to the dark side but was later redeemed and defeated his former apprentice, Darth Malak.":
            /Revan\?/i
        },
        $500: {
            "Jedi Grand Master Luke Skywalker bestowed the title “Sword of the Jedi” on her.":
            /Jaina\?|Jaina Solo\?|Jayna Solo\?/i
        }
    },
    'Infamous Sith': {
        $100: {
            "This future Emperor Palpatine brought about the fall of the Galactic Republic and the Jedi purge.":
            /Darth Sidious\?|Sidious\?/i
        },
        $200: {
            "Darth Maul was one of these of horned humanoid aliens.":
            /zabra+k\?|iridonian\?/i
        },
        $300: {
            "This ancient Sith Lord instituted the Rule of Two a thousand years prior to the birth of the Galactic Empire.":
            /Darth Bane\?|Bane\?/i
        },
        $400: {
            "A former Jedi, Count Dooku took this name upon becoming a Sith Lord.":
            /Darth Tyr+an+us\?|Tyr+an+us\?/i
        },
        $500: {
            "He used a double-bladed lightsaber millennia before Darth Maul and, as a lingering spirit, battled Luke Skywalker and his Jedi students on Yavin IV.":
            /Exar Kun\?/i
        }
    },
    'Scoundrels': {
        $100: {
            "A close friend of Han Solo, he served as Bespin’s administrator and later fought as a Rebel Alliance General during the Battle of Endor.":
            /Lando Calrissian\?|Lando\?|Calrissian|\?/i
        },
        $200: {
            "This vile gangster based on Tatooine employed Han Solo’s services on occasion and put a bounty on Han once their business relationship went sour.":
            /Jabba the Hutt\?|Jabba\?/i
        },
        $300: {
            "While Han Solo was frozen in carbonite between The Empire Strikes Back and Return of the Jedi, Luke and Leia contracted the services of this Outrider captain.":
            /Dash Rendar\?|Rendar\?|Dash\?/i
        },
        $400: {
            "Prince Xizor led this galactic criminal syndicate, known for bestowing the title “Vigo” on members of its leadership.":
            /Black Sun\?/i
        },
        $500: {
            "After Palpatine’s death, this former Emperor’s Hand became second-in-command of Talon Karrde’s smuggling and information brokering organization.":
            /Mara Jade\?/i
        }
    },
    'Alien Races': {
        $100: {
            "These short, teddy bear-like beings are native to Endor's forest moon.":
            /Ewoks\?|ewok\?/i
        },
        $200: {
            "Often seen working as dancers, these humanoid aliens from Ryloth have a pair of head tails called lekku and come in a variety of bright colors, including blue, green, and pink.":
            /Twi'leks\?|Twileks\?/i
        },
        $300: {
            "Admiral Ackbar is perhaps the best known member of this aquatic race known for supplying battleships to the Rebel Alliance.":
            /Mon Calamari\?|Mon Calamarians*\?|Mon Cals*\?/i
        },
        $400: {
            "Greedo, the bounty hunter that unsuccessfully tried to collect a bounty on Han Solo in the Mos Eisley cantina, is of this alien race.":
            /Rodians*\?/i
        },
        $500: {
            "Known for political back-stabbing and espionage skills, a group of these aliens provided the Rebel Alliance with critical intelligence on the second Death Star":
            /Bothans*\?/i
        }
    },
    "The Clone Wars": {
        $100: {
            "The opening battle of the Clone Wars took place on this planet - home to a Separatist, insectoid race":
            /Geonosis\?/i
        },
        $200: {
            "Count Dooku organized the Separatist systems that opposed the Republic during the Clone Wars into this political union":
            /Confederacy of Independent Systems\?|CIS\?/i
        },
        $300: {
            "This Kaleesh cyborg let the miltary forces of the Separatists during the Clone Wars":
            /General Grievous\?|Grievous\?/i
        },
        $400: {
            "This Twi'lek Jedi, who appeared in both comics and the prequel films, was killed on the floral world Felucia following Order 66":
            /Aayla Secura\?|Secura\?/i
        },
        $500: {
            "This Jedi Master placed the original order for the Republic's clone army with the Kaminoans":
            /Sifo-Dyas\?|Sifo Dyas\?|Sipho Dyas\?|Sifo Dias\?|Sipho Dias\?/i
        }
    },
    "Comics": {
        $100: {
            "In this controversial comic series, the Emperor returns from the dead and Luke turns to the dark side.":
            /Dark Empire\?/i
        },
        $200: {
            "This comic series followed the efforts of Luke Skywalker's decendant at saving the galaxy from a group of Sith led by Darth Krayt approximately 130 years after the Battle of Yavin.":
            /Legacy\?/i
        },
        $300: {
            "This Jedi, who attempted to join Count Dooku as a double agent, was featured often in the Star Wars: Republic comics":
            /Quinlan Vos+\?|Vos+\?/i
        },
        $400: {
            "After Marvel's original run of Star Wars comics ended, this small comic publisher acquired the Star Wars comics rights and held them until Disney acquired Star Wars.":
            /Dark Horse\?/i
        },
        $500: {
            "This writer worked heavily on several Star Wars comics, including Star Wars: Legacy, Star Wars: Republic, and Star Wars: Dawn of the Jedi":
            /John Ostrander\?|Ostrander\?/i
        }
    }
}
// Clue Id's
const clueIds = [
    'cat-one-one','cat-one-two','cat-one-three','cat-one-four','cat-one-five',
    'cat-two-one','cat-two-two','cat-two-three','cat-two-four','cat-two-five',
    'cat-three-one','cat-three-two','cat-three-three','cat-three-four','cat-three-five',
    'cat-four-one','cat-four-two','cat-four-three','cat-four-four','cat-four-five',
    'cat-five-one','cat-five-two','cat-five-three','cat-five-four','cat-five-five'
];
// Responses to correct answers
correctResponses = [
    'Correct! The Force is strong with this one!',
    'Great shot, kid! That was one in a million.',
    'Knowledge is power...UNLIMITED POWER!!',
    "That's right! Not bad for an organic meat-bag.",
    "Right. You're quite clever...for a human being."
];
// Responses to statement answers
questionResponses = [
    'Forgot to answer in the form of a question, did you?',
    'Lord Vader finds your lack of answering in the form of a question...disturbing.',
    'Too sure of yourself, you are. In the form of a question, you must respond.',
    "Next time answer in the form of a question, young padawan.",
    "Query: why did you not answer in the form of a question?"
];
// Responses to incorrect answers
incorrectResponses = [
    'Try Again. You stuck-up, half-witted, scruffy-looking, nerfherder!',
    "Incorrect! I have a bad feeling about this game.",
    "That's wrong. Your overconfidence is your weakness.",
    "I don't know where you get your delusions, laser-brain.",
    "Much to learn, you still have."
];
// Event handler for start and reset buttons
start_button.addEventListener('click', game);
reset_button.addEventListener('click', function() {
    window.location.reload();
})

// Function for the Jeopardy! game
function game() {
    counter = 0;
    start_button.classList.add('hide');
    localStorage.clear();
    localStorage.setItem('turn', 'player1');
    playerOne_div.classList.add('thick-border');
    fillTitles();
    // Sequentially fills the title categories
    function fillTitles() {
        setTimeout(() => catOneTitle_button.innerText = getRandomCategory(), 1000);
        setTimeout(() => catTwoTitle_button.innerText = getRandomCategory(), 2000);
        setTimeout(() => catThreeTitle_button.innerText = getRandomCategory(), 3000);
        setTimeout(() => catFourTitle_button.innerText = getRandomCategory(), 4000);
        setTimeout(() => catFiveTitle_button.innerText = getRandomCategory(), 5000);
        setTimeout(() => catSixTitle_button.innerText = getRandomCategory(), 6000);
    }
    // Randomly assign a daily double
    function setDailyDouble() {
        let randomIndex = Math.floor(Math.random() * clueIds.length);
        let randomClue = clueIds[randomIndex];
        return randomClue;
    }

    const dailyDouble = setDailyDouble();

    'cat-one-one' == dailyDouble
    ? catOneOne_button.addEventListener('click', loadCatOneDD)
    : catOneOne_button.addEventListener('click', loadCatOneQuestion);

    'cat-one-two' == dailyDouble
    ? catOneTwo_button.addEventListener('click', loadCatOneDD)
    : catOneTwo_button.addEventListener('click', loadCatOneQuestion);

    'cat-one-three' == dailyDouble
    ? catOneThree_button.addEventListener('click', loadCatOneDD)
    : catOneThree_button.addEventListener('click', loadCatOneQuestion);

    'cat-one-four' == dailyDouble
    ? catOneFour_button.addEventListener('click', loadCatOneDD)
    : catOneFour_button.addEventListener('click', loadCatOneQuestion);

    'cat-one-five' == dailyDouble
    ? catOneFive_button.addEventListener('click', loadCatOneDD)
    : catOneFive_button.addEventListener('click', loadCatOneQuestion);

    'cat-two-one' == dailyDouble
    ? catTwoOne_button.addEventListener('click', loadCatTwoDD)
    : catTwoOne_button.addEventListener('click', loadCatTwoQuestion);

    'cat-two-two' == dailyDouble
    ? catTwoTwo_button.addEventListener('click', loadCatTwoDD)
    : catTwoTwo_button.addEventListener('click', loadCatTwoQuestion);

    'cat-two-three' == dailyDouble
    ? catTwoThree_button.addEventListener('click', loadCatTwoDD)
    : catTwoThree_button.addEventListener('click', loadCatTwoQuestion);

    'cat-two-four' == dailyDouble
    ? catTwoFour_button.addEventListener('click', loadCatTwoDD)
    : catTwoFour_button.addEventListener('click', loadCatTwoQuestion);

    'cat-two-five' == dailyDouble
    ? catTwoFive_button.addEventListener('click', loadCatTwoDD)
    : catTwoFive_button.addEventListener('click', loadCatTwoQuestion);

    'cat-three-one' == dailyDouble
    ? catThreeOne_button.addEventListener('click', loadCatThreeDD)
    : catThreeOne_button.addEventListener('click', loadCatThreeQuestion);

    'cat-three-two' == dailyDouble
    ? catThreeTwo_button.addEventListener('click', loadCatThreeDD)
    : catThreeTwo_button.addEventListener('click', loadCatThreeQuestion);

    'cat-three-three' == dailyDouble
    ? catThreeThree_button.addEventListener('click', loadCatThreeDD)
    : catThreeThree_button.addEventListener('click', loadCatThreeQuestion);

    'cat-three-four' == dailyDouble
    ? catThreeFour_button.addEventListener('click', loadCatThreeDD)
    : catThreeFour_button.addEventListener('click', loadCatThreeQuestion);

    'cat-three-five' == dailyDouble
    ? catThreeFive_button.addEventListener('click', loadCatThreeDD)
    : catThreeFive_button.addEventListener('click', loadCatThreeQuestion);

    'cat-four-one' == dailyDouble
    ? catFourOne_button.addEventListener('click', loadCatFourDD)
    : catFourOne_button.addEventListener('click', loadCatFourQuestion);

    'cat-four-two' == dailyDouble
    ? catFourTwo_button.addEventListener('click', loadCatFourDD)
    : catFourTwo_button.addEventListener('click', loadCatFourQuestion);

    'cat-four-three' == dailyDouble
    ? catFourThree_button.addEventListener('click', loadCatFourDD)
    : catFourThree_button.addEventListener('click', loadCatFourQuestion);

    'cat-four-four' == dailyDouble
    ? catFourFour_button.addEventListener('click', loadCatFourDD)
    : catFourFour_button.addEventListener('click', loadCatFourQuestion);

    'cat-four-five' == dailyDouble
    ? catFourFive_button.addEventListener('click', loadCatFourDD)
    : catFourFive_button.addEventListener('click', loadCatFourQuestion);

    'cat-five-one' == dailyDouble
    ? catFiveOne_button.addEventListener('click', loadCatFiveDD)
    : catFiveOne_button.addEventListener('click', loadCatFiveQuestion);

    'cat-five-two' == dailyDouble
    ? catFiveTwo_button.addEventListener('click', loadCatFiveDD)
    : catFiveTwo_button.addEventListener('click', loadCatFiveQuestion);

    'cat-five-three' == dailyDouble
    ? catFiveThree_button.addEventListener('click', loadCatFiveDD)
    : catFiveThree_button.addEventListener('click', loadCatFiveQuestion);

    'cat-five-four' == dailyDouble
    ? catFiveFour_button.addEventListener('click', loadCatFiveDD)
    : catFiveFour_button.addEventListener('click', loadCatFiveQuestion);

    'cat-five-five' == dailyDouble
    ? catFiveFive_button.addEventListener('click', loadCatFiveDD)
    : catFiveFive_button.addEventListener('click', loadCatFiveQuestion);

    'cat-six-one' == dailyDouble
    ? catSixOne_button.addEventListener('click', loadCatSixDD)
    : catSixOne_button.addEventListener('click', loadCatSixQuestion);

    'cat-six-two' == dailyDouble
    ? catSixTwo_button.addEventListener('click', loadCatSixDD)
    : catSixTwo_button.addEventListener('click', loadCatSixQuestion);

    'cat-six-three' == dailyDouble
    ? catSixThree_button.addEventListener('click', loadCatSixDD)
    : catSixThree_button.addEventListener('click', loadCatSixQuestion);

    'cat-six-four' == dailyDouble
    ? catSixFour_button.addEventListener('click', loadCatSixDD)
    : catSixFour_button.addEventListener('click', loadCatSixQuestion);

    'cat-six-five' == dailyDouble
    ? catSixFive_button.addEventListener('click', loadCatSixDD)
    : catSixFive_button.addEventListener('click', loadCatSixQuestion);

    answerSubmit_form.addEventListener('submit', (e) => {
        e.preventDefault();
        storeAnswer();
        storeWager();
        checkAnswer();
        resetWager();
        switchTurns();
    })

    function loadCatOneQuestion() {
        popupClue();
        storeDollar.call(this);
        loadQuestion(catOneTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatOneQuestion);
    }

    function loadCatTwoQuestion() {
        popupClue();
        storeDollar.call(this);
        loadQuestion(catTwoTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatTwoQuestion);
    }

    function loadCatThreeQuestion() {
        popupClue();
        storeDollar.call(this);
        loadQuestion(catThreeTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatThreeQuestion);
    }

    function loadCatFourQuestion() {
        popupClue();
        storeDollar.call(this);
        loadQuestion(catFourTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatFourQuestion);
    }

    function loadCatFiveQuestion() {
        popupClue();
        storeDollar.call(this);
        loadQuestion(catFiveTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatFiveQuestion);
    }

    function loadCatSixQuestion() {
        popupClue();
        storeDollar.call(this);
        loadQuestion(catSixTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatSixQuestion);
    }

    function loadCatOneDD() {
        popupClue();
        storeDollar.call(this);
        loadDailyDouble(catOneTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatOneDD);
    }

    function loadCatTwoDD() {
        popupClue();
        storeDollar.call(this);
        loadDailyDouble(catTwoTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatTwoDD);
    }

    function loadCatThreeDD() {
        popupClue();
        storeDollar.call(this);
        loadDailyDouble(catThreeTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatThreeDD);
    }

    function loadCatFourDD() {
        popupClue();
        storeDollar.call(this);
        loadDailyDouble(catFourTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatFourDD);
    }

    function loadCatFiveDD() {
        popupClue();
        storeDollar.call(this);
        loadDailyDouble(catFiveTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatFiveDD);
    }

    function loadCatSixDD() {
        popupClue();
        storeDollar.call(this);
        loadDailyDouble(catSixTitle_button.innerText);
        this.innerText = " ";
        this.removeEventListener('click', loadCatSixDD);
    }

    function loadDailyDouble(category) {
        wager_input.classList.remove('hide');
        dailyDouble_header.classList.remove('hide');
        clue_label.innerText = Object.keys(clues[category][localStorage.getItem('dollar')]);
        localStorage.setItem('clue', clue_label.innerText);
        document.getElementById('wager').focus();
    }

    function loadQuestion(category) {
        clue_label.innerText = Object.keys(clues[category][localStorage.getItem('dollar')]);
        document.getElementById('answer').focus();
        localStorage.setItem('clue', clue_label.innerText);
    }

    function popupClue() {
        cluePopUp_div.classList.remove('hide');
    }

    function storeDollar() {
        localStorage.setItem('dollar', this.innerText);
    }

    function storeWager() {
        let wager = document.getElementById('wager').value;
        let playerTurn = localStorage.getItem('turn');
        if (playerTurn == 'player1') {
            if (Number(wager) > playerOneScore && playerOneScore > 1000) {
                wager = playerOneScore;
            } else if (Number(wager) > 1000 && playerOneScore <= 1000) {
                wager = 1000;
            }
        }
        else if (playerTurn == 'player2') {
            if (Number(wager) > playerTwoScore && playerTwoScore > 1000) {
                wager = playerTwoScore;
            } else if (Number(wager) > 1000 && playerTwoScore <= 1000) {
                wager = 1000;
            }
        }
        if (wager) {
            let stringWager = wager.toString();
            let filteredWager = stringWager.match(/[0-9]+/g)
            localStorage.setItem('dollar', "$"+filteredWager);
        }
    }

    function storeAnswer() {
        let value = document.getElementById('answer').value;
        localStorage.setItem('answer', value);
    }

    function checkAnswer() {
        let dollarValue = Number(localStorage.getItem('dollar').slice(1));
        let playerTurn = localStorage.getItem('turn');
        let answer = localStorage.getItem('answer');
        let clue = localStorage.getItem('clue');
        let correctAnswer = findQuestion(clues, clue);
        if (correctAnswer.test(answer)) {
            playerTurn == 'player1'
            ? playerOneScore += dollarValue
            : playerTwoScore += dollarValue;
            answerFeedback_div.classList.remove('hide');
            answerFeedback_div.innerText = getRandomResponse(correctResponses);
            setTimeout(() => answerFeedback_div.classList.add('hide'), 3000);
        } else if (!answer.includes('?')) {
            playerTurn == 'player1'
            ? playerOneScore -= dollarValue
            : playerTwoScore -= dollarValue;
            answerFeedback_div.classList.remove('hide');
            answerFeedback_div.innerText = getRandomResponse(questionResponses);
            setTimeout(() => answerFeedback_div.classList.add('hide'), 3000);
        } else {
            playerTurn == 'player1'
            ? playerOneScore -= dollarValue
            : playerTwoScore -= dollarValue;
            answerFeedback_div.classList.remove('hide');
            answerFeedback_div.innerText = getRandomResponse(incorrectResponses);
            setTimeout(() => answerFeedback_div.classList.add('hide'), 3000);
        }
        playerOneScore_span.innerText = playerOneScore;
        playerTwoScore_span.innerText = playerTwoScore;
        cluePopUp_div.classList.add('hide');
        dailyDouble_header.classList.add('hide');
    }

    function resetWager() {
        wager_input.value = null;
        wager_input.classList.add('hide');
    }

    function getRandomResponse(responseArray) {
        let randomIndex = Math.floor(Math.random() * responseArray.length);
        return responseArray[randomIndex];
    }

    let categories = Object.keys(clues);

    function getRandomCategory() {
        let randomIndex = Math.floor(Math.random() * categories.length);
        let selection = categories[randomIndex];
        categories.splice(categories.indexOf(selection), 1);
        return selection;
    }

    function switchTurns() {
        let playerTurn = localStorage.getItem('turn');
        switch (playerTurn) {
            case 'player1':
                localStorage.setItem('turn', 'player2')
                setTimeout(() => {
                    playerOne_div.classList.remove('thick-border');
                    playerTwo_div.classList.add('thick-border');
                },3000);
                document.getElementById('answer').value = "";
                break;
            case 'player2':
                localStorage.setItem('turn', 'player1')
                setTimeout(() => {
                    playerTwo_div.classList.remove('thick-border');
                    playerOne_div.classList.add('thick-border');
                }, 3000);
                document.getElementById('answer').value = "";
                break;
        }
        counter++;
        console.log(counter);
        winner();
    }

    function findQuestion(obj, question) {
        for (let prop in obj) {
            for (let val in obj[prop]) {
                for (let query in obj[prop][val]) {
                    if (query === question) {
                        return obj[prop][val][question]
                    }
                }
            }
        }
    }

    function winner() {
        if (counter == 30) {
            setTimeout(() => {
                answerFeedback_div.classList.remove('hide');
                if (playerOneScore > playerTwoScore) {
                    answerFeedback_div.innerText = "Player 1 wins! The Force is strong with Player 1!";
                } else if (playerTwoScore > playerOneScore) {
                    answerFeedback_div.innerText = "Player 2 wins! The Force is strong with Player 2!";
                } else {
                    answerFeedback_div.innerText = "It's a tie!"
                }
                reset_button.classList.remove('hide');
            }, 3000);
        }
    }

}


