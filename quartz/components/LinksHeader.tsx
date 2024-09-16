import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span><a href="/my_wiki/projects">projects</a></span>
          <span><a href="https://jmbealer.github.io/my_wiki/resume">resume</a></span>
          <span> <a href="https://jmbealer.github.io/my_wiki/about_me">about me</a></span>
        </div>
        <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
