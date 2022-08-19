import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Intro from '../components/intro'
import CoverImage from '../components/cover-image'
import { InlineWidget } from "react-calendly";

const coverImage = '/assets/blog/conferenceHeadshot.jpeg'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>Career Coaching Franziska Hinkelmann, Ph.D.</title>
        </Head>
        <Container>
          <Intro />
          <section>
            <div className="mb-8 md:mb-16">
              <CoverImage title="Franziska Hinkelmann, Ph.D." src={coverImage} slug="" />
            </div>
          </section>

          <div className="max-w-2xl mx-auto">
            <div>
              <h2>Career Coaching</h2>
              <br />
              I provide one-on-one coaching to individuals looking for support, at any stage.
              As a career coach specializing in high tech and FAANG, my expertise includes backend
              software engineering, developer relations, Cloud development, and people management.
              <br /><br />
              We’ll meet whenever you need an outside perspective from an experienced engineering leader
              via video chat. Meeting with me is like having a one-on-one with a manager who cares deeply
              about you and your own growth. I'm here to give you feedback, advice, and most importantly,
              to help you to introspect and find the answers that are inside of you.
              <br /><br />
              Most often, I work with you to strategically and intentionally connect the dots between your
              career story and the companies and positions you are targeting in your job search. I’m also
              happy to help you brainstorm and edit your resume and job applications.

            </div>
            <br /><br />
            <h2>Book your session now</h2>
            <br />
            <b>I'm offering free coaching sessions for women in tech.</b>
            <div className="App">
              <InlineWidget url="https://calendly.com/fhinkel" />
            </div>

          </div>
        </Container>
      </Layout>
    </>
  )
}