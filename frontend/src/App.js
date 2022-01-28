import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Nfts from "./components/Nfts/Nfts";
import Holders from "./components/Nfts/Holders"

export default function App () {
  return (
    <>
      <Navbar/>
      <Main/>
      <Nfts/>
      <Holders/>
    </>
  )
}