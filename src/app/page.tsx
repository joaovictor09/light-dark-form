import { ToggleModeButton } from '@/components/ToggleModeButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-zinc-200 dark:bg-zinc-800">
      <div className="flex w-full max-w-lg flex-col gap-5 rounded bg-zinc-100 p-10 shadow-md dark:bg-zinc-600 dark:text-zinc-50">
        <div className="flex justify-between">
          <h1 className="text-center text-3xl font-bold">Log in</h1>
          <ToggleModeButton />
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <input
              className="rounded border bg-transparent focus:border-purple-500 focus:ring-0  dark:border-zinc-500 dark:placeholder:text-zinc-400"
              type="email"
              placeholder="Email Address"
            />

            <input
              className="rounded border bg-transparent focus:border-purple-500 focus:ring-0  dark:border-zinc-500 dark:placeholder:text-zinc-400"
              type="password"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="rounded bg-purple-500 px-5 py-2 font-bold text-white transition-colors hover:bg-purple-600"
          >
            Log in
          </button>

          <div className="flex items-center justify-between">
            <div className="group flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className=" rounded border border-purple-500 text-purple-500 focus:border-0 focus:outline-0 focus:ring-0"
              />
              <label
                htmlFor="remember"
                className="transition-all group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/"
              className="border-b border-transparent transition-all hover:border-purple-500 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Lost your password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
