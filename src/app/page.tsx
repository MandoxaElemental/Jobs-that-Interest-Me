import { Button} from "flowbite-react";

export default function Home() {
  return (
    <div className='min-h-screen text-center flex items-center justify-center bg-gradient-to-tr from-white via-emerald-300 to-indigo-600'>
      <div>
        <h1 className="text-3xl pb-2 font-bold">
      The Jobs that Interest Me
        </h1>
        <p className='pb-2'>Gianpaolo Reinares</p>
      <Button className="bg-black hover:bg-white hover:text-slate-500" href="/Jobs">Begin</Button>
      </div>
    </div>
  );
}
