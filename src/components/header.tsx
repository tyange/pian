export default function Header() {
  return (
    <header class="flex justify-center py-10">
      <nav class="border shadow-md rounded-xl w-9/12 grid grid-cols-5 p-10">
        <div>
          <h2>pian</h2>
        </div>
        <div>
          <ul class="flex gap-5">
            <li>공지</li>
            <li>버거들</li>
          </ul>
        </div>
        <div class="col-span-3 justify-self-end">
          <ul class="flex gap-3">
            <li>github</li>
            <li>QM</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}