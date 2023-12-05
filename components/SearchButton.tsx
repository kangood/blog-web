import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'
import { Search } from 'lucide-react'

import CmdSVG from 'public/static/images/cmd.svg'

const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <div className=" flex items-center space-x-2">
        <SearchButtonWrapper aria-label="Search">
          <Search />
        </SearchButtonWrapper>
        <span className="hidden md:flex gap-1 text-xs text-muted-foreground">
          <kbd className="flex items-center justify-center !w-5 !h-5 border border-current rounded-md">
            <CmdSVG />
          </kbd>
          <kbd className="flex items-center justify-center !w-5 !h-5 p-1 border border-current rounded-md">
            K
          </kbd>
        </span>
      </div>
    )
  }
}

export default SearchButton
