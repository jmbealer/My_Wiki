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
          {/* <span> */}
          {/*   <a href="https://camargomau.com/">Blog</a> */}
          {/* </span> */}
          <span><a href="./projects/">projects</a></span>
          <span><a href="/resume/">Resume</a></span>
          <span> <a href="/about/">About</a></span>
          {/* <span> */}
          {/*   <a href="/Lingvujo/Lingvujo">Langs</a> */}
          {/* </span> */}
          {/* <span> */}
          {/*   <a href="/Sciujo/Mathematics">Maths</a> */}
          {/* </span> */}
          {/* <span> */}
          {/*   <a href="/Sciujo/Computing">Comp</a> */}
          {/* </span> */}
          {/* <span> */}
          {/*   <a href="/Sciujo/Computing">Comp</a> */}
          {/* </span> */}
          {/* <span> */}
          {/*   <a href="/Sciujo/Computing">Comp</a> */}
          {/* </span> */}
        </div>
        <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
