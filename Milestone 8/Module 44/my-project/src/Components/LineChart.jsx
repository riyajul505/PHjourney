import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentData = [
    { course: "Mathematics", cgpa: 3.5 },
    { course: "Physics", cgpa: 3.6 },
    { course: "Chemistry", cgpa: 3.7 },
    { course: "Biology", cgpa: 3.8 },
    { course: "Computer", cgpa: 3.9 },
    { course: "English ", cgpa: 4.0 },
    { course: "History", cgpa: 4.0 },
    { course: "Geography", cgpa: 4.0 },
  ];
  return (
    <div>
      <LChart width={900} height={500} data={studentData}>
        <XAxis dataKey="course" />
        <YAxis />
        
        <Line type="monotone" dataKey="cgpa" stroke="#8884d8" />
      </LChart>
    </div>
  );
};

export default LineChart;
