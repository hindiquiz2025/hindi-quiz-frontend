import { useState, useEffect } from 'react'
import './App.css'

const questions = [
  {
    id: 1,
    question: "भारतीय संविधान के अनुसार, देवनागरी लिपि में हिंदी की क्या स्थिति है?",
    options: ["राष्ट्रीय भाषा", "संघ की राजभाषा", "क्षेत्रीय भाषा", "शास्त्रीय भाषा"],
    correct: 1
  },
  {
    id: 2,
    question: "भारतीय संविधान का कौन सा अनुच्छेद देवनागरी लिपि में हिंदी को संघ की राजभाषा घोषित करता है?",
    options: ["अनुच्छेद 340", "अनुच्छेद 343", "अनुच्छेद 351", "अनुच्छेद 370"],
    correct: 1
  },
  {
    id: 3,
    question: "हिंदी भाषा का विकास किस अपभ्रंश से हुआ है?",
    options: ["पैशाची अपभ्रंश", "शौरसेनी अपभ्रंश", "महाराष्ट्री अपभ्रंश", "मागधी अपभ्रंश"],
    correct: 1
  },
  {
    id: 4,
    question: "आधुनिक हिंदी का आधार कौन सी बोली है?",
    options: ["ब्रजभाषा", "खड़ी बोली", "अवधी", "भोजपुरी"],
    correct: 1
  },
  {
    id: 5,
    question: "हिंदी शब्दावली में 'हिंदुस्तानी' शब्द का प्रयोग सर्वप्रथम किसने किया?",
    options: ["तुलसीदास", "कबीर", "अमीर खुसरो", "रहीम"],
    correct: 2
  },
  {
    id: 6,
    question: "हिंदी भाषा का भारतीय संस्कृति के साथ क्या संबंध है?",
    options: ["केवल धार्मिक", "केवल साहित्यिक", "सांस्कृतिक एकता का प्रतीक", "केवल राजनीतिक"],
    correct: 2
  },
  {
    id: 7,
    question: "हिंदी को राष्ट्रीय भाषा और राजभाषा में क्या अंतर है?",
    options: ["कोई अंतर नहीं", "राजभाषा संवैधानिक पद है", "राष्ट्रीय भाषा अधिक महत्वपूर्ण", "दोनों समान हैं"],
    correct: 1
  },
  {
    id: 8,
    question: "देवनागरी लिपि की मुख्य विशेषता क्या है?",
    options: ["बाएं से दाएं लिखी जाती है", "वैज्ञानिक और व्यवस्थित है", "केवल हिंदी के लिए प्रयुक्त", "सबसे पुरानी लिपि है"],
    correct: 1
  },
  {
    id: 9,
    question: "हिंदी साहित्य के आदिकाल का समय कौन सा माना जाता है?",
    options: ["1000-1375 ई.", "1375-1700 ई.", "1700-1900 ई.", "1900-2000 ई."],
    correct: 0
  },
  {
    id: 10,
    question: "हिंदी के प्रचार-प्रसार में किस संस्था का महत्वपूर्ण योगदान है?",
    options: ["केंद्रीय हिंदी संस्थान", "राष्ट्रीय शैक्षिक अनुसंधान परिषद", "दक्षिण भारत हिंदी प्रचार सभा", "सभी उपरोक्त"],
    correct: 3
  },
  {
    id: 11,
    question: "हिंदी भाषा में कितने स्वर हैं?",
    options: ["10", "11", "12", "13"],
    correct: 1
  },
  {
    id: 12,
    question: "हिंदी की प्रमुख बोलियों में कौन सी शामिल नहीं है?",
    options: ["ब्रजभाषा", "अवधी", "तमिल", "भोजपुरी"],
    correct: 2
  },
  {
    id: 13,
    question: "राजभाषा अधिनियम कब पारित हुआ?",
    options: ["1963", "1965", "1967", "1969"],
    correct: 0
  },
  {
    id: 14,
    question: "हिंदी दिवस कब मनाया जाता है?",
    options: ["14 सितंबर", "15 अगस्त", "26 जनवरी", "2 अक्टूबर"],
    correct: 0
  },
  {
    id: 15,
    question: "संविधान के अनुच्छेद 351 में क्या प्रावधान है?",
    options: ["हिंदी का प्रचार", "हिंदी का विकास", "हिंदी की सुरक्षा", "हिंदी का प्रसार और विकास"],
    correct: 3
  },
  {
    id: 16,
    question: "हिंदी भाषा का सबसे पुराना रूप कौन सा है?",
    options: ["वैदिक संस्कृत", "अपभ्रंश", "प्राकृत", "पालि"],
    correct: 1
  },
  {
    id: 17,
    question: "हिंदी में तत्सम शब्दों का क्या अर्थ है?",
    options: ["संस्कृत से आए शब्द", "विदेशी शब्द", "देशज शब्द", "तद्भव शब्द"],
    correct: 0
  },
  {
    id: 18,
    question: "हिंदी साहित्य के भक्तिकाल के प्रमुख कवि कौन हैं?",
    options: ["कबीर", "तुलसीदास", "सूरदास", "सभी उपरोक्त"],
    correct: 3
  },
  {
    id: 19,
    question: "हिंदी भाषा की वैज्ञानिकता का प्रमाण क्या है?",
    options: ["व्याकरण की स्पष्टता", "उच्चारण की शुद्धता", "लेखन की सरलता", "सभी उपरोक्त"],
    correct: 3
  },
  {
    id: 20,
    question: "राजभाषा नीति के अंतर्गत कौन से राज्य आते हैं?",
    options: ["केवल हिंदी भाषी राज्य", "सभी राज्य", "उत्तर भारतीय राज्य", "केंद्रीय सरकार के अधीन क्षेत्र"],
    correct: 1
  },
  {
    id: 21,
    question: "हिंदी भाषा का विश्व में कौन सा स्थान है?",
    options: ["तीसरा", "चौथा", "पांचवां", "छठा"],
    correct: 0
  },
  {
    id: 22,
    question: "हिंदी की लिपि देवनागरी का विकास किस लिपि से हुआ?",
    options: ["ब्राह्मी", "खरोष्ठी", "शारदा", "गुप्त"],
    correct: 0
  },
  {
    id: 23,
    question: "हिंदी भाषा में विदेशी शब्दों का प्रभाव सबसे अधिक किस भाषा का है?",
    options: ["अरबी", "फारसी", "अंग्रेजी", "तुर्की"],
    correct: 2
  },
  {
    id: 24,
    question: "हिंदी साहित्य के आधुनिक काल की शुरुआत कब से मानी जाती है?",
    options: ["1850 ई.", "1900 ई.", "1920 ई.", "1947 ई."],
    correct: 0
  },
  {
    id: 25,
    question: "राजभाषा के रूप में हिंदी का भविष्य क्या है?",
    options: ["सीमित", "उज्ज्वल और व्यापक", "अनिश्चित", "केवल सरकारी कामकाज तक सीमित"],
    correct: 1
  }
];

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
  const [timeLeft, setTimeLeft] = useState(7)
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
      setTimeLeft(7)
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
      setTimeLeft(7)
    } else {
      finishQuiz(newAnswers, newScore)
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
    setTimeLeft(7)
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
            <p>25 प्रश्न • 7 सेकंड प्रति प्रश्न • +3/-1 अंक</p>
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
                <li>कोई वापसी विकल्प नहीं है</li>
                <li>सही उत्तर: +3 अंक</li>
                <li>गलत उत्तर: -1 अंक</li>
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
            <div className="timer">⏰ {timeLeft}सेकंड</div>
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
            <h3>{currentQ.question}</h3>
            
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
              {answers.map((answer, index) => (
                <div key={index} className={`result-item ${answer.correct ? 'correct' : answer.selectedAnswer !== null ? 'wrong' : 'unanswered'}`}>
                  <div className="question-number">प्रश्न {index + 1}</div>
                  <div className="result-details">
                    <p className="question-text">{answer.question}</p>
                    <div className="answer-info">
                      {answer.selectedAnswer !== null ? (
                        <p><strong>आपका उत्तर:</strong> {questions[index].options[answer.selectedAnswer]}</p>
                      ) : (
                        <p><strong>आपका उत्तर:</strong> अनुत्तरित</p>
                      )}
                      <p><strong>सही उत्तर:</strong> {questions[index].options[answer.correctAnswer]}</p>
                      <p><strong>अंक:</strong> {answer.points > 0 ? `+${answer.points}` : answer.points}</p>
                    </div>
                  </div>
                </div>
              ))}
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

