import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// newly added
const tagsToRemove = ["graph-exclude"]
// newly added
const graphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"]
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"]
  }
};

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  // header: [],
  header: [Component.LinksHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jmbealer",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    // newly added
    Component.MobileOnly(Component.TableOfContents2()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link",
      filterFn: (node) => node.name !== "templates",
    })),
  ],
  right: [
    // newly added
    Component.MobileOnly(Component.Explorer({
      folderClickBehavior: "link",
      filterFn: (node) => node.name !== "templates",
    })),
    // Component.Graph(),
    Component.DesktopOnly(Component.Graph(graphConfig)),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  // beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta(), Component.MobileOnly(Component.TableOfContents2())],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link",
      filterFn: (node) => node.name !== "templates",
    })),
  ],
  right: [
    // newly added
    Component.MobileOnly(Component.Explorer({
      folderClickBehavior: "link",
      filterFn: (node) => node.name !== "templates",
    })),
    Component.DesktopOnly(Component.Graph(graphConfig)),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
