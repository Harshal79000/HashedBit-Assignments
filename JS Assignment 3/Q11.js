const students = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    }
  ];
  
  const studentsWithAverage = students.map(student => {
    const studentName = Object.keys(student)[0];
    const subjectScores = Object.values(student[studentName]);
    const totalScore = subjectScores.reduce((sum, score) => sum + score, 0);
    const average = totalScore / subjectScores.length;
    return { [studentName]: { average } };
  });
  
  console.log(studentsWithAverage);