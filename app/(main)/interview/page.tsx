import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/statsCards";
import QuizList from "./_components/quizList";
import PerformanceChart from "./_components/performanceChart";

const InterviewPage = async () => {
  const assessments = await getAssessments();
  return (
    <div>
      <h1 className="text-6xl gradient-title font-bold mb-5">
        Interview Preparation
      </h1>

      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};

export default InterviewPage;
