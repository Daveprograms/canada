// Quiz Application JavaScript

class QuizApp {
    constructor() {
                // Canadian Citizenship Test Questions - 100+ Official Questions
        this.questionCategories = {
            citizenship: [
                { question: "What are three responsibilities of citizenship?", options: ["Vote, pay taxes, work", "Obeying the law, taking responsibility for oneself and family, serving on a jury", "Work, study, volunteer", "Pay bills, help neighbors, recycle"], correct: 1 },
                { question: "What is the meaning of the Remembrance Day poppy?", options: ["To celebrate spring", "To remember sacrifice of Canadians who served or died in wars", "To promote gardening", "To mark harvest time"], correct: 1 },
                { question: "How are Members of Parliament (MPs) chosen?", options: ["Appointed by Prime Minister", "Inherited positions", "Elected by voters in their local constituency", "Selected by lottery"], correct: 2 },
                { question: "What are some examples of taking responsibility for yourself and your family?", options: ["Getting a job, taking care of family, working hard", "Buying expensive things, traveling often", "Only working when you want to", "Depending on government support"], correct: 0 },
                { question: "What is meant by the equality of women and men?", options: ["Women work more than men", "Men and women are equal under the law", "Women get special privileges", "Men make all decisions"], correct: 1 },
                { question: "Who is entitled to vote in Canadian federal elections?", options: ["All residents of Canada", "Canadian citizens 18 years or older and on voters' list", "Anyone with a job", "People who own property"], correct: 1 },
                { question: "Are you obliged to tell others how you voted?", options: ["Yes, it's required by law", "No, voting is by secret ballot", "Only to your family", "Only to government officials"], correct: 1 },
                { question: "When you go to vote on election day, what do you do?", options: ["Call in your vote", "Show ID, mark X on ballot, put in box", "Vote online", "Mail your vote"], correct: 1 },
                { question: "After an election, which party forms the government?", options: ["The party with most money", "The oldest party", "The party with most elected representatives in House of Commons", "The party chosen by Governor General"], correct: 2 },
                { question: "What are the three levels of government?", options: ["Federal, Provincial/Territorial, Municipal", "Federal, State, Local", "National, Regional, City", "Central, District, Town"], correct: 0 },
                { question: "Name two key documents that contain our rights and freedoms.", options: ["Constitution Act and Criminal Code", "Charter of Rights and Freedoms and Human Rights Act", "Bill of Rights and Privacy Act", "Citizenship Act and Immigration Act"], correct: 1 },
                { question: "Identify four rights that Canadians enjoy.", options: ["Mobility, Aboriginal, Official Language, Multiculturalism", "Work, education, healthcare, housing", "Vote, speak, travel, worship", "All of the above"], correct: 0 },
                { question: "Name four fundamental freedoms that Canadians enjoy.", options: ["Speech, religion, movement, work", "Conscience, religion, thought, expression, assembly, association", "Vote, protest, travel, education", "Privacy, security, equality, liberty"], correct: 1 },
                { question: "What does it mean that Canada is a parliamentary democracy?", options: ["Prime Minister rules alone", "People elect representatives to Parliament", "Queen makes all decisions", "Courts control government"], correct: 1 },
                { question: "How do Canadians vote in a federal election?", options: ["Online voting", "By secret ballot at voting station in electoral district", "Mail-in only", "Phone voting"], correct: 1 },
                { question: "What is the role of the police in Canada?", options: ["Make laws", "Enforce law, prevent crime, maintain peace and order", "Elect officials", "Collect taxes"], correct: 1 },
                { question: "Can you be questioned or detained without reason by police in Canada?", options: ["Yes, always", "No, Charter protects against arbitrary detention", "Only at night", "Only if suspicious"], correct: 1 },
                { question: "What is multiculturalism in Canada?", options: ["One culture only", "Policy recognizing and respecting diversity of cultures", "No cultural differences", "Government controls culture"], correct: 1 }
            ],
            government: [
                { question: "What does it mean to say Canada is a constitutional monarchy?", options: ["The Queen rules Canada", "Canada's Head of State is monarch with powers limited by constitution", "Canada has no government", "The Prime Minister is like a king"], correct: 1 },
                { question: "What are the three branches of government?", options: ["Federal, Provincial, Municipal", "Executive, Legislative, Judicial", "Prime Minister, Governor General, Queen", "House, Senate, Courts"], correct: 1 },
                { question: "What is the difference between role of Queen and Prime Minister?", options: ["No difference", "Queen is Head of State, PM is Head of Government", "Queen makes all decisions", "PM represents the Queen"], correct: 1 },
                { question: "What is the role of the Governor General?", options: ["Prime Minister's assistant", "Represents the monarch in Canada", "Leader of opposition", "Head of military"], correct: 1 },
                { question: "What is the job of the Senate?", options: ["Make laws", "Review and revise laws from House of Commons", "Elect Prime Minister", "Control taxes"], correct: 1 },
                { question: "Who do Canadians show loyalty to?", options: ["Prime Minister", "Governor General", "The Crown (King/Queen of Canada)", "President"], correct: 2 },
                { question: "What is the highest court in Canada?", options: ["Provincial Court", "Federal Court", "Supreme Court of Canada", "Tax Court"], correct: 2 },
                { question: "What is the role of the courts in Canada?", options: ["Make laws", "Interpret and apply law, ensure justice", "Elect officials", "Collect taxes"], correct: 1 },
                { question: "Are you allowed to question police about their service or conduct?", options: ["No, never", "Yes, you can question police conduct", "Only through lawyers", "Only in court"], correct: 1 },
                { question: "What is meant by 'responsible government'?", options: ["Government that spends wisely", "Government that must answer to elected representatives", "Government that helps citizens", "Government that follows rules"], correct: 1 },
                { question: "What does the Sovereign's representative in a province called?", options: ["Governor General", "Lieutenant Governor", "Provincial Governor", "Vice Governor"], correct: 1 },
                { question: "What are the responsibilities of federal, provincial, and municipal governments?", options: ["All same responsibilities", "Federal: defense, foreign policy; Provincial: education, health; Municipal: local services", "Federal: everything important", "Provincial: nothing important"], correct: 1 },
                { question: "What is a riding?", options: ["Horseback activity", "Electoral district represented by MP", "Type of vote", "Government building"], correct: 1 },
                { question: "Who can run for elected office in Canada?", options: ["Only men", "Any Canadian citizen 18+ not disqualified by law", "Only rich people", "Only university graduates"], correct: 1 },
                { question: "What does it mean to swear the Oath of Citizenship?", options: ["Promise to pay taxes", "Commit to obey Canadian laws and fulfill duties as citizen", "Promise to vote", "Promise to learn French"], correct: 1 },
                { question: "What is meant by peace, order, and good government?", options: ["Military rule", "Principle of Canada's Constitution describing values and legal foundation", "Police state", "Foreign policy"], correct: 1 },
                { question: "Who is your Member of Parliament?", options: ["Always the Prime Minister", "Can be found by entering postal code at parliament website", "The Governor General", "Any government official"], correct: 1 },
                { question: "What is the capital city of your province or territory?", options: ["Always Toronto", "Depends on where you live", "Always Ottawa", "Always Montreal"], correct: 1 }
            ],
            history: [
                { question: "Who were the founding peoples of Canada?", options: ["British, French, Spanish", "Aboriginal, French, British", "French, German, British", "English, Scottish, Irish"], correct: 1 },
                { question: "Who are the Métis?", options: ["French settlers", "British colonists", "Distinct people of mixed Aboriginal and European ancestry", "Indigenous hunters"], correct: 2 },
                { question: "What does the word 'Inuit' mean?", options: ["Hunters", "The people in Inuktitut language", "Ice dwellers", "Northern tribe"], correct: 1 },
                { question: "Who was Sir Louis-Hippolyte La Fontaine?", options: ["A French explorer", "First head of responsible government in Canada", "A British general", "A fur trader"], correct: 1 },
                { question: "What did the Canadian Pacific Railway symbolize?", options: ["Economic growth", "Unity from east to west", "Industrial progress", "Population growth"], correct: 1 },
                { question: "What does Confederation mean?", options: ["Military alliance", "Joining of provinces to form Canada", "Trade agreement", "Peace treaty"], correct: 1 },
                { question: "What is the significance of discovery of insulin by Banting and Best?", options: ["Made Canada famous", "Saved millions of lives worldwide", "Won a war", "Created jobs"], correct: 1 },
                { question: "Who was the first Prime Minister of Canada?", options: ["Sir Wilfrid Laurier", "Sir John A. Macdonald", "William Lyon Mackenzie King", "Sir Robert Borden"], correct: 1 },
                { question: "What year did Canada become a country?", options: ["1867", "1871", "1885", "1901"], correct: 0 },
                { question: "What is the significance of Magna Carta?", options: ["Canadian document", "Foundation of rule of law signed 1215", "French law", "Modern constitution"], correct: 1 },
                { question: "Who are the Acadians?", options: ["British colonists", "Descendants of French colonists in Maritime provinces", "German immigrants", "Dutch settlers"], correct: 1 },
                { question: "What is the significance of the discovery of insulin by Sir Frederick Banting and Charles Best?", options: ["Made money", "Major medical breakthrough saving millions of lives worldwide", "Won Nobel Prize only", "Helped in war"], correct: 1 },
                { question: "What is the significance of Vimy Ridge?", options: ["Major Canadian victory in WWI", "Site of Confederation", "Important fur trading post", "Location of first Parliament"], correct: 0 },
                { question: "What is the significance of D-Day?", options: ["Canadian invention", "Canadian liberation of Netherlands", "Allied invasion of Normandy with Canadian forces", "End of World War I"], correct: 2 },
                { question: "What is the name of Canada's Constitution?", options: ["Canadian Charter", "Constitution Act, 1867 (formerly British North America Act)", "British North America Act", "Confederation Document"], correct: 1 },
                { question: "Who are Canada's allies in NATO?", options: ["Only USA", "USA and other NATO countries like UK, France, Germany", "No allies", "Only European countries"], correct: 1 },
                { question: "What does it mean that Canada is a parliamentary democracy?", options: ["Prime Minister rules alone", "People elect representatives to Parliament, government run by majority", "Queen makes all decisions", "Courts control government"], correct: 1 },
                { question: "What is the significance of the Magna Carta (Great Charter)?", options: ["Canadian law", "Established principle that everyone subject to law, even king", "French document", "Modern charter"], correct: 1 }
            ],
                         geography: [
                 { question: "What is the capital of Canada?", options: ["Toronto", "Montreal", "Ottawa", "Vancouver"], correct: 2 },
                 { question: "What are the Prairie Provinces?", options: ["Ontario, Quebec, Nova Scotia", "Alberta, Saskatchewan, Manitoba", "British Columbia, Alberta, Saskatchewan", "Manitoba, Ontario, Quebec"], correct: 1 },
                 { question: "What provinces are referred to as the Atlantic Provinces?", options: ["Nova Scotia, New Brunswick, PEI, Newfoundland and Labrador", "Quebec, Ontario, Manitoba, Saskatchewan", "Alberta, British Columbia, Yukon, NWT", "All coastal provinces"], correct: 0 },
                 { question: "What are the territories of Northern Canada?", options: ["Alberta, Saskatchewan, Manitoba", "Yukon, Northwest Territories, Nunavut", "Ontario, Quebec, Nova Scotia", "British Columbia, Alberta, Yukon"], correct: 1 },
                 { question: "What is the population of Canada?", options: ["Over 25 million", "Over 30 million", "Over 38 million", "Over 45 million"], correct: 2 },
                 { question: "What is the national motto of Canada?", options: ["Peace, Order, Good Government", "A Mari Usque Ad Mare (From Sea to Sea)", "Unity and Diversity", "True North Strong and Free"], correct: 1 },
                 { question: "What does the Canadian flag look like?", options: ["Blue and white with a beaver", "Red and white with a maple leaf", "Green and white with a moose", "Red and blue with a crown"], correct: 1 },
                 { question: "What are two Canadian symbols?", options: ["Maple leaf and beaver", "Eagle and flag", "Bear and salmon", "Moose and mountains"], correct: 0 },
                 { question: "What is the Canadian national anthem?", options: ["God Save the King", "O Canada", "The Maple Leaf Forever", "Canada My Home"], correct: 1 },
                 { question: "What are the two official languages of Canada?", options: ["English and Spanish", "English and French", "French and German", "English and Portuguese"], correct: 1 },
                 { question: "What are some symbols of Canada?", options: ["Eagle and stars", "Maple leaf, beaver, national flag, national anthem, RCMP", "Bear and fish", "Mountains and lakes"], correct: 1 },
                 { question: "What is the name of the federal electoral district?", options: ["Province", "Riding or constituency", "Territory", "Municipality"], correct: 1 },
                 { question: "What is the capital of your province or territory?", options: ["Always Ottawa", "Depends on where you live", "Always Toronto", "Always Vancouver"], correct: 1 },
                 { question: "What are some official symbols of Canada?", options: ["Moose and hockey stick", "Maple Leaf, National Anthem, The Beaver, The Canadian Flag, The Crown", "Bear and salmon", "Eagle and mountains"], correct: 1 },
                 { question: "What is the significance of July 1st in Canada?", options: ["Queen's birthday", "Canada Day - anniversary of Confederation in 1867", "Thanksgiving", "Labour Day"], correct: 1 },
                 { question: "What is the role of the RCMP (Royal Canadian Mounted Police)?", options: ["Only guard Parliament", "Enforce laws, maintain peace, protect Canadians nationwide", "Only traffic tickets", "Only border control"], correct: 1 },
                 { question: "How do Canadians show respect for veterans on November 11?", options: ["Work as usual", "Observe moment of silence and wear red poppy", "Have parties", "Go shopping"], correct: 1 },
                 { question: "What are some ways to protect the environment?", options: ["Use more electricity", "Recycle, conserve energy, volunteer for environmental causes", "Drive more", "Waste water"], correct: 1 }
             ],
             rights: [
                 { question: "What is the Canadian Charter of Rights and Freedoms?", options: ["A historical document", "Part of Canada's Constitution guaranteeing rights", "A government policy", "A court ruling"], correct: 1 },
                 { question: "Name four rights that Canadians enjoy.", options: ["Mobility, Aboriginal, Official Language, Multiculturalism", "Free healthcare, free education, free housing, free food", "Right to work, right to travel, right to vote, right to speak", "All of the above"], correct: 0 },
                 { question: "What are mobility rights?", options: ["Right to move and live in any province", "Right to use public transport", "Right to drive a car", "Right to fly anywhere"], correct: 0 },
                 { question: "What does multiculturalism mean?", options: ["Only speaking English", "Everyone must have the same culture", "Respecting diversity of cultures in Canada", "Avoiding other cultures"], correct: 2 },
                 { question: "What is the highest honour a Canadian can receive?", options: ["Order of Canada", "Victoria Cross", "Governor General's Award", "Prime Minister's Medal"], correct: 1 },
                 { question: "What is the rule of law?", options: ["Laws for rulers only", "Everyone, including government, must follow the law", "Laws can be broken sometimes", "Only police follow laws"], correct: 1 },
                 { question: "What are fundamental freedoms Canadians enjoy?", options: ["Freedom of speech only", "Freedom of conscience, religion, thought, expression, assembly, association", "Freedom to do anything", "No freedoms guaranteed"], correct: 1 },
                 { question: "Can you be questioned or detained without reason by police?", options: ["Yes, anytime", "No, Charter protects against arbitrary detention", "Only on weekends", "Only if you look suspicious"], correct: 1 },
                 { question: "What is meant by peace, order, and good government?", options: ["Military rule", "Principle of Canada's Constitution describing values", "Police state", "Foreign policy"], correct: 1 },
                 { question: "What does it mean to swear the Oath of Citizenship?", options: ["Promise to pay taxes", "Commit to obey Canadian laws and fulfill duties as citizen", "Promise to vote", "Promise to learn French"], correct: 1 },
                 { question: "When was the Charter of Rights and Freedoms entrenched in the Constitution?", options: ["1867", "1970", "1982", "1990"], correct: 2 },
                 { question: "What are some examples of freedom of expression?", options: ["Only speaking", "Thought, belief, opinion, expression including freedom of press", "Only writing", "Only voting"], correct: 1 },
                 { question: "What does freedom of conscience and religion mean?", options: ["Must attend church", "Right to believe or not believe as you choose", "Government controls religion", "Only one religion allowed"], correct: 1 },
                 { question: "What is habeas corpus?", options: ["Type of court", "Right not to be unlawfully imprisoned", "Criminal charge", "Legal document"], correct: 1 },
                 { question: "What are some examples of equality rights?", options: ["Everyone same job", "Equal treatment under law regardless of race, religion, gender, age", "Everyone same income", "Everyone same education"], correct: 1 },
                 { question: "What are the official language rights?", options: ["Speak any language", "Right to use English or French in Parliament and federal courts", "Must speak both languages", "Only English allowed"], correct: 1 },
                 { question: "What is the purpose of the Court Challenges Program?", options: ["Help criminals", "Help Canadians pursue court cases that clarify official languages and Charter rights", "Provide free lawyers", "Speed up trials"], correct: 1 },
                 { question: "What is the right to freedom of peaceful assembly?", options: ["No meetings allowed", "Right to gather peacefully to express views or protest", "Only government meetings", "Right to disturb peace"], correct: 1 }
             ],
             mixed: [
                 { question: "What is Canada's national winter sport?", options: ["Skiing", "Ice Hockey", "Curling", "Figure Skating"], correct: 1 },
                 { question: "What is Canada's national summer sport?", options: ["Baseball", "Soccer", "Lacrosse", "Basketball"], correct: 2 },
                 { question: "How do Canadians show respect for veterans on November 11?", options: ["Work as usual", "Observe moment of silence and wear red poppy", "Have parties", "Go shopping"], correct: 1 },
                 { question: "What is the significance of July 1st?", options: ["Queen's birthday", "Canada Day - anniversary of Confederation", "Thanksgiving", "Labour Day"], correct: 1 },
                 { question: "What are some ways to protect the environment?", options: ["Use more electricity", "Recycle, conserve energy, volunteer for environment", "Drive more", "Waste water"], correct: 1 },
                 { question: "What is the role of the RCMP?", options: ["Only guard Parliament", "Enforce laws, maintain peace, protect Canadians", "Only traffic tickets", "Only border control"], correct: 1 },
                 { question: "Who can run for elected office in Canada?", options: ["Only men", "Any Canadian citizen 18+ not disqualified by law", "Only rich people", "Only university graduates"], correct: 1 },
                 { question: "What is a riding?", options: ["Horseback activity", "Electoral district represented by MP", "Type of vote", "Government building"], correct: 1 },
                 { question: "What is the name of Canada's Constitution?", options: ["Canadian Charter", "Constitution Act, 1867", "British North America Act", "Confederation Document"], correct: 1 },
                 { question: "Who are Canada's allies in NATO?", options: ["Only USA", "USA and other NATO countries like UK, France", "No allies", "Only European countries"], correct: 1 },
                 { question: "What are two examples of Confederation?", options: ["Peace and war", "Federal and provincial governments sharing powers", "English and French", "East and west"], correct: 1 },
                 { question: "What is the meaning of 'Remembrance Day'?", options: ["Remember family", "Remember those who served or died in wars", "Remember history", "Remember Confederation"], correct: 1 },
                 { question: "What is the capital of Ontario?", options: ["Ottawa", "Toronto", "Hamilton", "London"], correct: 1 },
                 { question: "What is the capital of Quebec?", options: ["Montreal", "Quebec City", "Laval", "Gatineau"], correct: 1 },
                 { question: "What is the capital of British Columbia?", options: ["Vancouver", "Victoria", "Surrey", "Burnaby"], correct: 1 },
                 { question: "What is the capital of Alberta?", options: ["Calgary", "Edmonton", "Red Deer", "Lethbridge"], correct: 1 },
                 { question: "What is the capital of Manitoba?", options: ["Brandon", "Winnipeg", "Thompson", "Portage la Prairie"], correct: 1 },
                 { question: "What is the capital of Saskatchewan?", options: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw"], correct: 1 },
                 { question: "What does presumption of innocence mean?", options: ["Everyone is guilty", "Accused is innocent until proven guilty in court", "Police decide guilt", "No trials needed"], correct: 1 },
                 { question: "What are Aboriginal rights?", options: ["No special rights", "Rights of First Nations, Inuit and Métis people recognized and affirmed", "Only hunting rights", "Only land rights"], correct: 1 },
                 { question: "What are three examples of working with others?", options: ["Volunteer, join community groups, help others", "Complain, argue, disagree", "Work alone always", "Avoid neighbors"], correct: 0 },
                 { question: "What is the name of your provincial representative?", options: ["Always Premier", "Member of Provincial Parliament (MPP) or Member of Legislative Assembly (MLA)", "Always Lieutenant Governor", "Always Senator"], correct: 1 }
             ]
        };

        this.selectedCategory = 'citizenship';
        this.questions = this.questionCategories[this.selectedCategory];

        // Quiz state
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.timeLeft = 15;
        this.timer = null;
        this.isAnswered = false;
        this.currentStreak = 0;
        this.bestStreak = 0;

        // DOM elements
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultScreen = document.getElementById('resultScreen');
        
        this.startBtn = document.getElementById('startBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.retryBtn = document.getElementById('retryBtn');
        this.homeBtn = document.getElementById('homeBtn');
        
        this.questionElement = document.getElementById('question');
        this.optionsElement = document.getElementById('options');
        this.timerElement = document.getElementById('timer');
        this.timerFill = document.getElementById('timerFill');
        this.progressFill = document.getElementById('progressFill');
        this.currentQuestionElement = document.getElementById('currentQuestion');
        this.totalQuestionsElement = document.getElementById('totalQuestions');
        
        this.scoreNumber = document.getElementById('scoreNumber');
        this.correctAnswers = document.getElementById('correctAnswers');
        this.wrongAnswers = document.getElementById('wrongAnswers');
        this.accuracy = document.getElementById('accuracy');
        this.bestStreakElement = document.getElementById('bestStreak');
        this.achievementsElement = document.getElementById('achievements');
        this.resultIcon = document.getElementById('resultIcon');
        this.resultTitle = document.getElementById('resultTitle');

        // Initialize
        this.init();
    }

    init() {
        // Set total questions
        this.totalQuestionsElement.textContent = this.questions.length;
        
        // Event listeners
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.retryBtn.addEventListener('click', () => this.resetQuiz());
        this.homeBtn.addEventListener('click', () => this.goHome());
        
        // Category selection
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', () => this.selectCategory(card));
        });
    }
    
    selectCategory(selectedCard) {
        // Remove active class from all cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // Add active class to selected card
        selectedCard.classList.add('active');
        
        // Update selected category
        this.selectedCategory = selectedCard.dataset.category;
        this.questions = this.questionCategories[this.selectedCategory];
        
        // Update question count
        this.totalQuestionsElement.textContent = this.questions.length;
        
        // Add visual feedback
        selectedCard.style.transform = 'scale(1.1)';
        setTimeout(() => {
            selectedCard.style.transform = '';
        }, 200);
    }

    startQuiz() {
        this.showScreen('quiz');
        this.currentQuestion = 0;
        this.score = 0;
        this.loadQuestion();
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        
        // Reset state
        this.selectedAnswer = null;
        this.isAnswered = false;
        this.nextBtn.disabled = true;
        this.timeLeft = 15;
        
        // Update UI
        this.questionElement.textContent = question.question;
        this.currentQuestionElement.textContent = this.currentQuestion + 1;
        
        // Update progress bar
        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        
        // Load options
        this.optionsElement.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index));
            this.optionsElement.appendChild(optionElement);
        });
        
        // Start timer
        this.startTimer();
    }

    selectOption(index) {
        if (this.isAnswered) return;
        
        this.selectedAnswer = index;
        this.isAnswered = true;
        this.nextBtn.disabled = false;
        
        // Stop timer
        clearInterval(this.timer);
        
        // Highlight selected option
        const options = this.optionsElement.querySelectorAll('.option');
        options.forEach((option, i) => {
            option.classList.add('disabled');
            if (i === index) {
                option.classList.add('selected');
            }
        });
        
        // Show correct/wrong after a short delay for better UX
        setTimeout(() => {
            this.showAnswer();
        }, 500);
    }

    showAnswer() {
        const question = this.questions[this.currentQuestion];
        const options = this.optionsElement.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === this.selectedAnswer && index !== question.correct) {
                option.classList.add('wrong');
            }
        });
        
        // Update score and streak
        if (this.selectedAnswer === question.correct) {
            this.score++;
            this.currentStreak++;
            this.bestStreak = Math.max(this.bestStreak, this.currentStreak);
            this.createConfetti();
            this.playSuccessSound();
        } else {
            this.currentStreak = 0;
            this.playErrorSound();
        }
    }

    startTimer() {
        this.timerElement.textContent = this.timeLeft;
        this.timerFill.style.width = '100%';
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timerElement.textContent = this.timeLeft;
            
            // Update timer bar
            const percentage = (this.timeLeft / 15) * 100;
            this.timerFill.style.width = `${percentage}%`;
            
            // Change color when time is running out
            if (this.timeLeft <= 5) {
                this.timerElement.style.color = '#e53e3e';
                this.timerFill.style.background = 'linear-gradient(90deg, #e53e3e, #c53030)';
            }
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    timeUp() {
        if (this.isAnswered) return;
        
        clearInterval(this.timer);
        this.isAnswered = true;
        this.nextBtn.disabled = false;
        
        // Disable all options and show correct answer
        const options = this.optionsElement.querySelectorAll('.option');
        const question = this.questions[this.currentQuestion];
        
        options.forEach((option, index) => {
            option.classList.add('disabled');
            if (index === question.correct) {
                option.classList.add('correct');
            }
        });
        
        // Auto advance after 3 seconds
        setTimeout(() => {
            this.nextQuestion();
        }, 3000);
    }

    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion < this.questions.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
        
        // Reset timer colors
        this.timerElement.style.color = '#e53e3e';
        this.timerFill.style.background = 'linear-gradient(90deg, #e53e3e, #c53030)';
    }

    showResults() {
        this.showScreen('result');
        
        const totalQuestions = this.questions.length;
        const wrongAnswers = totalQuestions - this.score;
        const accuracyPercent = Math.round((this.score / totalQuestions) * 100);
        
        // Update result UI
        this.scoreNumber.textContent = this.score;
        this.correctAnswers.textContent = this.score;
        this.wrongAnswers.textContent = wrongAnswers;
        this.accuracy.textContent = `${accuracyPercent}%`;
        this.bestStreakElement.textContent = this.bestStreak;
        
        // Update result icon and title based on performance
        const resultIcon = this.resultIcon.querySelector('i');
        
        if (accuracyPercent >= 80) {
            resultIcon.className = 'fas fa-trophy';
            resultIcon.style.color = '#f6ad55';
            this.resultTitle.textContent = 'Excellent!';
        } else if (accuracyPercent >= 60) {
            resultIcon.className = 'fas fa-medal';
            resultIcon.style.color = '#4299e1';
            this.resultTitle.textContent = 'Good Job!';
        } else {
            resultIcon.className = 'fas fa-thumbs-up';
            resultIcon.style.color = '#48bb78';
            this.resultTitle.textContent = 'Keep Trying!';
        }
        
        // Generate achievements
        this.generateAchievements(accuracyPercent, totalQuestions);
        
        // Animate score counting
        this.animateScore();
    }

    animateScore() {
        let currentScore = 0;
        const targetScore = this.score;
        const increment = targetScore > 5 ? 1 : 1;
        
        const scoreAnimation = setInterval(() => {
            if (currentScore < targetScore) {
                currentScore += increment;
                this.scoreNumber.textContent = currentScore;
            } else {
                clearInterval(scoreAnimation);
            }
        }, 100);
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.timeLeft = 15;
        this.isAnswered = false;
        this.currentStreak = 0;
        this.bestStreak = 0;
        
        clearInterval(this.timer);
        this.startQuiz();
    }

    goHome() {
        this.showScreen('start');
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.timeLeft = 15;
        this.isAnswered = false;
        this.currentStreak = 0;
        this.bestStreak = 0;
        
        clearInterval(this.timer);
    }

    showScreen(screen) {
        // Hide all screens
        this.startScreen.classList.remove('active');
        this.quizScreen.classList.remove('active');
        this.resultScreen.classList.remove('active');
        
        // Show target screen
        switch(screen) {
            case 'start':
                this.startScreen.classList.add('active');
                break;
            case 'quiz':
                this.quizScreen.classList.add('active');
                break;
            case 'result':
                this.resultScreen.classList.add('active');
                break;
        }
    }
    
    createConfetti() {
        // Create confetti particles
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${this.getRandomColor()};
                top: 50%;
                left: 50%;
                z-index: 10000;
                pointer-events: none;
                border-radius: 50%;
            `;
            
            document.body.appendChild(confetti);
            
            // Animate confetti
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 20 + 10;
            const gravity = 0.5;
            let vx = Math.cos(angle) * velocity;
            let vy = Math.sin(angle) * velocity;
            let x = 0;
            let y = 0;
            
            const animate = () => {
                x += vx;
                y += vy;
                vy += gravity;
                
                confetti.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
                confetti.style.opacity = Math.max(0, 1 - y / 500);
                
                if (y < 500 && confetti.style.opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    }
    
    getRandomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    playSuccessSound() {
        // Visual feedback for success (since we can't play actual audio)
        document.body.style.animation = 'successFlash 0.3s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    }
    
    playErrorSound() {
        // Visual feedback for error
        document.body.style.animation = 'errorShake 0.5s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }
    
    generateAchievements(accuracy, totalQuestions) {
        this.achievementsElement.innerHTML = '';
        const achievements = [];
        
        // Perfect Score
        if (accuracy === 100) {
            achievements.push({ icon: 'fas fa-crown', text: 'Perfect Score!', class: 'gold' });
        }
        
        // High Accuracy
        if (accuracy >= 90) {
            achievements.push({ icon: 'fas fa-star', text: 'Excellent!', class: 'gold' });
        } else if (accuracy >= 80) {
            achievements.push({ icon: 'fas fa-medal', text: 'Great Job!', class: 'silver' });
        } else if (accuracy >= 70) {
            achievements.push({ icon: 'fas fa-thumbs-up', text: 'Good Work!', class: 'bronze' });
        }
        
        // Streak Achievements
        if (this.bestStreak >= 5) {
            achievements.push({ icon: 'fas fa-fire', text: 'On Fire!', class: 'gold' });
        } else if (this.bestStreak >= 3) {
            achievements.push({ icon: 'fas fa-bolt', text: 'Hot Streak!', class: 'silver' });
        }
        
        // Speed Achievement (if completed quickly)
        if (this.currentQuestion === totalQuestions) {
            achievements.push({ icon: 'fas fa-rocket', text: 'Quiz Master!', class: 'bronze' });
        }
        
        // Category specific achievements
        if (this.selectedCategory !== 'mixed') {
            const categoryNames = {
                citizenship: 'Citizenship Expert',
                government: 'Government Guru',
                history: 'History Buff',
                geography: 'Geography Master',
                rights: 'Rights Scholar'
            };
            
            if (accuracy >= 80) {
                achievements.push({ 
                    icon: 'fas fa-graduation-cap', 
                    text: categoryNames[this.selectedCategory], 
                    class: 'silver' 
                });
            }
        }
        
        // Display achievements
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                const badge = document.createElement('div');
                badge.className = `achievement-badge ${achievement.class}`;
                badge.innerHTML = `<i class="${achievement.icon}"></i><span>${achievement.text}</span>`;
                this.achievementsElement.appendChild(badge);
            }, index * 200);
        });
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

// Add some visual effects
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Add keyboard support
document.addEventListener('keydown', (e) => {
    const activeScreen = document.querySelector('.quiz-screen.active');
    if (!activeScreen) return;
    
    // Allow number keys 1-4 to select options
    if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option');
        if (options[optionIndex] && !options[optionIndex].classList.contains('disabled')) {
            options[optionIndex].click();
        }
    }
    
    // Allow Enter to go to next question
    if (e.key === 'Enter') {
        const nextBtn = document.getElementById('nextBtn');
        if (!nextBtn.disabled) {
            nextBtn.click();
        }
    }
}); 