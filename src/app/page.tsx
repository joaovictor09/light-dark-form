import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <h1>Log in</h1>
        <form>
          <div>
            <input type="email" name="email" />

            <input type="password" name="" id="" />
          </div>

          <button type="submit">Log in</button>

          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <Link href="/">Lost your password?</Link>
          </div>
        </form>
      </div>
    </main>
  )
}
