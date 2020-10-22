import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href='https://fonts.googleapis.com/css?family=Viga' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Layout
