import Cabecalho from "./components/Cabecalho";


export default function App() {
  return (
    <>
      <div className="container">


        <Cabecalho/>

        <header>
          <h1>Viti + React</h1>
        </header>

        <section>
          {/*thisis a comment*/}
          <p><a href="/">Home Page</a></p>
          <button onClick={() => alert("Hellow Word")}
          >Click Me!</button>
        </section>

        <footer>
          <p>&copy;2021</p>
        </footer>
      </div>
   
    </>
  )
}
