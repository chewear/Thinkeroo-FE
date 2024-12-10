import React from 'react'
import StudentSearchField from './student-components/student-basic-components/StudentSearchField'
import StudentProfile from './student-components/student-profile-components/StudentProfile'
import StudentQuizPage from './student-components/student-quiz-page-components/StudentQuizPage'
import StudentClassPage from './student-components/student-class-page-components/StudentClassPage'
import StudentClassPageOverview from './student-components/student-class-page-components/student-class-page-view-components/student-class-page-view-sub-components/StudentClassPageOverview'
import StudentTakingQuiz from './student-components/student-quiz-page-components/student-quiz-page-sub-components/StudentTakingQuiz'
import StudentClassPageView from './student-components/student-class-page-components/student-class-page-view-components/StudentClassPageView'
import StudentClassPageQuiz from './student-components/student-class-page-components/student-class-page-view-components/student-class-page-view-sub-components/StudentClassPageQuiz'
import StudentShowCorrect from './student-components/student-quiz-page-components/student-quiz-page-sub-components/StudentQuizShowCorrect'
import StudentQuizResult from './student-components/student-quiz-page-components/student-quiz-page-sub-components/StudentQuizResult'
const Student = () => {
  return (
    // <div>Student Page</div>
    <StudentQuizResult/>
  )
}

export default Student