import CardPublish from "./Components/Card/card";
import User from "./assets/user_me.png"
import Verify from "./assets/verify/verify.png"
function App() {
  return (
    <CardPublish
      id= "1"
      name="Evans Glz"
      src={User}
      onClick={()=>console.log("hola")}
      icon={Verify}
      userId="@EvansGxz"
      body="Deserunt esse cillum anim proident qui. Ipsum ut minim quis irure est sunt velit ipsum nostrud non commodo ut ipsum nulla. Pariatur tempor reprehenderit sunt reprehenderit veniam."
    />
  );
}

export default App;
