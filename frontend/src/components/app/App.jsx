import Header from "../header/Header"
import Filter from "../filter/Filter"
import Form from "../form/Form"
import List from "../list/list"


function App() {
 

  return (
    <div className="flex flex-col items-center justify-center text-center bg-gray-600 dark:bg-[#112d49]">
     <Header />
     <main className="container flex justify-between w-full mb-4 ">
      <div className="flex-1 basis-3xl mx-auto">
        <Form />
      </div>
      <div className="flex-1 basis-3/5 mx-auto flex flex-col">
        {/* <Filter /> */}
        <List />
      </div>
     </main>
    </div>
  )
}

export default App
