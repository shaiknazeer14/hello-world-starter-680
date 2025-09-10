import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import placeholderAvatar from "@/assets/placeholder-avatar.jpg";
import { 
  ArrowLeft, 
  User, 
  Briefcase, 
  Target, 
  MessageCircle, 
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  Star,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Brain
} from "lucide-react";

// Mock data for the student portal
const mockStudent = {
  name: "Priya Sharma",
  email: "priya.sharma@college.edu",
  college: "IIT Delhi",
  gpa: "8.5/10",
  skills: ["Python", "React", "Data Analysis", "SQL", "Machine Learning"],
  profileCompletion: 85,
  appliedInternships: 12,
  shortlisted: 3,
};

const mockInternships = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "TechCorp Solutions",
    location: "Bangalore",
    stipend: "₹25,000",
    duration: "3 months",
    mode: "Hybrid",
    matchScore: 92,
    skillsRequired: ["Python", "Data Analysis", "SQL"],
    description: "Work on machine learning models for customer analytics",
    status: "recommended"
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "StartupXYZ",
    location: "Mumbai",
    stipend: "₹20,000",
    duration: "4 months",
    mode: "Remote",
    matchScore: 85,
    skillsRequired: ["React", "JavaScript", "HTML/CSS"],
    description: "Build responsive web applications using modern frameworks",
    status: "applied"
  },
  {
    id: 3,
    title: "Product Management Intern",
    company: "InnovateInc",
    location: "Delhi",
    stipend: "₹30,000",
    duration: "6 months",
    mode: "On-site",
    matchScore: 78,
    skillsRequired: ["Product Strategy", "Analytics", "Communication"],
    description: "Support product development and strategy initiatives",
    status: "new"
  }
];

const mockSkillGaps = [
  { skill: "Docker", priority: "High", resources: 3 },
  { skill: "AWS", priority: "Medium", resources: 5 },
  { skill: "TypeScript", priority: "Low", resources: 2 }
];

const mockFeedback = [
  {
    company: "TechCorp Solutions",
    role: "Data Science Intern",
    rating: 4.2,
    feedback: "Strong technical skills, good communication. Recommended to improve presentation skills.",
    date: "2024-01-15"
  },
  {
    company: "StartupXYZ",
    role: "Frontend Developer",
    rating: 3.8,
    feedback: "Good coding abilities. Needs more experience with advanced React patterns.",
    date: "2024-01-10"
  }
];

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">FairHire AI</h1>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={placeholderAvatar} />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div className="text-right">
              <p className="font-medium">{mockStudent.name}</p>
              <p className="text-sm text-muted-foreground">{mockStudent.college}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="internships" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Internships
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="mentor" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              AI Mentor
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Feedback
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="mt-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="lg:col-span-1 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-3">
                      <AvatarImage src={placeholderAvatar} />
                      <AvatarFallback className="text-lg">PS</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{mockStudent.name}</h3>
                    <p className="text-sm text-muted-foreground">{mockStudent.email}</p>
                    <Badge variant="secondary" className="mt-2">{mockStudent.college}</Badge>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Profile Completion</span>
                      <span>{mockStudent.profileCompletion}%</span>
                    </div>
                    <Progress value={mockStudent.profileCompletion} className="h-2" />
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm"><strong>GPA:</strong> {mockStudent.gpa}</p>
                    <p className="text-sm"><strong>Applied:</strong> {mockStudent.appliedInternships} internships</p>
                    <p className="text-sm"><strong>Shortlisted:</strong> {mockStudent.shortlisted} positions</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats & Actions */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-primary">{mockStudent.appliedInternships}</p>
                          <p className="text-sm text-muted-foreground">Applications</p>
                        </div>
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-success">{mockStudent.shortlisted}</p>
                          <p className="text-sm text-muted-foreground">Shortlisted</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-success" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-accent">92%</p>
                          <p className="text-sm text-muted-foreground">Best Match</p>
                        </div>
                        <Target className="w-8 h-8 text-accent" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Top Matches */}
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>🎯 Top Matches for You</CardTitle>
                    <CardDescription>AI-curated internships based on your profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockInternships.slice(0, 2).map((internship) => (
                        <div key={internship.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{internship.title}</h4>
                              <Badge variant="secondary">{internship.matchScore}% match</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{internship.company}</p>
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {internship.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                {internship.stipend}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {internship.duration}
                              </span>
                            </div>
                          </div>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships" className="mt-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Available Internships</h2>
                <Button>
                  <Target className="w-4 h-4 mr-2" />
                  Update Preferences
                </Button>
              </div>
              <div className="grid gap-6">
                {mockInternships.map((internship) => (
                  <Card key={internship.id} className="shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{internship.title}</h3>
                            <Badge 
                              variant={internship.matchScore >= 90 ? "default" : internship.matchScore >= 80 ? "secondary" : "outline"}
                            >
                              {internship.matchScore}% match
                            </Badge>
                            {internship.status === "applied" && (
                              <Badge variant="outline" className="text-primary border-primary">Applied</Badge>
                            )}
                          </div>
                          <p className="text-lg text-muted-foreground mb-3">{internship.company}</p>
                          <p className="text-muted-foreground mb-4">{internship.description}</p>
                          
                          <div className="grid md:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>{internship.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <DollarSign className="w-4 h-4 text-muted-foreground" />
                              <span>{internship.stipend}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{internship.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Briefcase className="w-4 h-4 text-muted-foreground" />
                              <span>{internship.mode}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {internship.skillsRequired.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="ml-6">
                          <Button 
                            size="lg" 
                            disabled={internship.status === "applied"}
                            className={internship.matchScore >= 90 ? "bg-gradient-primary" : ""}
                          >
                            {internship.status === "applied" ? "Applied" : "Apply Now"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="mt-6">
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Current Skills
                  </CardTitle>
                  <CardDescription>Skills verified through your profile and certifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {mockStudent.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-warning">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-warning">
                    <AlertCircle className="w-5 h-5" />
                    Skill Gap Analysis
                  </CardTitle>
                  <CardDescription>
                    Skills that could improve your internship matches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockSkillGaps.map((gap) => (
                      <div key={gap.skill} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className="font-medium">{gap.skill}</h4>
                            <Badge 
                              variant={gap.priority === "High" ? "destructive" : gap.priority === "Medium" ? "secondary" : "outline"}
                              className="text-xs"
                            >
                              {gap.priority} Priority
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {gap.resources} free learning resources available
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Learn
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Mentor Tab */}
          <TabsContent value="mentor" className="mt-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Career Mentor
                </CardTitle>
                <CardDescription>
                  24/7 AI assistant for resume feedback, career guidance, and interview prep
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-primary p-6 rounded-lg text-white text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-semibold mb-2">Chat with Your AI Mentor</h3>
                  <p className="mb-4 opacity-90">
                    Get personalized advice on your resume, interview preparation, and career path
                  </p>
                  <Button variant="secondary" size="lg">
                    Start Conversation
                  </Button>
                </div>
                
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-2">💡 Quick Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ask for resume feedback</li>
                      <li>• Get interview preparation help</li>
                      <li>• Understand rejection reasons</li>
                      <li>• Plan your career roadmap</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-2">📚 Recent Topics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• "How to improve my resume?"</li>
                      <li>• "Data Science career path"</li>
                      <li>• "Interview tips for tech roles"</li>
                      <li>• "Skill development plan"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="mt-6">
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Recruiter Feedback History</CardTitle>
                  <CardDescription>
                    Feedback from recruiters to help you improve
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mockFeedback.map((feedback, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{feedback.role}</h4>
                            <p className="text-sm text-muted-foreground">{feedback.company}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-current text-warning" />
                              <span className="font-medium">{feedback.rating}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{feedback.date}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{feedback.feedback}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentPortal;