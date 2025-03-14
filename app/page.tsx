import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="text-lg bg-red-700 w-screen h-screen flex items-center justify-center" >
    <div>
    Todo Application
<br />
<Link className="text-md border m-2" href="/signin">Sign In to Todo App</Link>
<br />
<Link className="text-md border m-2" href="/signup">Sign Up to Todo App</Link>
    </div>
   </div>
  );
}
