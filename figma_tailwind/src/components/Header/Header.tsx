export default function Header() {
  return (
    <header className="p-4 text-white text-left xs:p-3 xs:text-left">
      <h1 className="text-5xl font-bold">Discover the Exclusive Perks Today</h1>
      <p className="text-xl mt-5 font-thin">Explore key features designed to enhance your shopping experience with invitive navigation, robust security, and seamless functionality.</p>
      <button className="mt-5 inline-flex items-center gap-2 rounded-[10px] border border-gray-300 px-5 py-1 text-sm hover:bg-white hover:text-black">
        See all features
        <span className="text-lg">→</span>
      </button>
    </header>
  )
}