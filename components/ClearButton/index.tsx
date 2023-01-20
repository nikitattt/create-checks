const ClearButton = () => {
  const clearBoard = () => {}

  return (
    <div
      onClick={clearBoard}
      className="rounded-full flex flex-row items-center bg-white p-1 cursor-pointer text-sm"
    >
      <div className="ml-2 text-grey">Clear</div>
    </div>
  )
}

export default ClearButton
