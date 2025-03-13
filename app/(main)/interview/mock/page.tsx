import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Quiz from "../_components/quiz";

const MockInterviewPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-4">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/interview">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back To Interview Preparation
          </Button>
        </Link>

        <div>
          <h1 className="text-6xl font-bold gradient-title">Mock Interview</h1>
          <p className="text-muted-foreground">
            Test your knowledge with industry-specific questions.
          </p>
        </div>
      </div>

      <Quiz />
    </div>
  );
};

export default MockInterviewPage;
