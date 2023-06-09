import { BrowserRouter } from "react-router-dom"
import PageHeader from "./Common/PageHeader"
import PageNavigator from "./PageNavigator"

import { fireStore } from "./Firebase"

function App() {
  console.log(fireStore)

  return (
    <BrowserRouter>
      {/* <PageHeader />
      <PageNavigator /> */}
      <div className="App">{fireStore._databaseId.projectId}</div>
    </BrowserRouter>
  )
}

export default App