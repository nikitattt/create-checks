const ArtDisplay = ({ art }: { art: any[] }) => {
  return (
    <div className="fixed left-2 bottom-1 text-sm">
      Build by{' '}
      <a
        href="https://twitter.com/iamng_eth"
        target="_blank"
        className="underline"
      >
        @ng
      </a>
    </div>
  )
}

export default ArtDisplay
