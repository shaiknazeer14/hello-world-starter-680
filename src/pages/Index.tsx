import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Brain, Shield, CheckCircle, BookOpen, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-sm font-medium bg-white/20 text-white border-white/30">
              🚀 PM Internship Scheme
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Fair<span className="text-yellow-300">Hire</span> AI
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl max-w-3xl mx-auto">
              A Placement Operating System ensuring fair, transparent, and AI-powered internship allocation
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/student">
                <Button size="lg" variant="secondary" className="group shadow-strong">
                  Student Portal
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 shadow-medium">
                Recruiter Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">The Challenge We Solve</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Traditional placement systems face critical inefficiencies that affect thousands of students
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-destructive">❌ Current Problems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Delays in allocations</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Suboptimal matches - only elite resumes shine</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Student dissatisfaction - no feedback or growth</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Employer distrust - unverifiable skills</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-success">
              <CardHeader>
                <CardTitle className="text-success">✅ Our Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Faster allocations with AI matching</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Skill-based & preference-based matching</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Fair opportunities for all students</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Verified and bias-free hiring</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Features</h2>
            <p className="text-muted-foreground text-lg">
              Three powerful portals working together for fair placement
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-medium group hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Student Portal</CardTitle>
                <CardDescription>AI-powered profile & matching</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Resume auto-fill with AI</li>
                  <li>• Smart internship matching</li>
                  <li>• Skill gap analysis</li>
                  <li>• 24/7 Career mentor chatbot</li>
                  <li>• Feedback history tracking</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-medium group hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <Target className="w-8 h-8 text-secondary mb-2" />
                <CardTitle>Recruiter Portal</CardTitle>
                <CardDescription>Verified, bias-free hiring</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Anonymized candidate profiles</li>
                  <li>• DigiLocker verification</li>
                  <li>• Smart filtering system</li>
                  <li>• Analytics dashboard</li>
                  <li>• Internship-to-job tracking</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-medium group hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-accent mb-2" />
                <CardTitle>College Portal</CardTitle>
                <CardDescription>Placement insights & analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Student monitoring dashboard</li>
                  <li>• Skill gap analytics</li>
                  <li>• Accreditation reports</li>
                  <li>• Placement conversion tracking</li>
                  <li>• Employer insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground text-lg">
              Advanced AI features that set us apart from existing platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">AI Career Mentor</h3>
                <p className="text-sm text-muted-foreground">24/7 chatbot for resume feedback and career guidance</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Bias-Free Matching</h3>
                <p className="text-sm text-muted-foreground">Anonymized profiles eliminate discrimination</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Verified Profiles</h3>
                <p className="text-sm text-muted-foreground">DigiLocker integration ensures authentic data</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Growth Analytics</h3>
                <p className="text-sm text-muted-foreground">Track internship-to-job conversions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Placements?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students, recruiters, and colleges building a fairer future
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/student">
              <Button size="lg" variant="secondary">
                Get Started as Student
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-2">FairHire AI</h3>
          <p className="text-white/70 mb-4">Building the future of fair placement systems</p>
          <p className="text-white/50 text-sm">© 2024 FairHire AI. Hackathon Project.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;