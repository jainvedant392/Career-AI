import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 min-h-[100vh]">
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
