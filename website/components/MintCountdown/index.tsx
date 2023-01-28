import Countdown from 'react-countdown'

const MintCountdown = ({ endTime }: { endTime: string }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <>Closed!</>
    } else {
      let time = ''
      if (days > 0) time += `${days}d `
      if (hours > 0) time += `${hours}h `
      if (minutes > 0) time += `${minutes}m `
      if (seconds > 0) time += `${seconds}s`

      // Render a countdown
      return <span>{time}</span>
    }
  }

  // '2023-01-21T18:30:00.000Z'
  return <Countdown date={endTime} renderer={renderer} />
}

export default MintCountdown
