import { BrowserRouter } from "react-router-dom"
import PageHeader from "./Common/PageHeader"
import PageNavigator from "./PageNavigator"
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <PageHeader />
        <PageNavigator />
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App