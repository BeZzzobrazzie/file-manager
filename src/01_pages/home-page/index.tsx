import { FileManagerService } from "src/05_shared/api"

const fileManager = new FileManagerService();

export default function HomePage() {

  fileManager.list("/").then(response => {
    console.log(response.data);
  });

  return(
    <>
      <h1>Home page</h1>
    </>
  )

}