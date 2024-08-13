// import * as React from "react"
 
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// const Home = () => {
//     return (
//         <Card className="w-[600px] gap-3 h-2 h-[567px] justify-center items-center">
//         <CardHeader>
//           <CardTitle>Create project</CardTitle>
//           <CardDescription>Deploy your new project in one-click.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Name of your project" />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="framework">Framework</Label>
//                 <Select>
//                   <SelectTrigger id="framework">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper">
//                     <SelectItem value="next">Next.js</SelectItem>
//                     <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                     <SelectItem value="astro">Astro</SelectItem>
//                     <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button variant="outline">Cancel</Button>
//           <Button>Deploy</Button>
//         </CardFooter>
//       </Card>
//     )
// }

// export default Home

// // import React from 'react'
// // import { Button } from '@/components/ui/button'
// // import { Input } from '@/components/ui/input'

// // const Home = () => {
// //     return (
// //         <div className='min-h-screen bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 flex flex-col items-center p-2'>
// //             <header className='w-full max-w-6xl flex justify-between items-center p-6 bg-white shadow-md rounded-lg'>
// //                 <h1 className='text-3xl font-bold text-gray-800'>Job Portal</h1>
// //                 {/* <nav>
// //                     <Button className='ml-4'>Login</Button>
// //                     <Button className='ml-4'>Register</Button>
// //                 </nav> */}
// //             </header>

// //             <div className='flex flex-col items-center text-center mt-16'>
// //                 <h2 className='text-4xl font-bold text-white mb-6'>Find Your Dream Job</h2>
// //                 <p className='text-lg text-white mb-10'>Search from thousands of job listings from top companies and apply today.</p>
// //                 <div className='flex w-full max-w-lg'>
// //                     <Input type='text' placeholder='Job title, keywords, or company' className='p-3 w-2/3 rounded-l-md focus:outline-none' />
// //                     <Button className='w-1/3 bg-blue-600 text-white font-semibold rounded-r-md'>Search Jobs</Button>
// //                 </div>
// //             </div>

// //             <section className='w-full max-w-6xl mt-16'>
// //                 <h3 className='text-2xl font-bold text-gray-800 mb-4'>Popular Job Categories</h3>
// //                 <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Software Development</h4>
// //                         <p className='text-gray-600'>Find jobs in software engineering, web development, and more.</p>
// //                     </div>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Marketing</h4>
// //                         <p className='text-gray-600'>Explore opportunities in marketing, advertising, and content creation.</p>
// //                     </div>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Finance</h4>
// //                         <p className='text-gray-600'>Discover careers in finance, accounting, and investment banking.</p>
// //                     </div>
// //                 </div>
// //             </section>

// //             <section className='w-full max-w-6xl mt-16'>
// //                 <h3 className='text-2xl font-bold text-gray-800 mb-4'>Featured Jobs</h3>
// //                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Frontend Developer</h4>
// //                         <p className='text-gray-600'>ABC Company - San Francisco, CA</p>
// //                         <Button className='mt-4 w-full bg-blue-600 text-white font-semibold rounded-md'>Apply Now</Button>
// //                     </div>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Marketing Specialist</h4>
// //                         <p className='text-gray-600'>XYZ Inc - New York, NY</p>
// //                         <Button className='mt-4 w-full bg-blue-600 text-white font-semibold rounded-md'>Apply Now</Button>
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     )
// // }

// // export default Home


// // import React from 'react'
// // import { Button } from '@/components/ui/button'
// // import { Input } from '@/components/ui/input'

// // const Home = () => {
// //     return (
// //         <div className='min-h-screen bg-black flex flex-col items-center p-2'>
// //             <header className='w-full max-w-6xl flex justify-between items-center p-6 bg-white shadow-md rounded-lg'>
// //                 <h1 className='text-3xl font-bold text-gray-800'>Job Portal</h1>
// //                 {/* <nav>
// //                     <Button className='ml-4'>Login</Button>
// //                     <Button className='ml-4'>Register</Button>
// //                 </nav> */}
// //             </header>

// //             <div className='flex flex-col items-center text-center mt-16'>
// //                 <h2 className='text-4xl font-bold text-white mb-6'>Find Your Dream Job</h2>
// //                 <p className='text-lg text-white mb-10'>Search from thousands of job listings from top companies and apply today.</p>
// //                 <div className='flex w-full max-w-lg'>
// //                     <Input type='text' placeholder='Job title, keywords, or company' className='p-3 w-2/3 rounded-l-md focus:outline-none' />
// //                     <Button className='w-1/3 bg-blue-600 text-white font-semibold rounded-r-md'>Search Jobs</Button>
// //                 </div>
// //             </div>

// //             <section className='w-full max-w-6xl mt-16'>
// //                 <h3 className='text-2xl font-bold text-gray-800 mb-4'>Popular Job Categories</h3>
// //                 <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Software Development</h4>
// //                         <p className='text-gray-600'>Find jobs in software engineering, web development, and more.</p>
// //                     </div>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Marketing</h4>
// //                         <p className='text-gray-600'>Explore opportunities in marketing, advertising, and content creation.</p>
// //                     </div>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Finance</h4>
// //                         <p className='text-gray-600'>Discover careers in finance, accounting, and investment banking.</p>
// //                     </div>
// //                 </div>
// //             </section>

// //             <section className='w-full max-w-6xl mt-16'>
// //                 <h3 className='text-2xl font-bold text-gray-800 mb-4'>Featured Jobs</h3>
// //                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Frontend Developer</h4>
// //                         <p className='text-gray-600'>ABC Company - San Francisco, CA</p>
// //                         <Button className='mt-4 w-full bg-blue-600 text-white font-semibold rounded-md'>Apply Now</Button>
// //                     </div>
// //                     <div className='bg-white p-6 rounded-lg shadow-md'>
// //                         <h4 className='text-xl font-semibold text-gray-800'>Marketing Specialist</h4>
// //                         <p className='text-gray-600'>XYZ Inc - New York, NY</p>
// //                         <Button className='mt-4 w-full bg-blue-600 text-white font-semibold rounded-md'>Apply Now</Button>
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     )
// // }

// // export default Home

// src/Home.jsx
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlurFade from "@/components/magicui/blur-fade";

const Home = () => {
  return (
   
    <PageContainer>
   
        <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl   font-bold tracking-tighter sm:text-5xl xl:text-6xl/none from-stone-800">
          Hello World 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          Nice to meet you
        </span>
      </BlurFade>
    </section>
      {/* <Header>
        <Logo>Job Portal</Logo>
        <Nav>
          <NavButton>Login</NavButton>
          <NavButton>Register</NavButton>
        </Nav>
      </Header> */}
      <HeroSection>
      <BlurFade delay={0.50} inView>

        <HeroContent>
          <HeroTitle>Find Your Dream Job</HeroTitle>
          <HeroDescription>
            Search from thousands of job listings from top companies and apply
            today.
          </HeroDescription>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Job title, keywords, or company"
            />
            <SearchButton>Search Jobs</SearchButton>
          </SearchContainer>
        </HeroContent>
        </BlurFade>
      </HeroSection>
      <Section>
      <BlurFade delay={0.50} inView>
        <SectionTitle className=" from-stone-800">

          Popular Job Categories
         
          </SectionTitle>
        <CategoryGrid>
          <CategoryCard>
            <CategoryTitle>Software Development</CategoryTitle>
            <CategoryDescription>
              Find jobs in software engineering, web development, and more.
            </CategoryDescription>
          </CategoryCard>
          <CategoryCard>
            <CategoryTitle>Marketing</CategoryTitle>
            <CategoryDescription>
              Explore opportunities in marketing, advertising, and content
              creation.
            </CategoryDescription>
          </CategoryCard>
          <CategoryCard>
            <CategoryTitle>Finance</CategoryTitle>
            <CategoryDescription>
              Discover careers in finance, accounting, and investment banking.
            </CategoryDescription>
          </CategoryCard>
        </CategoryGrid>
    </BlurFade>
      </Section>

     
      <Section>
      <BlurFade delay={0.50} inView>
        <SectionTitle>Featured Jobs</SectionTitle>
        <FeaturedGrid>
          <FeaturedCard>
            <FeaturedTitle>Frontend Developer</FeaturedTitle>
            <FeaturedCompany>ABC Company - San Francisco, CA</FeaturedCompany>
            <ApplyButton>Apply Now</ApplyButton>
          </FeaturedCard>
          <FeaturedCard>
            <FeaturedTitle>Marketing Specialist</FeaturedTitle>
            <FeaturedCompany>XYZ Inc - New York, NY</FeaturedCompany>
            <ApplyButton>Apply Now</ApplyButton>
          </FeaturedCard>
        </FeaturedGrid>
      </BlurFade>
      </Section>
    </PageContainer>
  );
};

export default Home;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: linear-gradient(to right, #f8f9fa, #e9ecef);
  padding: 2rem;
`;

const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavButton = styled(Button)`
  margin-left: 1rem;
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background: #007bff;
  color: #fff;
  border-radius: 8px;
  margin-top: 2rem;
  
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled(Input)`
  flex: 2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SearchButton = styled(Button)`
  flex: 1;
  background: #0069d9;
  color: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  padding: 2rem;
  // background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem
  ;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`;

const CategoryTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
    color: green;

`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeaturedCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`;

const FeaturedTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FeaturedCompany = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

const ApplyButton = styled(Button)`
  background: #007bff;
  color: #fff;
  width: 100%;
`;
