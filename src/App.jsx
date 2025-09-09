import { useState, useEffect } from 'react'
import './App.css'

const QUESTION_TIME = 20; // seconds
const questions = [

  // CATEGORY 1: संवैधानिक एवं वैधानिक परिप्रेक्ष्य में राजभाषा
  {
    id: 1,
    category: "संवैधानिक एवं वैधानिक परिप्रेक्ष्य में राजभाषा",
    question: "भारतीय संविधान के किस अनुच्छेद में हिंदी को संघ की राजभाषा घोषित किया गया है?",
    options: ["अनुच्छेद 343", "अनुच्छेद 345", "अनुच्छेद 347", "अनुच्छेद 349"],
    correct: 0,
    image: null
  },
  {
    id: 2,
    category: "संवैधानिक एवं वैधानिक परिप्रेक्ष्य में राजभाषा",
    question: "राजभाषा अधिनियम किस वर्ष पारित किया गया था?",
    options: ["1950", "1963", "1965", "1976"],
    correct: 1,
    image: null
  },
  {
    id: 3,
    category: "संवैधानिक एवं वैधानिक परिप्रेक्ष्य में राजभाषा",
    question: "राजभाषा नियम, 1976 के अनुसार, भारत को कितने क्षेत्रों में विभाजित किया गया है?",
    options: ["दो", "तीन", "चार", "पाँच"],
    correct: 1,
    image: null
  },
  {
    id: 4,
    category: "संवैधानिक एवं वैधानिक परिप्रेक्ष्य में राजभाषा",
    question: "राजभाषा संबंधी बं संसदीय समिति का गठन किस अधिनियम के तहत किया गया है?",
    options: ["राजभाषा अधिनियम, 1963", "राजभाषा संकल्प, 1968", "राजभाषा नियम, 1976", "संविधान का अनुच्छेद 344"],
    correct: 3,
    image: null
  },
  {
    id: 5,
    category: "संवैधानिक एवं वैधानिक परिप्रेक्ष्य में राजभाषा",
    question: "संविधान के किस भाग में राजभाषा संबंधी बं प्रावधान दिए गए हैं?",
    options: ["भाग XV", "भाग XVI", "भाग XVII", "भाग XVIII"],
    correct: 2,
    image: null
  },

  // CATEGORY 2: राजभाषा के रूप में हिंदी का इतिहास एवं महत्त्व
  {
    id: 6,
    category: "राजभाषा के रूप में हिंदी का इतिहास एवं महत्त्व",
    question: "प्रत्येक वर्ष हिंदी दिवस कब मनाया जाता है?",
    options: ["10 जनवरी", "14 सितंबर", "26 जनवरी", "15 अगस्त"],
    correct: 1,
    image: null
  },
  {
    id: 7,
    category: "राजभाषा के रूप में हिंदी का इतिहास एवं महत्त्व",
    question: "भारत की संविधान सभा ने हिंदी को राजभाषा के रूप में कब अपनाया था?",
    options: ["1947", "1949", "1950", "1965"],
    correct: 1,
    image: null
  },
  {
    id: 8,
    category: "राजभाषा के रूप में हिंदी का इतिहास एवं महत्त्व",
    question: "विश्व हिंदी दिवस कब मनाया जाता है?",
    options: ["14 सितंबर", "10 जनवरी", "21 फरवरी", "1 मई"],
    correct: 1,
    image: null
  },
  {
    id: 9,
    category: "राजभाषा के रूप में हिंदी का इतिहास एवं महत्त्व",
    question: "राजभाषा के रूप में हिंदी के विकास के लिए कौन सा अनुच्छेद केंद्र सरकार को निर्देश देता है?",
    options: ["अनुच्छेद 343", "अनुच्छेद 344", "अनुच्छेद 351", "अनुच्छेद 348"],
    correct: 2,
    image: null
  },
  {
    id: 10,
    category: "राजभाषा के रूप में हिंदी का इतिहास एवं महत्त्व",
    question: "राजभाषा हिंदी को बढ़ावा देने के लिए गठित प्रथम राजभाषा आयोग के अध्यक्ष कौन थे?",
    options: ["बी.जी. खेर", "गोविंद वल्लभ पंतपं", "बाल गंगाधर तिलक", "महात्मा गांधी"],
    correct: 0,
    image: null
  },

  // CATEGORY 3: राजभाषा नीति का क्रियान्वयन एवं प्रसार
  {
    id: 11,
    category: "राजभाषा नीति का क्रियान्वयन एवं प्रसार",
    question: "केंद्रीय हिंदी समिति का अध्यक्ष कौन होता है?",
    options: ["राष्ट्रपति", "प्रधानमंत्री", "गृह मंत्री", "उपराष्ट्रपति"],
    correct: 1,
    image: null
  },
  {
    id: 12,
    category: "राजभाषा नीति का क्रियान्वयन एवं प्रसार",
    question: "राजभाषा विभाग किस मंत्रालय के अधीन कार्य करता है?",
    options: ["शिक्षा मंत्रालय", "गृह मंत्रालय", "संस्कृति मंत्रालय", "विदेश मंत्रालय"],
    correct: 1,
    image: null
  },
  {
    id: 13,
    category: "राजभाषा नीति का क्रियान्वयन एवं प्रसार",
    question: "सरकारी कामकाज में हिंदी के प्रयोग को बढ़ावा देने के लिए कौन सी वार्षिक योजना तैयार की जा ती है?",
    options: ["हिंदी कार्य योजना", "राजभाषा वार्षिक कार्यक्रम", "हिंदी प्रोत्साहन योजना", "राजभाषा कार्यान्वयन योजना"],
    correct: 1,
    image: null
  },
  {
    id: 14,
    category: "राजभाषा नीति का क्रियान्वयन एवं प्रसार",
    question: "नगर राजभाषा कार्यान्वयन समिति (नराकास) का गठन किस उद्देश्य से किया जाता है?",
    options: ["शहरों में हिंदी साहित्य को बढ़ावा देना", "केंद्रीय सरकारी कार्यालयों में राजभाषा नीति का कार्यान्वयन सुनिश्चित करना", "हिंदी शिक्षण संस्थानों को सहायता प्रदान करना", "हिंदी में अनुसंधान को बढ़ावा देना"],
    correct: 1,
    image: null
  },
  {
    id: 15,
    category: "राजभाषा नीति का क्रियान्वयन एवं प्रसार",
    question: "राजभाषा के प्रयोग में उत्कृष्ट कार्य करने वाले व्यक्तियों या संस्थानों को कौन सा पुरस्कार दिया जाता है?",
    options: ["ज्ञानपीठ पुरस्कार", "साहित्य अकादमी पुरस्कार", "राजभाषा गौरव पुरस्कार", "व्यास सम्मान"],
    correct: 2,
    image: null
  },
  
  // CATEGORY 4: अधिकृत हिंदी पारिभाषिक शब्दावली एवं प्रयोग
  {
    id: 16,
    category: "अधिकृत हिंदी पारिभाषिक शब्दावली एवं प्रयोग",
    question: "Approval के लिए सही हिंदी पारिभाषिक शब्द क्या है?",
    options: ["स्वीकृति", "सहमति", "अनुमोदन", "मंजूरी"],
    correct: 2,
    image: null
  },
  {
    id: 17,
    category: "अधिकृत हिंदी पारिभाषिक शब्दावली एवं प्रयोग",
    question: "Office Memorandum के लिए सही हिंदी पारिभाषिक शब्द क्या है?",
    options: ["कार्यालय आदेश", "कार्यालय सूचना", "कार्यालय ज्ञापन", "कार्यालय पत्र"],
    correct: 2,
    image: null
  },
  {
    id: 18,
    category: "अधिकृत हिंदी पारिभाषिक शब्दावली एवं प्रयोग",
    question: "Notification के लिए सही हिंदी पारिभाषिक शब्द क्या है?",
    options: ["सूचना", "विज्ञप्ति", "अधिसूचना", "घोषणा"],
    correct: 2,
    image: null
  },
  {
    id: 19,
    category: "अधिकृत हिंदी पारिभाषिक शब्दावली एवं प्रयोग",
    question: "Minutes के लिए सही हिंदी पारिभाषिक शब्द क्या है?",
    options: ["बैठक का विवरण", "कार्यसूची", "कार्यवृत्त", "प्रतिवेदन"],
    correct: 2,
    image: null
  },
  {
    id: 20,
    category: "अधिकृत हिंदी पारिभाषिक शब्दावली एवं प्रयोग",
    question: "Gazette के लिए सही हिंदी पारिभाषिक शब्द क्या है?",
    options: ["सरकारी पत्रिका", "राजपत्र", "सरकारी सूचना", "आआधिकारिक प्रकाशन"],
    correct: 1,
    image: null
  },
  // CATEGORY 5: चित्रात्मक प्रश्नोत्तरी : हिंदी के सांस्कृतिक एवं साहित्यिक पुरोधा
  {
    id: 21,
    category: "चित्रात्मक प्रश्नोत्तरी : हिंदी के सांस्कृतिक एवं साहित्यिक पुरोधा",
    question: "इस चित्र में दर्शाए गए प्रसिद्ध हिंदी साहित्यकार कौन हैं?",
    options: ["मुंशी प्रेमचंद", "जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी 'निराला'", "रामधारी सिंह 'दिनकर'"],
    correct: 0,
    image: "/images/pic1.jpg"
  },
  {
    id: 22,
    category: "चित्रात्मक प्रश्नोत्तरी : हिंदी के सांस्कृतिक एवं साहित्यिक पुरोधा",
    question: "'मधुशाला' के रचयिता, इस चित्र में दर्शाए गए प्रसिद्ध कवि कौन हैं?",
    options: ["सुभद्रा कुमारी चौहान", "महादेवी वर्मा", "मीराबाई", "अमृता प्रीतम"],
    correct: 1,
    image: "/images/pic2.jpg"
  },
  {
    id: 23,
    category: "चित्रात्मक प्रश्नोत्तरी : हिंदी के सांस्कृतिक एवं साहित्यिक पुरोधा",
    question: "इस चित्र में दिखाए गए हिंदी नाटककार कौन हैं, जिन्हें 'हिंदी नाटक का जनक' कहा जाता है?",
    options: ["हरिवंश राय बच्चन", "सुमित्रानंदन पंत", "मैथिलीशरण गुप्त", "अज्ञेय"],
    correct: 0,
    image: "/images/pic3.jpg"
  },
  {
    id: 24,
    category: "चित्रात्मक प्रश्नोत्तरी : हिंदी के सांस्कृतिक एवं साहित्यिक पुरोधा",
    question: "यह चित्र किस भक्तिकाल के कवि का है, जो भगवान कृष्ण के अनन्य भक्त थे और ‘सूरसागर’ के रचयिता हैं?",
    options: ["कबीर दास", "तुलसीदास", "सूरदास", "रसखान"],
    correct: 2,
    image: "/images/pic4.jpg"
  },
  {
    id: 25,
    category: "चित्रात्मक प्रश्नोत्तरी : हिंदी के सांस्कृतिक एवं साहित्यिक पुरोधा",
    question: "‘रामचरितमानस’ के रचयिता, इस चित्र में दर्शाए गए महान संत कवि कौन हैं?",
    options: ["कबीर दास", "सूरदास", "तुलसीदास", "रविदास"],
    correct: 2,
    image: "/images/pic5.jpg"
  }
];

const CircularTimer = ({ timeLeft, duration }) => {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const progress = (timeLeft / duration) * circumference

  // Decide color based on remaining time
  let strokeColor = "#2ecc71" // green
  if (timeLeft <= 5) {
    strokeColor = "#e63946" // red
  } else if (timeLeft <= 10) {
    strokeColor = "#f39c12" // orange
  }

  return (
    <svg width="90" height="90" className="circular-timer">
      <circle
        cx="45"
        cy="45"
        r={radius}
        stroke="#eee"
        strokeWidth="6"
        fill="none"
      />
      <circle
        cx="45"
        cy="45"
        r={radius}
        stroke={strokeColor}
        strokeWidth="6"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s ease" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#333"
      >
        {timeLeft}s
      </text>
    </svg>
  )
}




function App() {
  const [currentScreen, setCurrentScreen] = useState('registration')
  const [participant, setParticipant] = useState({
    name: '',
    department: '',
    post: '',
    email: '',
    mobile: ''
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [quizStartTime, setQuizStartTime] = useState(null)

  // Timer effect
  useEffect(() => {
    if (currentScreen === 'quiz' && timeLeft > 0 && !selectedAnswer) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && currentScreen === 'quiz') {
      handleNextQuestion()
    }
  }, [timeLeft, currentScreen, selectedAnswer])

  const registerParticipant = async () => {
    try {
      const response = await fetch('https://hindiquiz2025.pythonanywhere.com/api/quiz/participants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(participant)
      })
      
      const data = await response.json()
      
      if (data.success) {
        return data.participant
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  const submitQuizResults = async (participantId, finalAnswers, finalScore, timeTaken) => {
    try {
      const response = await fetch(`https://hindiquiz2025.pythonanywhere.com/api/quiz/participants/${participantId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: finalAnswers,
          score: finalScore,
          time_taken: timeTaken,
          correct_answers: finalAnswers.filter(answer => answer.correct).length
        })
      })
      
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Submit error:', error)
      throw error
    }
  }

  const startQuiz = async () => {
    if (!participant.name || !participant.department || !participant.post || !participant.email || !participant.mobile) {
      alert('कृपया सभी फ़ील्ड भरें')
      return
    }

    try {
      const registeredParticipant = await registerParticipant()
      setParticipant(registeredParticipant)
      setCurrentScreen('quiz')
      setQuizStartTime(Date.now())
      setTimeLeft(QUESTION_TIME)
    } catch (error) {
      alert('पंजीकरण में त्रुटि: ' + error.message)
    }
  }

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    const currentQ = questions[currentQuestion]
    const isCorrect = selectedAnswer === currentQ.correct
    const newAnswer = {
      questionId: currentQ.id,
      question: currentQ.question,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQ.correct,
      correct: isCorrect,
      points: isCorrect ? 3 : (selectedAnswer !== null ? -1 : 0)
    }

    const newAnswers = [...answers, newAnswer]
    setAnswers(newAnswers)
    
    const newScore = score + newAnswer.points
    setScore(newScore)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setTimeLeft(QUESTION_TIME)
    } else {
      finishQuiz(newAnswers, newScore)
    }
  }

  const handleSkipQuestion = () => {
    const currentQ = questions[currentQuestion]
    const newAnswer = {
      questionId: currentQ.id,
      question: currentQ.question,
      selectedAnswer: null,  // nothing chosen
      correctAnswer: currentQ.correct,
      correct: false,
      points: 0
    }

    const newAnswers = [...answers, newAnswer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setTimeLeft(QUESTION_TIME)  // reset timer
    } else {
      finishQuiz(newAnswers, score)
    }
  }

  const finishQuiz = async (finalAnswers, finalScore) => {
    const timeTaken = Math.floor((Date.now() - quizStartTime) / 1000)
    
    try {
      await submitQuizResults(participant.id, finalAnswers, finalScore, timeTaken)
      setShowResults(true)
      setCurrentScreen('results')
    } catch (error) {
      console.error('Error submitting quiz:', error)
      setShowResults(true)
      setCurrentScreen('results')
    }
  }

  const resetQuiz = () => {
    setCurrentScreen('registration')
    setParticipant({ name: '', department: '', post: '', email: '', mobile: '' })
    setCurrentQuestion(0)
    setAnswers([])
    setSelectedAnswer(null)
    setTimeLeft(QUESTION_TIME)
    setScore(0)
    setShowResults(false)
    setQuizStartTime(null)
  }

  if (currentScreen === 'registration') {
    return (
      <div className="app">
        <div className="quiz-container">
          <div className="quiz-header">
            <div className="quiz-icon">हि</div>
            <h1>हिंदी राजभाषा प्रश्नोत्तरी</h1>
            <p>25 प्रश्न • 20 सेकंड प्रति प्रश्न • +3/-1 अंक</p>
          </div>
          
          <div className="registration-form">
            <div className="form-group">
              <label>आवेदक का नाम</label>
              <input
                type="text"
                placeholder="अपना पूरा नाम दर्ज करें"
                value={participant.name}
                onChange={(e) => setParticipant({...participant, name: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>विभाग</label>
              <input
                type="text"
                placeholder="अपना विभाग दर्ज करें"
                value={participant.department}
                onChange={(e) => setParticipant({...participant, department: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>पद</label>
              <input
                type="text"
                placeholder="अपना पद दर्ज करें"
                value={participant.post}
                onChange={(e) => setParticipant({...participant, post: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>ईमेल आईडी</label>
              <input
                type="email"
                placeholder="अपना ईमेल दर्ज करें"
                value={participant.email}
                onChange={(e) => setParticipant({...participant, email: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>मोबाइल नंबर</label>
              <input
                type="tel"
                placeholder="अपना मोबाइल नंबर दर्ज करें"
                value={participant.mobile}
                onChange={(e) => setParticipant({...participant, mobile: e.target.value})}
              />
            </div>
            
            <button className="start-btn" onClick={startQuiz}>
              प्रश्नोत्तरी शुरू करें
            </button>
            
            <div className="quiz-info">
              <ul>
                <li>⏳ प्रत्येक प्रश्न के लिए समय: 20 सेकंड</li>
                <li>❌ एक बार विकल्प चुनने के बाद बदल नहीं सकते</li>
                <li>✅ सही उत्तर: +3 अंक</li>
                <li>❌ गलत उत्तर: -1 अंक</li>
                <li>🔙 कोई वापसी विकल्प नहीं है</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'quiz') {
    const currentQ = questions[currentQuestion]
    
    return (
      <div className="app">
        <div className="quiz-container">
          <div className="quiz-header">
            <h2>हिंदी राजभाषा प्रश्नोत्तरी</h2>
            <CircularTimer timeLeft={timeLeft} duration={QUESTION_TIME} />
          </div>
          
          <div className="quiz-progress">
            <span>प्रश्न {currentQuestion + 1} / {questions.length}</span>
            <span>अंक: {score}</span>
          </div>
          
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
            ></div>
          </div>
          
          <div className="question-container">
            
            {currentQ.category && (
              <p className="category-tag">श्रेणी: {currentQ.category}</p>
            )}

            <h3>{currentQ.question}</h3>

            {currentQ.image && (
              <div className="question-image">
                <img src={currentQ.image} alt="question" />
              </div>
            )}
            
            <div className="options-container">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className={`option ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
            
            {selectedAnswer !== null && (
              <button className="next-btn" onClick={handleNextQuestion}>
                अगला प्रश्न
              </button>
            )}

            <button className="skip-btn" onClick={handleSkipQuestion}>
              प्रश्न छोड़ें
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'results') {
    const correctAnswers = answers.filter(answer => answer.correct).length
    const wrongAnswers = answers.filter(answer => answer.selectedAnswer !== null && !answer.correct).length
    const unanswered = answers.filter(answer => answer.selectedAnswer === null).length
    const percentage = ((correctAnswers / questions.length) * 100).toFixed(1)
    
    return (
      <div className="app">
        <div className="quiz-container">
          <div className="results-header">
            <h2>प्रश्नोत्तरी पूर्ण!</h2>
            <div className="participant-info">
              <p><strong>आवेदक का नाम:</strong> {participant.name}</p>
              <p><strong>विभाग:</strong> {participant.department}</p>
              <p><strong>पद:</strong> {participant.post}</p>
              <p><strong>ईमेल आईडी:</strong> {participant.email}</p>
              <p><strong>मोबाइल नंबर:</strong> {participant.mobile}</p>
            </div>
          </div>
          
          <div className="score-summary">
            <div className="final-score">
              <h3>कुल अंक: {score}</h3>
              <p>प्रतिशत: {percentage}%</p>
            </div>
            
            <div className="score-breakdown">
              <div className="stat">
                <span className="stat-number correct">{correctAnswers}</span>
                <span className="stat-label">सही उत्तर</span>
              </div>
              <div className="stat">
                <span className="stat-number wrong">{wrongAnswers}</span>
                <span className="stat-label">गलत उत्तर</span>
              </div>
              <div className="stat">
                <span className="stat-number unanswered">{unanswered}</span>
                <span className="stat-label">अनुत्तरित</span>
              </div>
            </div>
          </div>
          
          <div className="detailed-results">
            <h4>विस्तृत परिणाम:</h4>
            <div className="results-list">
              {answers.map((answer, index) => {
                const question = questions.find(q => q.id === answer.questionId);
                if (!question) return null; // skip if mismatch

                return (
                  <div 
                    key={index} 
                    className={`result-item ${answer.correct ? 'correct' : answer.selectedAnswer !== null ? 'wrong' : 'unanswered'}`}
                  >
                    <div className="question-number">प्रश्न {index + 1}</div>
                    <div className="result-details">
                      <p className="question-text">{question.question}</p>
                      <div className="answer-info">
                        {answer.selectedAnswer !== null ? (
                          <p><strong>आपका उत्तर:</strong> {question.options[answer.selectedAnswer]}</p>
                        ) : (
                          <p><strong>आपका उत्तर:</strong> अनुत्तरित</p>
                        )}
                        <p><strong>सही उत्तर:</strong> {question.options[answer.correctAnswer]}</p>
                        <p><strong>अंक:</strong> {answer.points > 0 ? `+${answer.points}` : answer.points}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <button className="restart-btn" onClick={resetQuiz}>
            नई प्रश्नोत्तरी शुरू करें
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default App

