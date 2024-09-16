import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">
          {/* <a class="links-header-item" href="/guides/">Guides</a> */}
          <a class="links-header-item" href="/projects/">Projects</a>
          {/* <a class="links-header-item" href="/modding-tools/">Tools</a> */}
          <a class="links-header-item" href="/resume/">Resume</a>
          <a class="links-header-item" href="/about/">About</a>
          {/* <a class="links-header-item" href="https://tes3cs.pages.dev/">Construction Set</a> */}
          {/* <a class="links-header-item" href="/programmers-reference/">Programmers Reference</a> */}
          {/* <a class="links-header-item" href="/contributing/"> Contributing</a> */}
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
