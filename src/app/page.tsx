import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <main className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Skillivate.ai
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            AI-powered personalized courses platform
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  AI-Powered Learning
                </CardTitle>
                <CardDescription>
                  Personalized course recommendations based on your learning
                  style and goals
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  Adaptive Curriculum
                </CardTitle>
                <CardDescription>
                  Dynamic content that adjusts to your progress and skill level
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  Real-time Feedback
                </CardTitle>
                <CardDescription>
                  Instant insights and guidance to accelerate your learning
                  journey
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">Coming soon...</p>
        </main>
      </div>
    </div>
  );
}
