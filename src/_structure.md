# /src Directory Structure

## /src/page
the 'src/page' directory contains small scripts intended to be referenced by a particular HTML file, that handles all of the page's logic, usually calling functions from
more abstract scripts outside of the folder.
Scripts outside this folder should be aimed to potentially serve multiple pages, and so should not be referenced by any page. They contain more abstract logic such as Classes or Functions.