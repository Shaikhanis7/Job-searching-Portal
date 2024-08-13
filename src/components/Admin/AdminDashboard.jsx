import React from 'react';
import { TrendingUp } from 'lucide-react';
import { RadialBarChart, RadialBar, LabelList, LineChart, Line, CartesianGrid, XAxis, BarChart, Bar } from 'recharts';

const browserData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const userGrowthData = [
  { month: "January", users: 186 },
  { month: "February", users: 305 },
  { month: "March", users: 237 },
  { month: "April", users: 73 },
  { month: "May", users: 209 },
  { month: "June", users: 214 },
];

const jobCategoryData = [
  { category: "IT", postings: 120 },
  { category: "Healthcare", postings: 90 },
  { category: "Finance", postings: 75 },
  { category: "Education", postings: 60 },
  { category: "Retail", postings: 45 },
];

const applicationData = [
  { month: "January", applications: 150 },
  { month: "February", applications: 230 },
  { month: "March", applications: 180 },
  { month: "April", applications: 80 },
  { month: "May", applications: 190 },
  { month: "June", applications: 210 },
];

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col border border-primary p-4">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="text-sm font-medium">Visitor Analytics</h2>
          <p className="text-muted-foreground">Browser Distribution (Jan - Jun 2024)</p>
        </div>
        <div className="flex-1 pb-0">
          <RadialBarChart data={browserData} startAngle={-90} endAngle={380} innerRadius={30} outerRadius={110}>
            <RadialBar dataKey="visitors" background fill="var(--color-desktop)">
              <LabelList position="insideStart" dataKey="browser" className="fill-white capitalize mix-blend-luminosity" fontSize={11} />
            </RadialBar>
          </RadialBarChart>
        </div>
        <div className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors by browser for the last 6 months
          </div>
        </div>
      </div>

      <div className="flex flex-col border border-primary p-4">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="text-sm font-medium">User Growth</h2>
          <p className="text-muted-foreground">Monthly Users (Jan - Jun 2024)</p>
        </div>
        <div className="flex-1 pb-0">
          <LineChart data={userGrowthData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
            <Line dataKey="users" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
          </LineChart>
        </div>
        <div className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing the number of desktop users over the last 6 months
          </div>
        </div>
      </div>

      <div className="flex flex-col border border-primary p-4">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="text-sm font-medium">Job Postings by Category</h2>
          <p className="text-muted-foreground">Distribution of Job Postings (Jan - Jun 2024)</p>
        </div>
        <div className="flex-1 pb-0">
          <BarChart data={jobCategoryData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="category" tickLine={false} tickMargin={10} axisLine={false} />
            <Bar dataKey="postings" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </div>
        <div className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Job postings across various categories
          </div>
          <div className="leading-none text-muted-foreground">
            Showing job posting distribution from January to June 2024
          </div>
        </div>
      </div>

      <div className="flex flex-col border border-primary p-4">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="text-sm font-medium">Applications Received</h2>
          <p className="text-muted-foreground">Monthly Applications (Jan - Jun 2024)</p>
        </div>
        <div className="flex-1 pb-0">
          <LineChart data={applicationData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
            <Line dataKey="applications" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
          </LineChart>
        </div>
        <div className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Application trends over the past 6 months
          </div>
          <div className="leading-none text-muted-foreground">
            Total number of applications received from January to June 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
