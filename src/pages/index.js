import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Grand Jambon"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Allegiances</h1>
        <ul>
            <li>Manchester City</li>
            <li>Stockport County</li>
            <li>Leyton Orient</li>
            <li>Los Angeles Angels</li>
            <li>Anaheim Ducks</li>
            <li>Los Angeles Clippers</li>
            <li>University of North Carolina</li>
            <li>Collingwood</li>
        </ul>
        <p>
            The domestic teams are all related to where I've lived - having been born and raised in Stockport,
            and the dozen-plus years I've lived in Leytonstone. My son has also adopted Accrington Stanley as his
            favourite team, purely because they share the same name, so they are also who I check out while scrolling
            through the scores on a Saturday afternoon.
        </p>
        <p>
            The LA teams are all passed on by my Uncle moving to California in the early 70s and in particular,
            my visits there in 1991 and 1992, firmly cementing my interest in baseball.
        </p>
        <p>
            More recently, because of someone I work with who's from Melbourne, I've watched a lof of Aussie Rules
            and adopted his team, Collingwood. It's a truly underrated sport.
        </p>
        <h1>Links</h1>
        <p>My quest to visit all <a href="http://www.questfor92.com">92 football grounds</a>.</p>
        <p/>
        <p>Archived stats for <a href="http://www.the-bedazzled.com">my 5 a side team</a> in Finsbury Park.</p>
        <p/>
        <p>Track my progress on <a href="https://fantasy.premierleague.com/entry/2680676/history">FPL</a></p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
