var school = {
    "name": "CareerDevs",
    twitter: "@CareerDevs",
    classes: [
        {
            type: "Intro",
            students: [
                {
                    name: "Dara Hoy",
                    grade: 9
                },
            ]
        },
        {
            type: "Intermediate",
            students: [
                {
                    name: "Josh Bristol",
                    grade: 10
                },
            ]
        }
    ],
    
    addStudent: function(classNum, studentName, studentGrade) {
        this.classes[classNum].students.push({
            name: studentName,
            grade: studentGrade
        });
    },
    
   getAvgGrade: function(classNum) {
        var theStudents = this.classes[classNum].students;
        var total = 0;  for(var i = 0; i < theStudents.length; i++) {
            total += theStudents[i].grade;
        }
        return total / theStudents.length;
    }
};